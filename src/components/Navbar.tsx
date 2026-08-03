import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShoppingCart,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { useCart } from "../context/CartContext";

const menu = [
  { name: "Home", id: "home" },
  { name: "Collections", id: "collections" },
  { name: "Gold Rates", id: "rates" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const { totalItems } = useCart();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleNavigation = (id: string) => {
    setOpen(false);

    if (location.pathname === "/") {
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    }
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Main Navbar */}
      <div
        className={`
          border-b
          border-[#D4AF37]/15
          transition-all
          duration-300
          ${
            scrolled
              ? "bg-black/95 shadow-[0_10px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              : "bg-black/80 backdrop-blur-md"
          }
        `}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          {/* Logo */}
          <Link
            to="/"
            aria-label="Citizen Jewellers home"
            className="shrink-0"
            onClick={() => {
              setOpen(false);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <img
              src="/images/logo.webp"
              alt="Citizen Jewellers"
              width="96"
              height="120"
              loading="eager"
              decoding="async"
              className="
                h-14
                w-auto
                object-contain
                transition-transform
                duration-300
                hover:scale-[1.03]
                sm:h-16
              "
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Main navigation"
          >
            {menu.map((item) => (
              <Link
                key={item.id}
                to={`/#${item.id}`}
                onClick={() => handleNavigation(item.id)}
                className="
                  group
                  relative
                  py-2
                  text-sm
                  font-medium
                  tracking-wide
                  text-white/70
                  transition
                  duration-300
                  hover:text-[#D4AF37]
                "
              >
                {item.name}

                <span
                  className="
                    absolute
                    inset-x-0
                    -bottom-0.5
                    h-px
                    origin-left
                    scale-x-0
                    bg-[#D4AF37]
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  "
                />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/cart"
              className="
                relative
                grid
                h-11
                w-11
                place-items-center
                rounded-full
                border
                border-[#D4AF37]/40
                bg-black/25
                text-[#D4AF37]
                transition
                duration-300
                hover:-translate-y-0.5
                hover:border-[#D4AF37]
                hover:bg-[#D4AF37]
                hover:text-black
              "
              aria-label={`Cart with ${totalItems} items`}
            >
              <ShoppingCart size={18} aria-hidden="true" />

              {totalItems > 0 && (
                <span
                  className="
                    absolute
                    -right-1
                    -top-1
                    grid
                    min-h-5
                    min-w-5
                    place-items-center
                    rounded-full
                    bg-[#D4AF37]
                    px-1
                    text-[10px]
                    font-bold
                    text-black
                  "
                >
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>

            <a
              href="https://wa.me/923352484936"
              target="_blank"
              rel="noreferrer"
              className="
                hidden
                min-h-11
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#D4AF37]
                px-5
                text-sm
                font-semibold
                text-black
                shadow-[0_10px_30px_rgba(212,175,55,0.18)]
                transition
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#e2c15b]
                md:inline-flex
              "
            >
              <MessageCircle size={17} aria-hidden="true" />
              WhatsApp
            </a>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="
                grid
                h-11
                w-11
                place-items-center
                rounded-full
                text-[#D4AF37]
                transition
                hover:bg-white/5
                lg:hidden
              "
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={27} /> : <Menu size={27} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="
              overflow-hidden
              border-b
              border-[#D4AF37]/15
              bg-black/98
              backdrop-blur-xl
              lg:hidden
            "
          >
            <nav
              className="mx-auto flex max-w-7xl flex-col px-6 py-5"
              aria-label="Mobile navigation"
            >
              {menu.map((item) => (
                <Link
                  key={item.id}
                  to={`/#${item.id}`}
                  onClick={() => handleNavigation(item.id)}
                  className="
                    border-b
                    border-white/5
                    py-4
                    text-sm
                    font-medium
                    tracking-wide
                    text-white/75
                    transition
                    hover:text-[#D4AF37]
                  "
                >
                  {item.name}
                </Link>
              ))}

              <div className="mt-5 grid gap-3">
                <a
                  href="tel:+923352484936"
                  className="
                    flex
                    min-h-12
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    border
                    border-[#D4AF37]/35
                    text-sm
                    text-white/80
                  "
                >
                  <Phone size={17} aria-hidden="true" />
                  0335 2484936
                </a>

                <a
                  href="https://wa.me/923352484936"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex
                    min-h-12
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#D4AF37]
                    text-sm
                    font-semibold
                    text-black
                  "
                >
                  <MessageCircle size={17} aria-hidden="true" />
                  WhatsApp Consultation
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Location Bar */}
      <div
        className="
          border-b
          border-[#D4AF37]/10
          bg-[#080808]
          px-4
          py-2
          text-center
          text-[10px]
          tracking-wide
          text-white/45
          sm:text-[11px]
        "
      >
        <span className="inline-flex items-center justify-center gap-2">
          <MapPin
            size={12}
            className="shrink-0 text-[#D4AF37]"
            aria-hidden="true"
          />

          Lakhani Tower, Zaibunissa Street, Saddar, Karachi
        </span>
      </div>
    </header>
  );
}

export default Navbar;