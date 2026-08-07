import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

import { products } from "../data/products";

function ProductCatalog() {
  return (
    <section
      id="products"
      className="
        relative
        overflow-hidden
        bg-[#050505]
        px-5
        py-24
        sm:px-6
        lg:py-28
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center sm:mb-16"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.5em] text-[#D4AF37] sm:text-xs">
            Signature Pieces
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            Featured Jewellery
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
            Discover handcrafted 21K jewellery created with refined detailing,
            timeless design and generations of trusted craftsmanship.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: Math.min(index * 0.08, 0.24),
              }}
              className="
                group
                overflow-hidden
                rounded-[28px]
                border
                border-[#D4AF37]/15
                bg-[#0b0b0b]
                shadow-[0_18px_55px_rgba(0,0,0,0.24)]
                transition
                duration-300
                hover:-translate-y-1
                hover:border-[#D4AF37]/45
              "
            >
              <Link
                to={`/product/${product.id}`}
                className="block"
                aria-label={`View details for ${product.name}`}
              >
                {/* Product Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={1000}
                    className="
                      h-full
                      w-full
                      object-cover
                      object-center
                      transition-transform
                      duration-500
                      group-hover:scale-[1.04]
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                  {/* Purity Badge */}
                  <div
                    className="
                      absolute
                      left-4
                      top-4
                      rounded-full
                      border
                      border-white/10
                      bg-black/60
                      px-3
                      py-1.5
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.22em]
                      text-white/80
                      backdrop-blur-sm
                    "
                  >
                    {product.purity}
                  </div>

                  {/* Arrow */}
                  <div
                    className="
                      absolute
                      bottom-4
                      right-4
                      grid
                      h-11
                      w-11
                      place-items-center
                      rounded-full
                      border
                      border-[#D4AF37]/50
                      bg-black/55
                      text-[#D4AF37]
                      backdrop-blur-sm
                      transition
                      duration-300
                      group-hover:bg-[#D4AF37]
                      group-hover:text-black
                    "
                  >
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#D4AF37]">
                    {product.category}
                  </p>

                  <h3 className="mt-3 line-clamp-2 font-serif text-2xl leading-snug text-white">
                    {product.name}
                  </h3>

                  <div className="mt-4 flex items-end justify-between gap-4 border-t border-white/5 pt-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.16em] text-white/35">
                        Weight
                      </p>

                      <p className="mt-1 text-sm text-white/50">
                        {product.weight}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-white/35">
                        Availability
                      </p>

                      <p className="mt-1 text-base font-semibold text-[#D4AF37]">
                        Price on Inquiry
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* WhatsApp Action */}
              <div className="border-t border-white/5 px-6 py-5">
                <a
                  href={`https://wa.me/923352484936?text=${encodeURIComponent(
                    `Assalam-o-Alaikum, I am interested in ${product.name}. Please share its current price and availability.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="
                    inline-flex
                    min-h-12
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    border
                    border-[#D4AF37]/45
                    text-sm
                    font-semibold
                    text-[#D4AF37]
                    transition
                    duration-300
                    hover:bg-[#D4AF37]
                    hover:text-black
                  "
                >
                  <MessageCircle size={17} aria-hidden="true" />
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

export default ProductCatalog;