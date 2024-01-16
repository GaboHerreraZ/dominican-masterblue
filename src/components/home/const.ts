import kitchen from "../../../public/img/jpg-end/kitchen.jpg";
import bedroom from "../../../public/img/jpg-end/bedroom.jpg";
import childrenRoom from "../../../public/img/jpg-end/childrens-room.jpg";
import bathroom from "../../../public/img/jpg-end/bathroom.jpg";

import { CategoryProduct } from "@/domain/model/categoryProduct";

export const CATEGORIES: CategoryProduct[] = [
  {
    title: "bedRooms",
    imagen: bedroom,
    category: "room",
  },
  {
    title: "childrensRoom",
    imagen: childrenRoom,
    category: "childrenRoom",
  },
  {
    title: "bathRoom",
    imagen: bathroom,
    category: "bathroom",
  },
  {
    title: "kitchen",
    imagen: kitchen,
    category: "kitchen",
  },
];
