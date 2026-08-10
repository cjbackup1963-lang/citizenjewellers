import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import GoldTicker from "./components/GoldTicker";

import Hero from "./components/Hero";
import FeatureStrip from "./components/FeatureStrip";
import Collections from "./components/Collections";
import FeaturedJewellery from "./components/FeaturedJewellery";
import LiveRates from "./components/LiveRates";
import GoldServices from "./components/GoldServices";
import ProductCatalog from "./components/ProductCatalog";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

/* ================= LAZY PAGES ================= */

const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const SellGold = lazy(() => import("./pages/SellGold"));
const Appraisal = lazy(() => import("./pages/Appraisal"));
const ZakatCalculator = lazy(() => import("./pages/ZakatCalculator"));

/* ================= HOME PAGE ================= */

function HomePage() {
  return (
    <>
      <Hero />

      <FeatureStrip />

      <Collections />

      <FeaturedJewellery />

      <LiveRates />

      <GoldServices />

      <ProductCatalog />

      <About />

      <Services />

      <Gallery />

      <Testimonials />

      <FAQ />

      <Contact />
    </>
  );
}

/* ================= ROUTE EFFECTS ================= */

function RouteEffects() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      window.setTimeout(() => {
        document.querySelector(location.hash)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 0);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [location]);

  return null;
}

/* ================= PAGE FALLBACK ================= */

function PageFallback() {
  return (
    <div className="grid min-h-[70vh] place-items-center bg-black">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
          Loading
        </p>
      </div>
    </div>
  );
}

/* ================= APP ================= */

function App() {
  return (
    <div className="min-h-screen bg-black">
      <RouteEffects />

      <Navbar />

      <GoldTicker />

      <main>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            {/* HOME */}
            <Route
              path="/"
              element={<HomePage />}
            />

            {/* PRODUCT DETAILS */}
            <Route
              path="/product/:id"
              element={<ProductDetails />}
            />

            {/* CART */}
            <Route
              path="/cart"
              element={<Cart />}
            />

            {/* CHECKOUT */}
            <Route
              path="/checkout"
              element={<Checkout />}
            />

            {/* SELL GOLD */}
            <Route
              path="/sell-gold"
              element={<SellGold />}
            />

            {/* JEWELLERY APPRAISAL */}
            <Route
              path="/appraisal"
              element={<Appraisal />}
            />

            {/* ZAKAT CALCULATOR */}
            <Route
              path="/zakat-calculator"
              element={<ZakatCalculator />}
            />

            {/* FALLBACK */}
            <Route
              path="*"
              element={<HomePage />}
            />
          </Routes>
        </Suspense>
      </main>

      <Footer />

      <FloatingWhatsApp />
    </div>
  );
}

export default App;