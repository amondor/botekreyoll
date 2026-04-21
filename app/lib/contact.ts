/** Numéro affiché et utilisé pour tel: / WhatsApp (+590 690 29 38 52) */
export const PHONE_E164 = "+590690293852";
export const PHONE_DISPLAY = "+590 690 29 38 52";

const WA_NUMBER = "590690293852";

export const WHATSAPP_RESERVE_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Bonjour, je souhaite prendre rendez-vous à l’institut Boté Kréyol.",
)}`;

/** Avis Google — URL simple (sans API). Remplacez par le lien direct de votre fiche si vous préférez. */
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Bot%C3%A9+Kr%C3%A9y%C3%B2l+Avis";

export const SALON_HOURS: { day: string; hours: string }[] = [
  { day: "Mardi", hours: "09:00 – 17:00" },
  { day: "Mercredi", hours: "09:00 – 17:00" },
  { day: "Jeudi", hours: "09:00 – 17:00" },
  { day: "Vendredi", hours: "09:00 – 17:00" },
  { day: "Samedi", hours: "09:00 – 17:00" },
];

export const SALON_ADDRESS_LINES = [
  "Boté Kréyòl",
  "3 Rue de l'Egalité",
  "Saint-François 97118",
  "Guadeloupe",
] as const;

/** Recherche Maps : nom commercial + adresse pour épingler la fiche « Boté Kréyòl » */
const MAP_QUERY =
  "Boté Kréyòl, 3 Rue de l'Egalité, 97118 Saint-François, Guadeloupe";

/** iframe Google Maps (sans clé API) */
export const SALON_MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(
  MAP_QUERY,
)}&hl=fr&z=16&output=embed`;

export const SALON_MAP_OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  MAP_QUERY,
)}`;
