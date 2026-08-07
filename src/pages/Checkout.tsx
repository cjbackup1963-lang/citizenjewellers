import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MessageCircle,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";

import { useCart } from "../context/CartContext";

interface FormState {
  name: string;
  phone: string;
  address: string;
  notes: string;
}

function Checkout() {
  const { cart, totalItems } = useCart();

  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

  const [error, setError] = useState("");

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const orderOnWhatsApp = () => {
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Please enter your name and phone number.");
      return;
    }

    if (cart.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    const items = cart
      .map(
        (item, index) =>
          `${index + 1}. ${item.name}
Quantity: ${item.quantity}
Purity: ${item.purity}`
      )
      .join("\n\n");

    const message = encodeURIComponent(
      `Citizen Jewellers Jewellery Inquiry

Customer: ${form.name}
Phone: ${form.phone}
Address: ${form.address || "Not provided"}

Selected Jewellery:

${items}

Pricing: Price on Inquiry

Notes: ${form.notes || "None"}

Please confirm the current price, availability, and collection or delivery details.`
    );

    window.open(
      `https://wa.me/923352484936?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  if (cart.length === 0) {
    return (
      <section className="grid min-h-[75vh] place-items-center bg-[#050505] px-6 text-center">
        <div>
          <ShoppingBag
            size={58}
            className="mx-auto text-[#D4AF37]"
            aria-hidden="true"
          />

          <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.4em] text-[#D4AF37]">
            Citizen Jewellers
          </p>

          <h1 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
            Nothing to checkout
          </h1>

          <p className="mx-auto mt-4 max-w-md leading-7 text-white/50">
            Add jewellery to your selection before continuing with your
            inquiry.
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
            <ArrowLeft size={18} aria-hidden="true" />
            Browse Jewellery
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#050505] px-5 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-[#D4AF37]">
            Secure Inquiry
          </p>

          <h1 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
            Checkout
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
            Submit your jewellery selection and contact details. Our team will
            confirm current pricing, availability and final consultation
            details.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_390px]">
          {/* Customer Details */}
          <div
            className="
              rounded-[28px]
              border
              border-[#D4AF37]/15
              bg-[#0b0b0b]
              p-6
              sm:p-8
            "
          >
            <h2 className="font-serif text-3xl text-white">
              Customer Details
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/45">
              Enter your contact information so our team can assist with your
              jewellery inquiry.
            </p>

            <div className="mt-8 grid gap-6">
              <label className="block">
                <span className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-white/45">
                  Full Name
                </span>

                <input
                  value={form.name}
                  onChange={(event) => update("name", event.target.value)}
                  autoComplete="name"
                  placeholder="Enter your name"
                  className="
                    min-h-13
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-black/40
                    px-4
                    text-white
                    outline-none
                    transition
                    placeholder:text-white/25
                    focus:border-[#D4AF37]/60
                  "
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-white/45">
                  Phone Number
                </span>

                <input
                  value={form.phone}
                  onChange={(event) => update("phone", event.target.value)}
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="Enter your phone number"
                  className="
                    min-h-13
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-black/40
                    px-4
                    text-white
                    outline-none
                    transition
                    placeholder:text-white/25
                    focus:border-[#D4AF37]/60
                  "
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-white/45">
                  Delivery / Contact Address
                </span>

                <textarea
                  value={form.address}
                  onChange={(event) => update("address", event.target.value)}
                  placeholder="Enter address if required"
                  className="
                    min-h-28
                    w-full
                    resize-y
                    rounded-xl
                    border
                    border-white/10
                    bg-black/40
                    px-4
                    py-3
                    text-white
                    outline-none
                    transition
                    placeholder:text-white/25
                    focus:border-[#D4AF37]/60
                  "
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-white/45">
                  Notes
                </span>

                <textarea
                  value={form.notes}
                  onChange={(event) => update("notes", event.target.value)}
                  placeholder="Size, design changes or preferred consultation time"
                  className="
                    min-h-24
                    w-full
                    resize-y
                    rounded-xl
                    border
                    border-white/10
                    bg-black/40
                    px-4
                    py-3
                    text-white
                    outline-none
                    transition
                    placeholder:text-white/25
                    focus:border-[#D4AF37]/60
                  "
                />
              </label>
            </div>

            {error && (
              <div
                className="
                  mt-6
                  rounded-xl
                  border
                  border-red-400/20
                  bg-red-400/[0.05]
                  px-4
                  py-3
                  text-sm
                  text-red-300
                "
              >
                {error}
              </div>
            )}

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

              This checkout submits an inquiry only. No payment is collected
              online at this stage.
            </div>
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
              Your Selection
            </p>

            <h2 className="mt-3 font-serif text-3xl text-white">
              Order Summary
            </h2>

            <div className="mt-6 max-h-80 space-y-4 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 border-b border-white/10 pb-4"
                >
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="
                      h-16
                      w-16
                      shrink-0
                      rounded-xl
                      object-cover
                    "
                  />

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-white">
                      {item.name}
                    </p>

                    <p className="mt-1 text-xs text-white/45">
                      Qty {item.quantity} · {item.purity}
                    </p>

                    <p className="mt-2 text-xs font-semibold text-[#D4AF37]">
                      Price on Inquiry
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-[#D4AF37]/20 pt-5">
              <div className="flex items-center justify-between gap-5">
                <span className="text-sm text-white/50">
                  Total Items
                </span>

                <span className="font-semibold text-white">
                  {totalItems}
                </span>
              </div>

              <div className="mt-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                  Final Amount
                </p>

                <p className="mt-2 font-serif text-2xl text-[#D4AF37]">
                  Price on Inquiry
                </p>
              </div>

              <p className="mt-4 text-xs leading-6 text-white/40">
                Final pricing is confirmed according to the latest gold rate,
                exact weight, making charges, gemstones and any requested
                customization.
              </p>
            </div>

            <button
              type="button"
              onClick={orderOnWhatsApp}
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
              <MessageCircle size={19} aria-hidden="true" />
              Send Inquiry on WhatsApp
            </button>

            <Link
              to="/cart"
              className="
                mt-4
                block
                text-center
                text-sm
                text-white/45
                transition
                hover:text-[#D4AF37]
              "
            >
              Back to cart
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Checkout;