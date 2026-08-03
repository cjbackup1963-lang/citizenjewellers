import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        isolate
        flex
        min-h-[calc(100svh-112px)]
        items-center
        overflow-hidden
        bg-black
      "
    >
      {/* Optimized Showroom Background */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/showroom.png"
          alt="Citizen Jewellers luxury showroom"
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

      {/* Lightweight Premium Overlays */}
      <div className="absolute inset-0 -z-10 bg-black/35" />

      <div
        className="
          absolute
          inset-0
          -z-10
          bg-gradient-to-r
          from-black
          via-black/75
          to-black/15
        "
      />

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          -z-10
          h-44
          bg-gradient-to-t
          from-black
          to-transparent
        "
      />

      {/* Content */}
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-6
          py-20
          sm:px-8
          lg:px-10
          lg:py-24
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 28,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="max-w-3xl"
        >
          {/* Heritage Label */}
          <div
            className="
              mb-6
              flex
              items-center
              gap-3
              text-[11px]
              font-medium
              uppercase
              tracking-[0.55em]
              text-[#D4AF37]
              sm:text-xs
            "
          >
            <ShieldCheck size={17} aria-hidden="true" />
            Luxury Since 1963
          </div>

          {/* Main Heading */}
          <h1
            className="
              font-serif
              text-5xl
              leading-[0.98]
              text-white
              sm:text-6xl
              md:text-7xl
              lg:text-[5.6rem]
            "
          >
            Where

            <span className="block text-[#D4AF37]">
              Elegance
            </span>

            Meets Legacy
          </h1>

          {/* Description */}
          <p
            className="
              mt-7
              max-w-2xl
              text-base
              leading-7
              text-gray-300
              sm:text-lg
              sm:leading-8
            "
          >
            Discover handcrafted 21K gold, diamond and gemstone jewellery
            shaped by generations of trust, precision and artistry at Citizen
            Jewellers.
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
                rounded-full
                bg-[#D4AF37]
                px-8
                py-4
                font-semibold
                text-black
                shadow-[0_12px_40px_rgba(212,175,55,0.22)]
                transition
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#e2c15b]
              "
            >
              Explore Collection

              <ArrowRight
                size={19}
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
                rounded-full
                border
                border-[#D4AF37]/70
                bg-black/30
                px-8
                py-4
                font-semibold
                text-white
                backdrop-blur-sm
                transition
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#D4AF37]
                hover:text-black
              "
            >
              <MessageCircle size={19} aria-hidden="true" />
              Private Consultation
            </a>
          </div>

          {/* Trust Information */}
          <div
            className="
              mt-11
              flex
              flex-wrap
              gap-x-7
              gap-y-3
              border-t
              border-white/10
              pt-6
              text-xs
              tracking-wide
              text-gray-300
              sm:text-sm
            "
          >
            <span>Since 1963</span>
            <span>Trusted Craftsmanship</span>
            <span>Premium 21K Jewellery</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;