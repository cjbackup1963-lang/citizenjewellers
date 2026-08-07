import { motion } from "framer-motion";
import {
  Quote,
  Star,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

const reviews = [
  {
    name: "Ahmed Khan",
    city: "Karachi",
    text: "Outstanding craftsmanship and exceptional customer service. Every detail reflected quality and professionalism.",
  },
  {
    name: "Sara Malik",
    city: "Lahore",
    text: "Our bridal jewellery was beautifully crafted. The finishing, presentation and guidance exceeded expectations.",
  },
  {
    name: "Usman Raza",
    city: "Islamabad",
    text: "A premium experience from consultation to delivery. Citizen Jewellers truly values quality and trust.",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-[#050505] px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      {/* Background Banner */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/images/luxury/testimonials/customer-testimonials-banner.webp"
          alt=""
          className="h-full w-full object-cover object-center opacity-15"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-black/85" />

      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-xs uppercase tracking-[0.42em] text-[#D4AF37]">
            Client Testimonials
          </p>

          <h2 className="mt-5 font-serif text-4xl text-white sm:text-5xl lg:text-7xl">
            Trusted Since 1963
          </h2>

          <p className="mt-6 text-white/55 leading-8">
            For generations our customers have trusted Citizen Jewellers for
            quality, honesty and exceptional craftsmanship.
          </p>
        </motion.div>

        {/* Hero Banner */}

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 bg-black shadow-[0_30px_90px_rgba(0,0,0,.45)]"
        >
          <img
            src="/images/luxury/testimonials/customer-testimonials-banner.webp"
            alt="Happy Citizen Jewellers Customers"
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Reviews */}

        <div className="mt-12 grid gap-8 lg:grid-cols-3">

          {reviews.map((review, index) => (

            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .12,
                duration: .7,
              }}
              whileHover={{ y: -8 }}
              className="
                relative
                rounded-[2rem]
                border
                border-[#D4AF37]/20
                bg-[#0b0b0b]
                p-8
              "
            >

              <Quote
                size={58}
                className="absolute right-7 top-7 text-[#D4AF37]/15"
              />

              <div className="flex gap-1">
                {[1,2,3,4,5].map((item)=>(

                  <Star
                    key={item}
                    size={18}
                    fill="currentColor"
                    className="text-[#D4AF37]"
                  />

                ))}
              </div>

              <p className="mt-6 leading-8 text-white/65">
                "{review.text}"
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">

                <h3 className="font-serif text-2xl text-white">
                  {review.name}
                </h3>

                <p className="mt-1 text-[#D4AF37]">
                  {review.city}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">

                  <ShieldCheck size={15} />

                  Verified Customer

                </div>

              </div>

            </motion.article>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-14 rounded-3xl border border-[#D4AF37]/20 bg-white/[0.03] p-8 text-center">

          <h3 className="font-serif text-3xl text-white">
            Ready to Create Your Next Jewellery Story?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/50">
            Visit our showroom or speak with our jewellery experts for
            personalised guidance.
          </p>

          <a
            href="https://wa.me/923352484936"
            target="_blank"
            rel="noreferrer"
            className="
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#D4AF37]
              px-8
              py-4
              font-semibold
              text-black
              transition
              hover:-translate-y-1
            "
          >
            <MessageCircle size={18}/>
            Contact on WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;