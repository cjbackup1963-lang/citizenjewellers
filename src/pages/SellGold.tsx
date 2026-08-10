import { useMemo, useState } from "react";
import {
  ArrowRight,
  Calculator,
  MessageCircle,
  Scale,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const FALLBACK_24K_TOLA = 431500;
const TOLA_GRAMS = 11.664;

type Purity = "24K" | "22K" | "21K" | "18K";

const purityFactor: Record<Purity, number> = {
  "24K": 24 / 24,
  "22K": 22 / 24,
  "21K": 21 / 24,
  "18K": 18 / 24,
};

function formatPKR(value: number) {
  return `PKR ${Math.round(value).toLocaleString("en-PK")}`;
}

function SellGold() {
  const [purity, setPurity] = useState<Purity>("21K");
  const [weight, setWeight] = useState("");

  const estimatedValue = useMemo(() => {
    const grams = Number(weight);

    if (!grams || grams <= 0) {
      return 0;
    }

    const price24Gram = FALLBACK_24K_TOLA / TOLA_GRAMS;
    const purityPriceGram = price24Gram * purityFactor[purity];

    return grams * purityPriceGram;
  }, [purity, weight]);

  const whatsappMessage = encodeURIComponent(
    `Assalam-o-Alaikum, I would like to get a quote for selling my gold.

Purity: ${purity}
Weight: ${weight || "Not entered"} grams
Indicative Estimate: ${
      estimatedValue > 0 ? formatPKR(estimatedValue) : "Not calculated"
    }

Please share the current buying price and guide me about testing and valuation.`
  );

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
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.34em]
              text-[#D4AF37]
            "
          >
            Sell Your Gold
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
            Get an Indicative Gold Value
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
            Enter your gold purity and approximate weight to view an indicative
            estimate before requesting the current buying price from our team.
          </p>
        </div>

        <div
          className="
            mt-12
            grid
            gap-8
            lg:grid-cols-[minmax(0,1fr)_420px]
          "
        >
          {/* Calculator */}
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
              <Calculator
                size={22}
                className="text-[#D4AF37]"
                aria-hidden="true"
              />

              <h2 className="font-serif text-3xl text-white">
                Gold Value Calculator
              </h2>
            </div>

            {/* Purity */}
            <div className="mt-8">
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-white/40
                "
              >
                Select Purity
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {(["24K", "22K", "21K", "18K"] as Purity[]).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setPurity(item)}
                    className={`
                      min-h-12
                      rounded-xl
                      border
                      text-sm
                      font-semibold
                      transition
                      duration-300
                      ${
                        purity === item
                          ? "border-[#D4AF37] bg-[#D4AF37] text-black"
                          : "border-[#D4AF37]/25 bg-black/35 text-white/70 hover:border-[#D4AF37]/55 hover:text-[#D4AF37]"
                      }
                    `}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Weight */}
            <div className="mt-7">
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
                  Approximate Weight
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
                    onChange={(event) => setWeight(event.target.value)}
                    placeholder="Enter weight"
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

                  <span className="text-sm text-white/35">
                    grams
                  </span>
                </div>
              </label>
            </div>

            {/* Estimate */}
            <div
              className="
                mt-8
                rounded-2xl
                border
                border-[#D4AF37]/20
                bg-[#D4AF37]/[0.04]
                p-5
                sm:p-6
              "
            >
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-white/40
                "
              >
                Indicative Estimate
              </p>

              <p
                className="
                  mt-3
                  font-serif
                  text-3xl
                  text-[#D4AF37]
                  sm:text-4xl
                "
              >
                {estimatedValue > 0
                  ? formatPKR(estimatedValue)
                  : "Enter weight"}
              </p>

              <p className="mt-3 text-xs leading-6 text-white/40">
                This is an indicative estimate only. Final buying price may
                differ after purity testing, exact weight verification, market
                movement and applicable deductions.
              </p>
            </div>

            <a
              href={`https://wa.me/923352484936?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="
                mt-6
                flex
                min-h-14
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#D4AF37]
                px-6
                text-sm
                font-bold
                uppercase
                tracking-[0.08em]
                text-black
                transition
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#e2c15b]
              "
            >
              <MessageCircle size={18} aria-hidden="true" />
              Request Current Buying Price
            </a>
          </div>

          {/* Trust / Process */}
          <aside
            className="
              rounded-[28px]
              border
              border-[#D4AF37]/16
              bg-[#0a0a0a]
              p-6
              sm:p-8
            "
          >
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#D4AF37]
              "
            >
              How It Works
            </p>

            <h2 className="mt-4 font-serif text-3xl text-white">
              Transparent Gold Assessment
            </h2>

            <div className="mt-7 space-y-6">
              <div className="flex gap-4">
                <div
                  className="
                    grid
                    h-11
                    w-11
                    shrink-0
                    place-items-center
                    rounded-full
                    border
                    border-[#D4AF37]/35
                    text-[#D4AF37]
                  "
                >
                  1
                </div>

                <div>
                  <p className="font-semibold text-white">
                    Bring Your Gold
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/45">
                    Visit us with your jewellery, coins or gold items for
                    physical assessment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="
                    grid
                    h-11
                    w-11
                    shrink-0
                    place-items-center
                    rounded-full
                    border
                    border-[#D4AF37]/35
                    text-[#D4AF37]
                  "
                >
                  2
                </div>

                <div>
                  <p className="font-semibold text-white">
                    Purity & Weight Check
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/45">
                    Gold is checked for purity and exact net weight before a
                    final valuation is discussed.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="
                    grid
                    h-11
                    w-11
                    shrink-0
                    place-items-center
                    rounded-full
                    border
                    border-[#D4AF37]/35
                    text-[#D4AF37]
                  "
                >
                  3
                </div>

                <div>
                  <p className="font-semibold text-white">
                    Receive Current Quote
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/45">
                    Our team shares the current buying offer based on verified
                    purity, weight and prevailing market conditions.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="
                mt-8
                space-y-4
                border-t
                border-white/7
                pt-6
              "
            >
              <div className="flex items-start gap-3">
                <ShieldCheck
                  size={19}
                  className="mt-0.5 shrink-0 text-[#D4AF37]"
                  aria-hidden="true"
                />

                <p className="text-sm leading-6 text-white/50">
                  Final valuation is provided only after physical verification.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Sparkles
                  size={19}
                  className="mt-0.5 shrink-0 text-[#D4AF37]"
                  aria-hidden="true"
                />

                <p className="text-sm leading-6 text-white/50">
                  Designed as an inquiry and valuation service, not an automatic
                  online purchase commitment.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/923352484936"
              target="_blank"
              rel="noreferrer"
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-[#D4AF37]
                transition
                hover:gap-3
              "
            >
              Speak with our team
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default SellGold;