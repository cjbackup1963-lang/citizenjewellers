import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  Heart,
  MessageCircle,
  ShieldCheck,
  ShoppingCart,
  Star,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { products } from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((item) => item.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setSelectedImage(0);
    setAdded(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  if (!product) {
    return (
      <section className="grid min-h-[70vh] place-items-center bg-black px-6 text-center text-white">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF37]">
            Citizen Jewellers
          </p>

          <h1 className="mt-5 font-serif text-4xl sm:text-5xl">
            Product not found
          </h1>

          <Link
            to="/#products"
            className="
              mt-8
              inline-flex
              min-h-12
              items-center
              justify-center
              rounded-full
              bg-[#D4AF37]
              px-7
              font-semibold
              text-black
              transition
              hover:bg-[#e2c15b]
            "
          >
            Return to collection
          </Link>
        </div>
      </section>
    );
  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.id !== product.id &&
        item.category === product.category
    )
    .concat(
      products.filter(
        (item) =>
          item.id !== product.id &&
          item.category !== product.category
      )
    )
    .slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Assalamualaikum, I am interested in ${product.name}.

Category: ${product.category}
Purity: ${product.purity}
Weight: ${product.weight}
Price: PKR ${product.price.toLocaleString()}

Please share availability and final consultation details.`
  );

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      category: product.category,
      purity: product.purity,
      images: product.images,
      quantity: 1,
      price: product.price,
    });

    setAdded(true);

    window.setTimeout(() => {
      setAdded(false);
    }, 1800);
  };

  const specifications = [
    {
      label: "Purity",
      value: product.purity,
    },
    {
      label: "Weight",
      value: product.weight,
    },
    {
      label: "Making",
      value: product.details.making,
    },
    {
      label: "Certification",
      value: product.details.certification,
    },
    ...(product.details.gemstone
      ? [
          {
            label: "Gemstone",
            value: product.details.gemstone,
          },
        ]
      : []),
  ];

  return (
    <section className="min-h-screen bg-[#050505] px-5 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/#products"
          className="
            mb-9
            inline-flex
            items-center
            gap-2
            text-sm
            font-medium
            text-[#D4AF37]
            transition
            hover:text-white
          "
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Back to collection
        </Link>

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Gallery */}
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
            }}
          >
            <div
              className="
                group
                overflow-hidden
                rounded-[30px]
                border
                border-[#D4AF37]/18
                bg-[#0b0b0b]
                shadow-[0_24px_70px_rgba(0,0,0,0.28)]
              "
            >
              <img
                src={product.images[selectedImage]}
                alt={`${product.name} view ${selectedImage + 1}`}
                decoding="async"
                fetchPriority="high"
                className="
                  aspect-square
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-[1.025]
                "
              />
            </div>

            {product.images.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    className={`
                      shrink-0
                      overflow-hidden
                      rounded-2xl
                      border
                      transition
                      ${
                        selectedImage === index
                          ? "border-[#D4AF37]"
                          : "border-white/10 hover:border-[#D4AF37]/50"
                      }
                    `}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-20 w-20 object-cover sm:h-24 sm:w-24"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Information */}
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
              delay: 0.08,
            }}
            className="self-center"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.36em] text-[#D4AF37]">
              {product.category}
            </p>

            <h1 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              {product.name}
            </h1>

            <div className="mt-5 flex items-center gap-1 text-[#D4AF37]">
              {Array.from({
                length: Math.max(1, Math.min(product.rating, 5)),
              }).map((_, index) => (
                <Star
                  key={index}
                  size={17}
                  fill="currentColor"
                  aria-hidden="true"
                />
              ))}
            </div>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/58 sm:text-lg">
              {product.description}
            </p>

            <p className="mt-8 font-serif text-3xl text-[#D4AF37] sm:text-4xl">
              PKR {product.price.toLocaleString()}
            </p>

            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {specifications.map((item) => (
                <div
                  key={item.label}
                  className="
                    rounded-2xl
                    border
                    border-white/8
                    bg-white/[0.025]
                    p-4
                  "
                >
                  <dt className="text-[10px] uppercase tracking-[0.22em] text-white/35">
                    {item.label}
                  </dt>

                  <dd className="mt-2 text-sm text-white/85">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={handleAddToCart}
                className="
                  inline-flex
                  min-h-14
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#D4AF37]
                  px-7
                  font-semibold
                  text-black
                  shadow-[0_14px_35px_rgba(212,175,55,0.18)]
                  transition
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#e2c15b]
                "
              >
                {added ? (
                  <>
                    <Check size={19} aria-hidden="true" />
                    Added to cart
                  </>
                ) : (
                  <>
                    <ShoppingCart size={19} aria-hidden="true" />
                    Add to cart
                  </>
                )}
              </button>

              <a
                href={`https://wa.me/923352484936?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  min-h-14
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-[#D4AF37]/50
                  px-7
                  font-semibold
                  text-[#D4AF37]
                  transition
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#D4AF37]
                  hover:text-black
                "
              >
                <MessageCircle size={19} aria-hidden="true" />
                WhatsApp inquiry
              </a>
            </div>

            <button
              type="button"
              aria-label="Add to wishlist"
              className="
                mt-4
                inline-flex
                min-h-12
                items-center
                gap-3
                rounded-full
                border
                border-white/10
                px-5
                text-sm
                text-white/60
                transition
                hover:border-[#D4AF37]/45
                hover:text-[#D4AF37]
              "
            >
              <Heart size={18} aria-hidden="true" />
              Save to wishlist
            </button>

            <div
              className="
                mt-8
                flex
                items-start
                gap-3
                rounded-2xl
                border
                border-[#D4AF37]/15
                bg-[#D4AF37]/[0.035]
                p-4
                text-sm
                leading-6
                text-white/55
              "
            >
              <ShieldCheck
                size={20}
                className="mt-0.5 shrink-0 text-[#D4AF37]"
                aria-hidden="true"
              />

              Hallmarked 21K gold with transparent consultation, product
              verification and professional after-sales guidance.
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 border-t border-white/6 pt-16 lg:mt-24">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#D4AF37]">
              More to explore
            </p>

            <h2 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
              You may also like
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  className="
                    group
                    overflow-hidden
                    rounded-[26px]
                    border
                    border-[#D4AF37]/14
                    bg-[#0b0b0b]
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#D4AF37]/40
                  "
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-[1.04]
                      "
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-[#D4AF37]">
                      {item.category}
                    </p>

                    <h3 className="mt-3 font-serif text-2xl text-white">
                      {item.name}
                    </h3>

                    <p className="mt-3 text-sm text-white/45">
                      {item.purity} · {item.weight}
                    </p>

                    <p className="mt-4 font-semibold text-[#D4AF37]">
                      PKR {item.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductDetails;