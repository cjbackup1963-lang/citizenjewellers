import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Gift,
  MapPin,
  Sparkles,
} from "lucide-react";

const galleryItems = [
  {
    title: "Citizen Jewellers Showroom",
    subtitle: "A refined jewellery experience built on trust and heritage.",
    image: "/images/luxury/gallery/gallery-showroom-main.webp",
    icon: Sparkles,
    label: "Main Showroom",
  },
  {
    title: "Luxury Store Interior",
    subtitle: "An elegant environment designed for private jewellery viewing.",
    image: "/images/luxury/showroom/store-interior.webp",
    icon: Building2,
    label: "Interior",
  },
  {
    title: "Citizen Jewellers Exterior",
    subtitle: "Visit our showroom in the heart of Saddar, Karachi.",
    image: "/images/luxury/showroom/store-exterior.webp",
    icon: MapPin,
    label: "Storefront",
  },
  {
    title: "Premium Packaging",
    subtitle: "Every jewellery piece is presented with care and distinction.",
    image: "/images/luxury/packaging/luxury-packaging.webp",
    icon: Gift,
    label: "Presentation",
  },
];

function Gallery() {
  return (
    <section
      id="gallery"
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
      {/* Decorative glows */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-10rem]
          top-1/4
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
          h-96
          w-96
          rounded-full
          bg-[#D4AF37]/10
          blur-[140px]
        "
      />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto mb-16 max-w-3xl text-center lg:mb-20"
        >
          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.42em]
              text-[#D4AF37]
              sm:text-sm
            "
          >
            Luxury Gallery
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
            The Citizen Experience
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-white/55
              sm:text-lg
            "
          >
            Discover the showroom, presentation and luxury environment behind
            Citizen Jewellers by Lakhani Sons.
          </p>
        </motion.div>

        {/* Main gallery feature */}
        <motion.article
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            group
            overflow-hidden
            rounded-[2rem]
            border
            border-[#D4AF37]/20
            bg-[#090909]
            shadow-[0_30px_90px_rgba(0,0,0,0.5)]
          "
        >
          <div
            className="
              relative
              overflow-hidden
              border-b
              border-[#D4AF37]/15
              bg-black
            "
          >
            <img
              src={galleryItems[0].image}
              alt={galleryItems[0].title}
              loading="lazy"
              decoding="async"
              className="
                block
                h-auto
                w-full
                object-contain
                transition-transform
                duration-[1400ms]
                group-hover:scale-[1.015]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-black/20
                via-transparent
                to-black/5
              "
            />

            <div
              className="
                absolute
                left-5
                top-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#D4AF37]/35
                bg-black/75
                px-4
                py-2
                text-[10px]
                uppercase
                tracking-[0.24em]
                text-[#D4AF37]
                backdrop-blur-md
                sm:left-7
                sm:top-7
              "
            >
              <Sparkles size={14} aria-hidden="true" />
              {galleryItems[0].label}
            </div>
          </div>

          <div
            className="
              grid
              gap-7
              p-6
              sm:p-8
              lg:grid-cols-[1fr_auto]
              lg:items-center
              lg:p-10
            "
          >
            <div>
              <h3
                className="
                  font-serif
                  text-3xl
                  text-white
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                {galleryItems[0].title}
              </h3>

              <p
                className="
                  mt-4
                  max-w-3xl
                  text-sm
                  leading-7
                  text-white/50
                  sm:text-base
                "
              >
                {galleryItems[0].subtitle}
              </p>
            </div>

            <a
              href="#contact"
              className="
                inline-flex
                min-h-14
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#D4AF37]
                px-7
                py-4
                text-sm
                font-semibold
                text-black
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-[#e5c65c]
              "
            >
              Visit Showroom
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </motion.article>

        {/* Secondary gallery assets */}
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {galleryItems.slice(1).map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8 }}
                className="
                  group
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-[#D4AF37]/20
                  bg-[#090909]
                  shadow-[0_25px_70px_rgba(0,0,0,0.4)]
                "
              >
                {/* Full image without crop */}
                <div
                  className="
                    relative
                    flex
                    min-h-[220px]
                    items-center
                    justify-center
                    overflow-hidden
                    border-b
                    border-[#D4AF37]/15
                    bg-black
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="
                      block
                      h-auto
                      w-full
                      object-contain
                      transition-transform
                      duration-[1200ms]
                      group-hover:scale-[1.02]
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/20
                      via-transparent
                      to-black/5
                    "
                  />

                  <div
                    className="
                      absolute
                      left-4
                      top-4
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-[#D4AF37]/35
                      bg-black/75
                      px-4
                      py-2
                      text-[10px]
                      uppercase
                      tracking-[0.22em]
                      text-[#D4AF37]
                      backdrop-blur-md
                    "
                  >
                    <Icon size={14} aria-hidden="true" />
                    {item.label}
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6 sm:p-7">
                  <h3
                    className="
                      font-serif
                      text-2xl
                      leading-tight
                      text-white
                      sm:text-3xl
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-sm
                      leading-7
                      text-white/50
                    "
                  >
                    {item.subtitle}
                  </p>

                  <a
                    href={item.label === "Storefront" ? "#contact" : "#services"}
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-3
                      text-sm
                      font-semibold
                      text-[#D4AF37]
                      transition-all
                      duration-300
                      group-hover:gap-5
                    "
                  >
                    Discover More
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Gallery footer */}
        <div
          className="
            mt-14
            flex
            flex-col
            items-center
            justify-between
            gap-6
            rounded-3xl
            border
            border-[#D4AF37]/15
            bg-white/[0.025]
            p-7
            text-center
            sm:flex-row
            sm:text-left
          "
        >
          <div>
            <p className="font-serif text-2xl text-white">
              Experience Citizen Jewellers in Person
            </p>

            <p className="mt-2 text-sm text-white/45">
              Private consultation and jewellery viewing are available at our
              Saddar showroom.
            </p>
          </div>

          <a
            href="#contact"
            className="
              inline-flex
              min-h-13
              shrink-0
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-[#D4AF37]/45
              px-7
              py-3.5
              text-sm
              font-semibold
              text-[#D4AF37]
              transition
              duration-300
              hover:-translate-y-1
              hover:bg-[#D4AF37]
              hover:text-black
            "
          >
            Plan Your Visit
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Gallery;