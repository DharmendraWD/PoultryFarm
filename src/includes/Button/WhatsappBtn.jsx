const phoneNumber = "+9779866114605";

const message = `
Hi, I want to order:
Chicken: 2kg
Eggs: 1 tray
`;

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export default function WhatsappBtn() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
     className="bg-[var(--color-primary)] p-[20px] hover:bg-[var(--color-primary-hover)] rounded whatsapp-btn"
    >
      Order on WhatsApp
    </a>
  );
}