import {
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

/* =========================================================
   CRITICAL / NAVIGATION COMPONENTS
   ========================================================= */

import Navbar from "./components/Navbar";
import GoldTicker from "./components/GoldTicker";

import Hero from "./components/Hero";
import FeatureStrip from "./components/FeatureStrip";
import Collections from "./components/Collections";

/* =========================================================
   HASH NAVIGATION SECTIONS
   =========================================================
   These remain directly rendered so navbar links:
   #rates
   #about
   #services
   #gallery
   #contact
   continue working reliably.
   ========================================================= */

import LiveRates from "./components/LiveRates";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

/* =========================================================
   LAZY HOME SECTIONS
   ========================================================= */

const FeaturedJewellery = lazy(
  () => import("./components/FeaturedJewellery")
);

const GoldServices = lazy(
  () => import("./components/GoldServices")
);

const GoldPriceAlerts = lazy(
  () => import("./components/GoldPriceAlerts")
);

const ProductCatalog = lazy(
  () => import("./components/ProductCatalog")
);

const Testimonials = lazy(
  () => import("./components/Testimonials")
);

const FAQ = lazy(
  () => import("./components/FAQ")
);

/* =========================================================
   LAZY PAGES
   ========================================================= */

const ProductDetails = lazy(
  () => import("./pages/ProductDetails")
);

const Cart = lazy(
  () => import("./pages/Cart")
);

const Checkout = lazy(
  () => import("./pages/Checkout")
);

const SellGold = lazy(
  () => import("./pages/SellGold")
);

const Appraisal = lazy(
  () => import("./pages/Appraisal")
);

const ZakatCalculator = lazy(
  () => import("./pages/ZakatCalculator")
);

/* =========================================================
   GOLD INSIGHTS
   ========================================================= */

const GoldInsights = lazy(
  () => import("./pages/GoldInsights")
);

const GoldRatePakistan = lazy(
  () => import("./pages/GoldRatePakistan")
);

/* =========================================================
   SECTION FALLBACK
   ========================================================= */

function SectionFallback() {
  return (
    <div
      className="min-h-[220px] bg-[#050505]"
      aria-hidden="true"
    />
  );
}

/* =========================================================
   VIEWPORT LAZY LOADER
   ========================================================= */

interface LazySectionProps {
  children: ReactNode;
  minHeight?: number;
}

function LazySection({
  children,
  minHeight = 250,
}: LazySectionProps) {
  const containerRef =
    useRef<HTMLDivElement | null>(null);

  const [shouldRender, setShouldRender] =
    useState(false);

  useEffect(() => {
    const element = containerRef.current;

    if (!element || shouldRender) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry?.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "500px 0px",
        threshold: 0.01,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [shouldRender]);

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: shouldRender
          ? undefined
          : `${minHeight}px`,
      }}
    >
      {shouldRender ? (
        <Suspense fallback={<SectionFallback />}>
          {children}
        </Suspense>
      ) : null}
    </div>
  );
}

/* =========================================================
   HOME PAGE
   ========================================================= */

function HomePage() {
  return (
    <>
      {/* FIRST VIEW */}

      <Hero />

      <FeatureStrip />

      <Collections />

      {/* LAZY CONTENT */}

      <LazySection minHeight={650}>
        <FeaturedJewellery />
      </LazySection>

      {/* GOLD RATES — NAVIGATION TARGET */}

      <LiveRates />

      <LazySection minHeight={500}>
        <GoldServices />
      </LazySection>

      <LazySection minHeight={650}>
        <GoldPriceAlerts />
      </LazySection>

      <LazySection minHeight={800}>
        <ProductCatalog />
      </LazySection>

      {/* NAVIGATION TARGETS */}

      <About />

      <Services />

      <Gallery />

      <LazySection minHeight={550}>
        <Testimonials />
      </LazySection>

      <LazySection minHeight={500}>
        <FAQ />
      </LazySection>

      <Contact />
    </>
  );
}

/* =========================================================
   ROUTE / HASH EFFECTS
   ========================================================= */

function RouteEffects() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id =
        location.hash.replace("#", "");

      let attempts = 0;

      const scrollToTarget = () => {
        const target =
          document.getElementById(id);

        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          return;
        }

        if (attempts < 15) {
          attempts += 1;

          window.setTimeout(
            scrollToTarget,
            100
          );
        }
      };

      window.setTimeout(
        scrollToTarget,
        50
      );

      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [
    location.pathname,
    location.hash,
  ]);

  return null;
}

/* =========================================================
   PAGE FALLBACK
   ========================================================= */

function PageFallback() {
  return (
    <div
      className="
        grid
        min-h-[70vh]
        place-items-center
        bg-black
      "
    >
      <div className="text-center">
        <div
          className="
            mx-auto
            h-8
            w-8
            animate-spin
            rounded-full
            border-2
            border-[#D4AF37]/20
            border-t-[#D4AF37]
          "
        />

        <p
          className="
            mt-5
            text-xs
            font-semibold
            uppercase
            tracking-[0.35em]
            text-[#D4AF37]
          "
        >
          Loading
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   APP
   ========================================================= */

function App() {
  return (
    <div className="min-h-screen bg-black">
      <RouteEffects />

      <Navbar />

      <GoldTicker />

      <main>
        <Routes>
          {/* HOME */}

          <Route
            path="/"
            element={<HomePage />}
          />

          {/* GOLD INSIGHTS HUB */}

          <Route
            path="/gold-insights"
            element={
              <Suspense fallback={<PageFallback />}>
                <GoldInsights />
              </Suspense>
            }
          />

          {/* GOLD RATE PAKISTAN ARTICLE */}

          <Route
            path="/gold-insights/gold-rate-pakistan"
            element={
              <Suspense fallback={<PageFallback />}>
                <GoldRatePakistan />
              </Suspense>
            }
          />

          {/* PRODUCT DETAILS */}

          <Route
            path="/product/:id"
            element={
              <Suspense fallback={<PageFallback />}>
                <ProductDetails />
              </Suspense>
            }
          />

          {/* CART */}

          <Route
            path="/cart"
            element={
              <Suspense fallback={<PageFallback />}>
                <Cart />
              </Suspense>
            }
          />

          {/* CHECKOUT */}

          <Route
            path="/checkout"
            element={
              <Suspense fallback={<PageFallback />}>
                <Checkout />
              </Suspense>
            }
          />

          {/* SELL GOLD */}

          <Route
            path="/sell-gold"
            element={
              <Suspense fallback={<PageFallback />}>
                <SellGold />
              </Suspense>
            }
          />

          {/* APPRAISAL */}

          <Route
            path="/appraisal"
            element={
              <Suspense fallback={<PageFallback />}>
                <Appraisal />
              </Suspense>
            }
          />

          {/* ZAKAT CALCULATOR */}

          <Route
            path="/zakat-calculator"
            element={
              <Suspense fallback={<PageFallback />}>
                <ZakatCalculator />
              </Suspense>
            }
          />

          {/* FALLBACK */}

          <Route
            path="*"
            element={<HomePage />}
          />
        </Routes>
      </main>

      <Footer />

      <FloatingWhatsApp />
    </div>
  );
}

export default App;