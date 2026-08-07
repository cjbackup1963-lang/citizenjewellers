import { motion } from "framer-motion";
import {
  ArrowRight,
  Crown,
  Gem,
  Sparkles,
  Watch,
} from "lucide-react";

const collections = [
  {
    title: "Gold Jewellery",
    subtitle: "Premium 21K Gold Creations",
    description:
      "Discover timeless 21K gold jewellery crafted with precision, purity and elegance.",
    image:
      "/images/luxury/collections/gold-collection-banner.webp",
    icon: Gem,
  },
  {
    title: "Diamond Collection",
    subtitle: "Brilliance Beyond Time",
    description:
      "Elegant diamond jewellery designed to celebrate life's most memorable occasions.",
    image:
      "/images/luxury/collections/diamond-collection-banner.webp",
    icon: Sparkles,
  },
  {
    title: "Bridal Collection",
    subtitle: "Royal Wedding Masterpieces",
    description:
      "Exquisite 21K bridal jewellery created for unforgettable celebrations.",
    image:
      "/images/luxury/collections/bridal-collection-banner.webp",
    icon: Crown,
  },
  {
    title: "Men's Collection",
    subtitle: "Bold, Refined and Timeless",
    description:
      "Premium men's jewellery designed for confidence, distinction and modern style.",
    image:
      "/images/luxury/collections/mens-collection-banner.webp",
    icon: Watch,
  },
];

function Collections() {
  return (
    <section
      id="collections"
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
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -z-10
          h-96
          w-96
          -translate-x-1/2
          rounded-full
          bg-[#D4AF37]/10
          blur-[150px]
        "
      />

      <div className="mx-auto max-w-[1520px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center lg:mb-18"
        >
          <p
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.48em]
              text-[#D4AF37]
              sm:text-xs
            "
          >
            Luxury Collections
          </p>

          <h2
            className="
              mt-5
              font-serif
              text-4xl
              leading-tight
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Discover Elegance
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-base
              leading-8
              text-white/50
              sm:text-lg
            "
          >
            Explore premium jewellery collections inspired by heritage,
            craftsmanship and timeless beauty.
          </p>
        </motion.div>

        {/* Collection Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {collections.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -7 }}
                className="
                  group
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#D4AF37]/20
                  bg-[#090909]
                  shadow-[0_25px_80px_rgba(0,0,0,0.4)]
                  transition
                  duration-500
                  hover:border-[#D4AF37]/50
                "
              >
                {/* Complete poster image */}
                <div
                  className="
                    relative
                    flex
                    aspect-[16/10]
                    items-center
                    justify-center
                    overflow-hidden
                    bg-black
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="
                      h-full
                      w-full
                      object-contain
                      object-center
                      transition-transform
                      duration-[1000ms]
                      group-hover:scale-[1.015]
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/40
                      via-transparent
                      to-transparent
                    "
                  />

                  <div
                    className="
                      absolute
                      left-5
                      top-5
                      grid
                      h-12
                      w-12
                      place-items-center
                      rounded-full
                      border
                      border-[#D4AF37]/45
                      bg-black/70
                      text-[#D4AF37]
                      backdrop-blur-md
                    "
                  >
                    <Icon size={21} aria-hidden="true" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 sm:p-8">
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.3em]
                      text-[#D4AF37]
                    "
                  >
                    {item.subtitle}
                  </p>

                  <h3
                    className="
                      mt-3
                      font-serif
                      text-3xl
                      text-white
                      sm:text-4xl
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-xl
                      text-sm
                      leading-7
                      text-white/48
                      sm:text-base
                    "
                  >
                    {item.description}
                  </p>

                  <a
                    href="#catalog"
                    className="
                      group/button
                      mt-7
                      inline-flex
                      min-h-12
                      items-center
                      justify-center
                      gap-3
                      rounded-md
                      border
                      border-[#D4AF37]/45
                      px-6
                      text-sm
                      font-semibold
                      text-[#D4AF37]
                      transition
                      duration-300
                      hover:bg-[#D4AF37]
                      hover:text-black
                    "
                  >
                    Explore Collection

                    <ArrowRight
                      size={17}
                      className="
                        transition-transform
                        duration-300
                        group-hover/button:translate-x-1
                      "
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Collections;