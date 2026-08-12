import { useState } from "react";
import {
  BellRing,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type Interest = "buying" | "selling" | "both";

function encodeFormData(data: Record<string, string>) {
  return new URLSearchParams(data).toString();
}

function GoldPriceAlerts() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState<Interest>("both");
  const [consent, setConsent] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!name.trim() || !phone.trim() || !consent) {
      setError(
        "Please enter your name, WhatsApp number and confirm consent."
      );
      return;
    }

    try {
      setSubmitting(true);
      setError("");

      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
        body: encodeFormData({
          "form-name": "gold-price-alerts",
          name: name.trim(),
          phone: phone.trim(),
          interest,
          consent: consent ? "yes" : "no",
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Form submission failed with status ${response.status}`
        );
      }

      setSubmitted(true);
    } catch (submitError) {
      console.error(
        "Gold Price Alert submission failed:",
        submitError
      );

      setError(
        "We could not submit your request right now. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setName("");
    setPhone("");
    setInterest("both");
    setConsent(false);
    setError("");
  };

  return (
    <section
      id="gold-alerts"
      className="
        relative
        overflow-hidden
        bg-[#050505]
        px-5
        py-16
        sm:px-6
        lg:py-24
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D4AF37]/[0.055]
          blur-[130px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        <div
          className="
            grid
            gap-8
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-center
          "
        >
          {/* LEFT CONTENT */}
          <div>
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#D4AF37]/25
                bg-[#D4AF37]/[0.04]
                px-4
                py-2
                text-[#D4AF37]
              "
            >
              <BellRing
                size={17}
                aria-hidden="true"
              />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                "
              >
                Gold Price Alerts
              </span>
            </div>

            <h2
              className="
                mt-6
                max-w-xl
                font-serif
                text-4xl
                leading-tight
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              Never Miss a
              <span className="block text-[#D4AF37]">
                Gold Move
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-white/50
                sm:text-base
              "
            >
              Register your interest to receive
              Citizen Jewellers gold-rate updates,
              buying opportunities and selling alerts
              when relevant.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <Sparkles
                  size={19}
                  className="
                    mt-0.5
                    shrink-0
                    text-[#D4AF37]
                  "
                  aria-hidden="true"
                />

                <div>
                  <p className="text-sm font-semibold text-white">
                    Market Rate Updates
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/40">
                    Stay informed when gold prices move
                    meaningfully.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle
                  size={19}
                  className="
                    mt-0.5
                    shrink-0
                    text-[#D4AF37]
                  "
                  aria-hidden="true"
                />

                <div>
                  <p className="text-sm font-semibold text-white">
                    WhatsApp Friendly
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/40">
                    Your WhatsApp number can be used for
                    future permission-based gold-rate
                    notifications.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck
                  size={19}
                  className="
                    mt-0.5
                    shrink-0
                    text-[#D4AF37]
                  "
                  aria-hidden="true"
                />

                <div>
                  <p className="text-sm font-semibold text-white">
                    Permission Based
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/40">
                    Customers opt in before receiving
                    promotional or rate alerts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM CARD */}
          <div
            className="
              rounded-[28px]
              border
              border-[#D4AF37]/16
              bg-[#0a0a0a]
              p-6
              sm:p-8
            "
          >
            {!submitted ? (
              <form
                name="gold-price-alerts"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
              >
                <input
                  type="hidden"
                  name="form-name"
                  value="gold-price-alerts"
                />

                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-[#D4AF37]
                  "
                >
                  Join Gold Alerts
                </p>

                <h3 className="mt-3 font-serif text-3xl text-white">
                  Register Your Interest
                </h3>

                {/* NAME */}
                <label className="mt-7 block">
                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-white/40
                    "
                  >
                    Your Name
                  </span>

                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(event) =>
                      setName(event.target.value)
                    }
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                    className="
                      mt-3
                      min-h-14
                      w-full
                      rounded-xl
                      border
                      border-[#D4AF37]/20
                      bg-black/35
                      px-4
                      text-base
                      text-white
                      outline-none
                      transition
                      placeholder:text-white/25
                      focus:border-[#D4AF37]/60
                    "
                  />
                </label>

                {/* PHONE */}
                <label className="mt-6 block">
                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-white/40
                    "
                  >
                    WhatsApp Number
                  </span>

                  <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(event) =>
                      setPhone(event.target.value)
                    }
                    placeholder="03XX XXXXXXX"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    className="
                      mt-3
                      min-h-14
                      w-full
                      rounded-xl
                      border
                      border-[#D4AF37]/20
                      bg-black/35
                      px-4
                      text-base
                      text-white
                      outline-none
                      transition
                      placeholder:text-white/25
                      focus:border-[#D4AF37]/60
                    "
                  />
                </label>

                {/* INTEREST */}
                <div className="mt-6">
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-white/40
                    "
                  >
                    I am interested in
                  </p>

                  <input
                    type="hidden"
                    name="interest"
                    value={interest}
                  />

                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    {[
                      {
                        value: "buying" as Interest,
                        label: "Buying Gold",
                      },
                      {
                        value: "selling" as Interest,
                        label: "Selling Gold",
                      },
                      {
                        value: "both" as Interest,
                        label: "Both",
                      },
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() =>
                          setInterest(option.value)
                        }
                        className={`
                          min-h-12
                          rounded-xl
                          border
                          px-4
                          text-sm
                          font-semibold
                          transition
                          ${
                            interest === option.value
                              ? "border-[#D4AF37] bg-[#D4AF37] text-black"
                              : "border-[#D4AF37]/20 bg-black/35 text-white/65 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
                          }
                        `}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CONSENT */}
                <input
                  type="hidden"
                  name="consent"
                  value={consent ? "yes" : "no"}
                />

                <label
                  className="
                    mt-6
                    flex
                    cursor-pointer
                    items-start
                    gap-3
                    rounded-xl
                    border
                    border-white/7
                    bg-white/[0.02]
                    p-4
                  "
                >
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(event) =>
                      setConsent(
                        event.target.checked
                      )
                    }
                    className="mt-1"
                    required
                  />

                  <span className="text-xs leading-6 text-white/45">
                    I agree to receive Citizen Jewellers
                    gold-rate and related marketing
                    alerts. I understand I can opt out
                    later.
                  </span>
                </label>

                {error && (
                  <div
                    className="
                      mt-5
                      rounded-xl
                      border
                      border-red-400/20
                      bg-red-400/[0.05]
                      px-4
                      py-3
                    "
                  >
                    <p className="text-sm leading-6 text-red-300">
                      {error}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={
                    submitting ||
                    !name.trim() ||
                    !phone.trim() ||
                    !consent
                  }
                  className="
                    mt-6
                    flex
                    min-h-14
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#D4AF37]
                    px-6
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.08em]
                    text-black
                    transition
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#e2c15b]
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                    disabled:hover:translate-y-0
                  "
                >
                  <BellRing
                    size={18}
                    aria-hidden="true"
                  />

                  {submitting
                    ? "Submitting..."
                    : "Get Gold Rate Alerts"}
                </button>

                <p className="mt-4 text-center text-[11px] leading-5 text-white/30">
                  Your details will be submitted securely
                  through the website form system.
                </p>
              </form>
            ) : (
              <div className="py-8 text-center">
                <div
                  className="
                    mx-auto
                    grid
                    h-16
                    w-16
                    place-items-center
                    rounded-full
                    border
                    border-[#D4AF37]/30
                    bg-[#D4AF37]/[0.05]
                    text-[#D4AF37]
                  "
                >
                  <CheckCircle2
                    size={30}
                    aria-hidden="true"
                  />
                </div>

                <p
                  className="
                    mt-6
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-[#D4AF37]
                  "
                >
                  Registration Received
                </p>

                <h3 className="mt-3 font-serif text-3xl text-white">
                  Thank You, {name}
                </h3>

                <p
                  className="
                    mx-auto
                    mt-4
                    max-w-md
                    text-sm
                    leading-7
                    text-white/45
                  "
                >
                  Your gold-alert interest has been
                  submitted successfully. Our team can
                  use your selected preference for future
                  rate updates.
                </p>

                <button
                  type="button"
                  onClick={resetForm}
                  className="
                    mt-6
                    text-sm
                    font-semibold
                    text-[#D4AF37]
                    transition
                    hover:text-white
                  "
                >
                  Register Another Number
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GoldPriceAlerts;