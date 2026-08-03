import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

interface FormState {
  name: string;
  phone: string;
  address: string;
  notes: string;
}

function Checkout() {
  const { cart, totalItems, totalPrice } = useCart();
  const [form, setForm] = useState<FormState>({ name: "", phone: "", address: "", notes: "" });
  const [error, setError] = useState("");

  const update = (field: keyof FormState, value: string) => setForm((current) => ({ ...current, [field]: value }));

  const orderOnWhatsApp = () => {
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Please enter your name and phone number.");
      return;
    }
    if (cart.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    const items = cart.map((item, index) => `${index + 1}. ${item.name} | Qty: ${item.quantity} | PKR ${(item.price * item.quantity).toLocaleString()}`).join("\n");
    const message = encodeURIComponent(
      `Citizen Jewellers Order Inquiry\n\nCustomer: ${form.name}\nPhone: ${form.phone}\nAddress: ${form.address || "Not provided"}\n\n${items}\n\nEstimated Total: PKR ${totalPrice.toLocaleString()}\nNotes: ${form.notes || "None"}\n\nPlease confirm availability and final price.`,
    );
    window.open(`https://wa.me/923352484936?text=${message}`, "_blank", "noopener,noreferrer");
  };

  if (cart.length === 0) {
    return (
      <section className="grid min-h-[65vh] place-items-center bg-[#050505] px-6 text-center">
        <div>
          <ShoppingBag size={54} className="mx-auto text-[#D4AF37]" />
          <h1 className="mt-5 font-serif text-4xl text-white">Nothing to checkout</h1>
          <Link to="/#products" className="gold-button mt-7 inline-flex">Browse jewellery</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section-shell min-h-screen bg-[#050505]">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">Secure inquiry</p>
        <h1 className="section-title text-left">Checkout</h1>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_420px]">
          <div className="luxury-card p-7 md:p-9">
            <h2 className="font-serif text-3xl text-white">Customer Details</h2>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="field-label">Full name<input value={form.name} onChange={(e) => update("name", e.target.value)} className="field-input" autoComplete="name" /></label>
              <label className="field-label">Phone number<input value={form.phone} onChange={(e) => update("phone", e.target.value)} className="field-input" autoComplete="tel" inputMode="tel" /></label>
              <label className="field-label sm:col-span-2">Delivery address<textarea value={form.address} onChange={(e) => update("address", e.target.value)} className="field-input min-h-28 resize-y" /></label>
              <label className="field-label sm:col-span-2">Notes<textarea value={form.notes} onChange={(e) => update("notes", e.target.value)} className="field-input min-h-24 resize-y" placeholder="Size, design changes or preferred consultation time" /></label>
            </div>
            {error && <p className="mt-5 text-sm text-red-300">{error}</p>}
          </div>

          <aside className="luxury-card h-fit p-7 lg:sticky lg:top-32">
            <h2 className="font-serif text-3xl text-white">Order Summary</h2>
            <div className="mt-6 max-h-72 space-y-4 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-3 border-b border-white/10 pb-4">
                  <img src={item.images[0]} alt="" className="h-16 w-16 rounded-xl object-cover" />
                  <div className="min-w-0 flex-1"><p className="truncate text-sm text-white">{item.name}</p><p className="mt-1 text-xs text-white/45">Qty {item.quantity}</p></div>
                  <p className="text-sm text-[#D4AF37]">PKR {(item.price * item.quantity).toLocaleString()}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-between border-t border-[#D4AF37]/20 pt-5 text-xl text-[#D4AF37]"><span>{totalItems} items</span><span>PKR {totalPrice.toLocaleString()}</span></div>
            <button onClick={orderOnWhatsApp} className="gold-button mt-7 flex w-full justify-center"><MessageCircle size={19} /> Order on WhatsApp</button>
            <p className="mt-4 text-xs leading-5 text-white/40">This sends an inquiry only. Our team will confirm availability, final pricing and collection or delivery details.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
