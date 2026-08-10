import { useEffect, useMemo, useState } from "react";
import {
  Calculator,
  Gem,
  Info,
  RefreshCw,
  Scale,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { getGoldRates } from "../services/goldApi";

type Purity = "24K" | "22K" | "21K" | "18K";
type WeightUnit = "grams" | "tola";

const TOLA_GRAMS = 11.664;
const GOLD_NISAB_GRAMS = 87.48;
const ZAKAT_RATE = 0.025;

/*
|--------------------------------------------------------------------------
| Automatic Rate Refresh
|--------------------------------------------------------------------------
|
| 30 minutes rakha hai taa-ke API unnecessarily hit na ho.
|
*/
const RATE_REFRESH_MS = 30 * 60 * 1000;

const purityFactor: Record<Purity, number> = {
  "24K": 24 / 24,
  "22K": 22 / 24,
  "21K": 21 / 24,
  "18K": 18 / 24,
};

function formatPKR(value: number) {
  return `PKR ${Math.round(value).toLocaleString("en-PK")}`;
}

function formatWeight(value: number) {
  return value.toLocaleString("en-PK", {
    maximumFractionDigits: 3,
  });
}

/*
|--------------------------------------------------------------------------
| Convert "PKR 431,500" → 431500
|--------------------------------------------------------------------------
*/

function parsePKR(value: string) {
  const numericValue = Number(
    value.replace(/[^\d.-]/g, "")
  );

  return Number.isFinite(numericValue)
    ? numericValue
    : 0;
}

function ZakatCalculator() {
  const [weight, setWeight] = useState("");
  const [unit, setUnit] =
    useState<WeightUnit>("grams");
  const [purity, setPurity] =
    useState<Purity>("21K");

  /*
  |--------------------------------------------------------------------------
  | Live Rate State
  |--------------------------------------------------------------------------
  */

  const [price24Gram, setPrice24Gram] =
    useState(0);

  const [rateSource, setRateSource] =
    useState<"live" | "fallback">("fallback");

  const [updatedAt, setUpdatedAt] =
    useState("");

  const [rateLoading, setRateLoading] =
    useState(true);

  /*
  |--------------------------------------------------------------------------
  | Load Live 24K Gold Rate
  |--------------------------------------------------------------------------
  */

  const loadGoldRate = async () => {
    try {
      setRateLoading(true);

      const rates = await getGoldRates();

      /*
      |--------------------------------------------------------------------------
      | IMPORTANT
      |--------------------------------------------------------------------------
      |
      | Zakat calculator uses ONLY 24K gram rate as master price.
      |
      */

      const live24Gram =
        parsePKR(rates.karat24Gram);

      if (live24Gram <= 0) {
        throw new Error(
          "Invalid 24K gold rate received."
        );
      }

      setPrice24Gram(live24Gram);
      setRateSource(rates.source);
      setUpdatedAt(rates.updatedAt);
    } catch (error) {
      console.error(
        "Unable to load gold rate for Zakat Calculator:",
        error
      );
    } finally {
      setRateLoading(false);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | Automatic Refresh
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    loadGoldRate();

    const interval = window.setInterval(
      loadGoldRate,
      RATE_REFRESH_MS
    );

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Zakat Calculation
  |--------------------------------------------------------------------------
  */

  const calculation = useMemo(() => {
    const enteredWeight = Number(weight);

    if (
      !Number.isFinite(enteredWeight) ||
      enteredWeight <= 0
    ) {
      return {
        grossGrams: 0,
        pureGoldEquivalent: 0,
        reachesGoldNisab: false,
        zakatGoldGrams: 0,
        estimatedGoldValue: 0,
        estimatedZakatValue: 0,
      };
    }

    /*
    |--------------------------------------------------------------------------
    | Convert Tola → Grams
    |--------------------------------------------------------------------------
    */

    const grossGrams =
      unit === "tola"
        ? enteredWeight * TOLA_GRAMS
        : enteredWeight;

    /*
    |--------------------------------------------------------------------------
    | Convert Selected Purity → Pure 24K Equivalent
    |--------------------------------------------------------------------------
    */

    const pureGoldEquivalent =
      grossGrams * purityFactor[purity];

    /*
    |--------------------------------------------------------------------------
    | Nisab
    |--------------------------------------------------------------------------
    */

    const reachesGoldNisab =
      pureGoldEquivalent >= GOLD_NISAB_GRAMS;

    /*
    |--------------------------------------------------------------------------
    | 2.5% Gold Zakat
    |--------------------------------------------------------------------------
    */

    const zakatGoldGrams =
      pureGoldEquivalent * ZAKAT_RATE;

    /*
    |--------------------------------------------------------------------------
    | Current PKR Value
    |--------------------------------------------------------------------------
    */

    const estimatedGoldValue =
      price24Gram > 0
        ? pureGoldEquivalent * price24Gram
        : 0;

    const estimatedZakatValue =
      estimatedGoldValue * ZAKAT_RATE;

    return {
      grossGrams,
      pureGoldEquivalent,
      reachesGoldNisab,
      zakatGoldGrams,
      estimatedGoldValue,
      estimatedZakatValue,
    };
  }, [
    weight,
    unit,
    purity,
    price24Gram,
  ]);

  const hasWeight =
    calculation.grossGrams > 0;

  return (
    <section
      className="
        min-h-screen
        bg-[#050505]
        px-5
        py-14
        sm:px-6
        lg:py-20
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADING ================= */}

        <div className="mx-auto max-w-3xl text-center">
          <div
            className="
              mx-auto
              grid
              h-14
              w-14
              place-items-center
              rounded-full
              border
              border-[#D4AF37]/30
              bg-[#D4AF37]/[0.05]
              text-[#D4AF37]
            "
          >
            <Calculator
              size={25}
              aria-hidden="true"
            />
          </div>

          <p
            className="
              mt-5
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.34em]
              text-[#D4AF37]
            "
          >
            Gold Zakat Calculator
          </p>

          <h1
            className="
              mt-5
              font-serif
              text-4xl
              leading-tight
              text-white
              sm:text-5xl
              md:text-6xl
            "
          >
            Calculate Your Gold Zakat
          </h1>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-white/55
              sm:text-base
            "
          >
            Enter your gold weight and purity
            to view an indicative 2.5% Zakat
            calculation using the current gold
            rate available on our website.
          </p>
        </div>

        {/* ================= LIVE RATE STATUS ================= */}

        <div
          className="
            mx-auto
            mt-8
            flex
            max-w-2xl
            flex-col
            gap-3
            rounded-2xl
            border
            border-[#D4AF37]/15
            bg-[#0a0a0a]
            p-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            <div className="flex items-center gap-2">
              <span
                className={`
                  h-2
                  w-2
                  rounded-full

                  ${
                    rateSource === "live"
                      ? "bg-emerald-400"
                      : "bg-[#D4AF37]"
                  }
                `}
              />

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-white/45
                "
              >
                {rateSource === "live"
                  ? "Live Gold Rate"
                  : "Reference Gold Rate"}
              </p>
            </div>

            <p
              className="
                mt-2
                font-serif
                text-xl
                text-[#D4AF37]
              "
            >
              {rateLoading &&
              price24Gram === 0
                ? "Loading..."
                : price24Gram > 0
                ? `${formatPKR(
                    price24Gram
                  )} / gram · 24K`
                : "Rate unavailable"}
            </p>

            {updatedAt && (
              <p
                className="
                  mt-1
                  text-[10px]
                  text-white/30
                "
              >
                Updated: {updatedAt}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={loadGoldRate}
            disabled={rateLoading}
            className="
              inline-flex
              min-h-11
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-[#D4AF37]/30
              px-5
              text-xs
              font-semibold
              uppercase
              tracking-[0.1em]
              text-[#D4AF37]
              transition

              hover:border-[#D4AF37]
              hover:bg-[#D4AF37]
              hover:text-black

              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            <RefreshCw
              size={15}
              aria-hidden="true"
              className={
                rateLoading
                  ? "animate-spin"
                  : ""
              }
            />

            Refresh Rate
          </button>
        </div>

        {/* ================= MAIN GRID ================= */}

        <div
          className="
            mt-10
            grid
            gap-8
            lg:grid-cols-[minmax(0,1fr)_420px]
          "
        >
          {/* ================= CALCULATOR ================= */}

          <div
            className="
              rounded-[28px]
              border
              border-[#D4AF37]/16
              bg-[#0a0a0a]
              p-6
              sm:p-8
            "
          >
            <div className="flex items-center gap-3">
              <Gem
                size={22}
                className="text-[#D4AF37]"
                aria-hidden="true"
              />

              <h2 className="font-serif text-3xl text-white">
                Your Gold
              </h2>
            </div>

            {/* WEIGHT */}

            <div className="mt-8">
              <label className="block">
                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-white/40
                  "
                >
                  Gold Weight
                </span>

                <div
                  className="
                    mt-3
                    flex
                    items-center
                    rounded-xl
                    border
                    border-[#D4AF37]/25
                    bg-black/35
                    px-4
                    transition

                    focus-within:border-[#D4AF37]/60
                  "
                >
                  <Scale
                    size={18}
                    className="shrink-0 text-[#D4AF37]"
                    aria-hidden="true"
                  />

                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={weight}
                    onChange={(event) =>
                      setWeight(
                        event.target.value
                      )
                    }
                    placeholder="Enter gold weight"
                    inputMode="decimal"
                    className="
                      min-h-14
                      w-full
                      bg-transparent
                      px-3
                      text-base
                      text-white
                      outline-none
                      placeholder:text-white/25
                    "
                  />
                </div>
              </label>
            </div>

            {/* UNIT */}

            <div className="mt-7">
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-white/40
                "
              >
                Weight Unit
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setUnit("grams")
                  }
                  className={`
                    min-h-12
                    rounded-xl
                    border
                    text-sm
                    font-semibold
                    transition

                    ${
                      unit === "grams"
                        ? "border-[#D4AF37] bg-[#D4AF37] text-black"
                        : "border-[#D4AF37]/25 bg-black/35 text-white/70"
                    }
                  `}
                >
                  Grams
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setUnit("tola")
                  }
                  className={`
                    min-h-12
                    rounded-xl
                    border
                    text-sm
                    font-semibold
                    transition

                    ${
                      unit === "tola"
                        ? "border-[#D4AF37] bg-[#D4AF37] text-black"
                        : "border-[#D4AF37]/25 bg-black/35 text-white/70"
                    }
                  `}
                >
                  Tola
                </button>
              </div>
            </div>

            {/* PURITY */}

            <div className="mt-7">
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-white/40
                "
              >
                Gold Purity
              </p>

              <div
                className="
                  mt-4
                  grid
                  grid-cols-2
                  gap-3
                  sm:grid-cols-4
                "
              >
                {(
                  [
                    "24K",
                    "22K",
                    "21K",
                    "18K",
                  ] as Purity[]
                ).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() =>
                      setPurity(item)
                    }
                    className={`
                      min-h-12
                      rounded-xl
                      border
                      text-sm
                      font-semibold
                      transition

                      ${
                        purity === item
                          ? "border-[#D4AF37] bg-[#D4AF37] text-black"
                          : "border-[#D4AF37]/25 bg-black/35 text-white/70"
                      }
                    `}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* RESULTS */}

            <div
              className="
                mt-8
                rounded-[24px]
                border
                border-[#D4AF37]/20
                bg-[#D4AF37]/[0.035]
                p-5
                sm:p-6
              "
            >
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#D4AF37]
                "
              >
                Estimated Zakat
              </p>

              <p
                className="
                  mt-3
                  font-serif
                  text-4xl
                  text-white
                "
              >
                {hasWeight
                  ? `${formatWeight(
                      calculation.zakatGoldGrams
                    )}g`
                  : "—"}
              </p>

              <p className="mt-2 text-sm text-white/45">
                Pure gold equivalent at 2.5%
              </p>

              <div
                className="
                  mt-6
                  grid
                  gap-4
                  border-t
                  border-white/7
                  pt-5
                  sm:grid-cols-2
                "
              >
                <div>
                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.16em]
                      text-white/35
                    "
                  >
                    Pure Gold Equivalent
                  </p>

                  <p className="mt-2 text-lg font-semibold text-white">
                    {hasWeight
                      ? `${formatWeight(
                          calculation.pureGoldEquivalent
                        )}g`
                      : "—"}
                  </p>
                </div>

                <div>
                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.16em]
                      text-white/35
                    "
                  >
                    Estimated PKR Zakat
                  </p>

                  <p
                    className="
                      mt-2
                      text-lg
                      font-semibold
                      text-[#D4AF37]
                    "
                  >
                    {hasWeight &&
                    price24Gram > 0
                      ? formatPKR(
                          calculation.estimatedZakatValue
                        )
                      : "—"}
                  </p>
                </div>
              </div>
            </div>

            {/* NISAB */}

            {hasWeight && (
              <div
                className={`
                  mt-5
                  rounded-2xl
                  border
                  p-5

                  ${
                    calculation.reachesGoldNisab
                      ? "border-[#D4AF37]/35 bg-[#D4AF37]/[0.04]"
                      : "border-white/10 bg-white/[0.02]"
                  }
                `}
              >
                <div className="flex items-start gap-3">
                  <ShieldCheck
                    size={20}
                    className="
                      mt-0.5
                      shrink-0
                      text-[#D4AF37]
                    "
                    aria-hidden="true"
                  />

                  <div>
                    <p className="font-semibold text-white">
                      {calculation.reachesGoldNisab
                        ? "Gold Nisab threshold reached"
                        : "Below the gold Nisab benchmark"}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-white/45">
                      Gold Nisab reference:
                      {" "}
                      <span className="text-white/70">
                        87.48g pure gold
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ================= GUIDANCE ================= */}

          <aside
            className="
              h-fit
              rounded-[28px]
              border
              border-[#D4AF37]/16
              bg-[#0a0a0a]
              p-6
              sm:p-8
            "
          >
            <Sparkles
              size={26}
              className="text-[#D4AF37]"
              aria-hidden="true"
            />

            <p
              className="
                mt-5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#D4AF37]
              "
            >
              Zakat Guidance
            </p>

            <h2
              className="
                mt-4
                font-serif
                text-3xl
                text-white
              "
            >
              Simple Gold Estimate
            </h2>

            <div className="mt-7 space-y-6">
              <div>
                <p className="font-semibold text-white">
                  Automatic Gold Price
                </p>

                <p className="mt-2 text-sm leading-6 text-white/45">
                  The PKR estimate uses the same
                  24K gold-rate service as the
                  website's live gold rates.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">
                  2.5% Calculation
                </p>

                <p className="mt-2 text-sm leading-6 text-white/45">
                  The calculator converts the
                  selected purity into its pure
                  gold equivalent before
                  calculating the indicative
                  Zakat amount.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">
                  Gold Nisab
                </p>

                <p className="mt-2 text-sm leading-6 text-white/45">
                  Gold Nisab reference used by
                  this calculator is 87.48 grams
                  of pure gold.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">
                  Hawl
                </p>

                <p className="mt-2 text-sm leading-6 text-white/45">
                  Religious rules may also
                  consider ownership for one
                  lunar year and your wider
                  zakatable assets.
                </p>
              </div>
            </div>

            {/* IMPORTANT */}

            <div
              className="
                mt-8
                rounded-2xl
                border
                border-[#D4AF37]/20
                bg-black/40
                p-5
              "
            >
              <div className="flex items-start gap-3">
                <Info
                  size={20}
                  className="
                    mt-0.5
                    shrink-0
                    text-[#D4AF37]
                  "
                  aria-hidden="true"
                />

                <div>
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#D4AF37]
                    "
                  >
                    Important
                  </p>

                  <p
                    className="
                      mt-3
                      text-xs
                      leading-6
                      text-white/45
                    "
                  >
                    This calculator is an
                    indicative gold-only tool,
                    not a religious ruling.
                    Zakat obligations can depend
                    on other assets, liabilities,
                    Nisab methodology, hawl and
                    personal circumstances.
                  </p>

                  <p
                    className="
                      mt-3
                      text-xs
                      leading-6
                      text-white/45
                    "
                  >
                    For a final religious
                    determination, consult a
                    qualified Islamic scholar.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default ZakatCalculator;