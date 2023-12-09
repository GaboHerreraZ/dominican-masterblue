export type Category = {
  spanishLabel: string;
  englishLabel: string;
  key:
    | "room"
    | "kitchen"
    | "bathroom"
    | "livingroom"
    | "bedroom"
    | "office"
    | "other";
};

export type SubCategory = {
  spanishLabel: string;
  englishLabel: string;

  key: "desk" | "chair" | "bed" | "sofa" | "table" | "wardrobe" | "other";
};

export const categories: Category[] = [
  {
    spanishLabel: "Habitación",
    englishLabel: "Room",
    key: "room",
  },
  {
    spanishLabel: "Cocina",
    englishLabel: "Kitchen",
    key: "kitchen",
  },
  {
    spanishLabel: "Baño",
    englishLabel: "Bathroom",
    key: "bathroom",
  },
  {
    spanishLabel: "Salón",
    englishLabel: "Living room",
    key: "livingroom",
  },
  {
    spanishLabel: "Dormitorio",
    englishLabel: "Bedroom",
    key: "bedroom",
  },
  {
    spanishLabel: "Oficina",
    englishLabel: "Office",
    key: "office",
  },
  {
    spanishLabel: "Otros",
    englishLabel: "Other",
    key: "other",
  },
];

export const subcategories: SubCategory[] = [
  {
    spanishLabel: "Escritorio",
    englishLabel: "Desk",
    key: "desk",
  },
  {
    spanishLabel: "Silla",
    englishLabel: "Chair",
    key: "chair",
  },
  {
    spanishLabel: "Cama",
    englishLabel: "Bed",
    key: "bed",
  },
  {
    spanishLabel: "Sofá",
    englishLabel: "Sofa",
    key: "sofa",
  },
  {
    spanishLabel: "Mesa",
    englishLabel: "Table",
    key: "table",
  },
  {
    spanishLabel: "Armario",
    englishLabel: "Wardrobe",
    key: "wardrobe",
  },
  {
    spanishLabel: "Otros",
    englishLabel: "Other",
    key: "other",
  },
];
