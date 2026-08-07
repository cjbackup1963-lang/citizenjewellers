import { motion } from "framer-motion";
import {
  ArrowRight,
  Gem,
  MessageCircle,
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
        min-h-[calc(100svh-92px)]
        overflow-hidden
        bg-black
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

      {/* Mobile Background */}
      <div className="absolute inset-0 -z-30 md:hidden">
        <img
          src="/images/luxury/hero/mobile-hero-banner.webp"
          alt="Citizen Jewellers premium jewellery"
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

      {/* Luxury Overlays */}
      <div className="absolute inset-0 -z-20 bg-black/35" />

      <div
        className="
          absolute
          inset-0
          -z-20
          bg-gradient-to-r
          from-black
          via-black/80
          to-black/5
        "
      />

      <div
        className="
          absolute
          inset-0
          -z-20
          bg-gradient-to-t
          from-black
          via-transparent
          to-black/25
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[-10rem]
          top-1/3
          -z-10
          h-96
          w-96
          rounded-full
          bg-[#D4AF37]/10
          blur-[140px]
        "
      />

      {/* Main Content */}
      <div
        className="
          mx-auto
          grid
          min-h-[calc(100svh-92px)]
          max-w-[1520px]
          items-center
          px-5
          py-20
          sm:px-8
          lg:grid-cols-[0.95fr_1.05fr]
          lg:px-10
          xl:px-14
        "
      >
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="
            relative
            z-10
            max-w-3xl
            pt-16
            md:pt-8
            lg:pt-0
          "
        >
          {/* Heritage Label */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.65 }}
            className="
              mb-6
              inline-flex
              items-center
              gap-3
              border-l-2
              border-[#D4AF37]
              pl-4
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.42em]
              text-[#D4AF37]
              sm:text-xs
            "
          >
            <ShieldCheck size={16} aria-hidden="true" />
            By Lakhani Sons · Since 1963
          </motion.div>

          {/* Main Heading */}
          <h1
            className="
              max-w-3xl
              font-serif
              text-5xl
              leading-[0.98]
              text-white
              sm:text-6xl
              md:text-7xl
              lg:text-[5rem]
              xl:text-[5.8rem]
            "
          >
            Timeless Jewellery

            <span className="mt-2 block text-[#D4AF37]">
              Crafted with Legacy
            </span>
          </h1>

          {/* Gold Divider */}
          <div
            className="
              mt-7
              h-px
              w-28
              bg-gradient-to-r
              from-[#D4AF37]
              to-transparent
            "
          />

          {/* Description */}
          <p
            className="
              mt-7
              max-w-2xl
              text-base
              leading-8
              text-white/65
              sm:text-lg
            "
          >
            Discover premium 21K gold, diamond and gemstone jewellery shaped
            by generations of trust, precision and refined craftsmanship.
          </p>

          {/* Actions */}
          <div
            className="
              mt-9
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:flex-wrap
            "
          >
            <a
              href="#collections"
              className="
                group
                inline-flex
                min-h-14
                items-center
                justify-center
                gap-3
                rounded-md
                bg-[#D4AF37]
                px-8
                py-4
                text-sm
                font-bold
                uppercase
                tracking-[0.08em]
                text-black
                shadow-[0_16px_45px_rgba(212,175,55,0.22)]
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-[#e7c963]
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

            <a
              href="https://wa.me/923352484936"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                min-h-14
                items-center
                justify-center
                gap-3
                rounded-md
                border
                border-[#D4AF37]/65
                bg-black/40
                px-8
                py-4
                text-sm
                font-semibold
                uppercase
                tracking-[0.08em]
                text-[#D4AF37]
                backdrop-blur-md
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-[#D4AF37]
                hover:text-black
              "
            >
              <MessageCircle size={18} aria-hidden="true" />
              Private Consultation
            </a>
          </div>

          {/* Trust Details */}
          <div
            className="
              mt-11
              grid
              max-w-3xl
              gap-3
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

        {/* Right side intentionally remains open for jewellery composition */}
        <div className="hidden min-h-[520px] lg:block" />
      </div>

      {/* Bottom Scroll Prompt */}
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