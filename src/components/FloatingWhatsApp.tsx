import { MessageCircle } from "lucide-react";
import { trackWhatsAppClick } from "../services/analytics";

function FloatingWhatsApp() {
  /*
  |--------------------------------------------------------------------------
  | Citizen Jewellers WhatsApp
  |--------------------------------------------------------------------------
  |
  | IMPORTANT:
  | Replace the number below with your actual WhatsApp business number.
  |
  | Format:
  | Pakistan country code 92 + mobile number without starting 0
  |
  | Example:
  | 03XX XXXXXXX → 923XXXXXXXXX
  |
  */

  const phone = "923352484936";

  const message =
    "Assalam-o-Alaikum, I would like to know more about your jewellery collection.";

  const openWhatsApp = () => {
    /*
    |--------------------------------------------------------------------------
    | Google Analytics
    |--------------------------------------------------------------------------
    */

    trackWhatsAppClick("floating_button");

    /*
    |--------------------------------------------------------------------------
    | Open WhatsApp
    |--------------------------------------------------------------------------
    */

    const whatsappUrl =
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <button
      type="button"
      onClick={openWhatsApp}
      aria-label="Contact Citizen Jewellers on WhatsApp"
      title="Chat with us on WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-green-500
        text-white
        shadow-2xl
        transition
        duration-300
        hover:scale-110
        hover:bg-green-600
        focus:outline-none
        focus:ring-2
        focus:ring-green-400
        focus:ring-offset-2
        focus:ring-offset-black
      "
    >
      <MessageCircle
        size={30}
        aria-hidden="true"
      />
    </button>
  );
}

export default FloatingWhatsApp;