import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  Clock3,
  RefreshCw,
  TrendingUp,
} from "lucide-react";

import { getGoldRates } from "../services/goldApi";
import type { GoldRate } from "../services/goldApi";

interface RateCard {
  karat: string;
  purity: string;
  perTola: string;
  perGram: string;
  tenGram: string;
}

function LiveRates() {
  const [rates, setRates] = useState<GoldRate | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const loadRates = async (manualRefresh = false) => {
    try {
      if (manualRefresh) {
        setRefreshing(true);
      }

      setLoadError(false);

      const result = await getGoldRates();

      setRates(result);
    } catch {
      setLoadError(true);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const result = await getGoldRates();

        if (active) {
          setRates(result);
          setLoadError(false);
        }
      } catch {
        if (active) {
          setLoadError(true);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    void load();

    const interval = window.setInterval(() => {
      void load();
    }, 5 * 60 * 1000);

    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, []);

  const cards: RateCard[] = rates
    ? [
        {
          karat: "24K Gold",
          purity: "99.9% Pure",
          perTola: rates.karat24Tola,
          perGram: rates.karat24Gram,
          tenGram: rates.karat24TenGram,
        },
        {
          karat: "22K Gold",
          purity: "91.6% Pure",
          perTola: rates.karat22Tola,
          perGram: rates.karat22Gram,
          tenGram: rates.karat22TenGram,
        },
        {
          karat: "21K Gold",
          purity: "87.5% Pure",
          perTola: rates.karat21Tola,
          perGram: rates.karat21Gram,
          tenGram: rates.karat21TenGram,
        },
      ]
    : [];

  return (
    <section
      id="rates"
      className="relative overflow-hidden bg-[#070707] px-5 py-24 sm:px-6 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.55,
          }}
          className="mb-14 text-center"
        >
          <p className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.42em] text-[#D4AF37] sm:text-xs">
            <TrendingUp size={15} aria-hidden="true" />
            Gold Market
          </p>

          <h2 className="mt-5 font-serif text-4xl text-white sm:text-5xl md:text-6xl">
            Today&apos;s Gold Rates
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
            Reference pricing for 24K, 22K and 21K gold in Pakistan. Citizen
            jewellery products are primarily crafted in 21K gold.
          </p>
        </motion.div>

        {/* Loading */}
        {loading ? (
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="
                  h-[310px]
                  animate-pulse
                  rounded-[28px]
                  border
                  border-white/8
                  bg-white/[0.025]
                "
              />
            ))}
          </div>
        ) : loadError && !rates ? (
          /* Error State */
          <div
            className="
              mx-auto
              max-w-2xl
              rounded-[28px]
              border
              border-red-400/20
              bg-red-400/[0.04]
              px-6
              py-12
              text-center
            "
          >
            <AlertCircle
              size={40}
              className="mx-auto text-red-300"
              aria-hidden="true"
            />

            <h3 className="mt-5 font-serif text-2xl text-white">
              Gold rates are temporarily unavailable
            </h3>

            <p className="mt-3 leading-7 text-white/50">
              Please try again, or contact our team for the latest verified
              market rate.
            </p>

            <button
              type="button"
              onClick={() => void loadRates(true)}
              disabled={refreshing}
              className="
                mt-7
                inline-flex
                min-h-12
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-[#D4AF37]/45
                px-7
                font-semibold
                text-[#D4AF37]
                transition
                hover:bg-[#D4AF37]
                hover:text-black
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              <RefreshCw
                size={17}
                className={refreshing ? "animate-spin" : ""}
                aria-hidden="true"
              />
              Retry
            </button>
          </div>
        ) : (
          /* Rate Cards */
          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((card, index) => (
              <motion.article
                key={card.karat}
                initial={{
                  opacity: 0,
                  y: 22,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="
                  rounded-[28px]
                  border
                  border-[#D4AF37]/15
                  bg-[#0b0b0b]
                  p-7
                  shadow-[0_20px_60px_rgba(0,0,0,0.2)]
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#D4AF37]/40
                "
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="font-serif text-2xl text-[#D4AF37]">
                      {card.karat}
                    </h3>

                    <p className="mt-1 text-xs text-white/40">
                      {card.purity}
                    </p>
                  </div>

                  <span
                    className={`
                      rounded-full
                      px-3
                      py-1.5
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      ${
                        rates?.source === "live"
                          ? "bg-emerald-500/12 text-emerald-300"
                          : "bg-amber-500/12 text-amber-300"
                      }
                    `}
                  >
                    {rates?.source === "live" ? "Live" : "Reference"}
                  </span>
                </div>

                <div className="mt-8">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                    Per Tola
                  </p>

                  <p className="mt-3 font-serif text-3xl text-white">
                    {card.perTola}
                  </p>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/6 bg-black/30 p-4">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-white/35">
                      Per Gram
                    </p>

                    <p className="mt-2 text-sm font-medium text-white/85">
                      {card.perGram}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/6 bg-black/30 p-4">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-white/35">
                      10 Grams
                    </p>

                    <p className="mt-2 text-sm font-medium text-white/85">
                      {card.tenGram}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* Footer Information */}
        {rates && (
          <div className="mt-7 flex flex-col items-center justify-center gap-4 text-center">
            <p className="flex items-center justify-center gap-2 text-xs text-white/42">
              <Clock3 size={14} aria-hidden="true" />
              Updated {rates.updatedAt}
            </p>

            <button
              type="button"
              onClick={() => void loadRates(true)}
              disabled={refreshing}
              className="
                inline-flex
                items-center
                gap-2
                text-xs
                font-medium
                text-[#D4AF37]
                transition
                hover:text-white
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              <RefreshCw
                size={14}
                className={refreshing ? "animate-spin" : ""}
                aria-hidden="true"
              />

              {refreshing ? "Refreshing rates..." : "Refresh rates"}
            </button>

            <p className="max-w-3xl text-xs leading-6 text-white/35">
              Rates are indicative and may change throughout the day. Final
              jewellery prices may include making charges, gemstones, taxes and
              product-specific adjustments.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default LiveRates;