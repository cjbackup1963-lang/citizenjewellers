import {
  ArrowLeft,
  BarChart3,
  CircleDollarSign,
  Globe2,
  Landmark,
  Scale,
  TrendingUp,
} from "lucide-react";

import { Link } from "react-router-dom";

function GoldRatePakistan() {
  return (
    <article className="min-h-screen bg-[#050505] px-5 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-4xl">

        {/* BACK */}

        <Link
          to="/gold-insights"
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            font-medium
            text-[#D4AF37]
            transition
            hover:text-[#F5D978]
          "
        >
          <ArrowLeft size={17} />
          Gold Insights
        </Link>

        {/* ARTICLE HEADER */}

        <header className="mt-10 border-b border-[#D4AF37]/15 pb-10">

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#D4AF37]
            "
          >
            Gold Market Guide
          </p>

          <h1
            className="
              mt-5
              font-serif
              text-4xl
              leading-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Gold Rate in Pakistan
          </h1>

          <p
            className="
              mt-6
              max-w-3xl
              text-base
              leading-8
              text-white/55
            "
          >
            Gold prices in Pakistan can change throughout the
            trading day. Understanding what influences these
            movements can help buyers, sellers and jewellery
            customers interpret market rates more effectively.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">

            <span
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-4
                py-2
                text-xs
                text-white/45
              "
            >
              Educational Guide
            </span>

            <span
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-4
                py-2
                text-xs
                text-white/45
              "
            >
              Pakistan Gold Market
            </span>

          </div>

        </header>

        {/* INTRO */}

        <section className="py-10">

          <h2 className="font-serif text-3xl text-white">
            How is the gold rate determined?
          </h2>

          <p className="mt-5 text-[15px] leading-8 text-white/55">
            Pakistan does not operate in isolation from the
            international gold market. Local gold pricing is
            influenced by the international value of gold,
            currency exchange rates and conditions within the
            domestic market.
          </p>

          <p className="mt-5 text-[15px] leading-8 text-white/55">
            This is why the local price of gold can move even when
            international gold prices appear relatively stable.
            Changes in the value of the Pakistani rupee against
            major currencies can affect the local equivalent price.
          </p>

        </section>

        {/* FACTORS */}

        <section className="border-t border-white/8 py-10">

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.28em]
              text-[#D4AF37]
            "
          >
            Key Factors
          </p>

          <h2 className="mt-3 font-serif text-3xl text-white">
            What affects gold prices in Pakistan?
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">

            <Factor
              icon={Globe2}
              title="International Gold Price"
            >
              Gold is traded globally, so movements in international
              bullion markets can influence local prices.
            </Factor>

            <Factor
              icon={CircleDollarSign}
              title="Currency Exchange Rate"
            >
              Changes in the Pakistani rupee exchange rate can affect
              the local cost of internationally priced gold.
            </Factor>

            <Factor
              icon={TrendingUp}
              title="Market Demand"
            >
              Jewellery demand, investment activity and broader
              market conditions may influence local trading.
            </Factor>

            <Factor
              icon={Landmark}
              title="Economic Conditions"
            >
              Inflation expectations, interest rates and economic
              uncertainty can influence demand for gold globally.
            </Factor>

          </div>

        </section>

        {/* UNITS */}

        <section className="border-t border-white/8 py-10">

          <h2 className="font-serif text-3xl text-white">
            Gold price units used in Pakistan
          </h2>

          <p className="mt-5 text-[15px] leading-8 text-white/55">
            Gold prices in Pakistan are commonly quoted per tola,
            per 10 grams and per gram. International markets,
            however, commonly quote gold in troy ounces.
          </p>

          <div
            className="
              mt-7
              rounded-3xl
              border
              border-[#D4AF37]/20
              bg-[#D4AF37]/[0.035]
              p-6
              sm:p-8
            "
          >
            <div className="flex items-start gap-4">

              <Scale
                size={27}
                className="mt-1 shrink-0 text-[#D4AF37]"
              />

              <div>

                <h3 className="text-lg font-semibold text-white">
                  Understanding the Tola
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/50">
                  One tola is approximately 11.664 grams. Because
                  tola remains widely used in Pakistan's gold and
                  jewellery market, consumers will often see rates
                  quoted using this measurement.
                </p>

              </div>

            </div>
          </div>

        </section>

        {/* PURITY */}

        <section className="border-t border-white/8 py-10">

          <h2 className="font-serif text-3xl text-white">
            Does gold purity affect the price?
          </h2>

          <p className="mt-5 text-[15px] leading-8 text-white/55">
            Yes. Karat indicates the proportion of gold contained in
            an alloy. Pure 24K gold represents the reference point,
            while lower karat values contain a lower proportion of
            pure gold.
          </p>

          <div className="mt-7 overflow-hidden rounded-2xl border border-white/10">

            <div
              className="
                grid
                grid-cols-2
                border-b
                border-white/10
                bg-white/[0.04]
                px-5
                py-4
                text-sm
                font-semibold
                text-white
              "
            >
              <span>Gold Purity</span>
              <span>Approx. Gold Content</span>
            </div>

            <PurityRow purity="24K" content="99.9%+" />

            <PurityRow purity="22K" content="91.6%" />

            <PurityRow purity="21K" content="87.5%" />

            <PurityRow purity="18K" content="75%" />

          </div>

        </section>

        {/* WHY CHANGES */}

        <section className="border-t border-white/8 py-10">

          <div className="flex items-center gap-3">

            <BarChart3
              size={25}
              className="text-[#D4AF37]"
            />

            <h2 className="font-serif text-3xl text-white">
              Why can rates change during the day?
            </h2>

          </div>

          <p className="mt-5 text-[15px] leading-8 text-white/55">
            Gold is traded across international markets and foreign
            exchange rates also move continuously. Local market
            quotations can therefore be revised as underlying market
            conditions change.
          </p>

          <p className="mt-5 text-[15px] leading-8 text-white/55">
            A displayed gold rate should consequently be treated as
            a market reference rather than a permanently fixed
            selling or purchasing price.
          </p>

        </section>

        {/* INTERNAL CTA */}

        <section
          className="
            my-10
            rounded-[30px]
            border
            border-[#D4AF37]/25
            bg-gradient-to-br
            from-[#D4AF37]/10
            to-transparent
            p-7
            sm:p-10
          "
        >

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.28em]
              text-[#D4AF37]
            "
          >
            Citizen Jewellers
          </p>

          <h2 className="mt-4 font-serif text-3xl text-white">
            Check Current Gold Rates
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50">
            View our gold rate section for current reference pricing
            across commonly used gold purities.
          </p>

          <Link
            to="/#rates"
            className="
              mt-7
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-[#D4AF37]
              px-6
              py-3
              text-sm
              font-bold
              text-black
              transition
              hover:bg-[#F0D36A]
            "
          >
            View Gold Rates
            <TrendingUp size={17} />
          </Link>

        </section>

        {/* DISCLAIMER */}

        <footer className="border-t border-white/8 pt-8">

          <p className="text-xs leading-6 text-white/30">
            This article is provided for general educational
            purposes only and should not be considered financial or
            investment advice. Gold prices and market conditions can
            change. Confirm current rates and relevant professional
            guidance before making financial decisions.
          </p>

        </footer>

      </div>
    </article>
  );
}

/* =========================================================
   FACTOR CARD
   ========================================================= */

function Factor({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof TrendingUp;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/8
        bg-[#0b0b0b]
        p-6
      "
    >
      <Icon size={23} className="text-[#D4AF37]" />

      <h3 className="mt-4 font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-white/45">
        {children}
      </p>
    </div>
  );
}

/* =========================================================
   PURITY ROW
   ========================================================= */

function PurityRow({
  purity,
  content,
}: {
  purity: string;
  content: string;
}) {
  return (
    <div
      className="
        grid
        grid-cols-2
        border-b
        border-white/8
        px-5
        py-4
        text-sm
        last:border-b-0
      "
    >
      <span className="font-semibold text-[#D4AF37]">
        {purity}
      </span>

      <span className="text-white/55">
        {content}
      </span>
    </div>
  );
}

export default GoldRatePakistan;