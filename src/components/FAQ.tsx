import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ShieldCheck,
  Gem,
  Sparkles,
} from "lucide-react";

const faqs = [
  {
    question: "What purity of gold jewellery does Citizen Jewellers offer?",
    answer:
      "Citizen Jewellers specialises in premium gold jewellery, crafted with exceptional attention to quality, finishing and timeless design.",
  },
  {
    question: "Do you create custom jewellery designs?",
    answer:
      "Yes. We offer bespoke jewellery services where rings, bridal sets, pendants and other pieces can be designed according to your preferences.",
  },
  {
    question: "Do you provide jewellery repair and polishing?",
    answer:
      "Yes. We provide professional jewellery polishing, restoration, resizing and repair services to maintain the beauty of your treasured pieces.",
  },
  {
    question: "Can I order jewellery through WhatsApp?",
    answer:
      "Absolutely. You can contact our jewellery consultants on WhatsApp for product enquiries, pricing, availability and personalised assistance.",
  },
  {
    question: "Where is Citizen Jewellers located?",
    answer:
      "Our showroom is located in Saddar, Karachi. Visit us to experience our luxury collections and personalised customer service.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
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

      <div className="mx-auto max-w-5xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p
            className="
              text-xs
              uppercase
              tracking-[0.42em]
              text-[#D4AF37]
            "
          >
            Frequently Asked Questions
          </p>

          <h2
            className="
              mt-5
              font-serif
              text-4xl
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Everything You Need to Know
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/55">
            Find answers to the most common questions about our jewellery,
            services and customer experience.
          </p>
        </motion.div>

        {/* FAQ Items */}

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="
                overflow-hidden
                rounded-3xl
                border
                border-[#D4AF37]/20
                bg-[#0b0b0b]
              "
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  p-7
                  text-left
                "
              >
                <span
                  className="
                    font-serif
                    text-xl
                    text-white
                    sm:text-2xl
                  "
                >
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition duration-300 ${
                    open === index
                      ? "rotate-180 text-[#D4AF37]"
                      : "text-white/60"
                  }`}
                />
              </button>

              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/10 px-7 py-6">
                      <p className="leading-8 text-white/55">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Bar */}

        <div
          className="
            mt-14
            grid
            gap-5
            rounded-3xl
            border
            border-[#D4AF37]/15
            bg-white/[0.03]
            p-7
            sm:grid-cols-3
          "
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-[#D4AF37]" />
            <span className="text-white">Trusted Since 1963</span>
          </div>

          <div className="flex items-center gap-3">
            <Gem className="text-[#D4AF37]" />
            <span className="text-white">Premium Jewellery</span>
          </div>

          <div className="flex items-center gap-3">
            <Sparkles className="text-[#D4AF37]" />
            <span className="text-white">Luxury Craftsmanship</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;