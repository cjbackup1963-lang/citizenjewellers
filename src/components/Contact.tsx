import { useState } from "react";
import type { FormEvent } from "react";

import { motion } from "framer-motion";

import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
  ShieldCheck,
  User,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Showroom Location",
    text: "Citizen Jewellers, Lakhani Tower, Main Zaibunissa Street, Saddar, Karachi",
  },
  {
    icon: Phone,
    title: "Call Us",
    text: "0335 2484936",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Consultation",
    text: "Connect directly with our jewellery experts.",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    text: "Monday – Saturday | 01:00 PM – 09:00 PM",
  },
];

type FormStatus = "idle" | "submitting" | "success" | "error";

function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const encode = (
    data: Record<string, string>
  ): string => {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) +
          "=" +
          encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const email = String(formData.get("email") || "");
    const subject = String(formData.get("subject") || "");
    const message = String(formData.get("message") || "");

    setStatus("submitting");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
        body: encode({
          "form-name": "contact-inquiry",
          name,
          phone,
          email,
          subject,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Form submission failed: ${response.status}`
        );
      }

      setStatus("success");
      form.reset();

      /*
      |--------------------------------------------------------------------------
      | Google Analytics event
      |--------------------------------------------------------------------------
      */

      if (
        typeof window !== "undefined" &&
        typeof window.gtag === "function"
      ) {
        window.gtag("event", "contact_form_submit", {
          form_name: "contact-inquiry",
          enquiry_subject: subject || "General Enquiry",
        });
      }
    } catch (error) {
      console.error(
        "Contact form submission error:",
        error
      );

      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#050505]
        px-5
        py-24
        sm:px-8
        lg:px-10
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 -z-30">
        <img
          src="/images/luxury/showroom/store-exterior.webp"
          alt=""
          loading="lazy"
          decoding="async"
          className="
            h-full
            w-full
            object-cover
            object-center
            opacity-15
          "
        />
      </div>

      <div className="absolute inset-0 -z-20 bg-black/88" />

      <div
        className="
          absolute
          inset-0
          -z-20
          bg-gradient-to-r
          from-black
          via-black/80
          to-black/55
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[-10rem]
          top-1/3
          -z-10
          h-96
          w-96
          rounded-full
          bg-[#D4AF37]/10
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-1/4
          -z-10
          h-96
          w-96
          rounded-full
          bg-[#D4AF37]/5
          blur-[150px]
        "
      />

      <div className="mx-auto max-w-7xl">
        {/* =====================================================
            HEADING
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.75,
            ease: "easeOut",
          }}
          className="
            mx-auto
            mb-16
            max-w-3xl
            text-center
            lg:mb-20
          "
        >
          <p
            className="
              mb-5
              text-xs
              font-medium
              uppercase
              tracking-[0.42em]
              text-[#D4AF37]
              sm:text-sm
            "
          >
            Get In Touch
          </p>

          <h2
            className="
              font-serif
              text-4xl
              leading-tight
              text-white
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Contact Us
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-white/55
              sm:text-lg
            "
          >
            Whether you are looking for premium
            jewellery, custom design guidance, gold
            exchange or professional assistance, our team
            is ready to help.
          </p>
        </motion.div>

        {/* =====================================================
            SHOWROOM + CTA
        ===================================================== */}

        <motion.article
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            group
            mb-12
            overflow-hidden
            rounded-[2rem]
            border
            border-[#D4AF37]/20
            bg-[#090909]
            shadow-[0_30px_90px_rgba(0,0,0,0.5)]
            lg:mb-16
          "
        >
          <div className="grid items-stretch lg:grid-cols-[1.15fr_0.85fr]">
            {/* IMAGE */}

            <div
              className="
                relative
                flex
                items-center
                justify-center
                overflow-hidden
                border-b
                border-[#D4AF37]/15
                bg-black
                lg:border-b-0
                lg:border-r
              "
            >
              <img
                src="/images/luxury/showroom/store-exterior.webp"
                alt="Citizen Jewellers showroom exterior"
                loading="lazy"
                decoding="async"
                className="
                  block
                  h-auto
                  w-full
                  object-contain
                  transition-transform
                  duration-[1400ms]
                  group-hover:scale-[1.015]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/20
                  via-transparent
                  to-black/5
                "
              />

              <div
                className="
                  absolute
                  left-5
                  top-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#D4AF37]/35
                  bg-black/75
                  px-4
                  py-2
                  text-[10px]
                  uppercase
                  tracking-[0.24em]
                  text-[#D4AF37]
                  backdrop-blur-md
                  sm:left-7
                  sm:top-7
                "
              >
                <MapPin
                  size={14}
                  aria-hidden="true"
                />

                Saddar, Karachi
              </div>
            </div>

            {/* CTA */}

            <div
              className="
                relative
                flex
                flex-col
                justify-center
                overflow-hidden
                p-7
                sm:p-10
                lg:p-12
                xl:p-14
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-[radial-gradient(circle_at_top,rgba(212,175,55,.14),transparent_65%)]
                "
              />

              <div className="relative">
                <p
                  className="
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.3em]
                    text-[#D4AF37]
                  "
                >
                  Private Consultation
                </p>

                <h3
                  className="
                    mt-5
                    font-serif
                    text-3xl
                    leading-tight
                    text-white
                    sm:text-4xl
                    lg:text-5xl
                  "
                >
                  Find Your Perfect Jewellery
                </h3>

                <p
                  className="
                    mt-6
                    text-sm
                    leading-7
                    text-white/55
                    sm:text-base
                    sm:leading-8
                  "
                >
                  Visit our showroom or speak with our
                  experts for jewellery guidance, custom
                  design requirements, gold exchange and
                  professional jewellery care.
                </p>

                <div
                  className="
                    mt-8
                    flex
                    flex-col
                    gap-4
                    sm:flex-row
                    sm:flex-wrap
                  "
                >
                  <a
                    href="https://wa.me/923352484936"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      min-h-13
                      items-center
                      justify-center
                      gap-3
                      rounded-full
                      bg-[#D4AF37]
                      px-7
                      py-3.5
                      text-sm
                      font-semibold
                      text-black
                      transition
                      duration-300
                      hover:-translate-y-1
                      hover:bg-[#e5c65c]
                    "
                  >
                    <MessageCircle
                      size={18}
                      aria-hidden="true"
                    />

                    WhatsApp
                  </a>

                  <a
                    href="tel:+923352484936"
                    className="
                      inline-flex
                      min-h-13
                      items-center
                      justify-center
                      gap-3
                      rounded-full
                      border
                      border-[#D4AF37]/45
                      px-7
                      py-3.5
                      text-sm
                      font-semibold
                      text-[#D4AF37]
                      transition
                      duration-300
                      hover:-translate-y-1
                      hover:bg-[#D4AF37]
                      hover:text-black
                    "
                  >
                    <Phone
                      size={18}
                      aria-hidden="true"
                    />

                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* =====================================================
            CONTACT INFORMATION
        ===================================================== */}

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="
                  group
                  rounded-[1.75rem]
                  border
                  border-[#D4AF37]/18
                  bg-black/55
                  p-7
                  backdrop-blur-xl
                  transition
                  duration-500
                  hover:border-[#D4AF37]/45
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#D4AF37]/35
                    bg-[#D4AF37]/5
                    text-[#D4AF37]
                    transition
                    duration-300
                    group-hover:bg-[#D4AF37]
                    group-hover:text-black
                  "
                >
                  <Icon
                    size={26}
                    aria-hidden="true"
                  />
                </div>

                <h3
                  className="
                    mt-6
                    font-serif
                    text-2xl
                    text-white
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-white/50
                  "
                >
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            CUSTOMER ENQUIRY FORM
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.75,
            ease: "easeOut",
          }}
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[2rem]
            border
            border-[#D4AF37]/20
            bg-black/65
            shadow-[0_30px_90px_rgba(0,0,0,0.45)]
            backdrop-blur-xl
            lg:mt-20
          "
        >
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              h-72
              w-72
              rounded-full
              bg-[#D4AF37]/10
              blur-[120px]
            "
          />

          <div
            className="
              relative
              grid
              lg:grid-cols-[0.8fr_1.2fr]
            "
          >
            {/* FORM INTRO */}

            <div
              className="
                border-b
                border-[#D4AF37]/15
                p-7
                sm:p-10
                lg:border-b-0
                lg:border-r
                lg:p-12
                xl:p-14
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-[#D4AF37]/30
                  bg-[#D4AF37]/5
                  text-[#D4AF37]
                "
              >
                <Mail size={25} />
              </div>

              <p
                className="
                  mt-7
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#D4AF37]
                "
              >
                Customer Enquiry
              </p>

              <h3
                className="
                  mt-4
                  font-serif
                  text-3xl
                  leading-tight
                  text-white
                  sm:text-4xl
                "
              >
                How Can We Help You?
              </h3>

              <p
                className="
                  mt-6
                  max-w-md
                  text-sm
                  leading-7
                  text-white/50
                  sm:text-base
                  sm:leading-8
                "
              >
                Share your contact details and enquiry
                with us. Our team will review your request
                and contact you for further assistance.
              </p>

              <div
                className="
                  mt-8
                  flex
                  items-start
                  gap-3
                  border-t
                  border-[#D4AF37]/15
                  pt-6
                "
              >
                <ShieldCheck
                  size={20}
                  className="
                    mt-0.5
                    shrink-0
                    text-[#D4AF37]
                  "
                />

                <p
                  className="
                    text-xs
                    leading-6
                    text-white/40
                  "
                >
                  Your enquiry details are submitted
                  securely and used to respond to your
                  request.
                </p>
              </div>
            </div>

            {/* FORM */}

            <div
              className="
                p-7
                sm:p-10
                lg:p-12
                xl:p-14
              "
            >
              {status === "success" ? (
                <div
                  className="
                    flex
                    min-h-[480px]
                    flex-col
                    items-center
                    justify-center
                    text-center
                  "
                >
                  <div
                    className="
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#D4AF37]/40
                      bg-[#D4AF37]/10
                    "
                  >
                    <CheckCircle2
                      size={38}
                      className="text-[#D4AF37]"
                    />
                  </div>

                  <p
                    className="
                      mt-8
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.3em]
                      text-[#D4AF37]
                    "
                  >
                    Enquiry Received
                  </p>

                  <h3
                    className="
                      mt-4
                      font-serif
                      text-3xl
                      text-white
                      sm:text-4xl
                    "
                  >
                    Thank You
                  </h3>

                  <p
                    className="
                      mt-5
                      max-w-md
                      text-sm
                      leading-7
                      text-white/50
                    "
                  >
                    Your enquiry has been received. Our
                    team will contact you shortly.
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setStatus("idle")
                    }
                    className="
                      mt-8
                      rounded-full
                      border
                      border-[#D4AF37]/45
                      px-7
                      py-3.5
                      text-sm
                      font-semibold
                      text-[#D4AF37]
                      transition
                      duration-300
                      hover:bg-[#D4AF37]
                      hover:text-black
                    "
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form
                  name="contact-inquiry"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="hidden"
                    name="form-name"
                    value="contact-inquiry"
                  />

                  {/* NAME + PHONE */}

                  <div
                    className="
                      grid
                      gap-5
                      md:grid-cols-2
                    "
                  >
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="
                          mb-2
                          block
                          text-[11px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-white/55
                        "
                      >
                        Full Name *
                      </label>

                      <div className="relative">
                        <User
                          size={17}
                          className="
                            pointer-events-none
                            absolute
                            left-4
                            top-1/2
                            -translate-y-1/2
                            text-[#D4AF37]
                          "
                        />

                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Your full name"
                          className="
                            min-h-14
                            w-full
                            rounded-xl
                            border
                            border-white/10
                            bg-white/[0.035]
                            py-3
                            pl-12
                            pr-4
                            text-sm
                            text-white
                            outline-none
                            transition
                            placeholder:text-white/25
                            focus:border-[#D4AF37]/65
                            focus:bg-[#D4AF37]/[0.025]
                          "
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="
                          mb-2
                          block
                          text-[11px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-white/55
                        "
                      >
                        Phone / WhatsApp *
                      </label>

                      <div className="relative">
                        <Phone
                          size={17}
                          className="
                            pointer-events-none
                            absolute
                            left-4
                            top-1/2
                            -translate-y-1/2
                            text-[#D4AF37]
                          "
                        />

                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          required
                          autoComplete="tel"
                          placeholder="03XX XXXXXXX"
                          className="
                            min-h-14
                            w-full
                            rounded-xl
                            border
                            border-white/10
                            bg-white/[0.035]
                            py-3
                            pl-12
                            pr-4
                            text-sm
                            text-white
                            outline-none
                            transition
                            placeholder:text-white/25
                            focus:border-[#D4AF37]/65
                            focus:bg-[#D4AF37]/[0.025]
                          "
                        />
                      </div>
                    </div>
                  </div>

                  {/* EMAIL */}

                  <div className="mt-5">
                    <label
                      htmlFor="contact-email"
                      className="
                        mb-2
                        block
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-white/55
                      "
                    >
                      Email Address
                    </label>

                    <div className="relative">
                      <Mail
                        size={17}
                        className="
                          pointer-events-none
                          absolute
                          left-4
                          top-1/2
                          -translate-y-1/2
                          text-[#D4AF37]
                        "
                      />

                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="your@email.com"
                        className="
                          min-h-14
                          w-full
                          rounded-xl
                          border
                          border-white/10
                          bg-white/[0.035]
                          py-3
                          pl-12
                          pr-4
                          text-sm
                          text-white
                          outline-none
                          transition
                          placeholder:text-white/25
                          focus:border-[#D4AF37]/65
                          focus:bg-[#D4AF37]/[0.025]
                        "
                      />
                    </div>
                  </div>

                  {/* SUBJECT */}

                  <div className="mt-5">
                    <label
                      htmlFor="contact-subject"
                      className="
                        mb-2
                        block
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-white/55
                      "
                    >
                      Enquiry About *
                    </label>

                    <select
                      id="contact-subject"
                      name="subject"
                      required
                      defaultValue=""
                      className="
                        min-h-14
                        w-full
                        rounded-xl
                        border
                        border-white/10
                        bg-[#0a0a0a]
                        px-4
                        text-sm
                        text-white
                        outline-none
                        transition
                        focus:border-[#D4AF37]/65
                      "
                    >
                      <option value="" disabled>
                        Select enquiry type
                      </option>

                      <option value="Jewellery Collection">
                        Jewellery Collection
                      </option>

                      <option value="Gold Jewellery">
                        Gold Jewellery
                      </option>

                      <option value="Bridal Jewellery">
                        Bridal Jewellery
                      </option>

                      <option value="Custom Jewellery">
                        Custom Jewellery
                      </option>

                      <option value="Gold Rate">
                        Gold Rate
                      </option>

                      <option value="Sell Gold">
                        Sell Gold
                      </option>

                      <option value="Jewellery Appraisal">
                        Jewellery Appraisal
                      </option>

                      <option value="Other">
                        Other
                      </option>
                    </select>
                  </div>

                  {/* MESSAGE */}

                  <div className="mt-5">
                    <label
                      htmlFor="contact-message"
                      className="
                        mb-2
                        block
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-white/55
                      "
                    >
                      Message *
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us how we can assist you..."
                      className="
                        w-full
                        resize-none
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.035]
                        px-4
                        py-4
                        text-sm
                        leading-6
                        text-white
                        outline-none
                        transition
                        placeholder:text-white/25
                        focus:border-[#D4AF37]/65
                        focus:bg-[#D4AF37]/[0.025]
                      "
                    />
                  </div>

                  {/* ERROR */}

                  {status === "error" && (
                    <div
                      className="
                        mt-5
                        rounded-xl
                        border
                        border-red-500/25
                        bg-red-500/5
                        px-4
                        py-3
                        text-sm
                        leading-6
                        text-red-300
                      "
                    >
                      We could not submit your enquiry
                      right now. Please try again or
                      contact us on WhatsApp.
                    </div>
                  )}

                  {/* SUBMIT */}

                  <button
                    type="submit"
                    disabled={
                      status === "submitting"
                    }
                    className="
                      group
                      mt-7
                      inline-flex
                      min-h-14
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-full
                      bg-[#D4AF37]
                      px-8
                      py-4
                      text-sm
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-black
                      transition
                      duration-300
                      hover:-translate-y-1
                      hover:bg-[#e5c65c]
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                      sm:w-auto
                    "
                  >
                    {status === "submitting"
                      ? "Sending..."
                      : "Send Message"}

                    {status !== "submitting" && (
                      <Send
                        size={17}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    )}
                  </button>

                  <p
                    className="
                      mt-4
                      text-xs
                      leading-5
                      text-white/30
                    "
                  >
                    Fields marked with * are required.
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            MAP CTA
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-14
            flex
            flex-col
            items-center
            justify-between
            gap-6
            rounded-3xl
            border
            border-[#D4AF37]/18
            bg-white/[0.03]
            p-7
            text-center
            sm:flex-row
            sm:text-left
          "
        >
          <div className="flex items-start gap-4">
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#D4AF37]/35
                text-[#D4AF37]
              "
            >
              <Navigation
                size={20}
                aria-hidden="true"
              />
            </div>

            <div>
              <p
                className="
                  font-serif
                  text-2xl
                  text-white
                "
              >
                Plan Your Visit
              </p>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-white/45
                "
              >
                Lakhani Tower, Main Zaibunissa Street,
                Saddar, Karachi
              </p>
            </div>
          </div>

          <a
           href="https://www.google.com/maps/search/?api=1&query=Citizen%20Jewellers%20by%20lakhany%20%26%20Sons&query_place_id=ChIJcerXJnI-sz4RcTsrptbMhc0"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              min-h-13
              shrink-0
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-[#D4AF37]/45
              px-7
              py-3.5
              text-sm
              font-semibold
              text-[#D4AF37]
              transition
              duration-300
              hover:-translate-y-1
              hover:bg-[#D4AF37]
              hover:text-black
            "
          >
            <MapPin
              size={18}
              aria-hidden="true"
            />

            Open in Maps
          </a>
        </motion.div>

        {/* =====================================================
            TRUST
        ===================================================== */}

        <div
          className="
            mt-8
            flex
            items-center
            justify-center
            gap-3
            text-center
            text-sm
            text-white/45
          "
        >
          <ShieldCheck
            size={18}
            className="text-[#D4AF37]"
          />

          Trusted jewellery guidance and craftsmanship
          since 1963
        </div>
      </div>
    </section>
  );
}

export default Contact;