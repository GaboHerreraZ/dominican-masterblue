export type Category = {
  spanishLabel: string;
  englishLabel: string;
  key:
    | "habitacion"
    | "cocina"
    | "bano"
    | "dormitorio"
    | "salon"
    | "oficina"
    | "otros";
};

export type SubCategory = {
  spanishLabel: string;
  englishLabel: string;

  key: "escritorio" | "silla" | "cama" | "sofa" | "mesa" | "armario" | "otros";
};

export const categories: Category[] = [
  {
    spanishLabel: "Habitación",
    englishLabel: "Room",
    key: "habitacion",
  },
  {
    spanishLabel: "Cocina",
    englishLabel: "Kitchen",
    key: "cocina",
  },
  {
    spanishLabel: "Baño",
    englishLabel: "Bathroom",
    key: "bano",
  },
  {
    spanishLabel: "Salón",
    englishLabel: "Living room",
    key: "salon",
  },
  {
    spanishLabel: "Dormitorio",
    englishLabel: "Bedroom",
    key: "dormitorio",
  },
  {
    spanishLabel: "Oficina",
    englishLabel: "Office",
    key: "oficina",
  },
  {
    spanishLabel: "Otros",
    englishLabel: "Other",
    key: "otros",
  },
];

export const subcategories: SubCategory[] = [
  {
    spanishLabel: "Escritorio",
    englishLabel: "Desk",
    key: "escritorio",
  },
  {
    spanishLabel: "Silla",
    englishLabel: "Chair",
    key: "silla",
  },
  {
    spanishLabel: "Cama",
    englishLabel: "Bed",
    key: "cama",
  },
  {
    spanishLabel: "Sofá",
    englishLabel: "Sofa",
    key: "sofa",
  },
  {
    spanishLabel: "Mesa",
    englishLabel: "Table",
    key: "mesa",
  },
  {
    spanishLabel: "Armario",
    englishLabel: "Wardrobe",
    key: "armario",
  },
  {
    spanishLabel: "Otros",
    englishLabel: "Other",
    key: "otros",
  },
];
