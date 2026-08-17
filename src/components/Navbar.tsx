import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  BookOpen,
  Calculator,
  Menu,
  MessageCircle,
  Search,
  ShoppingCart,
  UserRound,
  X,
} from "lucide-react";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useCart } from "../context/CartContext";

/* =========================================================
   TYPES
========================================================= */

interface MenuItem {
  name: string;
  id?: string;
  path?: string;
}

/* =========================================================
   MENU
========================================================= */

const menu: MenuItem[] = [
  {
    name: "Home",
    id: "home",
  },
  {
    name: "Collections",
    id: "collections",
  },
  {
    name: "Gold Rates",
    id: "rates",
  },
  {
    name: "Gold Insights",
    path: "/gold-insights",
  },
  {
    name: "Sell Gold",
    path: "/sell-gold",
  },
  {
    name: "Appraisal",
    path: "/appraisal",
  },
  {
    name: "Zakat Calculator",
    path: "/zakat-calculator",
  },
  {
    name: "About Us",
    id: "about",
  },
  {
    name: "Services",
    id: "services",
  },
  {
    name: "Gallery",
    id: "gallery",
  },
  {
    name: "Contact Us",
    id: "contact",
  },
];

/* =========================================================
   NAVBAR
========================================================= */

function Navbar() {
  const { totalItems } = useCart();

  const location = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  /* =======================================================
     NAVBAR SCROLL EFFECT
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =======================================================
     CLOSE MENUS ON ROUTE CHANGE
  ======================================================= */

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  /* =======================================================
     MOBILE BODY LOCK
  ======================================================= */

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* =======================================================
     SCROLL TO HOMEPAGE SECTION
  ======================================================= */

  const scrollToSection = (targetId: string) => {
    const section = document.getElementById(targetId);

    if (!section) {
      return false;
    }

    const navbarOffset =
      window.innerWidth < 640 ? 82 : 100;

    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });

    return true;
  };

  /* =======================================================
     MAIN NAVIGATION HANDLER
  ======================================================= */

  const handleNavigation = (item: MenuItem) => {
    setOpen(false);
    setSearchOpen(false);

    /*
    ---------------------------------------------------------
    Important for mobile
    ---------------------------------------------------------
    */

    document.body.style.overflow = "";

    /*
    ---------------------------------------------------------
    Separate route pages
    ---------------------------------------------------------
    */

    if (item.path) {
      navigate(item.path);
      return;
    }

    /*
    ---------------------------------------------------------
    Homepage sections
    ---------------------------------------------------------
    */

    if (!item.id) {
      return;
    }

    const targetId = item.id;

    /*
    ---------------------------------------------------------
    Already on homepage
    ---------------------------------------------------------
    */

    if (location.pathname === "/") {
      window.history.replaceState(
        null,
        "",
        `/#${targetId}`
      );

      /*
      Wait for mobile drawer exit animation.
      */

      window.setTimeout(() => {
        scrollToSection(targetId);
      }, 380);

      return;
    }

    /*
    ---------------------------------------------------------
    Coming from Gold Insights / Cart / Sell Gold / etc.
    ---------------------------------------------------------
    */

    navigate(`/#${targetId}`);

    let attempts = 0;

    const waitForSection = () => {
      if (scrollToSection(targetId)) {
        return;
      }

      attempts += 1;

      if (attempts < 20) {
        window.setTimeout(
          waitForSection,
          100
        );
      }
    };

    window.setTimeout(
      waitForSection,
      400
    );
  };

  /* =======================================================
     GET MENU PATH
  ======================================================= */

  const getMenuPath = (item: MenuItem) => {
    if (item.path) {
      return item.path;
    }

    return `/#${item.id}`;
  };

  /* =======================================================
     LOGO CLICK
  ======================================================= */

  const handleLogoClick = () => {
    setOpen(false);
    setSearchOpen(false);

    document.body.style.overflow = "";

    if (location.pathname === "/") {
      window.history.replaceState(
        null,
        "",
        "/"
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50">
      {/* ===================================================
          MAIN NAVBAR
      =================================================== */}

      <div
        className={`
          relative
          border-b
          transition-all
          duration-300
          ${
            scrolled
              ? "border-[#D4AF37]/30 bg-black/95 shadow-[0_14px_45px_rgba(0,0,0,0.55)] backdrop-blur-xl"
              : "border-[#D4AF37]/20 bg-black/90 backdrop-blur-lg"
          }
        `}
      >
        {/* GOLD LINE */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#D4AF37]/60
            to-transparent
            xl:hidden
          "
        />

        <div
          className="
            mx-auto
            flex
            min-h-[74px]
            max-w-[1520px]
            items-center
            justify-between
            gap-3
            px-4
            sm:min-h-[82px]
            sm:px-6
            lg:px-8
            xl:min-h-[92px]
          "
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <button
            type="button"
            aria-label="Citizen Jewellers home"
            onClick={handleLogoClick}
            className="relative z-10 shrink-0"
          >
            <img
              src="/images/logo.webp?v=1"
              alt="Citizen Jewellers by Lakhani Sons"
              width={330}
              height={110}
              loading="eager"
              decoding="async"
              className="
                h-[54px]
                w-auto
                max-w-[190px]
                object-contain
                transition-transform
                duration-500
                hover:scale-[1.025]
                sm:h-[62px]
                sm:max-w-[235px]
                md:max-w-[255px]
                xl:h-[78px]
                xl:max-w-[320px]
              "
            />
          </button>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav
            className="
              hidden
              flex-1
              items-center
              justify-center
              gap-2
              xl:flex
              2xl:gap-4
            "
            aria-label="Main navigation"
          >
            {menu.map((item) => (
              <Link
                key={item.name}
                to={getMenuPath(item)}
                onClick={(event) => {
                  if (item.id) {
                    event.preventDefault();
                  }

                  handleNavigation(item);
                }}
                className="
                  group
                  relative
                  whitespace-nowrap
                  py-8
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.05em]
                  text-white/80
                  transition
                  duration-300
                  hover:text-[#D4AF37]
                  2xl:text-[11px]
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

          {/* =================================================
              RIGHT ACTIONS
          ================================================= */}

          <div className="relative z-10 flex shrink-0 items-center gap-1.5 sm:gap-2">
            {/* SEARCH */}

            <button
              type="button"
              onClick={() =>
                setSearchOpen((value) => !value)
              }
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

            {/* ACCOUNT */}

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
              <UserRound
                size={21}
                aria-hidden="true"
              />
            </Link>

            {/* CART */}

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
                border-[#D4AF37]/20
                bg-[#D4AF37]/[0.035]
                text-[#D4AF37]
                transition
                duration-300
                hover:border-[#D4AF37]/50
                hover:bg-[#D4AF37]/10
                hover:text-[#f1cf64]
                sm:h-12
                sm:w-12
                xl:border-transparent
                xl:bg-transparent
              "
              aria-label={`Cart with ${totalItems} items`}
            >
              <ShoppingCart
                size={21}
                aria-hidden="true"
              />

              {totalItems > 0 && (
                <span
                  className="
                    absolute
                    -right-0.5
                    -top-0.5
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
                  {totalItems > 99
                    ? "99+"
                    : totalItems}
                </span>
              )}
            </Link>

            {/* WHATSAPP */}

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
                px-4
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.07em]
                text-[#D4AF37]
                transition
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#D4AF37]
                hover:text-black
                lg:inline-flex
              "
            >
              <MessageCircle
                size={17}
                aria-hidden="true"
              />

              WhatsApp Us
            </a>

            {/* MOBILE MENU */}

            <button
              type="button"
              onClick={() =>
                setOpen((value) => !value)
              }
              className="
                grid
                h-11
                w-11
                place-items-center
                rounded-full
                border
                border-[#D4AF37]/25
                bg-[#D4AF37]/[0.04]
                text-[#D4AF37]
                transition
                duration-300
                hover:border-[#D4AF37]/60
                hover:bg-[#D4AF37]/10
                sm:h-12
                sm:w-12
                xl:hidden
              "
              aria-label={
                open
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={open}
            >
              {open ? (
                <X size={25} />
              ) : (
                <Menu size={25} />
              )}
            </button>
          </div>
        </div>

        {/* =================================================
            DESKTOP SEARCH
        ================================================= */}

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
                    placeholder="Search jewellery and gold guides..."
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
                    onClick={() =>
                      setSearchOpen(false)
                    }
                    className="
                      text-white/45
                      transition
                      hover:text-[#D4AF37]
                    "
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

      {/* ===================================================
          MOBILE DRAWER
      =================================================== */}

      <AnimatePresence initial={false}>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation"
              onClick={() =>
                setOpen(false)
              }
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                fixed
                inset-0
                top-[74px]
                z-40
                bg-black/70
                backdrop-blur-sm
                sm:top-[82px]
                xl:hidden
              "
            />

            <motion.div
              initial={{
                opacity: 0,
                y: -16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -16,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="
                fixed
                inset-x-0
                top-[74px]
                z-50
                max-h-[calc(100svh-74px)]
                overflow-y-auto
                border-b
                border-[#D4AF37]/30
                bg-[#050505]/98
                shadow-[0_24px_70px_rgba(0,0,0,0.8)]
                backdrop-blur-2xl
                sm:top-[82px]
                sm:max-h-[calc(100svh-82px)]
                xl:hidden
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  top-8
                  h-48
                  w-48
                  rounded-full
                  bg-[#D4AF37]/10
                  blur-[90px]
                "
              />

              <nav
                className="
                  relative
                  mx-auto
                  flex
                  max-w-2xl
                  flex-col
                  px-5
                  pb-8
                  pt-5
                  sm:px-7
                  sm:pb-10
                "
                aria-label="Mobile navigation"
              >
                {/* SEARCH */}

                <div
                  className="
                    mb-5
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-[#D4AF37]/25
                    bg-white/[0.025]
                    px-4
                    shadow-inner
                  "
                >
                  <Search
                    size={18}
                    className="shrink-0 text-[#D4AF37]"
                    aria-hidden="true"
                  />

                  <input
                    type="search"
                    placeholder="Search jewellery and guides..."
                    className="
                      min-h-13
                      w-full
                      bg-transparent
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-white/30
                    "
                  />
                </div>

                <div className="mb-2 flex items-center justify-between">
                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.32em]
                      text-[#D4AF37]
                    "
                  >
                    Explore
                  </p>

                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      text-white/25
                    "
                  >
                    Since 1963
                  </p>
                </div>

                {/* MOBILE MENU ITEMS */}

                <div className="divide-y divide-white/5">
                  {menu.map(
                    (
                      item,
                      index
                    ) => (
                      <motion.div
                        key={item.name}
                        initial={{
                          opacity: 0,
                          x: -14,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay:
                            0.04 +
                            index *
                              0.035,
                        }}
                      >
                        <Link
                          to={getMenuPath(item)}
                          onClick={(event) => {
                            if (item.id) {
                              event.preventDefault();
                            }

                            handleNavigation(item);
                          }}
                          className="
                            group
                            flex
                            min-h-14
                            items-center
                            justify-between
                            gap-4
                            py-3
                            text-[15px]
                            font-medium
                            uppercase
                            tracking-[0.08em]
                            text-white/80
                            transition
                            duration-300
                            hover:pl-1
                            hover:text-[#D4AF37]
                          "
                        >
                          <span className="flex items-center gap-2">
                            {item.name ===
                              "Gold Insights" && (
                              <BookOpen
                                size={16}
                                className="text-[#D4AF37]"
                              />
                            )}

                            {item.name}
                          </span>

                          <span
                            className="
                              h-1.5
                              w-1.5
                              rounded-full
                              bg-[#D4AF37]/30
                              transition
                              group-hover:scale-125
                              group-hover:bg-[#D4AF37]
                            "
                          />
                        </Link>
                      </motion.div>
                    )
                  )}
                </div>

                {/* =================================================
                    QUICK ACTIONS
                ================================================= */}

                <Link
                  to="/sell-gold"
                  onClick={() =>
                    setOpen(false)
                  }
                  className="
                    mt-5
                    flex
                    min-h-14
                    items-center
                    justify-between
                    gap-4
                    rounded-xl
                    border
                    border-[#D4AF37]/35
                    bg-[#D4AF37]/[0.05]
                    px-5
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.08em]
                    text-[#D4AF37]
                    transition
                    hover:border-[#D4AF37]/70
                    hover:bg-[#D4AF37]
                    hover:text-black
                  "
                >
                  Sell Your Gold
                  <span>→</span>
                </Link>

                <Link
                  to="/appraisal"
                  onClick={() =>
                    setOpen(false)
                  }
                  className="
                    mt-3
                    flex
                    min-h-14
                    items-center
                    justify-between
                    gap-4
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    px-5
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.08em]
                    text-white/75
                    transition
                    hover:border-[#D4AF37]/50
                    hover:text-[#D4AF37]
                  "
                >
                  Jewellery Appraisal
                  <span>→</span>
                </Link>

                <Link
                  to="/zakat-calculator"
                  onClick={() =>
                    setOpen(false)
                  }
                  className="
                    mt-3
                    flex
                    min-h-14
                    items-center
                    justify-between
                    gap-4
                    rounded-xl
                    border
                    border-[#D4AF37]/20
                    bg-black/35
                    px-5
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.08em]
                    text-[#D4AF37]
                    transition
                    hover:border-[#D4AF37]/60
                    hover:bg-[#D4AF37]/10
                  "
                >
                  <span className="flex items-center gap-2">
                    <Calculator size={17} />

                    Zakat Calculator
                  </span>

                  <span>→</span>
                </Link>

                {/* GOLD INSIGHTS */}

                <Link
                  to="/gold-insights"
                  onClick={() =>
                    setOpen(false)
                  }
                  className="
                    mt-3
                    flex
                    min-h-14
                    items-center
                    justify-between
                    gap-4
                    rounded-xl
                    border
                    border-[#D4AF37]/35
                    bg-[#D4AF37]/[0.04]
                    px-5
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.08em]
                    text-[#D4AF37]
                    transition
                    hover:border-[#D4AF37]/70
                    hover:bg-[#D4AF37]/10
                  "
                >
                  <span className="flex items-center gap-2">
                    <BookOpen size={17} />

                    Gold Insights
                  </span>

                  <span>→</span>
                </Link>

                {/* ACCOUNT + CART */}

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Link
                    to="/account"
                    onClick={() =>
                      setOpen(false)
                    }
                    className="
                      flex
                      min-h-13
                      items-center
                      justify-center
                      gap-2.5
                      rounded-xl
                      border
                      border-[#D4AF37]/25
                      bg-white/[0.02]
                      px-4
                      text-sm
                      font-semibold
                      text-white/75
                      transition
                      hover:border-[#D4AF37]/50
                      hover:text-[#D4AF37]
                    "
                  >
                    <UserRound
                      size={17}
                      aria-hidden="true"
                    />

                    Account
                  </Link>

                  <Link
                    to="/cart"
                    onClick={() =>
                      setOpen(false)
                    }
                    className="
                      relative
                      flex
                      min-h-13
                      items-center
                      justify-center
                      gap-2.5
                      rounded-xl
                      border
                      border-[#D4AF37]/25
                      bg-white/[0.02]
                      px-4
                      text-sm
                      font-semibold
                      text-white/75
                      transition
                      hover:border-[#D4AF37]/50
                      hover:text-[#D4AF37]
                    "
                  >
                    <ShoppingCart
                      size={17}
                      aria-hidden="true"
                    />

                    Cart

                    {totalItems > 0 && (
                      <span
                        className="
                          absolute
                          right-3
                          top-2
                          grid
                          min-h-5
                          min-w-5
                          place-items-center
                          rounded-full
                          bg-[#D4AF37]
                          px-1
                          text-[9px]
                          font-bold
                          text-black
                        "
                      >
                        {totalItems > 99
                          ? "99+"
                          : totalItems}
                      </span>
                    )}
                  </Link>
                </div>

                {/* WHATSAPP */}

                <a
                  href="https://wa.me/923352484936"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    mt-3
                    flex
                    min-h-14
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-[#D4AF37]
                    px-5
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.08em]
                    text-black
                    shadow-[0_16px_45px_rgba(212,175,55,0.18)]
                    transition
                    duration-300
                    active:scale-[0.99]
                  "
                >
                  <MessageCircle
                    size={19}
                    aria-hidden="true"
                  />

                  WhatsApp Consultation
                </a>

                {/* BRAND */}

                <div className="mt-6 border-t border-white/5 pt-5 text-center">
                  <p className="font-serif text-lg text-white/75">
                    Citizen Jewellers
                  </p>

                  <p
                    className="
                      mt-1
                      text-[9px]
                      uppercase
                      tracking-[0.26em]
                      text-[#D4AF37]/70
                    "
                  >
                    By Lakhani Sons · Since 1963
                  </p>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;