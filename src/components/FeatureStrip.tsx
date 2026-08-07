import { motion } from "framer-motion";
import {
  Award,
  Gem,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Since 1963",
    text: "A heritage serving generations",
  },
  {
    icon: Gem,
    title: "Premium 21K Gold",
    text: "Refined jewellery craftsmanship",
  },
  {
    icon: Sparkles,
    title: "Timeless Designs",
    text: "Created for precious occasions",
  },
  {
    icon: RefreshCcw,
    title: "Gold Exchange",
    text: "Professional evaluation and guidance",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    text: "Attention to purity and finishing",
  },
];

function FeatureStrip() {
  return (
    <section
      aria-label="Citizen Jewellers features"
      className="
        relative
        overflow-hidden
        border-y
        border-[#D4AF37]/20
        bg-[#070707]
        px-5
        py-7
        sm:px-8
        lg:px-10
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-32
          w-[34rem]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D4AF37]/7
          blur-[75px]
        "
      />

      <div
        className="
          relative
          mx-auto
          grid
          max-w-[1520px]
          gap-4
          sm:grid-cols-2
          lg:grid-cols-5
          lg:gap-0
        "
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
                ease: "easeOut",
              }}
              whileHover={{
                y: -4,
              }}
              className="
                group
                relative
                flex
                items-center
                gap-4
                overflow-hidden
                rounded-xl
                border
                border-[#D4AF37]/15
                bg-black/35
                p-4
                transition
                duration-300
                hover:border-[#D4AF37]/45
                hover:bg-[#D4AF37]/[0.045]
                lg:rounded-none
                lg:border-y-0
                lg:border-l-0
                lg:border-r
                lg:border-[#D4AF37]/15
                lg:px-6
                lg:py-3
                lg:last:border-r-0
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
                  bg-[radial-gradient(circle_at_left,rgba(212,175,55,.12),transparent_60%)]
                "
              />

              <div
                className="
                  relative
                  flex
                  h-11
                  w-11
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
                <Icon size={20} aria-hidden="true" />
              </div>

              <div className="relative">
                <p className="text-sm font-semibold text-white">
                  {feature.title}
                </p>

                <p className="mt-1 text-xs leading-5 text-white/40">
                  {feature.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default FeatureStrip;