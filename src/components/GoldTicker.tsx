import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Clock3,
} from "lucide-react";

import { getGoldRates } from "../services/goldApi";
import type { GoldRate } from "../services/goldApi";

type Direction = "up" | "down" | "neutral";

interface MovementState {
  direction: Direction;
  changePercent: number;
}

function extractNumber(value: string) {
  const cleaned = value.replace(/[^\d.-]/g, "");
  const parsed = Number(cleaned);

  return Number.isFinite(parsed) ? parsed : 0;
}

function DirectionIcon({
  direction,
}: {
  direction: Direction;
}) {
  if (direction === "up") {
    return <ArrowUpRight size={14} aria-hidden="true" />;
  }

  if (direction === "down") {
    return <ArrowDownRight size={14} aria-hidden="true" />;
  }

  return <ArrowRight size={14} aria-hidden="true" />;
}

function GoldTicker() {
  const [rates, setRates] = useState<GoldRate | null>(null);

  const [movement, setMovement] = useState<MovementState>({
    direction: "neutral",
    changePercent: 0,
  });

  const previous24KPrice = useRef<number | null>(null);

  useEffect(() => {
    let active = true;

    const loadRates = async () => {
      const result = await getGoldRates();

      if (!active) return;

      const currentPrice = extractNumber(result.karat24Tola);
      const previousPrice = previous24KPrice.current;

      if (
        previousPrice !== null &&
        previousPrice > 0 &&
        currentPrice > 0
      ) {
        const difference = currentPrice - previousPrice;
        const percentage = (difference / previousPrice) * 100;

        setMovement({
          direction:
            difference > 0
              ? "up"
              : difference < 0
                ? "down"
                : "neutral",
          changePercent: percentage,
        });
      }

      previous24KPrice.current = currentPrice;
      setRates(result);
    };

    void loadRates();

    const interval = window.setInterval(() => {
      void loadRates();
    }, 5 * 60 * 1000);

    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, []);

  if (!rates) {
    return (
      <div className="h-10 border-b border-[#D4AF37]/10 bg-black" />
    );
  }

  const movementClass =
    movement.direction === "up"
      ? "text-emerald-300"
      : movement.direction === "down"
        ? "text-red-300"
        : "text-white/50";

  const tickerItems = [
    {
      label: "24K",
      value: rates.karat24Tola,
    },
    {
      label: "22K",
      value: rates.karat22Tola,
    },
    {
      label: "21K",
      value: rates.karat21Tola,
    },
  ];

  return (
    <div
      className="
        relative
        z-40
        overflow-hidden
        border-b
        border-[#D4AF37]/12
        bg-[#070707]
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-10
          max-w-7xl
          items-center
          gap-6
          overflow-x-auto
          px-4
          py-2
          text-[11px]
          sm:px-6
        "
      >
        <span
          className="
            shrink-0
            rounded-full
            bg-emerald-500/12
            px-3
            py-1
            font-semibold
            uppercase
            tracking-[0.18em]
            text-emerald-300
          "
        >
          Live Market
        </span>

        <div className="flex min-w-max items-center gap-6">
          {tickerItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <span className="font-semibold text-[#D4AF37]">
                {item.label}
              </span>

              <span className="text-white/78">
                {item.value}
              </span>

              <span
                className={`inline-flex items-center gap-1 ${movementClass}`}
              >
                <DirectionIcon direction={movement.direction} />

                {movement.changePercent !== 0 && (
                  <span>
                    {movement.changePercent > 0 ? "+" : ""}
                    {movement.changePercent.toFixed(2)}%
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>

        <div className="ml-auto hidden shrink-0 items-center gap-2 text-white/35 md:flex">
          <Clock3 size={13} aria-hidden="true" />
          {rates.updatedAt}
        </div>
      </div>
    </div>
  );
}

export default GoldTicker;