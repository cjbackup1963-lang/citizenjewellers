import {
  Globe,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const exploreLinks = [
  { label: "Collections", target: "collections" },
  { label: "Gold Rates", target: "rates" },
  { label: "Products", target: "products" },
  { label: "Services", target: "services" },
  { label: "Contact", target: "contact" },
];

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#D4AF37]/15 bg-[#030303] px-5 py-16 sm:px-6 lg:py-20">

      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr]">

          {/* Brand */}

          <div>

            <Link to="/">
              <img
                src="/images/logo.webp"
                alt="Citizen Jewellers"
                className="h-20 w-auto object-contain"
              />
            </Link>

            <p className="mt-4 text-[10px] uppercase tracking-[0.35em] text-[#D4AF37]">
              LAKHANI SONS • SINCE 1963
            </p>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
              A heritage jewellery house creating timeless 21K gold,
              diamond and gemstone jewellery with trusted craftsmanship
              and luxury finishing.
            </p>

            <div className="mt-8 flex gap-3">

              <a
                href="https://instagram.com/citizenjewellers"
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-[#D4AF37]/35 text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
              >
                <Globe size={18} />
              </a>

              <a
                href="https://wa.me/923352484936"
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-[#D4AF37]/35 text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
              >
                <MessageCircle size={18} />
              </a>

            </div>

          </div>

          {/* Explore */}

          <div>

            <h3 className="font-serif text-2xl text-white">
              Explore
            </h3>

            <ul className="mt-6 space-y-4">

              {exploreLinks.map((item) => (

                <li key={item.target}>

                  <Link
                    to={`/#${item.target}`}
                    className="text-sm text-white/50 transition hover:text-[#D4AF37]"
                  >
                    {item.label}
                  </Link>

                </li>

              ))}

              <li>

                <Link
                  to="/cart"
                  className="text-sm text-white/50 transition hover:text-[#D4AF37]"
                >
                  Shopping Cart
                </Link>

              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-serif text-2xl text-white">
              Visit Us
            </h3>

            <div className="mt-6 space-y-5 text-sm text-white/50">

              <a
                href="tel:+923352484936"
                className="flex items-center gap-3 transition hover:text-[#D4AF37]"
              >
                <Phone
                  size={18}
                  className="text-[#D4AF37]"
                />

                0335 2484936

              </a>

              <div className="flex items-start gap-3">

                <MapPin
                  size={18}
                  className="mt-1 text-[#D4AF37]"
                />

                <span>
                  Lakhani Tower
                  <br />
                  Zaibunissa Street
                  <br />
                  Saddar Karachi
                </span>

              </div>

              <p>
                Monday – Saturday
                <br />
                01:00 PM – 09:00 PM
              </p>

            </div>

            <a
              href="https://wa.me/923352484936"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-black transition hover:scale-105"
            >
              <MessageCircle size={18} />
              Book Consultation
            </a>

          </div>

        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-white/35">

          © {new Date().getFullYear()} Citizen Jewellers • All Rights Reserved.

          <br />

          Jewellery prices are subject to live gold rates and making charges.

        </div>

      </div>

    </footer>
  );
}

export default Footer;