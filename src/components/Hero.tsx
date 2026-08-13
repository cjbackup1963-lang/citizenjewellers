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
      {/* =====================================================
          SINGLE RESPONSIVE HERO IMAGE
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          -z-30
          overflow-hidden
          bg-black
        "
      >
        <img
          src="/images/luxury/hero/mobile-hero-banner.webp?v=1"
          alt="Citizen Jewellers premium jewellery collection"
          width={1080}
          height={1920}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="
            h-full
            w-full
            object-cover
            object-center

            md:object-cover
            md:object-center
          "
        />
      </div>

      {/* =====================================================
          MOBILE OVERLAYS
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          -z-20
          bg-gradient-to-r
          from-black/95
          via-black/60
          to-black/10
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
          via-transparent
          to-black/35
          md:hidden
        "
      />

      {/* =====================================================
          DESKTOP OVERLAYS
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          -z-20
          hidden
          bg-black/35
          md:block
        "
      />

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

      {/* =====================================================
          SUBTLE GOLD GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-28
          top-1/3
          -z-10
          h-64
          w-64
          rounded-full
          bg-[#D4AF37]/10
          blur-[90px]

          md:h-96
          md:w-96
          md:blur-[130px]
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          mx-auto
          flex
          min-h-[720px]
          max-w-[1520px]
          items-center
          px-5
          pb-10
          pt-14

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
        <div
          className="
            relative
            z-10
            w-full
            max-w-[350px]
            md:max-w-3xl
          "
        >
          {/* =================================================
              HERITAGE
          ================================================= */}

          <div
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
              tracking-[0.26em]
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
            <ShieldCheck
              size={14}
              aria-hidden="true"
            />

            By Lakhani Sons · Since 1963
          </div>

          {/* =================================================
              HEADING
          ================================================= */}

          <h1
            className="
              max-w-[330px]
              font-serif
              text-[3rem]
              leading-[0.98]
              tracking-[-0.025em]
              text-white

              sm:max-w-[390px]
              sm:text-[3.6rem]

              md:max-w-3xl
              md:text-7xl
              md:leading-[0.98]

              lg:text-[5rem]

              xl:text-[5.8rem]
            "
          >
            Timeless

            <span className="block">
              Jewellery
            </span>

            <span
              className="
                mt-2
                block
                text-[#D4AF37]
              "
            >
              Crafted

              <span className="block">
                with Legacy
              </span>
            </span>
          </h1>

          {/* =================================================
              DIVIDER
          ================================================= */}

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

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              mt-6
              max-w-[285px]
              text-[14px]
              leading-7
              text-white/70

              sm:max-w-[330px]
              sm:text-[15px]

              md:mt-7
              md:max-w-2xl
              md:text-lg
              md:leading-8
              md:text-white/65
            "
          >
            Premium 21K gold, diamond and gemstone jewellery
            crafted with trust, precision and refined
            craftsmanship.
          </p>

          {/* =================================================
              CTA
          ================================================= */}

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
              text-[12px]
              font-bold
              uppercase
              tracking-[0.1em]
              text-[#D4AF37]

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

          {/* =================================================
              MOBILE TRUST STRIP
          ================================================= */}

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
            {/* 21K */}
            <div
              className="
                flex
                flex-col
                items-center
                px-1
                text-center
              "
            >
              <Gem
                size={21}
                className="text-[#D4AF37]"
                aria-hidden="true"
              />

              <p
                className="
                  mt-2
                  text-[9px]
                  font-medium
                  uppercase
                  leading-4
                  tracking-[0.08em]
                  text-white/75
                "
              >
                Premium

                <span className="block">
                  21K Gold
                </span>
              </p>
            </div>

            {/* TRUST */}
            <div
              className="
                flex
                flex-col
                items-center
                px-1
                text-center
              "
            >
              <ShieldCheck
                size={21}
                className="text-[#D4AF37]"
                aria-hidden="true"
              />

              <p
                className="
                  mt-2
                  text-[9px]
                  font-medium
                  uppercase
                  leading-4
                  tracking-[0.08em]
                  text-white/75
                "
              >
                Trusted

                <span className="block">
                  Since 1963
                </span>
              </p>
            </div>

            {/* CRAFT */}
            <div
              className="
                flex
                flex-col
                items-center
                px-1
                text-center
              "
            >
              <Sparkles
                size={21}
                className="text-[#D4AF37]"
                aria-hidden="true"
              />

              <p
                className="
                  mt-2
                  text-[9px]
                  font-medium
                  uppercase
                  leading-4
                  tracking-[0.08em]
                  text-white/75
                "
              >
                Refined

                <span className="block">
                  Craftsmanship
                </span>
              </p>
            </div>
          </div>

          {/* =================================================
              DESKTOP TRUST
          ================================================= */}

          <div
            className="
              mt-11
              hidden
              max-w-3xl
              gap-3
              md:grid
              md:grid-cols-3
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
        </div>

        {/* Desktop right-side visual balance */}

        <div className="hidden min-h-[520px] lg:block" />
      </div>

      {/* =====================================================
          DESKTOP SCROLL
      ===================================================== */}

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

        <span
          className="
            h-10
            w-px
            bg-gradient-to-b
            from-[#D4AF37]
            to-transparent
          "
        />
      </a>
    </section>
  );
}

export default Hero;