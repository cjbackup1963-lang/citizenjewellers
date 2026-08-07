import { motion } from "framer-motion";
import {
  Clock,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  ShieldCheck,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Showroom Location",
    text: "Citizen Jewellers, Lakhani Tower, Main Zaibunissa Street, Saddar, Karachi",
  },
  {
    icon: Phone,
    title: "Call Us",
    text: "0335 2484936",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Consultation",
    text: "Connect directly with our jewellery experts.",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    text: "Monday – Saturday | 01:00 PM – 09:00 PM",
  },
];

function Contact() {
  return (
    <section
      id="contact"
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
          src="/images/luxury/showroom/store-exterior.webp"
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

      <div className="absolute inset-0 -z-20 bg-black/88" />

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
          top-1/3
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
            Visit Us
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
            Our Showroom
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
            Experience personalised jewellery guidance, premium 21K
            collections and trusted service at Citizen Jewellers.
          </p>
        </motion.div>

        {/* Main showroom feature */}
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
          <div className="grid items-stretch lg:grid-cols-[1.15fr_0.85fr]">
            {/* Image */}
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
                src="/images/luxury/showroom/store-exterior.webp"
                alt="Citizen Jewellers showroom exterior"
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
                <MapPin size={14} aria-hidden="true" />
                Saddar, Karachi
              </div>
            </div>

            {/* CTA */}
            <div
              className="
                relative
                flex
                flex-col
                justify-center
                overflow-hidden
                p-7
                sm:p-10
                lg:p-12
                xl:p-14
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_top,rgba(212,175,55,.14),transparent_65%)]
                "
              />

              <div className="relative">
                <p
                  className="
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.3em]
                    text-[#D4AF37]
                  "
                >
                  Private Consultation
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
                  Find Your Perfect Jewellery
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
                  Visit our showroom or speak with our experts for jewellery
                  guidance, custom design requirements, gold exchange and
                  professional jewellery care.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    href="https://wa.me/923352484936"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      min-h-13
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
                    WhatsApp
                  </a>

                  <a
                    href="tel:+923352484936"
                    className="
                      inline-flex
                      min-h-13
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
                    <Phone size={18} aria-hidden="true" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Contact cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="
                  group
                  rounded-[1.75rem]
                  border
                  border-[#D4AF37]/18
                  bg-black/55
                  p-7
                  backdrop-blur-xl
                  transition
                  duration-500
                  hover:border-[#D4AF37]/45
                "
              >
                <div
                  className="
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
                  <Icon size={26} aria-hidden="true" />
                </div>

                <h3 className="mt-6 font-serif text-2xl text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/50">
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Location / map CTA */}
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
          <div className="flex items-start gap-4">
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
                text-[#D4AF37]
              "
            >
              <Navigation size={20} aria-hidden="true" />
            </div>

            <div>
              <p className="font-serif text-2xl text-white">
                Plan Your Visit
              </p>

              <p className="mt-2 text-sm leading-6 text-white/45">
                Lakhani Tower, Main Zaibunissa Street, Saddar, Karachi
              </p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Lakhani+Tower+Zaibunissa+Street+Saddar+Karachi"
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
            <MapPin size={18} aria-hidden="true" />
            Open in Maps
          </a>
        </motion.div>

        {/* Trust line */}
        <div
          className="
            mt-8
            flex
            items-center
            justify-center
            gap-3
            text-center
            text-sm
            text-white/45
          "
        >
          <ShieldCheck size={18} className="text-[#D4AF37]" />
          Trusted jewellery guidance and craftsmanship since 1963
        </div>
      </div>
    </section>
  );
}

export default Contact;