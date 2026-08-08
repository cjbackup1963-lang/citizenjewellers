import { motion } from "framer-motion";
import {
  ArrowRight,
  Gem,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        isolate
        overflow-hidden
        bg-black
        md:min-h-[calc(100svh-92px)]
      "
    >
      {/* Desktop Background */}
      <div className="absolute inset-0 -z-30 hidden md:block">
        <img
          src="/images/luxury/offers/offer-banner.webp"
          alt="Citizen Jewellers premium jewellery collection"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />
      </div>

      {/* MOBILE BACKGROUND */}
      <div
        className="
          absolute
          inset-0
          -z-30
          md:hidden
        "
      >
        <img
          src="/images/luxury/hero/mobile-hero-clean.webp"
          alt="Premium 21K gold jewellery"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="
            h-full
            w-full
            object-cover
            object-[68%_center]
          "
        />
      </div>

      {/* Mobile Overlay */}
      <div
        className="
          absolute
          inset-0
          -z-20
          bg-gradient-to-r
          from-black
          via-black/80
          to-black/15
          md:hidden
        "
      />

      <div
        className="
          absolute
          inset-0
          -z-20
          bg-gradient-to-t
          from-black
          via-black/10
          to-black/25
          md:hidden
        "
      />

      {/* Desktop overlays */}
      <div className="absolute inset-0 -z-20 hidden bg-black/35 md:block" />

      <div
        className="
          absolute
          inset-0
          -z-20
          hidden
          bg-gradient-to-r
          from-black
          via-black/80
          to-black/5
          md:block
        "
      />

      <div
        className="
          absolute
          inset-0
          -z-20
          hidden
          bg-gradient-to-t
          from-black
          via-transparent
          to-black/25
          md:block
        "
      />

      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-28
          top-1/3
          -z-10
          h-72
          w-72
          rounded-full
          bg-[#D4AF37]/10
          blur-[110px]
          md:h-96
          md:w-96
          md:blur-[140px]
        "
      />

      {/* Main Content */}
      <div
        className="
          mx-auto
          flex
          min-h-[730px]
          max-w-[1520px]
          items-center
          px-5
          pb-10
          pt-16
          sm:min-h-[760px]
          sm:px-7
          md:grid
          md:min-h-[calc(100svh-92px)]
          md:px-8
          md:py-20
          lg:grid-cols-[0.95fr_1.05fr]
          lg:px-10
          xl:px-14
        "
      >
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            relative
            z-10
            w-full
            max-w-[360px]
            md:max-w-3xl
          "
        >
          {/* Heritage Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="
              mb-5
              inline-flex
              items-center
              gap-2.5
              border-l
              border-[#D4AF37]
              pl-3
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-[#D4AF37]
              sm:text-[10px]
              md:mb-6
              md:gap-3
              md:border-l-2
              md:pl-4
              md:text-xs
              md:tracking-[0.42em]
            "
          >
            <ShieldCheck size={14} aria-hidden="true" />

            By Lakhani Sons · Since 1963
          </motion.div>

          {/* Heading */}
          <h1
            className="
              max-w-[335px]
              font-serif
              text-[3.15rem]
              leading-[0.96]
              tracking-[-0.025em]
              text-white
              sm:max-w-[380px]
              sm:text-[3.6rem]
              md:max-w-3xl
              md:text-7xl
              md:leading-[0.98]
              lg:text-[5rem]
              xl:text-[5.8rem]
            "
          >
            Timeless
            <span className="block">Jewellery</span>

            <span
              className="
                mt-2
                block
                text-[#D4AF37]
              "
            >
              Crafted
              <span className="block">with Legacy</span>
            </span>
          </h1>

          {/* Divider */}
          <div
            className="
              mt-6
              h-px
              w-20
              bg-gradient-to-r
              from-[#D4AF37]
              to-transparent
              md:mt-7
              md:w-28
            "
          />

          {/* Description */}
          <p
            className="
              mt-6
              max-w-[300px]
              text-[15px]
              leading-7
              text-white/72
              sm:max-w-[330px]
              md:mt-7
              md:max-w-2xl
              md:text-lg
              md:leading-8
              md:text-white/65
            "
          >
            Premium 21K gold, diamond and gemstone jewellery crafted with
            trust, precision and refined craftsmanship.
          </p>

          {/* CTA */}
          <a
            href="#collections"
            className="
              group
              mt-7
              inline-flex
              min-h-14
              items-center
              justify-center
              gap-3
              rounded-lg
              border
              border-[#D4AF37]
              bg-black/55
              px-6
              text-[13px]
              font-bold
              uppercase
              tracking-[0.08em]
              text-[#D4AF37]
              backdrop-blur-md
              transition
              duration-300
              hover:bg-[#D4AF37]
              hover:text-black
              md:mt-9
              md:px-8
              md:text-sm
            "
          >
            Explore Collections

            <ArrowRight
              size={18}
              aria-hidden="true"
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </a>

          {/* Mobile Trust Strip */}
          <div
            className="
              mt-9
              grid
              grid-cols-3
              divide-x
              divide-[#D4AF37]/20
              border-t
              border-[#D4AF37]/20
              pt-5
              md:hidden
            "
          >
            <div className="flex flex-col items-center px-2 text-center">
              <Gem
                size={22}
                className="text-[#D4AF37]"
                aria-hidden="true"
              />

              <p
                className="
                  mt-2
                  text-[10px]
                  font-medium
                  uppercase
                  leading-4
                  tracking-[0.08em]
                  text-white/75
                "
              >
                21K Pure
                <span className="block">Gold</span>
              </p>
            </div>

            <div className="flex flex-col items-center px-2 text-center">
              <ShieldCheck
                size={22}
                className="text-[#D4AF37]"
                aria-hidden="true"
              />

              <p
                className="
                  mt-2
                  text-[10px]
                  font-medium
                  uppercase
                  leading-4
                  tracking-[0.08em]
                  text-white/75
                "
              >
                Trusted
                <span className="block">Since 1963</span>
              </p>
            </div>

            <div className="flex flex-col items-center px-2 text-center">
              <Sparkles
                size={22}
                className="text-[#D4AF37]"
                aria-hidden="true"
              />

              <p
                className="
                  mt-2
                  text-[10px]
                  font-medium
                  uppercase
                  leading-4
                  tracking-[0.08em]
                  text-white/75
                "
              >
                Premium
                <span className="block">Craft</span>
              </p>
            </div>
          </div>

          {/* Desktop Trust Details */}
          <div
            className="
              mt-11
              hidden
              max-w-3xl
              gap-3
              md:grid
              sm:grid-cols-3
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
                border-t
                border-[#D4AF37]/25
                pt-4
              "
            >
              <Gem
                size={19}
                className="shrink-0 text-[#D4AF37]"
                aria-hidden="true"
              />

              <div>
                <p className="text-sm font-semibold text-white">
                  Premium 21K Gold
                </p>

                <p className="mt-1 text-xs text-white/40">
                  Refined craftsmanship
                </p>
              </div>
            </div>

            <div
              className="
                flex
                items-center
                gap-3
                border-t
                border-[#D4AF37]/25
                pt-4
              "
            >
              <ShieldCheck
                size={19}
                className="shrink-0 text-[#D4AF37]"
                aria-hidden="true"
              />

              <div>
                <p className="text-sm font-semibold text-white">
                  Trusted Since 1963
                </p>

                <p className="mt-1 text-xs text-white/40">
                  Serving generations
                </p>
              </div>
            </div>

            <div
              className="
                flex
                items-center
                gap-3
                border-t
                border-[#D4AF37]/25
                pt-4
              "
            >
              <Sparkles
                size={19}
                className="shrink-0 text-[#D4AF37]"
                aria-hidden="true"
              />

              <div>
                <p className="text-sm font-semibold text-white">
                  Timeless Design
                </p>

                <p className="mt-1 text-xs text-white/40">
                  Created to be cherished
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Desktop right visual area */}
        <div className="hidden min-h-[520px] lg:block" />
      </div>

      {/* Desktop Scroll Prompt */}
      <a
        href="#collections"
        aria-label="Scroll to collections"
        className="
          absolute
          bottom-6
          left-1/2
          z-10
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-[9px]
          uppercase
          tracking-[0.28em]
          text-white/40
          md:flex
        "
      >
        Explore

        <span className="h-10 w-px bg-gradient-to-b from-[#D4AF37] to-transparent" />
      </a>
    </section>
  );
}

export default Hero;