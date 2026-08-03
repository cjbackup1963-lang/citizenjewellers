import { MessageCircle } from "lucide-react";

function FloatingWhatsApp() {
  const phone = "923001234567"; // ← Apna WhatsApp number yahan likho

  const message =
    "Assalam-o-Alaikum, I would like to know more about your jewellery collection.";

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110 hover:bg-green-600"
    >
      <MessageCircle size={30} />
    </button>
  );
}

export default FloatingWhatsApp;