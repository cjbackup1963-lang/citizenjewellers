export interface GoldRate {
  karat24Tola: string;
  karat22Tola: string;
  karat21Tola: string;

  karat24Gram: string;
  karat22Gram: string;
  karat21Gram: string;

  karat24TenGram: string;
  karat22TenGram: string;
  karat21TenGram: string;

  updatedAt: string;
  source: "live" | "fallback";
}

interface GoldApiResponse {
  price?: number;
  price_gram_24k?: number;
  price_gram_22k?: number;
  price_gram_21k?: number;
  timestamp?: number;
}

const TOLA_GRAMS = 11.664;
const FALLBACK_24K_TOLA = 431_500;
const REQUEST_TIMEOUT_MS = 7_000;

const formatPKR = (value: number) =>
  `PKR ${Math.round(value).toLocaleString("en-PK")}`;

function calculateFromTola(price24Tola: number) {
  const price24Gram = price24Tola / TOLA_GRAMS;
  const price22Gram = price24Gram * (22 / 24);
  const price21Gram = price24Gram * (21 / 24);

  return {
    karat24Tola: formatPKR(price24Tola),
    karat22Tola: formatPKR(price24Tola * (22 / 24)),
    karat21Tola: formatPKR(price24Tola * (21 / 24)),

    karat24Gram: formatPKR(price24Gram),
    karat22Gram: formatPKR(price22Gram),
    karat21Gram: formatPKR(price21Gram),

    karat24TenGram: formatPKR(price24Gram * 10),
    karat22TenGram: formatPKR(price22Gram * 10),
    karat21TenGram: formatPKR(price21Gram * 10),
  };
}

function calculateFromApi(payload: GoldApiResponse) {
  const gram24 = payload.price_gram_24k;
  const gram22 = payload.price_gram_22k;
  const gram21 = payload.price_gram_21k;

  if (
    typeof gram24 !== "number" ||
    typeof gram22 !== "number" ||
    typeof gram21 !== "number"
  ) {
    throw new Error("Gold API response is missing karat gram prices.");
  }

  return {
    karat24Tola: formatPKR(gram24 * TOLA_GRAMS),
    karat22Tola: formatPKR(gram22 * TOLA_GRAMS),
    karat21Tola: formatPKR(gram21 * TOLA_GRAMS),

    karat24Gram: formatPKR(gram24),
    karat22Gram: formatPKR(gram22),
    karat21Gram: formatPKR(gram21),

    karat24TenGram: formatPKR(gram24 * 10),
    karat22TenGram: formatPKR(gram22 * 10),
    karat21TenGram: formatPKR(gram21 * 10),
  };
}

function getFallbackRates(): GoldRate {
  return {
    ...calculateFromTola(FALLBACK_24K_TOLA),
    updatedAt: new Date().toLocaleString("en-PK"),
    source: "fallback",
  };
}

export async function getGoldRates(): Promise<GoldRate> {
  const apiKey = import.meta.env.VITE_GOLD_API_KEY as string | undefined;

  if (!apiKey) {
    return getFallbackRates();
  }

  const controller = new AbortController();
  const timeout = window.setTimeout(
    () => controller.abort(),
    REQUEST_TIMEOUT_MS
  );

  try {
    const response = await fetch(
      "https://www.goldapi.io/api/XAU/PKR",
      {
        headers: {
          "x-access-token": apiKey,
          "Content-Type": "application/json",
        },
        signal: controller.signal,
      }
    );

    if (!response.ok) {
      throw new Error(`Gold API returned status ${response.status}`);
    }

    const payload = (await response.json()) as GoldApiResponse;

    return {
      ...calculateFromApi(payload),
      updatedAt: payload.timestamp
        ? new Date(payload.timestamp * 1000).toLocaleString("en-PK")
        : new Date().toLocaleString("en-PK"),
      source: "live",
    };
  } catch (error) {
    console.warn(
      "Live gold rate unavailable. Using fallback rate.",
      error
    );

    return getFallbackRates();
  } finally {
    window.clearTimeout(timeout);
  }
}