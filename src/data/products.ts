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
    name: "Royal Diamond Gold Necklace",
    category: "Bridal Jewellery",
    price: 850000,
    purity: "21K Gold",
    weight: "45 Grams",
    images: ["/images/bridal.webp", "/images/diamond.webp", "/images/gold.webp"],
    description:
      "A statement bridal necklace handcrafted with refined finishing and traditional artistry for milestone celebrations.",
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
    images: ["/images/gold.webp", "/images/bridal.webp"],
    description:
      "Elegant handcrafted bangles designed for everyday luxury, gifting and special occasions.",
    rating: 5,
    details: {
      making: "Traditional Craftsmanship",
      certification: "Hallmarked",
    },
  },
  {
    id: "emerald-bridal-set",
    name: "Emerald Bridal Jewellery Set",
    category: "Luxury Collection",
    price: 1250000,
    purity: "21K Gold",
    weight: "70 Grams",
    images: ["/images/diamond.webp", "/images/bridal.webp", "/images/gold.webp"],
    description:
      "A premium bridal set that combines royal heritage with a contemporary luxury silhouette.",
    rating: 5,
    details: {
      making: "Master Artisan Crafted",
      certification: "Certified Gold",
      gemstone: "Natural Emerald",
    },
  },
  {
    id: "mens-signature-ring",
    name: "Men's Signature Gold Ring",
    category: "Men's Collection",
    price: 185000,
    purity: "21K Gold",
    weight: "10 Grams",
    images: ["/images/mens.webp", "/images/gold.webp"],
    description:
      "A bold yet refined men's ring created for formal wear and distinguished everyday styling.",
    rating: 5,
    details: {
      making: "Precision Finished",
      certification: "Hallmarked",
    },
  },
];
