export const restaurant = {
  name: "Aurum",
  tagline: "Nowoczesna kuchnia polska w sercu miasta",
  address: "ul. Złota 12, 00-120 Warszawa",
  phone: "+48 22 123 45 67",
  email: "rezerwacje@aurum.example",
};

export const hours = [
  { days: "Wtorek – Czwartek", time: "17:00 – 23:00" },
  { days: "Piątek – Sobota", time: "13:00 – 24:00" },
  { days: "Niedziela", time: "13:00 – 21:00" },
  { days: "Poniedziałek", time: "Zamknięte" },
];

export type MenuItem = {
  name: string;
  description: string;
  price: number;
};

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "starters",
    label: "Przystawki",
    items: [
      {
        name: "Tatar z polędwicy",
        description: "żółtko wędzone, kapary, olej z estragonu, chrupiący chleb żytni",
        price: 56,
      },
      {
        name: "Krem z białych szparagów",
        description: "oliwa pietruszkowa, prażone migdały, mikro zioła",
        price: 38,
      },
      {
        name: "Śledź w trzech odsłonach",
        description: "jabłko, buraki, śmietana kwaśna, koperek",
        price: 44,
      },
    ],
  },
  {
    id: "mains",
    label: "Dania główne",
    items: [
      {
        name: "Policzki wołowe",
        description: "puree z selera, sos demi-glace, marynowana gruszka",
        price: 92,
      },
      {
        name: "Sandacz w skórze",
        description: "kapusta młoda, sos maślany, kawior z ryb",
        price: 86,
      },
      {
        name: "Kaczka dwa sposoby",
        description: "pierś i konfitowane udko, kasza gryczana, wiśnie",
        price: 98,
      },
    ],
  },
  {
    id: "desserts",
    label: "Desery",
    items: [
      {
        name: "Sernik na zimno",
        description: "twaróg wędzony, malinowy sorbet, tuile z orzechów",
        price: 36,
      },
      {
        name: "Fondant czekoladowy",
        description: "lody z palonego masła, sól morska",
        price: 38,
      },
    ],
  },
];

export const formatPrice = (value: number) => `${value} zł`;
