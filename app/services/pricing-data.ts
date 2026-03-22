export type PriceItem = {
  name: string;
  price: string;
  note?: string;
};

export type PriceSubsection = {
  title: string;
  items: PriceItem[];
};

export type PriceCategory = {
  title: string;
  items?: PriceItem[];
  subsections?: PriceSubsection[];
};

/** Deux colonnes : gauche épilations & mains/pieds, droite massages, visage, vajacial, sourcils, corps. */
export const PRICING_COLUMNS: PriceCategory[][] = [
  [
    {
      title: "Épilations femmes",
      items: [
        { name: "Sourcils", price: "9€" },
        { name: "Lèvres / menton / joues", price: "10€" },
        { name: "Aisselles", price: "13€" },
        { name: "Avant-bras", price: "15€" },
        { name: "Bras", price: "18€" },
        { name: "Poitrine", price: "15€" },
        { name: "Ventre", price: "15€" },
        { name: "Maillot simple", price: "17€" },
        { name: "Maillot échancré", price: "20€" },
        { name: "Maillot intégral", price: "30€" },
        { name: "Maillot intégral + interfessiers", price: "38€" },
        { name: "1/2 jambes", price: "18€" },
        { name: "Jambes entières", price: "30€" },
        { name: "Dos", price: "17€" },
        { name: "Cuisses", price: "22€" },
        { name: "Sillon interfessiers", price: "15€" },
        { name: "Fesses", price: "15€" },
      ],
    },
    {
      title: "Épilations hommes",
      items: [
        { name: "Sourcils", price: "12€" },
        { name: "Barbe 1ère fois", price: "35€" },
        { name: "Barbe entretien", price: "28€" },
        { name: "Aisselles", price: "18€" },
        { name: "Avant-bras", price: "20€" },
        { name: "Bras", price: "25€" },
        { name: "Poitrine / dos", price: "28€" },
        { name: "Ventre", price: "22€" },
        { name: "1/2 jambes", price: "25€" },
        { name: "Jambes entières", price: "42€" },
      ],
    },
    {
      title: "Soins des pieds",
      items: [
        { name: "Soin complet", price: "45€" },
        { name: "Mise en beauté", price: "28€" },
      ],
    },
    {
      title: "Soins des mains",
      items: [
        { name: "Soin complet", price: "30€" },
        { name: "Mise en beauté", price: "22€" },
        { name: "Pose de vernis simple", price: "10€" },
      ],
    },
  ],
  [
    {
      title: "Modelage relaxant / Massages",
      items: [
        { name: "Dos 20 min", price: "25€" },
        { name: "Postérieur 30 min", price: "35€" },
        { name: "Massage 1h", price: "70€" },
        { name: "Massage 1h20", price: "90€" },
        { name: "Jambes lourdes 1h20", price: "80€" },
      ],
    },
    {
      title: "Soins visage (H2O Facial & autres)",
      items: [
        { name: "Soin H2O BASIC", price: "90€" },
        { name: "Soin H2O PERFECT", price: "120€" },
        { name: "Soin H2O EXPRESS", price: "50€" },
        { name: "Soin H2O SCULPT LIFT", price: "80€" },
        { name: "Luminothérapie", price: "30€" },
        { name: "Soin BASIC (sans appareil)", price: "60€" },
        { name: "Soin ANTI RIDES (sans appareil)", price: "70€" },
        { name: "Soin COUP D'ÉCLAT (sans appareil)", price: "45€" },
      ],
    },
    {
      title: "Soin vajacial",
      items: [
        { name: "Sans épilation", price: "45€" },
        { name: "Épilation intégral", price: "65€" },
        { name: "Épilation échancré", price: "52€" },
      ],
      subsections: [
        {
          title: "Forfaits — épilation intégral",
          items: [
            { name: "2ème séance", price: "52€" },
            { name: "3ème séance", price: "35€" },
          ],
        },
        {
          title: "Forfaits — épilation échancré",
          items: [
            { name: "2ème séance", price: "42€" },
            { name: "3ème séance", price: "28€" },
          ],
        },
        {
          title: "Forfaits — sans épilation",
          items: [
            { name: "2ème séance", price: "36€" },
            { name: "3ème séance", price: "24€" },
          ],
        },
      ],
    },
    {
      title: "Sourcils & regard",
      items: [
        { name: "Teinture sourcils henné", price: "45€" },
        { name: "Browlift", price: "55€" },
        { name: "Teinture hybride", price: "60€" },
      ],
    },
    {
      title: "Soins corps (par zone)",
      subsections: [
        {
          title: "Radiofréquence",
          items: [
            { name: "1 séance", price: "70€" },
            { name: "6 séances", price: "385€" },
            { name: "10 séances", price: "660€" },
          ],
        },
        {
          title: "Appareil G5",
          items: [
            { name: "1 séance", price: "70€" },
            { name: "6 séances", price: "385€" },
            { name: "10 séances", price: "660€" },
          ],
        },
        {
          title: "Madérothérapie",
          items: [
            { name: "1 séance", price: "60€" },
            { name: "6 séances", price: "315€" },
            { name: "10 séances", price: "560€" },
          ],
        },
        {
          title: "Massage drainant",
          items: [
            { name: "1 séance", price: "55€" },
            { name: "6 séances", price: "285€" },
            { name: "10 séances", price: "510€" },
          ],
        },
      ],
    },
  ],
];
