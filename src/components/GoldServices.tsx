import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calculator,
  Gem,
  Scale,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "Sell Your Gold",
    description:
      "Get an indicative gold value and request the current buying price from our team.",
    path: "/sell-gold",
    icon: <Scale size={24} aria-hidden="true" />,
    tag: "Gold Buying",
  },
  {
    title: "Jewellery Appraisal",
    description:
      "Assess purity, weight, condition and indicative value through an in-store evaluation.",
    path: "/appraisal",
    icon: <Gem size={24} aria-hidden="true" />,
    tag: "Assessment",
  },
  {
    title: "Zakat Calculator",
    description:
      "Estimate gold Zakat using your weight, purity and the current 24K gold-rate reference.",
    path: "/zakat-calculator",
    icon: <Calculator size={24} aria-hidden="true" />,
    tag: "Gold Utility",
  },
];

function GoldServices() {
  return (
    <section
      id="gold-services"
      className="
        relative
        overflow-hidden
        bg-[#050505]
        px-5
        py-16
        sm:px-6
        lg:py-24
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D4AF37]/[0.055]
          blur-[130px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="
              mx-auto
              grid
              h-12
              w-12
              place-items-center
              rounded-full
              border
              border-[#D4AF37]/25
              bg-[#D4AF37]/[0.04]
              text-[#D4AF37]
            "
          >
            <ShieldCheck size={22} aria-hidden="true" />
          </div>

          <p
            className="
              mt-5
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.34em]
              text-[#D4AF37]
            "
          >
            Gold Services
          </p>

          <h2
            className="
              mt-4
              font-serif
              text-4xl
              leading-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            More Than Jewellery
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-white/50
              sm:text-base
            "
          >
            Explore practical gold services designed to help you value, assess
            and understand your jewellery with greater clarity.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-12
            grid
            gap-5
            md:grid-cols-3
          "
        >
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.path}
              className="
                group
                relative
                overflow-hidden
                rounded-[26px]
                border
                border-[#D4AF37]/15
                bg-[#0a0a0a]
                p-6
                transition
                duration-300

                hover:-translate-y-1
                hover:border-[#D4AF37]/40
                hover:bg-[#0d0d0d]

                sm:p-7
              "
            >
              {/* Card number */}
              <div
                className="
                  absolute
                  right-5
                  top-4
                  font-serif
                  text-5xl
                  text-white/[0.025]
                "
              >
                0{index + 1}
              </div>

              {/* Icon */}
              <div
                className="
                  grid
                  h-12
                  w-12
                  place-items-center
                  rounded-full
                  border
                  border-[#D4AF37]/25
                  bg-[#D4AF37]/[0.04]
                  text-[#D4AF37]
                  transition
                  duration-300

                  group-hover:border-[#D4AF37]/50
                  group-hover:bg-[#D4AF37]
                  group-hover:text-black
                "
              >
                {service.icon}
              </div>

              {/* Tag */}
              <p
                className="
                  mt-6
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#D4AF37]/70
                "
              >
                {service.tag}
              </p>

              {/* Title */}
              <h3
                className="
                  mt-3
                  font-serif
                  text-2xl
                  text-white
                  transition
                  duration-300

                  group-hover:text-[#D4AF37]
                "
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-white/45
                "
              >
                {service.description}
              </p>

              {/* CTA */}
              <div
                className="
                  mt-7
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-[#D4AF37]
                "
              >
                Explore Service

                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </div>

              {/* Bottom line */}
              <div
                className="
                  absolute
                  inset-x-6
                  bottom-0
                  h-px
                  origin-left
                  scale-x-0
                  bg-gradient-to-r
                  from-[#D4AF37]
                  to-transparent
                  transition-transform
                  duration-300

                  group-hover:scale-x-100
                "
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GoldServices;