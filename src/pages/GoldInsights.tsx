import {
  ArrowRight,
  BookOpen,
  Calculator,
  CircleDollarSign,
  Gem,
  GraduationCap,
  Newspaper,
  Scale,
  TrendingUp,
} from "lucide-react";

import { Link } from "react-router-dom";

const insightCards = [
  {
    icon: TrendingUp,
    title: "Gold Rate in Pakistan",
    text: "Understand how local gold prices move and what affects daily market rates.",
    path: "/gold-insights/gold-rate-pakistan",
  },
  {
    icon: Scale,
    title: "24K vs 22K vs 21K Gold",
    text: "Learn the practical difference between common gold purities and where each is typically used.",
    path: "/gold-insights/gold-purity-guide",
  },
  {
    icon: CircleDollarSign,
    title: "Gold Investment Guide",
    text: "A practical introduction to gold as a store of value, including key risks and considerations.",
    path: "/gold-insights/gold-investment-guide",
  },
  {
    icon: Gem,
    title: "Jewellery Buying Guide",
    text: "Important points to check before purchasing gold, diamond or gemstone jewellery.",
    path: "/gold-insights/jewellery-buying-guide",
  },
  {
    icon: Calculator,
    title: "Gold Zakat Guide",
    text: "Understand the basic concepts involved in calculating Zakat on gold holdings.",
    path: "/gold-insights/gold-zakat-guide",
  },
  {
    icon: Newspaper,
    title: "Gold Market Education",
    text: "Learn about international gold markets, price drivers and common terminology.",
    path: "/gold-insights/gold-market-education",
  },
];

function GoldInsights() {
  return (
    <section className="min-h-screen bg-[#050505] px-5 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* HERO */}

        <div className="mx-auto max-w-4xl text-center">
          <div
            className="
              mx-auto
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              border-[#D4AF37]/30
              bg-[#D4AF37]/5
              text-[#D4AF37]
            "
          >
            <BookOpen size={30} />
          </div>

          <p
            className="
              mt-6
              text-xs
              font-semibold
              uppercase
              tracking-[0.34em]
              text-[#D4AF37]
            "
          >
            Citizen Jewellers Knowledge Hub
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
            Gold Insights
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-sm
              leading-7
              text-white/50
              sm:text-base
              sm:leading-8
            "
          >
            Practical guides, market education and useful information
            to help you understand gold, jewellery, pricing and related
            decisions with greater confidence.
          </p>
        </div>

        {/* FEATURE STRIP */}

        <div
          className="
            mt-14
            grid
            gap-4
            rounded-3xl
            border
            border-[#D4AF37]/15
            bg-[#0a0a0a]
            p-5
            sm:grid-cols-3
            sm:p-6
          "
        >
          <div className="flex items-center gap-4">
            <GraduationCap className="text-[#D4AF37]" size={24} />

            <div>
              <p className="text-sm font-semibold text-white">
                Educational
              </p>

              <p className="mt-1 text-xs text-white/40">
                Clear and practical guidance
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <TrendingUp className="text-[#D4AF37]" size={24} />

            <div>
              <p className="text-sm font-semibold text-white">
                Market Focused
              </p>

              <p className="mt-1 text-xs text-white/40">
                Gold pricing and market concepts
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <BookOpen className="text-[#D4AF37]" size={24} />

            <div>
              <p className="text-sm font-semibold text-white">
                Easy to Understand
              </p>

              <p className="mt-1 text-xs text-white/40">
                Designed for everyday readers
              </p>
            </div>
          </div>
        </div>

        {/* ARTICLES */}

        <div className="mt-16">
          <div className="mb-8">
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#D4AF37]
              "
            >
              Explore Topics
            </p>

            <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">
              Learn About Gold
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {insightCards.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  to={item.path}
                  className="
                    group
                    rounded-[28px]
                    border
                    border-[#D4AF37]/15
                    bg-[#0b0b0b]
                    p-7
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#D4AF37]/45
                    hover:bg-[#D4AF37]/[0.025]
                  "
                >
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-[#D4AF37]/30
                      bg-[#D4AF37]/5
                      text-[#D4AF37]
                      transition
                      duration-300
                      group-hover:bg-[#D4AF37]
                      group-hover:text-black
                    "
                  >
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-6 font-serif text-2xl text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/45">
                    {item.text}
                  </p>

                  <div
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-[#D4AF37]
                    "
                  >
                    Read Guide

                    <ArrowRight
                      size={16}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* DISCLAIMER */}

        <div
          className="
            mt-16
            rounded-3xl
            border
            border-white/8
            bg-white/[0.02]
            p-6
            text-center
            sm:p-8
          "
        >
          <p className="text-xs leading-6 text-white/35">
            Gold Insights is provided for general educational purposes.
            Gold prices, investment conditions, taxation and Zakat
            circumstances can vary. Verify current information before
            making financial decisions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default GoldInsights;