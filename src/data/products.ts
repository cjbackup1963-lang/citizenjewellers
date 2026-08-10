export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  purity: string;
  weight: string;
  images: string[];
  description: string;
  rating: number;
  details: {
    making: string;
    certification: string;
    gemstone?: string;
  };
}

export const products: Product[] = [
  {
    id: "royal-diamond-necklace",
    name:"Royal Diamond Gold Jewellery",
    category: "Bridal Jewellery",
    price: 850000,
    purity: "21K Gold",
    weight: "45 Grams",
    images: [
      "/images/luxury/featured/necklace.webp",
    ],
    description:
      "An elegant handcrafted bridal necklace featuring timeless luxury, exceptional craftsmanship and premium finishing.",
    rating: 5,
    details: {
      making: "Handcrafted",
      certification: "Hallmarked",
      gemstone: "Natural Diamonds",
    },
  },

  {
    id: "classic-gold-bangle",
    name: "Classic Royal Gold Bangles",
    category: "Gold Bangles",
    price: 420000,
    purity: "21K Gold",
    weight: "25 Grams",
    images: [
      "/images/luxury/featured/bangles.webp",
    ],
    description:
      "Beautifully handcrafted 21K gold bangles designed for timeless elegance and everyday luxury.",
    rating: 5,
    details: {
      making: "Traditional Craftsmanship",
      certification: "Hallmarked",
    },
  },

  {
    id: "Bridal Jewellery Set",
    name: "Bridal Jewellery Set",
    category: "Luxury Collection",
    price: 1250000,
    purity: "21K Gold",
    weight: "70 Grams",
    images: [
      "/images/luxury/featured/emerald-bridal.webp",
    ],
    description:
      "A magnificent bridal jewellery set featuring emerald stones, luxurious detailing and master craftsmanship.",
    rating: 5,
    details: {
      making: "Master Artisan Crafted",
      certification: "Certified Gold",
      gemstone: "Natural Emerald",
    },
  },

  {
    id: "mens-signature-ring",
    name: "Men's Signature Silver Collection",
    category: "Men's Collection",
    price: 185000,
    purity: "925 Silver",
    weight: "10 Grams",
    images: [
      "/images/luxury/featured/mens-ring.webp",
    ],
    description:
      "A premium men's silver signet ring crafted with precision for modern and formal styling.",
    rating: 5,
    details: {
      making: "Precision Finished",
      certification: "925 Sterling Silver",
    },
  },
];