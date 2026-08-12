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
  timestamp?: number;
}

interface CachedGoldRate {
  rate: GoldRate;
  cachedAt: number;
}

const TOLA_GRAMS = 11.664;

/*
|--------------------------------------------------------------------------
| Manual fallback rate
|--------------------------------------------------------------------------
|
| Change ONLY this value when GoldAPI quota is unavailable.
|
*/

const FALLBACK_24K_TOLA = 431_500;

/*
|--------------------------------------------------------------------------
| API settings
|--------------------------------------------------------------------------
*/

const REQUEST_TIMEOUT_MS = 10_000;

/*
|--------------------------------------------------------------------------
| Browser cache
|--------------------------------------------------------------------------
|
| A successful LIVE rate will remain cached for 8 hours.
|
*/

const CACHE_DURATION_MS = 8 * 60 * 60 * 1000;

const CACHE_KEY = "citizen_gold_rates_v1";

/*
|--------------------------------------------------------------------------
| PKR formatter
|--------------------------------------------------------------------------
*/

const formatPKR = (value: number): string => {
  return `PKR ${Math.round(value).toLocaleString("en-PK")}`;
};

/*
|--------------------------------------------------------------------------
| Calculate everything from 24K
|--------------------------------------------------------------------------
|
| 24K is always the master/base rate.
|
| 22K = 24K × 22/24
| 21K = 24K × 21/24
|
*/

function calculateFromTola(price24Tola: number) {
  const price24Gram = price24Tola / TOLA_GRAMS;

  const price22Tola = price24Tola * (22 / 24);
  const price21Tola = price24Tola * (21 / 24);

  const price22Gram = price24Gram * (22 / 24);
  const price21Gram = price24Gram * (21 / 24);

  return {
    karat24Tola: formatPKR(price24Tola),
    karat22Tola: formatPKR(price22Tola),
    karat21Tola: formatPKR(price21Tola),

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
| Convert GoldAPI response
|--------------------------------------------------------------------------
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

  console.log("🟡 GoldAPI 24K / gram:", gram24);
  console.log("🟡 GoldAPI calculated 24K / tola:", tola24);

  return calculateFromTola(tola24);
}

/*
|--------------------------------------------------------------------------
| Fallback
|--------------------------------------------------------------------------
*/

function getFallbackRates(): GoldRate {
  console.warn(
    "⚠️ GoldAPI unavailable. Using manual fallback:",
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
| Read browser cache
|--------------------------------------------------------------------------
*/

function getCachedRates(): GoldRate | null {
  try {
    const stored = localStorage.getItem(CACHE_KEY);

    if (!stored) {
      return null;
    }

    const parsed = JSON.parse(stored) as CachedGoldRate;

    if (
      !parsed ||
      !parsed.rate ||
      typeof parsed.cachedAt !== "number"
    ) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }

    const age = Date.now() - parsed.cachedAt;

    if (age >= CACHE_DURATION_MS) {
      console.log("⏰ Gold rate cache expired.");

      localStorage.removeItem(CACHE_KEY);

      return null;
    }

    console.log(
      "💾 Using cached LIVE gold rate. Cache age:",
      Math.round(age / 60_000),
      "minutes"
    );

    return parsed.rate;
  } catch (error) {
    console.warn(
      "⚠️ Could not read gold rate cache:",
      error
    );

    return null;
  }
}

/*
|--------------------------------------------------------------------------
| Save successful LIVE rate
|--------------------------------------------------------------------------
*/

function saveRatesToCache(rate: GoldRate) {
  try {
    const cached: CachedGoldRate = {
      rate,
      cachedAt: Date.now(),
    };

    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify(cached)
    );

    console.log("💾 LIVE gold rate saved to cache.");
  } catch (error) {
    console.warn(
      "⚠️ Could not save gold rate cache:",
      error
    );
  }
}

/*
|--------------------------------------------------------------------------
| Main function
|--------------------------------------------------------------------------
*/

export async function getGoldRates(): Promise<GoldRate> {
  /*
  |--------------------------------------------------------------------------
  | STEP 1 — Check cache first
  |--------------------------------------------------------------------------
  */

  const cachedRates = getCachedRates();

  if (cachedRates) {
    return cachedRates;
  }

  /*
  |--------------------------------------------------------------------------
  | STEP 2 — Check API key
  |--------------------------------------------------------------------------
  */

  const apiKey = import.meta.env.VITE_GOLD_API_KEY as
    | string
    | undefined;

  if (!apiKey || apiKey.trim() === "") {
    console.error(
      "❌ VITE_GOLD_API_KEY is not available."
    );

    return getFallbackRates();
  }

  /*
  |--------------------------------------------------------------------------
  | STEP 3 — Request GoldAPI
  |--------------------------------------------------------------------------
  */

  const controller = new AbortController();

  const timeout = window.setTimeout(() => {
    controller.abort();
  }, REQUEST_TIMEOUT_MS);

  try {
    console.log(
      "🔄 Requesting fresh XAU/PKR rate from GoldAPI..."
    );

    const response = await fetch(
      "https://www.goldapi.io/api/XAU/PKR",
      {
        method: "GET",

        headers: {
          "x-access-token": apiKey,
          "Content-Type": "application/json",
        },

        signal: controller.signal,

        cache: "no-store",
      }
    );

    console.log(
      "🌐 GoldAPI status:",
      response.status,
      response.statusText
    );

    /*
    |--------------------------------------------------------------------------
    | API failure
    |--------------------------------------------------------------------------
    */

    if (!response.ok) {
      let errorBody = "";

      try {
        errorBody = await response.text();
      } catch {
        errorBody =
          "Unable to read GoldAPI error response.";
      }

      console.error(
        `❌ GoldAPI HTTP ${response.status}`,
        errorBody
      );

      throw new Error(
        `GoldAPI returned HTTP ${response.status}`
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Read API response
    |--------------------------------------------------------------------------
    */

    const payload =
      (await response.json()) as GoldApiResponse;

    const calculatedRates =
      calculateFromApi(payload);

    /*
    |--------------------------------------------------------------------------
    | API timestamp
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
      updatedAt =
        new Date().toLocaleString("en-PK");
    }

    const liveRates: GoldRate = {
      ...calculatedRates,

      updatedAt,

      source: "live",
    };

    /*
    |--------------------------------------------------------------------------
    | STEP 4 — Cache ONLY successful LIVE data
    |--------------------------------------------------------------------------
    */

    saveRatesToCache(liveRates);

    console.log(
      "✅ LIVE GOLD RATES ACTIVE"
    );

    return liveRates;
  } catch (error) {
    if (
      error instanceof DOMException &&
      error.name === "AbortError"
    ) {
      console.error(
        "❌ GoldAPI request timed out."
      );
    } else {
      console.error(
        "❌ Live gold rate unavailable:",
        error
      );
    }

    /*
    |--------------------------------------------------------------------------
    | Never cache fallback
    |--------------------------------------------------------------------------
    |
    | This is important.
    |
    | When GoldAPI becomes available again, the website
    | should automatically try the API again.
    |
    */

    return getFallbackRates();
  } finally {
    window.clearTimeout(timeout);
  }
}