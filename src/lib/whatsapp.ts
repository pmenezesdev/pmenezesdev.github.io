export type WhatsappMessageOptions = {
  firstName: string;
  topic?: string;
  sellerName?: string;
};

export function buildWhatsappMessage({ firstName, topic, sellerName }: WhatsappMessageOptions) {
  const parts = [`Olá, ${firstName}!`];
  if (sellerName) parts.push(`Vim pela indicação de ${sellerName}.`);
  parts.push(
    topic
      ? `Gostaria de um orçamento para: ${topic}.`
      : 'Vi seu portfólio e gostaria de um orçamento.',
  );
  return parts.join(' ');
}

export function buildWhatsappUrl(phone: string, message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
