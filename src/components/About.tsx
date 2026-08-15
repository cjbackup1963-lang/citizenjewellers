import { motion } from "framer-motion";
import {
  Award,
  Gem,
  History,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: History,
    title: "Since 1963",
    text: "More than six decades of trust, heritage and jewellery excellence.",
  },
  {
    icon: Gem,
    title: "Premium Craftsmanship",
    text: "Finely crafted gold, diamond and gemstone jewellery.",
  },
  {
    icon: Sparkles,
    title: "Timeless Design",
    text: "Jewellery created for celebrations, milestones and generations.",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Trusted Quality",
  },
  {
    icon: Award,
    title: "Legacy Craftsmanship",
  },
];

function About() {
  return (
    <section
      id="about"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#050505]
        px-5
        py-24
        sm:px-8
        lg:px-10
        lg:py-32
      "
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-30">
        <img
          src="/images/luxury/about/about-heritage-banner.webp"
          alt=""
          loading="lazy"
          decoding="async"
          className="
            h-full
            w-full
            object-cover
            object-center
            opacity-[0.08]
          "
        />
      </div>

      {/* Background overlays */}
      <div className="absolute inset-0 -z-20 bg-black/90" />

      <div
        className="
          absolute
          inset-0
          -z-20
          bg-gradient-to-r
          from-black
          via-black/85
          to-black/60
        "
      />

      {/* Decorative glows */}
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

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-10rem]
          right-[-8rem]
          -z-10
          h-80
          w-80
          rounded-full
          bg-[#D4AF37]/10
          blur-[130px]
        "
      />

      <div
        className="
          mx-auto
          grid
          max-w-[1520px]
          items-center
          gap-14
          xl:grid-cols-[1.1fr_0.9fr]
          xl:gap-20
        "
      >
        {/* Heritage banner */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Glow */}
          <div
            className="
              pointer-events-none
              absolute
              -inset-5
              rounded-[2.5rem]
              bg-[#D4AF37]/10
              blur-3xl
            "
          />

          {/* Wide frame matching 1920 × 900 image */}
          <div
            className="
              group
              relative
              aspect-[32/15]
              w-full
              overflow-hidden
              rounded-[2rem]
              border
              border-[#D4AF37]/25
              bg-black
              shadow-[0_30px_90px_rgba(0,0,0,0.6)]
            "
          >
            <img
              src="/images/luxury/about/about-heritage-banner.webp"
              alt="Citizen Jewellers heritage craftsmanship"
              loading="lazy"
              decoding="async"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
                transition-transform
                duration-1000
                group-hover:scale-[1.015]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-black/30
                via-transparent
                to-black/5
              "
            />
          </div>

          {/* Years badge */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="
              absolute
              bottom-4
              left-4
              rounded-xl
              border
              border-[#D4AF37]/35
              bg-black/82
              px-5
              py-3
              backdrop-blur-xl
              sm:bottom-6
              sm:left-6
              sm:px-6
              sm:py-4
            "
          >
            <p className="font-serif text-3xl text-[#D4AF37] sm:text-4xl">
              60+
            </p>

            <p
              className="
                mt-1
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-white/75
                sm:text-[10px]
              "
            >
              Years of Trust
            </p>
          </motion.div>

          {/* Brand badge */}
          <div
            className="
              absolute
              right-4
              top-4
              rounded-full
              border
              border-[#D4AF37]/30
              bg-black/78
              px-4
              py-2
              text-[9px]
              uppercase
              tracking-[0.22em]
              text-[#D4AF37]
              backdrop-blur-md
              sm:right-6
              sm:top-6
              sm:text-[10px]
            "
          >
            By Lakhani Sons
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p
            className="
              mb-6
              text-xs
              font-medium
              uppercase
              tracking-[0.42em]
              text-[#D4AF37]
            "
          >
            Our Heritage
          </p>

          <h2
            className="
              max-w-2xl
              font-serif
              text-4xl
              leading-[1.05]
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            A Legacy of

            <span className="mt-2 block text-[#D4AF37]">
              Timeless Elegance
            </span>
          </h2>

          <p
            className="
              mt-8
              max-w-2xl
              text-base
              leading-8
              text-white/60
              sm:text-lg
            "
          >
            Citizen Jewellers by Lakhani Sons represents a heritage built on
            trust, precision and artistry. Since 1963, we have created
            jewellery that becomes part of life&apos;s most meaningful
            celebrations.
          </p>

          <p
            className="
              mt-5
              max-w-2xl
              text-base
              leading-8
              text-white/50
            "
          >
            From premium gold jewellery to diamond and gemstone
            masterpieces, every piece reflects our commitment to quality,
            refinement and lasting value.
          </p>

          {/* Highlights */}
          <div className="mt-10 space-y-5">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.55,
                  }}
                  className="
                    group
                    flex
                    items-start
                    gap-5
                    rounded-2xl
                    border
                    border-white/5
                    bg-white/[0.025]
                    p-5
                    transition
                    duration-300
                    hover:border-[#D4AF37]/25
                    hover:bg-[#D4AF37]/[0.04]
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#D4AF37]/35
                      bg-[#D4AF37]/5
                      text-[#D4AF37]
                      transition
                      duration-300
                      group-hover:bg-[#D4AF37]
                      group-hover:text-black
                    "
                  >
                    <Icon size={22} aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-white/50">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Trust strip */}
          <div
            className="
              mt-9
              grid
              gap-4
              border-t
              border-white/10
              pt-7
              sm:grid-cols-2
            "
          >
            {trustPoints.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    flex
                    items-center
                    gap-3
                    text-sm
                    uppercase
                    tracking-[0.14em]
                    text-white/55
                  "
                >
                  <Icon
                    size={18}
                    className="text-[#D4AF37]"
                    aria-hidden="true"
                  />

                  {item.title}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;