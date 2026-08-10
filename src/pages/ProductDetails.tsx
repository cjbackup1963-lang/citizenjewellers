import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageCircle,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Star,
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { products } from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((item) => item.id === id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  useEffect(() => {
    setSelectedImage(0);
    setQuantity(1);
    setAdded(false);
    setWishlisted(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  const relatedProducts = useMemo(() => {
    if (!product) {
      return [];
    }

    return products
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
      .slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <section className="grid min-h-[75vh] place-items-center bg-black px-6 text-center text-white">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[#D4AF37]">
            Citizen Jewellers
          </p>

          <h1 className="mt-5 font-serif text-4xl sm:text-5xl">
            Product not found
          </h1>

          <p className="mx-auto mt-4 max-w-lg leading-7 text-white/50">
            This jewellery item may have been removed or is currently
            unavailable.
          </p>

          <Link
            to="/#catalog"
            className="
              mt-8
              inline-flex
              min-h-13
              items-center
              justify-center
              gap-3
              rounded-md
              bg-[#D4AF37]
              px-7
              font-semibold
              text-black
              transition
              hover:-translate-y-1
              hover:bg-[#e5c65c]
            "
          >
            <ArrowLeft size={18} />
            Return to Jewellery
          </Link>
        </div>
      </section>
    );
  }

  const specifications = [
    {
      label: "Gold Purity",
      value: product.purity,
    },
    {
      label: "Approx. Weight",
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

  const whatsappMessage = encodeURIComponent(
    `Assalam-o-Alaikum, I am interested in ${product.name}.

Category: ${product.category}
Purity: ${product.purity}
Weight: ${product.weight}
Quantity: ${quantity}

Please share the current price and availability.`
  );

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      category: product.category,
      purity: product.purity,
      images: product.images,
      quantity,
      price: product.price,
    });

    setAdded(true);

    window.setTimeout(() => {
      setAdded(false);
    }, 1800);
  };

  const handleBuyNow = () => {
    addToCart({
      id: product.id,
      name: product.name,
      category: product.category,
      purity: product.purity,
      images: product.images,
      quantity,
      price: product.price,
    });

    navigate("/checkout");
  };

  const showPreviousImage = () => {
    setSelectedImage((current) =>
      current === 0
        ? product.images.length - 1
        : current - 1
    );
  };

  const showNextImage = () => {
    setSelectedImage((current) =>
      current === product.images.length - 1
        ? 0
        : current + 1
    );
  };

  return (
    <section
      className="
        relative
        isolate
        min-h-screen
        overflow-hidden
        bg-[#050505]
        px-5
        py-12
        sm:px-8
        lg:px-10
        lg:py-20
      "
    >
      {/* Decorative glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-10rem]
          top-1/4
          -z-10
          h-96
          w-96
          rounded-full
          bg-[#D4AF37]/10
          blur-[150px]
        "
      />

      <div className="mx-auto max-w-[1520px]">
        {/* Back link */}
        <Link
          to="/#catalog"
          className="
            mb-9
            inline-flex
            items-center
            gap-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.12em]
            text-[#D4AF37]
            transition
            hover:-translate-x-1
            hover:text-white
          "
        >
          <ArrowLeft size={17} aria-hidden="true" />
          Back to Jewellery
        </Link>

        <div
          className="
            grid
            gap-12
            lg:grid-cols-[1.08fr_0.92fr]
            lg:gap-16
            xl:gap-20
          "
        >
          {/* Product gallery */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            <div
              className="
                group
                relative
                flex
                aspect-square
                items-center
                justify-center
                overflow-hidden
                rounded-[2rem]
                border
                border-[#D4AF37]/20
                bg-black
                shadow-[0_30px_90px_rgba(0,0,0,0.5)]
              "
            >
              <img
                src={product.images[selectedImage]}
                alt={`${product.name} view ${selectedImage + 1}`}
                decoding="async"
                fetchPriority="high"
                className="
                  h-full
                  w-full
                  object-contain
                  p-3
                  transition-transform
                  duration-[1000ms]
                  group-hover:scale-[1.025]
                  sm:p-5
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/30
                  via-transparent
                  to-black/10
                "
              />

              <span
                className="
                  absolute
                  left-5
                  top-5
                  rounded-full
                  border
                  border-[#D4AF37]/40
                  bg-black/75
                  px-4
                  py-2
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#D4AF37]
                  backdrop-blur-md
                "
              >
                {product.purity}
              </span>

              {product.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    aria-label="Previous product image"
                    className="
                      absolute
                      left-4
                      top-1/2
                      grid
                      h-11
                      w-11
                      -translate-y-1/2
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
                    <ChevronLeft size={20} />
                  </button>

                  <button
                    type="button"
                    onClick={showNextImage}
                    aria-label="Next product image"
                    className="
                      absolute
                      right-4
                      top-1/2
                      grid
                      h-11
                      w-11
                      -translate-y-1/2
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
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    aria-label={`View product image ${index + 1}`}
                    className={`
                      shrink-0
                      overflow-hidden
                      rounded-xl
                      border
                      bg-black
                      transition
                      duration-300
                      ${
                        selectedImage === index
                          ? "border-[#D4AF37] ring-1 ring-[#D4AF37]/40"
                          : "border-white/10 hover:border-[#D4AF37]/50"
                      }
                    `}
                  >
                    <img
                      src={image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="
                        h-20
                        w-20
                        object-contain
                        p-1
                        sm:h-24
                        sm:w-24
                      "
                    />
                  </button>
                ))}
              </div>
            )}

            <div
              className="
                mt-5
                grid
                gap-3
                rounded-2xl
                border
                border-[#D4AF37]/15
                bg-white/[0.025]
                p-5
                sm:grid-cols-3
              "
            >
              <div className="flex items-center gap-3">
                <ShieldCheck
                  size={19}
                  className="text-[#D4AF37]"
                />

                <span className="text-xs text-white/55">
                  Purity Assurance
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Sparkles
                  size={19}
                  className="text-[#D4AF37]"
                />

                <span className="text-xs text-white/55">
                  Premium Finishing
                </span>
              </div>

              <div className="flex items-center gap-3">
                <ShoppingBag
                  size={19}
                  className="text-[#D4AF37]"
                />

                <span className="text-xs text-white/55">
                  Luxury Packaging
                </span>
              </div>
            </div>
          </motion.div>

          {/* Product information */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: "easeOut",
            }}
            className="self-center"
          >
            <p
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.36em]
                text-[#D4AF37]
              "
            >
              {product.category}
            </p>

            <h1
              className="
                mt-5
                max-w-2xl
                font-serif
                text-4xl
                leading-tight
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              {product.name}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1 text-[#D4AF37]">
                {Array.from({
                  length: Math.max(
                    1,
                    Math.min(product.rating, 5)
                  ),
                }).map((_, index) => (
                  <Star
                    key={index}
                    size={17}
                    fill="currentColor"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <span className="text-xs uppercase tracking-[0.16em] text-white/35">
                Premium Collection
              </span>
            </div>

            <p
              className="
                mt-7
                max-w-xl
                text-base
                leading-8
                text-white/55
                sm:text-lg
              "
            >
              {product.description}
            </p>

            {/* Price on Inquiry */}
            <div
              className="
                mt-8
                border-y
                border-white/8
                py-7
              "
            >
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.24em]
                  text-white/35
                "
              >
                Price
              </p>

              <p
                className="
                  mt-2
                  font-serif
                  text-3xl
                  text-[#D4AF37]
                  sm:text-4xl
                "
              >
                Price on Inquiry
              </p>

              <p className="mt-2 text-xs leading-5 text-white/35">
                Contact us for the latest price based on the current gold rate,
                exact weight, gemstone value and making charges.
              </p>
            </div>

            {/* Specifications */}
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {specifications.map((item) => (
                <div
                  key={item.label}
                  className="
                    rounded-xl
                    border
                    border-white/8
                    bg-white/[0.025]
                    p-4
                  "
                >
                  <dt
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.22em]
                      text-white/35
                    "
                  >
                    {item.label}
                  </dt>

                  <dd className="mt-2 text-sm text-white/85">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Quantity */}
            <div
              className="
                mt-8
                flex
                flex-col
                gap-4
                rounded-xl
                border
                border-white/8
                bg-black/35
                p-4
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div>
                <p className="text-sm font-semibold text-white">
                  Select Quantity
                </p>

                <p className="mt-1 text-xs text-white/35">
                  Minimum 1 piece per order
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) =>
                      Math.max(1, current - 1)
                    )
                  }
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                  className="
                    grid
                    h-11
                    w-11
                    place-items-center
                    rounded-md
                    border
                    border-[#D4AF37]/35
                    text-[#D4AF37]
                    transition
                    hover:bg-[#D4AF37]
                    hover:text-black
                    disabled:cursor-not-allowed
                    disabled:opacity-30
                    disabled:hover:bg-transparent
                    disabled:hover:text-[#D4AF37]
                  "
                >
                  <Minus size={17} />
                </button>

                <span
                  className="
                    min-w-10
                    text-center
                    text-lg
                    font-semibold
                    text-white
                  "
                >
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => current + 1)
                  }
                  aria-label="Increase quantity"
                  className="
                    grid
                    h-11
                    w-11
                    place-items-center
                    rounded-md
                    border
                    border-[#D4AF37]/35
                    text-[#D4AF37]
                    transition
                    hover:bg-[#D4AF37]
                    hover:text-black
                  "
                >
                  <Plus size={17} />
                </button>
              </div>
            </div>

            {/* Main actions */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={handleAddToCart}
                className="
                  inline-flex
                  min-h-14
                  items-center
                  justify-center
                  gap-3
                  rounded-md
                  bg-[#D4AF37]
                  px-7
                  font-semibold
                  text-black
                  shadow-[0_16px_40px_rgba(212,175,55,0.18)]
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#e5c65c]
                "
              >
                {added ? (
                  <>
                    <Check size={19} aria-hidden="true" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart size={19} aria-hidden="true" />
                    Add to Cart
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleBuyNow}
                className="
                  inline-flex
                  min-h-14
                  items-center
                  justify-center
                  gap-3
                  rounded-md
                  border
                  border-[#D4AF37]/55
                  px-7
                  font-semibold
                  text-[#D4AF37]
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#D4AF37]
                  hover:text-black
                "
              >
                <ShoppingBag size={19} aria-hidden="true" />
                Buy Now
              </button>
            </div>

            <a
              href={`https://wa.me/923352484936?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="
                mt-3
                inline-flex
                min-h-14
                w-full
                items-center
                justify-center
                gap-3
                rounded-md
                border
                border-white/12
                bg-white/[0.025]
                px-7
                font-semibold
                text-white/75
                transition
                duration-300
                hover:border-[#D4AF37]/50
                hover:text-[#D4AF37]
              "
            >
              <MessageCircle size={19} aria-hidden="true" />
              Ask About Price & Availability
            </a>

            <button
              type="button"
              onClick={() =>
                setWishlisted((current) => !current)
              }
              aria-label={
                wishlisted
                  ? "Remove from wishlist"
                  : "Add to wishlist"
              }
              className={`
                mt-3
                inline-flex
                min-h-12
                items-center
                gap-3
                rounded-md
                border
                px-5
                text-sm
                transition
                ${
                  wishlisted
                    ? "border-[#D4AF37] bg-[#D4AF37] text-black"
                    : "border-white/10 text-white/55 hover:border-[#D4AF37]/45 hover:text-[#D4AF37]"
                }
              `}
            >
              <Heart
                size={18}
                fill={wishlisted ? "currentColor" : "none"}
                aria-hidden="true"
              />

              {wishlisted
                ? "Saved to Wishlist"
                : "Save to Wishlist"}
            </button>

            {/* Assurance */}
            <div
              className="
                mt-7
                flex
                items-start
                gap-3
                rounded-xl
                border
                border-[#D4AF37]/15
                bg-[#D4AF37]/[0.035]
                p-4
                text-sm
                leading-6
                text-white/50
              "
            >
              <ShieldCheck
                size={20}
                className="mt-0.5 shrink-0 text-[#D4AF37]"
                aria-hidden="true"
              />

              Citizen Jewellers products are professionally evaluated and
              presented with transparent consultation and after-sales guidance.
            </div>
          </motion.div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div
            className="
              mt-20
              border-t
              border-white/7
              pt-16
              lg:mt-28
            "
          >
            <p
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.35em]
                text-[#D4AF37]
              "
            >
              More to Explore
            </p>

            <h2
              className="
                mt-4
                font-serif
                text-4xl
                text-white
                sm:text-5xl
              "
            >
              You May Also Like
            </h2>

            <div
              className="
                mt-9
                grid
                gap-6
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  className="
                    group
                    overflow-hidden
                    rounded-[1.4rem]
                    border
                    border-[#D4AF37]/15
                    bg-[#0a0a0a]
                    transition
                    duration-300
                    hover:-translate-y-2
                    hover:border-[#D4AF37]/45
                  "
                >
                  <div
                    className="
                      flex
                      aspect-[4/5]
                      items-center
                      justify-center
                      overflow-hidden
                      bg-black
                    "
                  >
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="
                        h-full
                        w-full
                        object-contain
                        p-2
                        transition-transform
                        duration-700
                        group-hover:scale-[1.035]
                      "
                    />
                  </div>

                  <div className="p-5">
                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.24em]
                        text-[#D4AF37]
                      "
                    >
                      {item.category}
                    </p>

                    <h3
                      className="
                        mt-3
                        line-clamp-2
                        font-serif
                        text-xl
                        text-white
                      "
                    >
                      {item.name}
                    </h3>

                    <p className="mt-3 text-xs text-white/40">
                      {item.purity} · {item.weight}
                    </p>

                    <p className="mt-4 font-semibold text-[#D4AF37]">
                      Price on Inquiry
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