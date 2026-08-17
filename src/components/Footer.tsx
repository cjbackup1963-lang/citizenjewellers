import { useEffect, useState } from "react";

import {
  ArrowUp,
  Clock,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";

import { Link } from "react-router-dom";

/* =========================================================
   QUICK LINKS
========================================================= */

const quickLinks = [
  {
    name: "Home",
    to: "/#home",
  },
  {
    name: "Collections",
    to: "/#collections",
  },
  {
    name: "Gold Rates",
    to: "/#rates",
  },
  {
    name: "Gold Insights",
    to: "/gold-insights",
  },
  {
    name: "Sell Gold",
    to: "/sell-gold",
  },
  {
    name: "Zakat Calculator",
    to: "/zakat-calculator",
  },
  {
    name: "About Us",
    to: "/#about",
  },
  {
    name: "Services",
    to: "/#services",
  },
  {
    name: "Gallery",
    to: "/#gallery",
  },
  {
    name: "Contact",
    to: "/#contact",
  },
];

/* =========================================================
   COLLECTIONS
========================================================= */

const collections = [
  "Premium Gold Jewellery",
  "Diamond Jewellery",
  "Bridal Collection",
  "Men’s Collection",
  "Custom Jewellery",
];

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  const [showScrollButton, setShowScrollButton] =
    useState(false);

  /* =======================================================
     SHOW / HIDE SCROLL BUTTON
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(
        window.scrollY > 500
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =======================================================
     SCROLL TO TOP
  ======================================================= */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        isolate
        overflow-hidden
        bg-black
      "
    >
      {/* ===================================================
          BACKGROUND IMAGE
      =================================================== */}

      <div className="absolute inset-0 -z-30">
        <img
          src="/images/luxury/footer/footer-background.webp"
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

      {/* ===================================================
          DARK OVERLAYS
      =================================================== */}

      <div className="absolute inset-0 -z-20 bg-black/90" />

      <div
        className="
          absolute
          inset-0
          -z-20
          bg-gradient-to-b
          from-black/65
          via-black/90
          to-black
        "
      />

      {/* ===================================================
          GOLD GLOW
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -z-10
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-[#D4AF37]/10
          blur-[130px]
        "
      />

      {/* ===================================================
          ANIMATED GOLD LINE
      =================================================== */}

      <div
        className="
          relative
          h-px
          overflow-hidden
          bg-[#D4AF37]/15
        "
      >
        <div
          className="
            absolute
            inset-y-0
            left-[-35%]
            w-1/3
            bg-gradient-to-r
            from-transparent
            via-[#D4AF37]
            to-transparent
            animate-[footerShine_5s_linear_infinite]
          "
        />
      </div>

      {/* ===================================================
          MAIN FOOTER
      =================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          py-20
          sm:px-8
          lg:px-10
          lg:py-24
        "
      >
        <div
          className="
            grid
            gap-14
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}

          <div className="lg:pr-6">
            <Link
              to="/#home"
              aria-label="Citizen Jewellers home"
              className="inline-block"
            >
              <img
                src="/images/logo.webp"
                alt="Citizen Jewellers by Lakhani Sons"
                width={240}
                height={110}
                loading="lazy"
                decoding="async"
                className="
                  h-20
                  w-auto
                  max-w-[230px]
                  object-contain
                "
              />
            </Link>

            <p
              className="
                mt-6
                max-w-sm
                text-sm
                leading-7
                text-white/50
              "
            >
              Premium gold, diamond and gemstone
              jewellery shaped by heritage, trusted
              craftsmanship and timeless elegance since
              1963.
            </p>

            {/* SOCIAL ICONS */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-3
              "
            >
              {/* INSTAGRAM */}

              <a
                href="https://www.instagram.com/citizenjewellers"
                target="_blank"
                rel="noreferrer"
                aria-label="Citizen Jewellers Instagram"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D4AF37]/30
                  text-[#D4AF37]
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#D4AF37]
                  hover:text-black
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* FACEBOOK */}

              <a
                href="https://www.facebook.com/citizenjewellers/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Citizen Jewellers Facebook"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D4AF37]/30
                  text-[#D4AF37]
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#D4AF37]
                  hover:text-black
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M13.6 21v-8h2.8l.4-3h-3.2V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.6V10H7v3h3v8h3.6Z" />
                </svg>
              </a>

              {/* WHATSAPP */}

              <a
                href="https://wa.me/923352484936"
                target="_blank"
                rel="noreferrer"
                aria-label="Citizen Jewellers WhatsApp"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D4AF37]/30
                  text-[#D4AF37]
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#D4AF37]
                  hover:text-black
                "
              >
                <MessageCircle
                  size={19}
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div>
            <h3
              className="
                font-serif
                text-2xl
                text-white
              "
            >
              Quick Links
            </h3>

            <div className="mt-7 space-y-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-3
                    text-sm
                    text-white/50
                    transition
                    duration-300
                    hover:translate-x-1
                    hover:text-[#D4AF37]
                  "
                >
                  <span
                    className="
                      h-px
                      w-4
                      bg-[#D4AF37]/35
                      transition-all
                      duration-300
                      group-hover:w-6
                      group-hover:bg-[#D4AF37]
                    "
                  />

                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* =================================================
              COLLECTIONS
          ================================================= */}

          <div>
            <h3
              className="
                font-serif
                text-2xl
                text-white
              "
            >
              Collections
            </h3>

            <div className="mt-7 space-y-4">
              {collections.map(
                (item) => (
                  <Link
                    key={item}
                    to="/#collections"
                    className="
                      block
                      text-sm
                      leading-6
                      text-white/50
                      transition
                      duration-300
                      hover:text-[#D4AF37]
                    "
                  >
                    {item}
                  </Link>
                )
              )}
            </div>

            {/* GOLD INSIGHTS FEATURE */}

            <div
              className="
                mt-8
                rounded-2xl
                border
                border-[#D4AF37]/18
                bg-[#D4AF37]/[0.035]
                p-5
              "
            >
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#D4AF37]
                "
              >
                Knowledge Hub
              </p>

              <p
                className="
                  mt-3
                  font-serif
                  text-xl
                  text-white
                "
              >
                Gold Insights
              </p>

              <p
                className="
                  mt-3
                  text-xs
                  leading-6
                  text-white/40
                "
              >
                Learn about gold rates, purity,
                jewellery buying and market concepts.
              </p>

              <Link
                to="/gold-insights"
                className="
                  mt-4
                  inline-flex
                  text-sm
                  font-semibold
                  text-[#D4AF37]
                  transition
                  hover:text-white
                "
              >
                Explore Guides →
              </Link>
            </div>
          </div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <div>
            <h3
              className="
                font-serif
                text-2xl
                text-white
              "
            >
              Visit & Contact
            </h3>

            <div className="mt-7 space-y-6">
              {/* ADDRESS */}

              <div className="flex items-start gap-4">
                <MapPin
                  size={20}
                  className="
                    mt-1
                    shrink-0
                    text-[#D4AF37]
                  "
                  aria-hidden="true"
                />

                <p
                  className="
                    text-sm
                    leading-7
                    text-white/50
                  "
                >
                  Citizen Jewellers, Lakhani Tower,
                  Main Zaibunissa Street, Saddar,
                  Karachi
                </p>
              </div>

              {/* PHONE */}

              <a
                href="tel:+923352484936"
                className="
                  flex
                  items-center
                  gap-4
                  text-sm
                  text-white/50
                  transition
                  hover:text-[#D4AF37]
                "
              >
                <Phone
                  size={20}
                  className="
                    shrink-0
                    text-[#D4AF37]
                  "
                  aria-hidden="true"
                />

                0335 2484936
              </a>

              {/* HOURS */}

              <div className="flex items-start gap-4">
                <Clock
                  size={20}
                  className="
                    mt-1
                    shrink-0
                    text-[#D4AF37]
                  "
                  aria-hidden="true"
                />

                <p
                  className="
                    text-sm
                    leading-7
                    text-white/50
                  "
                >
                  Monday – Saturday
                  <br />
                  01:00 PM – 09:00 PM
                </p>
              </div>

              {/* CTA BUTTONS */}

              <div
                className="
                  flex
                  flex-col
                  gap-3
                  pt-1
                "
              >
                <a
                  href="https://wa.me/923352484936"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    min-h-12
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#D4AF37]
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-black
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#e5c65c]
                  "
                >
                  <MessageCircle
                    size={18}
                    aria-hidden="true"
                  />

                  WhatsApp Consultation
                </a>

                <a
                  href="https://maps.app.goo.gl/JxmTnuFsymUi5eYNA"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    min-h-12
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    border
                    border-[#D4AF37]/40
                    px-6
                    py-3
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
                  <Navigation
                    size={18}
                    aria-hidden="true"
                  />

                  Open in Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            CTA SECTION
        =================================================== */}

        <div
          className="
            mt-16
            grid
            gap-6
            rounded-[2rem]
            border
            border-[#D4AF37]/18
            bg-white/[0.03]
            p-7
            backdrop-blur-xl

            sm:p-8

            md:grid-cols-[1fr_auto]
            md:items-center
          "
        >
          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-[#D4AF37]
              "
            >
              Citizen Jewellers
            </p>

            <h3
              className="
                mt-3
                font-serif
                text-2xl
                text-white
                sm:text-3xl
              "
            >
              Looking for the Latest Jewellery and Gold
              Rate Guidance?
            </h3>

            <p
              className="
                mt-3
                max-w-3xl
                text-sm
                leading-7
                text-white/45
              "
            >
              Connect with our team for current rates,
              collection availability and personalised
              jewellery assistance.
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
            <MessageCircle
              size={18}
              aria-hidden="true"
            />

            Speak With an Expert
          </a>
        </div>

        {/* ===================================================
            BOTTOM FOOTER
        =================================================== */}

        <div
          className="
            mt-14
            flex
            flex-col
            items-center
            justify-between
            gap-5
            border-t
            border-[#D4AF37]/15
            pt-8
            text-center
            text-xs
            leading-6
            text-white/35

            md:flex-row
            md:text-left
          "
        >
          <p>
            © 2026 Citizen Jewellers by Lakhani Sons.
            All rights reserved.
          </p>

          <p>
            Heritage, trust and craftsmanship since
            1963.
          </p>
        </div>
      </div>

      {/* ===================================================
          SCROLL TO TOP
      =================================================== */}

      {showScrollButton && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="
            fixed
            bottom-6
            right-6
            z-50
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-[#D4AF37]/40
            bg-black/85
            text-[#D4AF37]
            shadow-[0_15px_40px_rgba(0,0,0,0.4)]
            backdrop-blur-md
            transition
            duration-300
            hover:-translate-y-1
            hover:bg-[#D4AF37]
            hover:text-black
          "
        >
          <ArrowUp
            size={20}
            aria-hidden="true"
          />
        </button>
      )}

      {/* ===================================================
          LOCAL ANIMATION
      =================================================== */}

      <style>{`
        @keyframes footerShine {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(500%);
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;