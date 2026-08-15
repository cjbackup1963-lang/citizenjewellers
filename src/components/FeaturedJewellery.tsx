import { motion } from "framer-motion";
import {
  ArrowRight,
  Eye,
  Heart,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import { products } from "../data/products";

function FeaturedJewellery() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section
      id="featured"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#070707]
        px-5
        py-24
        sm:px-8
        lg:px-10
        lg:py-32
      "
    >
      {/* Decorative glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-8rem]
          top-1/3
          -z-10
          h-96
          w-96
          rounded-full
          bg-[#D4AF37]/10
          blur-[150px]
        "
      />

      <div className="mx-auto max-w-[1520px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="
            mb-14
            flex
            flex-col
            gap-7
            lg:mb-16
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
              Signature Jewellery
            </p>

            <h2
              className="
                mt-5
                font-serif
                text-4xl
                leading-tight
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Featured Jewellery
            </h2>

            <p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-8
                text-white/50
                sm:text-lg
              "
            >
              Selected jewellery designs created with elegance, precision
              and generations of trusted craftsmanship.
            </p>
          </div>

          <a
            href="#products"
            className="
              group
              inline-flex
              min-h-13
              w-fit
              items-center
              justify-center
              gap-3
              rounded-md
              border
              border-[#D4AF37]/45
              px-7
              text-sm
              font-semibold
              text-[#D4AF37]
              transition
              duration-300
              hover:bg-[#D4AF37]
              hover:text-black
            "
          >
            View All Jewellery

            <ArrowRight
              size={18}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        {/* Products */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
              className="
                group
                overflow-hidden
                rounded-[1.5rem]
                border
                border-[#D4AF37]/16
                bg-[#0a0a0a]
                shadow-[0_24px_65px_rgba(0,0,0,0.38)]
                transition
                duration-500
                hover:border-[#D4AF37]/48
              "
            >
              {/* Product image */}
              <div
                className="
                  relative
                  flex
                  aspect-[4/5]
                  items-center
                  justify-center
                  overflow-hidden
                  bg-black
                "
              >
                <Link
                  to={`/product/${product.id}`}
                  aria-label={`View ${product.name}`}
                  className="absolute inset-0 z-10"
                />

                <img
                  src={product.images[0]}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-[1000ms]
                    group-hover:scale-[1.04]
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/65
                    via-transparent
                    to-black/10
                  "
                />

                {/* Purity badge */}
                <span
                  className="
                    absolute
                    left-4
                    top-4
                    z-20
                    rounded-full
                    border
                    border-[#D4AF37]/45
                    bg-black/75
                    px-3
                    py-1.5
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#D4AF37]
                    backdrop-blur-md
                  "
                >
                  {product.purity}
                </span>

                {/* Wishlist */}
                <button
                  type="button"
                  aria-label={`Save ${product.name}`}
                  className="
                    absolute
                    right-4
                    top-4
                    z-20
                    grid
                    h-10
                    w-10
                    place-items-center
                    rounded-full
                    border
                    border-white/15
                    bg-black/65
                    text-white
                    backdrop-blur-md
                    transition
                    hover:border-[#D4AF37]
                    hover:bg-[#D4AF37]
                    hover:text-black
                  "
                >
                  <Heart size={17} aria-hidden="true" />
                </button>

                {/* Quick view */}
                <Link
                  to={`/product/${product.id}`}
                  aria-label={`View details for ${product.name}`}
                  className="
                    absolute
                    bottom-4
                    right-4
                    z-20
                    grid
                    h-10
                    w-10
                    place-items-center
                    rounded-full
                    border
                    border-[#D4AF37]/45
                    bg-black/70
                    text-[#D4AF37]
                    backdrop-blur-md
                    transition
                    hover:bg-[#D4AF37]
                    hover:text-black
                  "
                >
                  <Eye size={17} aria-hidden="true" />
                </Link>
              </div>

              {/* Product information */}
              <div className="p-6">
                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.26em]
                    text-[#D4AF37]
                  "
                >
                  {product.category}
                </p>

                <Link to={`/product/${product.id}`}>
                  <h3
                    className="
                      mt-3
                      line-clamp-2
                      min-h-[3.6rem]
                      font-serif
                      text-2xl
                      leading-snug
                      text-white
                      transition
                      hover:text-[#D4AF37]
                    "
                  >
                    {product.name}
                  </h3>
                </Link>

                <div
                  className="
                    mt-5
                    flex
                    items-end
                    justify-between
                    gap-4
                    border-t
                    border-white/7
                    pt-5
                  "
                >
                  <div>
                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.16em]
                        text-white/35
                      "
                    >
                      Weight
                    </p>

                    <p className="mt-1 text-sm text-white/60">
                      {product.weight}
                    </p>
                  </div>

                  <div className="text-right">
                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.16em]
                        text-white/35
                      "
                    >
                      Availability
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-semibold
                        text-[#D4AF37]
                      "
                    >
                      Price on Inquiry
                    </p>
                  </div>
                </div>

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    gap-2
                    text-xs
                    text-white/40
                  "
                >
                  <ShieldCheck
                    size={15}
                    className="text-[#D4AF37]"
                    aria-hidden="true"
                  />

                  Premium craftsmanship
                </div>
              </div>

              {/* Actions */}
              <div
                className="
                  grid
                  gap-3
                  border-t
                  border-white/5
                  px-6
                  py-5
                "
              >
                <Link
                  to={`/product/${product.id}`}
                  className="
                    inline-flex
                    min-h-12
                    items-center
                    justify-center
                    gap-2
                    rounded-md
                    bg-[#D4AF37]
                    px-4
                    text-sm
                    font-semibold
                    text-black
                    transition
                    hover:-translate-y-0.5
                    hover:bg-[#e5c65c]
                  "
                >
                  View Details
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>

                <a
                  href={`https://wa.me/923352484936?text=${encodeURIComponent(
                    `Assalam-o-Alaikum, I am interested in ${product.name}. Please share its current price and availability.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    min-h-12
                    items-center
                    justify-center
                    gap-2
                    rounded-md
                    border
                    border-[#D4AF37]/45
                    px-4
                    text-sm
                    font-semibold
                    text-[#D4AF37]
                    transition
                    hover:-translate-y-0.5
                    hover:bg-[#D4AF37]
                    hover:text-black
                  "
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  WhatsApp Inquiry
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedJewellery;