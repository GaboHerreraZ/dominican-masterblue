import { Service } from "@/domain/model/service";
import design from "../../public/img/jpg/design.jpg";
import render from "../../public/img/jpg/render.jpg";
import lamps from "../../public/img/jpg-end/lamps.jpg";
import little from "../../public/img/jpg-end/world-little-ones.jpg";
import upholstery from "../../public/img/jpg-end/furniture-upholstery.jpg";
import kitchen from "../../public/img/jpg-end/kitchen.jpg";
import integrity from "../../public/img/jpg-end/integrity.jpg";
import innovation from "../../public/img/jpg-end/innovation.jpg";
import quality from "../../public/img/jpg-end/quality.jpg";
import customer from "../../public/img/jpg-end/customer.jpg";

import { Value } from "@/domain/model/value";

export const CATEGORIES_FILTER: TypeCategory[] = [
  "room",
  "kitchen",
  "bathroom",
  "livingRoom",
  "childrenRoom",
];

export const SUBCATEGORIES_FILTER: TypeSubCategory[] = [
  "upholsteredBeds",
  "customBeds",
  "lamps",
  "toyFurniture",
  "gameTablesAndChairs",
  "montessoriBeds",
  "closets",
  "furnitures",
  "shelves",
  "nightstand",
  "tvFurniture",
  "desk",
  "queenBed",
  "kingBed",
  "fullBed",
  "upholsteredBed",
  "mirrors",
  "wickerLamps",
  "stoppers",
  "furnitureAccessories",
  "cabinets",
  "livingRoomSets",
  "centerTable",
  "diningRoom",
  "diningChairs",
  "appliques",
  "coatings",
];

export type TypeCategory =
  | "room"
  | "kitchen"
  | "bathroom"
  | "livingRoom"
  | "childrenRoom"
  | "";

export type TypeSubCategory =
  | "upholsteredBeds"
  | "customBeds"
  | "lamps"
  | "toyFurniture"
  | "gameTablesAndChairs"
  | "montessoriBeds"
  | "closets"
  | "furnitures"
  | "shelves"
  | "nightstand"
  | "tvFurniture"
  | "desk"
  | "queenBed"
  | "kingBed"
  | "fullBed"
  | "upholsteredBed"
  | "mirrors"
  | "wickerLamps"
  | "stoppers"
  | "furnitureAccessories"
  | "cabinets"
  | "livingRoomSets"
  | "centerTable"
  | "diningRoom"
  | "diningChairs"
  | "appliques"
  | "coatings";

export type Category = {
  spanishLabel: string | null;
  englishLabel: string | null;
  key: TypeCategory;
};

export type SubCategory = {
  spanishLabel?: string;
  englishLabel?: string;
  category?: TypeCategory;
  key: TypeSubCategory;
};

export const CATEGORIES: Category[] = [
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
    spanishLabel: "Sala Comedor",
    englishLabel: "Living room",
    key: "livingRoom",
  },
  {
    spanishLabel: "Habitación Niños",
    englishLabel: "Children's room",
    key: "childrenRoom",
  },
];

export const SUBCATEGORIES: SubCategory[] = [
  {
    spanishLabel: "Mesa de Noche",
    englishLabel: "Nightstand",
    key: "nightstand",
    category: "room",
  },
  {
    spanishLabel: "Muebles Tv",
    englishLabel: "TV Furniture",
    key: "tvFurniture",
    category: "room",
  },
  {
    spanishLabel: "Escritorios",
    englishLabel: "Desks",
    key: "desk",
    category: "room",
  },
  {
    spanishLabel: "Cama Queen",
    englishLabel: "Queen Bed",
    key: "queenBed",
    category: "room",
  },
  {
    spanishLabel: "Cama King",
    englishLabel: "King Bed",
    key: "kingBed",
    category: "room",
  },
  {
    spanishLabel: "Cama Full",
    englishLabel: "Full Bed",
    key: "fullBed",
    category: "room",
  },
  {
    spanishLabel: "Cama Tapizada",
    englishLabel: "Upholstered Bed",
    key: "upholsteredBed",
    category: "room",
  },
  {
    spanishLabel: "Espejos",
    englishLabel: "Mirrors",
    key: "mirrors",
    category: "room",
  },
  {
    spanishLabel: "Lamparas en Mimbre",
    englishLabel: "Wicker Lamps",
    key: "wickerLamps",
    category: "room",
  },
  {
    spanishLabel: "Closets",
    englishLabel: "Closets",
    key: "closets",
    category: "room",
  },
  {
    spanishLabel: "Gabinetes aéreos  y de piso",
    englishLabel: "Overhead and Floor Cabinets",
    key: "cabinets",
    category: "kitchen",
  },
  {
    spanishLabel: "Accesorios para muebles",
    englishLabel: "Furniture Accessories",
    key: "furnitureAccessories",
    category: "kitchen",
  },
  {
    spanishLabel: "Topes",
    englishLabel: "Stoppers",
    key: "stoppers",
    category: "kitchen",
  },
  {
    spanishLabel: "Juegos de Sala Tapizados",
    englishLabel: "Upholstered Living Room Sets",
    key: "livingRoomSets",
    category: "livingRoom",
  },
  {
    spanishLabel: "Mesa de Centro",
    englishLabel: "Center Table",
    key: "centerTable",
    category: "livingRoom",
  },
  {
    spanishLabel: "Muebles Tv",
    englishLabel: "TV Furniture",
    key: "tvFurniture",
    category: "livingRoom",
  },
  {
    spanishLabel: "Comedor",
    englishLabel: "Dining Room",
    key: "diningRoom",
    category: "livingRoom",
  },
  {
    spanishLabel: "Sillas Comedor",
    englishLabel: "Dining Chairs",
    key: "diningChairs",
    category: "livingRoom",
  },
  {
    spanishLabel: "Espejos",
    englishLabel: "Mirrors",
    key: "mirrors",
    category: "livingRoom",
  },
  {
    spanishLabel: "Apliques",
    englishLabel: "Appliques",
    key: "appliques",
    category: "livingRoom",
  },
  {
    spanishLabel: "Revestimientos",
    englishLabel: "Coatings",
    key: "coatings",
    category: "livingRoom",
  },

  {
    spanishLabel: "Muebles",
    englishLabel: "Furnitures",
    key: "furnitures",
    category: "bathroom",
  },
  {
    spanishLabel: "Espejos",
    englishLabel: "Mirrors",
    key: "mirrors",
    category: "bathroom",
  },
  {
    spanishLabel: "Repisas",
    englishLabel: "Shelves",
    key: "shelves",
    category: "bathroom",
  },
  {
    spanishLabel: "Revestimientos",
    englishLabel: "Coatings",
    key: "coatings",
    category: "bathroom",
  },

  {
    spanishLabel: "Camas Montesori",
    englishLabel: "Montessori Beds",
    key: "montessoriBeds",
    category: "childrenRoom",
  },
  {
    spanishLabel: "Camas Personalizadas",
    englishLabel: "Custom Beds",
    key: "customBeds",
    category: "childrenRoom",
  },
  {
    spanishLabel: "Camas Tapizadas",
    englishLabel: "Upholstered Beds",
    key: "upholsteredBeds",
    category: "childrenRoom",
  },
  {
    spanishLabel: "Closets",
    englishLabel: "Closets",
    key: "closets",
    category: "childrenRoom",
  },
  {
    spanishLabel: "Muebles para Juguetes",
    englishLabel: "Toy Furniture",
    key: "toyFurniture",
    category: "childrenRoom",
  },
  {
    spanishLabel: "Repisas",
    englishLabel: "Shelves",
    key: "shelves",
    category: "childrenRoom",
  },
  {
    spanishLabel: "Apliques",
    englishLabel: "Appliques",
    key: "appliques",
    category: "childrenRoom",
  },
  {
    spanishLabel: "Lamparas",
    englishLabel: "Lamps",
    key: "lamps",
    category: "childrenRoom",
  },
  {
    spanishLabel: "Escritorios",
    englishLabel: "Desks",
    key: "desk",
    category: "childrenRoom",
  },
  {
    spanishLabel: "Mesas de Juegos y Sillas",
    englishLabel: "Game Tables and Chairs",
    key: "gameTablesAndChairs",
    category: "childrenRoom",
  },
];

export const SERVICES: Service[] = [
  {
    title: "interiorDesign",
    description: "interiorDesingDescriptions",
    right: false,
    image: design,
    link: "diseno-interior",
    tips: [
      {
        title: "interiorDesignTip1Title",
        description: "interiorDesignTip1Description",
      },
      {
        title: "interiorDesignTip2Title",
        description: "interiorDesignTip2Description",
      },
      {
        title: "interiorDesignTip3Title",
        description: "interiorDesignTip3Description",
      },
      {
        title: "interiorDesignTip4Title",
        description: "interiorDesignTip4Description",
      },
    ],
  },
  {
    title: "restoration",
    description: "restorationDescription",
    right: true,
    image: kitchen,
    link: "fabricacion-muebles",
    tips: [
      {
        title: "furnitureManufacturingTip1Title",
        description: "furnitureManufacturingTip1Description",
      },
      {
        title: "furnitureManufacturingTip2Title",
        description: "furnitureManufacturingTip2Description",
      },
      {
        title: "furnitureManufacturingTip3Title",
        description: "furnitureManufacturingTip3Description",
      },
      {
        title: "furnitureManufacturingTip4Title",
        description: "furnitureManufacturingTip4Description",
      },
    ],
  },
  {
    title: "architectureRender",
    description: "architectureRenderDescription",
    right: false,
    image: render,
    link: "arquitectura-render",
    tips: [
      {
        title: "architectureRenderTip1Title",
        description: "architectureRenderTip1Description",
      },
      {
        title: "architectureRenderTip2Title",
        description: "architectureRenderTip2Description",
      },
      {
        title: "architectureRenderTip3Title",
        description: "architectureRenderTip3Description",
      },
      {
        title: "architectureRenderTip4Title",
        description: "architectureRenderTip4Description",
      },
    ],
  },
  {
    title: "furnitureUpholstery",
    description: "furnitureUpholsteryDescription",
    right: true,
    image: upholstery,
    link: "tapizado",
    tips: [
      {
        title: "furnitureUpholsteryTip1Title",
        description: "furnitureUpholsteryTip1Description",
      },
      {
        title: "furnitureUpholsteryTip2Title",
        description: "furnitureUpholsteryTip2Description",
      },
      {
        title: "furnitureUpholsteryTip3Title",
        description: "furnitureUpholsteryTip3Description",
      },
      {
        title: "furnitureUpholsteryTip4Title",
        description: "furnitureUpholsteryTip4Description",
      },
    ],
  },
  {
    title: "handMadeDecoration",
    description: "handMadeDecorationDescription",
    right: false,
    image: lamps,
    link: "lamparas-decoracion-artesanal",
    tips: [
      {
        title: "handmadeDecorationTip1Title",
        description: "handmadeDecorationTip1Description",
      },
      {
        title: "handmadeDecorationTip2Title",
        description: "handmadeDecorationTip2Description",
      },
      {
        title: "handmadeDecorationTip3Title",
        description: "handmadeDecorationTip3Description",
      },
      {
        title: "handmadeDecorationTip4Title",
        description: "handmadeDecorationTip4Description",
      },
    ],
  },
  {
    title: "WorldforLittleOnes",
    description: "WorldforLittleOnesDescription",
    right: true,
    image: little,
    link: "/mundo-para-niños",
    tips: [
      {
        title: "worldForLittleOneTip1Title",
        description: "worldForLittleOneTip1Description",
      },
      {
        title: "worldForLittleOneTip2Title",
        description: "worldForLittleOneTip2Description",
      },
      {
        title: "worldForLittleOneTip3Title",
        description: "worldForLittleOneTip3Description",
      },
      {
        title: "worldForLittleOneTip4Title",
        description: "worldForLittleOneTip4Description",
      },
    ],
  },
];

export const VALUES: Value[] = [
  {
    title1: "value1",
    title2: "value12",
    description: "value1Description",
    image: integrity,
  },
  {
    title1: "value2",
    title2: "value22",
    description: "value2Description",
    image: innovation,
  },
  {
    title1: "value3",
    title2: "value32",
    description: "value3Description",
    image: quality,
  },
  {
    title1: "value4",
    title2: "value42",
    description: "value4Description",
    image: customer,
  },
];
