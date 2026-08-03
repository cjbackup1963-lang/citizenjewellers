import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import GoldTicker from "./components/GoldTicker";

import Hero from "./components/Hero";
import Collections from "./components/Collections";
import FeaturedJewellery from "./components/FeaturedJewellery";
import LiveRates from "./components/LiveRates";
import ProductCatalog from "./components/ProductCatalog";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));

function HomePage() {
  return (
    <>
      <Hero />

      <Collections />

      <FeaturedJewellery />

      <LiveRates />

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

function RouteEffects() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      window.setTimeout(() => {
        document
          .querySelector(location.hash)
          ?.scrollIntoView({
            behavior: "smooth",
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

function PageFallback() {
  return (
    <div className="grid min-h-[60vh] place-items-center bg-black">
      <div className="text-center">

        <div className="mx-auto mb-5 h-12 w-12 animate-spin rounded-full border-2 border-[#D4AF37] border-t-transparent" />

        <p className="tracking-[0.35em] text-[#D4AF37]">
          LOADING
        </p>

      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black">

      <RouteEffects />

      {/* Navigation */}
      <Navbar />

      {/* Live Gold Market Ticker */}
      <GoldTicker />

      {/* Website Pages */}
      <main>

        <Suspense fallback={<PageFallback />}>

          <Routes>

            <Route
              path="/"
              element={<HomePage />}
            />

            <Route
              path="/product/:id"
              element={<ProductDetails />}
            />

            <Route
              path="/cart"
              element={<Cart />}
            />

            <Route
              path="/checkout"
              element={<Checkout />}
            />

            <Route
              path="*"
              element={<HomePage />}
            />

          </Routes>

        </Suspense>

      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />

    </div>
  );
}

export default App;