import { motion } from "framer-motion";
import {
  ArrowRight,
  ShoppingCart,
  Heart,
  Eye,
} from "lucide-react";

function FeaturedJewellery() {
  const collections = [
    {
      title: "Gold Jewellery",
      description: "Elegant handcrafted gold jewellery with timeless luxury.",
      image: "/images/gold.webp",
      badge: "BEST SELLER",
    },
    {
      title: "Diamond Jewellery",
      description: "Luxury diamond masterpieces with unmatched brilliance.",
      image: "/images/diamond.webp",
      badge: "NEW",
    },
    {
      title: "Bridal Collection",
      description: "Exclusive bridal jewellery for unforgettable weddings.",
      image: "/images/bridal.webp",
      badge: "PREMIUM",
    },
    {
      title: "Custom Jewellery",
      description: "Create your dream jewellery with our master craftsmen.",
      image: "/images/mens.webp",
      badge: "CUSTOM",
    },
  ];

  return (
    <section className="relative py-28 px-6">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 uppercase tracking-[8px] text-[#D4AF37]">
            Luxury Collection
          </p>

          <h2 className="text-5xl font-bold text-white">
            Featured Jewellery
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Crafted with elegance and trusted by generations since 1963.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {collections.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
              }}
              className="
              group
              overflow-hidden
              rounded-3xl
              border
              border-[#D4AF37]/20
              bg-black/30
              backdrop-blur-xl
              shadow-[0_0_50px_rgba(212,175,55,0.12)]
              transition-all
              duration-500
              hover:border-[#D4AF37]
              hover:shadow-[0_0_70px_rgba(212,175,55,0.30)]
              "
            >

              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                  h-80
                  w-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                {/* Badge */}

                <span
                  className="
                  absolute
                  left-4
                  top-4
                  rounded-full
                  bg-[#D4AF37]
                  px-4
                  py-1
                  text-xs
                  font-bold
                  text-black
                  "
                >
                  {item.badge}
                </span>

                {/* Icons */}

                <div className="absolute right-4 top-4 flex flex-col gap-3">

                  <button className="rounded-full bg-black/60 p-3 text-white backdrop-blur-md transition hover:bg-[#D4AF37] hover:text-black">
                    <Heart size={18} />
                  </button>

                  <button className="rounded-full bg-black/60 p-3 text-white backdrop-blur-md transition hover:bg-[#D4AF37] hover:text-black">
                    <Eye size={18} />
                  </button>

                </div>

              </div>

              {/* Content */}

              <div className="p-7">

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-300">
                  {item.description}
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <button
                    className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#D4AF37]
                    px-5
                    py-3
                    font-semibold
                    text-black
                    transition
                    hover:scale-105
                    "
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>

                  <button
                    className="
                    flex
                    items-center
                    gap-2
                    text-[#D4AF37]
                    transition
                    hover:gap-4
                    "
                  >
                    View

                    <ArrowRight size={18} />

                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedJewellery;