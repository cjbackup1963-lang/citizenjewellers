import { motion } from "framer-motion";
import {
  Diamond,
  Gift,
  Gem,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Gem,
    title: "21K Gold Jewellery",
    description:
      "Premium 21K gold jewellery crafted with refined finishing, traditional artistry and lasting elegance.",
  },
  {
    icon: Diamond,
    title: "Diamond Jewellery",
    description:
      "Elegant diamond creations selected and crafted for brilliance, sophistication and memorable occasions.",
  },
  {
    icon: Sparkles,
    title: "Bridal Jewellery",
    description:
      "Royal bridal masterpieces inspired by heritage, celebration and timeless wedding traditions.",
  },
  {
    icon: ShieldCheck,
    title: "Purity & Quality Assurance",
    description:
      "Trusted jewellery standards supported by careful evaluation, quality control and experienced craftsmanship.",
  },
  {
    icon: Wrench,
    title: "Repair & Polishing",
    description:
      "Professional resizing, restoration, polishing and jewellery care for treasured pieces.",
  },
  {
    icon: Gift,
    title: "Custom Jewellery Design",
    description:
      "Personalized jewellery created according to your preferences, occasion and design vision.",
  },
];

function Services() {
  return (
    <section
      id="services"
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
      {/* Background */}
      <div className="absolute inset-0 -z-30">
        <img
          src="/images/luxury/services/services-luxury-banner.webp"
          alt=""
          loading="lazy"
          decoding="async"
          className="
            h-full
            w-full
            object-cover
            object-center
            opacity-15
          "
        />
      </div>

      <div className="absolute inset-0 -z-20 bg-black/85" />

      <div
        className="
          absolute
          inset-0
          -z-20
          bg-gradient-to-r
          from-black
          via-black/80
          to-black/55
        "
      />

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
              mb-5
              text-xs
              font-medium
              uppercase
              tracking-[0.42em]
              text-[#D4AF37]
              sm:text-sm
            "
          >
            Our Services
          </p>

          <h2
            className="
              font-serif
              text-4xl
              leading-tight
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Exceptional Jewellery Care
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
            From handcrafted creations to professional jewellery care,
            experience trusted service shaped by decades of expertise.
          </p>
        </motion.div>

        {/* Featured packaging image */}
        <motion.article
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            group
            mb-12
            overflow-hidden
            rounded-[2rem]
            border
            border-[#D4AF37]/20
            bg-[#090909]
            shadow-[0_30px_90px_rgba(0,0,0,0.5)]
            lg:mb-16
          "
        >
          <div
            className="
              grid
              items-stretch
              lg:grid-cols-[1.15fr_0.85fr]
            "
          >
            <div
              className="
                relative
                flex
                items-center
                justify-center
                overflow-hidden
                border-b
                border-[#D4AF37]/15
                bg-black
                lg:border-b-0
                lg:border-r
              "
            >
              <img
                src="/images/luxury/packaging/luxury-packaging.webp"
                alt="Citizen Jewellers luxury packaging"
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
            </div>

            <div
              className="
                flex
                flex-col
                justify-center
                p-7
                sm:p-10
                lg:p-12
                xl:p-14
              "
            >
              <p
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-[#D4AF37]
                "
              >
                Premium Presentation
              </p>

              <h3
                className="
                  mt-5
                  font-serif
                  text-3xl
                  leading-tight
                  text-white
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Every Detail, Presented with Care
              </h3>

              <p
                className="
                  mt-6
                  text-sm
                  leading-7
                  text-white/55
                  sm:text-base
                  sm:leading-8
                "
              >
                Every Citizen Jewellers piece is presented with attention to
                detail, ensuring a refined experience from selection to final
                presentation.
              </p>

              <a
                href="https://wa.me/923352484936"
                target="_blank"
                rel="noreferrer"
                className="
                  mt-8
                  inline-flex
                  min-h-13
                  w-fit
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#D4AF37]
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-black
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#e5c65c]
                "
              >
                <MessageCircle size={18} aria-hidden="true" />
                Discuss Your Requirement
              </a>
            </div>
          </div>
        </motion.article>

        {/* Services grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8 }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-[#D4AF37]/18
                  bg-black/55
                  p-7
                  backdrop-blur-xl
                  transition
                  duration-500
                  hover:border-[#D4AF37]/45
                  sm:p-8
                "
              >
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                    bg-[radial-gradient(circle_at_top,rgba(212,175,55,.15),transparent_62%)]
                  "
                />

                <div className="relative">
                  <div
                    className="
                      mb-7
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
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
                    <Icon size={27} aria-hidden="true" />
                  </div>

                  <h3
                    className="
                      font-serif
                      text-2xl
                      leading-tight
                      text-white
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-sm
                      leading-7
                      text-white/50
                    "
                  >
                    {service.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-14
            flex
            flex-col
            items-center
            justify-between
            gap-6
            rounded-3xl
            border
            border-[#D4AF37]/18
            bg-white/[0.03]
            p-7
            text-center
            sm:flex-row
            sm:text-left
          "
        >
          <div>
            <p className="font-serif text-2xl text-white">
              Need Jewellery Guidance?
            </p>

            <p className="mt-2 text-sm leading-6 text-white/45">
              Speak with Citizen Jewellers for product guidance, custom design
              requirements or jewellery care.
            </p>
          </div>

          <a
            href="https://wa.me/923352484936"
            target="_blank"
            rel="noreferrer"
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
            <MessageCircle size={18} aria-hidden="true" />
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;