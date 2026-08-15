import { Link } from "react-router-dom";
import {
  ArrowRight,
  MessageCircle,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";

import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    totalItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  const whatsappMessage = encodeURIComponent(
    [
      "Assalam-o-Alaikum, I would like to inquire about these jewellery items:",
      "",
      ...cart.map(
        (item, index) =>
          `${index + 1}. ${item.name}
Quantity: ${item.quantity}
Purity: ${item.purity}`
      ),
      "",
      "Please confirm current prices and availability according to the latest gold rate.",
    ].join("\n")
  );

  return (
    <section className="min-h-screen bg-[#050505] px-5 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-[#D4AF37]">
              Your Selection
            </p>

            <h1 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
              Shopping Cart
            </h1>

            <p className="mt-3 text-sm text-white/50">
              {totalItems} item{totalItems === 1 ? "" : "s"} selected
            </p>
          </div>

          {cart.length > 0 && (
            <button
              type="button"
              onClick={clearCart}
              className="self-start text-sm text-red-300 transition hover:text-red-200 sm:self-auto"
            >
              Clear cart
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          /* Empty Cart */
          <div className="rounded-[30px] border border-[#D4AF37]/15 bg-[#0b0b0b] px-6 py-20 text-center">
            <ShoppingBag
              size={58}
              className="mx-auto text-[#D4AF37]"
              aria-hidden="true"
            />

            <h2 className="mt-6 font-serif text-3xl text-white sm:text-4xl">
              Your cart is empty
            </h2>

            <p className="mx-auto mt-4 max-w-md leading-7 text-white/50">
              Explore our curated gold, diamond and gemstone jewellery
              collection.
            </p>

            <Link
              to="/#products"
              className="
                mt-8
                inline-flex
                min-h-13
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#D4AF37]
                px-8
                py-4
                font-semibold
                text-black
                transition
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#e2c15b]
              "
            >
              Continue shopping
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_370px]">
            {/* Cart Items */}
            <div className="space-y-4">
              {cart.map((item) => (
                <article
                  key={item.id}
                  className="
                    rounded-[26px]
                    border
                    border-[#D4AF37]/14
                    bg-[#0b0b0b]
                    p-5
                    transition
                    duration-300
                    hover:border-[#D4AF37]/35
                  "
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                    <Link
                      to={`/product/${item.id}`}
                      className="shrink-0 overflow-hidden rounded-2xl"
                    >
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        loading="lazy"
                        decoding="async"
                        className="
                          h-52
                          w-full
                          object-cover
                          transition-transform
                          duration-500
                          hover:scale-[1.04]
                          sm:h-32
                          sm:w-32
                        "
                      />
                    </Link>

                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#D4AF37]">
                        {item.category}
                      </p>

                      <Link
                        to={`/product/${item.id}`}
                        className="mt-2 block font-serif text-2xl text-white transition hover:text-[#D4AF37]"
                      >
                        {item.name}
                      </Link>

                      <p className="mt-2 text-sm text-white/45">
                        {item.purity}
                      </p>

                      <div className="mt-3">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                          Current Price
                        </p>

                        <p className="mt-1 text-lg font-semibold text-[#D4AF37]">
                          Price on Inquiry
                        </p>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between gap-3 border-t border-white/5 pt-5 sm:justify-start sm:border-0 sm:pt-0">
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => decreaseQuantity(item.id)}
                          className="
                            grid
                            h-10
                            w-10
                            place-items-center
                            rounded-full
                            border
                            border-[#D4AF37]/35
                            text-[#D4AF37]
                            transition
                            hover:bg-[#D4AF37]
                            hover:text-black
                          "
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          <Minus size={16} aria-hidden="true" />
                        </button>

                        <span className="w-7 text-center font-medium text-white">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => increaseQuantity(item.id)}
                          className="
                            grid
                            h-10
                            w-10
                            place-items-center
                            rounded-full
                            border
                            border-[#D4AF37]/35
                            text-[#D4AF37]
                            transition
                            hover:bg-[#D4AF37]
                            hover:text-black
                          "
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          <Plus size={16} aria-hidden="true" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="
                          ml-2
                          grid
                          h-10
                          w-10
                          place-items-center
                          rounded-full
                          border
                          border-red-400/30
                          text-red-300
                          transition
                          hover:bg-red-400
                          hover:text-black
                        "
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <Trash2 size={17} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Order Summary */}
            <aside
              className="
                h-fit
                rounded-[28px]
                border
                border-[#D4AF37]/18
                bg-[#0b0b0b]
                p-7
                lg:sticky
                lg:top-32
              "
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                Summary
              </p>

              <h2 className="mt-3 font-serif text-3xl text-white">
                Order Inquiry
              </h2>

              <div className="mt-7 space-y-4 text-sm text-white/55">
                <div className="flex justify-between gap-5">
                  <span>Total items</span>
                  <span className="text-white">{totalItems}</span>
                </div>

                <div className="flex justify-between gap-5">
                  <span>Pricing</span>
                  <span className="font-semibold text-[#D4AF37]">
                    On Inquiry
                  </span>
                </div>

                <p className="border-t border-white/8 pt-4 text-xs leading-6 text-white/40">
                  Final jewellery prices are confirmed according to the current
                  gold rate, exact weight, making charges, gemstones and any
                  product-specific customization.
                </p>
              </div>

              <div className="mt-6 border-t border-[#D4AF37]/20 pt-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                  Final Amount
                </p>

                <p className="mt-2 font-serif text-2xl text-[#D4AF37]">
                  Price on Inquiry
                </p>
              </div>

              <Link
                to="/checkout"
                className="
                  mt-7
                  flex
                  min-h-14
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#D4AF37]
                  px-7
                  font-semibold
                  text-black
                  transition
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#e2c15b]
                "
              >
                Continue to inquiry
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <a
                href={`https://wa.me/923352484936?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="
                  mt-3
                  flex
                  min-h-14
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-[#D4AF37]/45
                  px-7
                  font-semibold
                  text-[#D4AF37]
                  transition
                  duration-300
                  hover:bg-[#D4AF37]
                  hover:text-black
                "
              >
                <MessageCircle size={18} aria-hidden="true" />
                Price inquiry on WhatsApp
              </a>

              <Link
                to="/#products"
                className="mt-5 block text-center text-sm text-white/45 transition hover:text-[#D4AF37]"
              >
                Continue shopping
              </Link>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;