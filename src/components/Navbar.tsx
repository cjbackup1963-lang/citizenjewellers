import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  MessageCircle,
  Search,
  ShoppingCart,
  UserRound,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { useCart } from "../context/CartContext";

const menu = [
  { name: "Home", id: "home" },
  { name: "Collections", id: "collections" },
  { name: "Gold Rates", id: "rates" },
  { name: "About Us", id: "about" },
  { name: "Services", id: "services" },
  { name: "Gallery", id: "gallery" },
  { name: "Contact Us", id: "contact" },
];

function Navbar() {
  const { totalItems } = useCart();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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
    setSearchOpen(false);
  }, [location.pathname]);

  const handleNavigation = (id: string) => {
    setOpen(false);
    setSearchOpen(false);

    if (location.pathname === "/") {
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 80);
    }
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Main Navbar */}
      <div
        className={`
          border-b
          border-[#D4AF37]/35
          transition-all
          duration-300
          ${
            scrolled
              ? "bg-black/95 shadow-[0_14px_45px_rgba(0,0,0,0.55)] backdrop-blur-xl"
              : "bg-black/90 backdrop-blur-lg"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            min-h-[92px]
            max-w-[1520px]
            items-center
            justify-between
            gap-5
            px-4
            sm:px-6
            lg:px-8
          "
        >
          {/* Logo */}
          <Link
            to="/"
            aria-label="Citizen Jewellers home"
            className="shrink-0"
            onClick={() => {
              setOpen(false);
              setSearchOpen(false);

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <img
              src="/images/logo.png?v=4"
              alt="Citizen Jewellers by Lakhani Sons"
              width={330}
              height={110}
              loading="eager"
              decoding="async"
              className="
                h-[72px]
                w-auto
                max-w-[245px]
                object-contain
                transition-transform
                duration-500
                hover:scale-[1.025]
                sm:h-[78px]
                sm:max-w-[285px]
                xl:max-w-[320px]
              "
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="
              hidden
              flex-1
              items-center
              justify-center
              gap-5
              xl:flex
              2xl:gap-7
            "
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
                  whitespace-nowrap
                  py-8
                  text-[13px]
                  font-medium
                  uppercase
                  tracking-[0.08em]
                  text-white/80
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
                    bottom-5
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

          {/* Right Actions */}
          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            {/* Search */}
            <button
              type="button"
              onClick={() => setSearchOpen((value) => !value)}
              className="
                hidden
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                text-[#D4AF37]
                transition
                duration-300
                hover:bg-[#D4AF37]/10
                hover:text-[#f1cf64]
                md:flex
              "
              aria-label="Search jewellery"
              aria-expanded={searchOpen}
            >
              <Search size={21} aria-hidden="true" />
            </button>

            {/* Account */}
            <Link
              to="/account"
              className="
                hidden
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                text-white/85
                transition
                duration-300
                hover:bg-[#D4AF37]/10
                hover:text-[#D4AF37]
                md:flex
              "
              aria-label="Customer account"
            >
              <UserRound size={21} aria-hidden="true" />
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="
                relative
                grid
                h-11
                w-11
                place-items-center
                rounded-full
                text-[#D4AF37]
                transition
                duration-300
                hover:bg-[#D4AF37]/10
                hover:text-[#f1cf64]
              "
              aria-label={`Cart with ${totalItems} items`}
            >
              <ShoppingCart size={22} aria-hidden="true" />

              {totalItems > 0 && (
                <span
                  className="
                    absolute
                    -right-0.5
                    top-0
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
                    ring-2
                    ring-black
                  "
                >
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>

            {/* WhatsApp */}
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
                rounded-md
                border
                border-[#D4AF37]/65
                bg-black/25
                px-5
                text-xs
                font-semibold
                uppercase
                tracking-[0.08em]
                text-[#D4AF37]
                transition
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#D4AF37]
                hover:text-black
                lg:inline-flex
              "
            >
              <MessageCircle size={17} aria-hidden="true" />
              WhatsApp Us
            </a>

            {/* Mobile Menu */}
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
                hover:bg-[#D4AF37]/10
                xl:hidden
              "
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={27} /> : <Menu size={27} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence initial={false}>
          {searchOpen && (
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
                hidden
                overflow-hidden
                border-t
                border-[#D4AF37]/15
                bg-[#050505]
                md:block
              "
            >
              <div className="mx-auto max-w-4xl px-6 py-4">
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-[#D4AF37]/35
                    bg-black
                    px-5
                  "
                >
                  <Search
                    size={19}
                    className="shrink-0 text-[#D4AF37]"
                    aria-hidden="true"
                  />

                  <input
                    type="search"
                    placeholder="Search necklaces, rings, bangles, gold biscuits..."
                    className="
                      min-h-12
                      w-full
                      bg-transparent
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-white/35
                    "
                    autoFocus
                  />

                  <button
                    type="button"
                    onClick={() => setSearchOpen(false)}
                    className="text-white/45 transition hover:text-[#D4AF37]"
                    aria-label="Close search"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
              duration: 0.28,
              ease: "easeOut",
            }}
            className="
              overflow-hidden
              border-b
              border-[#D4AF37]/25
              bg-black/98
              shadow-[0_20px_50px_rgba(0,0,0,0.55)]
              backdrop-blur-xl
              xl:hidden
            "
          >
            <nav
              className="mx-auto flex max-w-7xl flex-col px-5 py-5 sm:px-7"
              aria-label="Mobile navigation"
            >
              {/* Mobile Search */}
              <div
                className="
                  mb-4
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#D4AF37]/30
                  bg-[#080808]
                  px-4
                "
              >
                <Search
                  size={18}
                  className="text-[#D4AF37]"
                  aria-hidden="true"
                />

                <input
                  type="search"
                  placeholder="Search jewellery..."
                  className="
                    min-h-12
                    w-full
                    bg-transparent
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-white/35
                  "
                />
              </div>

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
                    uppercase
                    tracking-[0.08em]
                    text-white/75
                    transition
                    hover:pl-2
                    hover:text-[#D4AF37]
                  "
                >
                  {item.name}
                </Link>
              ))}

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Link
                  to="/account"
                  onClick={() => setOpen(false)}
                  className="
                    flex
                    min-h-12
                    items-center
                    justify-center
                    gap-3
                    rounded-md
                    border
                    border-[#D4AF37]/35
                    text-sm
                    font-semibold
                    text-white/80
                  "
                >
                  <UserRound size={18} aria-hidden="true" />
                  My Account
                </Link>

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
                    rounded-md
                    bg-[#D4AF37]
                    text-sm
                    font-semibold
                    text-black
                  "
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  WhatsApp Us
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;                            