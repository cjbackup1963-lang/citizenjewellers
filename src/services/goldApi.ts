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

// Sirf API fail hone ki surat mein use hoga
const FALLBACK_24K_TOLA = 431_500;

// API ko maximum 10 seconds denge
const REQUEST_TIMEOUT_MS = 10_000;

const formatPKR = (value: number): string => {
  return `PKR ${Math.round(value).toLocaleString("en-PK")}`;
};

/*
|--------------------------------------------------------------------------
| Calculate all rates from 24K Tola
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| Calculate from GoldAPI
|--------------------------------------------------------------------------
|
| IMPORTANT:
| We take ONLY the 24K gram price as our base.
|
| 22K = 24K × 22/24
| 21K = 24K × 21/24
|
| This prevents inconsistent karat calculations.
|
*/

function calculateFromApi(payload: GoldApiResponse) {
  const gram24 = payload.price_gram_24k;

  if (
    typeof gram24 !== "number" ||
    !Number.isFinite(gram24) ||
    gram24 <= 0
  ) {
    throw new Error(
      "GoldAPI response does not contain a valid price_gram_24k."
    );
  }

  const tola24 = gram24 * TOLA_GRAMS;

  console.log("🟡 GoldAPI 24K per gram:", gram24);
  console.log("🟡 Calculated 24K per tola:", tola24);

  return calculateFromTola(tola24);
}

/*
|--------------------------------------------------------------------------
| Fallback
|--------------------------------------------------------------------------
*/

function getFallbackRates(): GoldRate {
  console.warn(
    "⚠️ Using fallback 24K gold rate:",
    FALLBACK_24K_TOLA
  );

  return {
    ...calculateFromTola(FALLBACK_24K_TOLA),

    updatedAt: new Date().toLocaleString("en-PK"),

    source: "fallback",
  };
}

/*
|--------------------------------------------------------------------------
| Main Gold Rate Function
|--------------------------------------------------------------------------
*/

export async function getGoldRates(): Promise<GoldRate> {
  const apiKey = import.meta.env.VITE_GOLD_API_KEY as
    | string
    | undefined;

  /*
  |--------------------------------------------------------------------------
  | Check Netlify environment variable
  |--------------------------------------------------------------------------
  */

  if (!apiKey || apiKey.trim() === "") {
    console.error(
      "❌ VITE_GOLD_API_KEY is NOT available. Check Netlify environment variables."
    );

    return getFallbackRates();
  }

  console.log("✅ Gold API key loaded.");

  const controller = new AbortController();

  const timeout = window.setTimeout(() => {
    controller.abort();
  }, REQUEST_TIMEOUT_MS);

  try {
    console.log("🔄 Requesting latest XAU/PKR price from GoldAPI...");

    const response = await fetch(
      "https://www.goldapi.io/api/XAU/PKR",
      {
        method: "GET",

        headers: {
          "x-access-token": apiKey,
          "Content-Type": "application/json",
        },

        signal: controller.signal,

        // Avoid browser HTTP caching
        cache: "no-store",
      }
    );

    /*
    |--------------------------------------------------------------------------
    | Diagnostic status
    |--------------------------------------------------------------------------
    */

    console.log(
      "🌐 GoldAPI HTTP status:",
      response.status,
      response.statusText
    );

    /*
    |--------------------------------------------------------------------------
    | API Error
    |--------------------------------------------------------------------------
    */

    if (!response.ok) {
      let errorBody = "";

      try {
        errorBody = await response.text();
      } catch {
        errorBody = "Unable to read API error response.";
      }

      console.error(
        `❌ GoldAPI request failed. HTTP ${response.status}`,
        errorBody
      );

      throw new Error(
        `GoldAPI returned HTTP status ${response.status}`
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Read response
    |--------------------------------------------------------------------------
    */

    const payload = (await response.json()) as GoldApiResponse;

    console.log("✅ GoldAPI response received.");

    /*
    |--------------------------------------------------------------------------
    | Calculate 24K → 22K → 21K
    |--------------------------------------------------------------------------
    */

    const calculatedRates = calculateFromApi(payload);

    /*
    |--------------------------------------------------------------------------
    | Timestamp
    |--------------------------------------------------------------------------
    */

    let updatedAt: string;

    if (
      typeof payload.timestamp === "number" &&
      payload.timestamp > 0
    ) {
      updatedAt = new Date(
        payload.timestamp * 1000
      ).toLocaleString("en-PK");
    } else {
      updatedAt = new Date().toLocaleString("en-PK");
    }

    console.log("✅ LIVE GOLD RATES ACTIVE");

    return {
      ...calculatedRates,

      updatedAt,

      source: "live",
    };
  } catch (error) {
    /*
    |--------------------------------------------------------------------------
    | Timeout
    |--------------------------------------------------------------------------
    */

    if (
      error instanceof DOMException &&
      error.name === "AbortError"
    ) {
      console.error(
        "❌ GoldAPI request timed out after 10 seconds."
      );
    } else {
      console.error(
        "❌ Live gold rate unavailable:",
        error
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Fallback only when live API fails
    |--------------------------------------------------------------------------
    */

    return getFallbackRates();
  } finally {
    window.clearTimeout(timeout);
  }
}