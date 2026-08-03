import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

function Testimonials() {
  const reviews = [
    {
      name: "Ahmed Khan",
      city: "Karachi",
      image: "https://i.pravatar.cc/200?img=11",
      text: "Outstanding craftsmanship and excellent customer service. The jewellery exceeded all my expectations.",
    },
    {
      name: "Sara Malik",
      city: "Lahore",
      image: "https://i.pravatar.cc/200?img=32",
      text: "Citizen Jewellers created our bridal jewellery beautifully. Elegant finishing and trusted quality.",
    },
    {
      name: "Usman Raza",
      city: "Islamabad",
      image: "https://i.pravatar.cc/200?img=15",
      text: "Premium experience from beginning to end. Highly recommended for luxury jewellery.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#050505] py-32 px-6"
    >
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="uppercase tracking-[8px] text-[#D4AF37]">
            Testimonials
          </p>

          <h2 className="mt-5 text-5xl font-serif text-white md:text-7xl">
            Loved By Our Clients
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Thousands of satisfied customers have trusted Citizen Jewellers for
            generations.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="relative overflow-hidden rounded-[32px] border border-[#D4AF37]/20 bg-[#0d0d0d] p-8"
            >
              <Quote
                className="absolute right-8 top-8 text-[#D4AF37]/20"
                size={60}
              />

              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="h-16 w-16 rounded-full border-2 border-[#D4AF37] object-cover"
                />

                <div>
                  <h3 className="text-xl font-serif text-white">
                    {review.name}
                  </h3>

                  <p className="text-sm text-[#D4AF37]">
                    {review.city}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    fill="currentColor"
                    className="text-[#D4AF37]"
                  />
                ))}
              </div>

              <p className="mt-6 leading-8 text-gray-300">
                "{review.text}"
              </p>

              <div className="mt-8 border-t border-[#D4AF37]/20 pt-5">
                <span className="rounded-full border border-[#D4AF37]/30 px-4 py-2 text-xs uppercase tracking-[3px] text-[#D4AF37]">
                  Verified Customer
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;