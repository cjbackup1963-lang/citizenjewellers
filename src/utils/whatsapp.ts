export function openWhatsApp(productName: string, purity: string) {
  const phone = "9233352484936";

  const message = `Assalam-o-Alaikum,

I am interested in:

${productName}
Purity: ${purity}

Please share the latest price, weight and availability.

Thank you.`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}