import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function Gallery() {
  const items = [
    {
      title: "Gold Jewellery",
      subtitle: "Elegant handcrafted designs",
      image: "/images/gold.webp",
    },
    {
      title: "Diamond Jewellery",
      subtitle: "Luxury brilliance for every occasion",
      image: "/images/diamond.webp",
    },
    {
      title: "Bridal Collection",
      subtitle: "Timeless wedding masterpieces",
      image: "/images/bridal.webp",
    },
    {
      title: "Custom Jewellery",
      subtitle: "Designed exclusively for you",
      image: "/images/mens.webp",
    },
    {
      title: "Gold Bangles",
      subtitle: "Classic and modern styles",
      image: "/images/gold.webp",
    },
    {
      title: "Luxury Men's Collection",
      subtitle: "Crafted with perfection",
      image: "/images/mens.webp",
    },
  ];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#050505] py-28 px-6"
    >
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="uppercase tracking-[8px] text-[#D4AF37]">
            Luxury Gallery
          </p>

          <h2 className="mt-5 text-5xl font-serif text-white md:text-7xl">
            Timeless Collections
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Discover handcrafted masterpieces inspired by luxury, elegance and
            generations of craftsmanship.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              whileHover={{ y: -12 }}
              className="group relative overflow-hidden rounded-[32px] border border-[#D4AF37]/20 bg-black"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-[430px] w-full object-cover transition duration-1000 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-serif text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-300">{item.subtitle}</p>

                <button
                  className="
                  mt-6
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#D4AF37]
                  px-5
                  py-3
                  text-[#D4AF37]
                  transition
                  hover:bg-[#D4AF37]
                  hover:text-black
                  "
                >
                  View Collection
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;