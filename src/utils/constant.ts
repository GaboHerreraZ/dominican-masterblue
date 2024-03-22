import { Order } from "@/interfaces/order";

export const ORDERBY: Order[] = [
  {
    id: "name-asc",
    orderBy: "name",
    order: "asc",
    name: "Alfabéticamente, A-Z",
  },
  {
    id: "name-desc",
    orderBy: "name",
    order: "desc",
    name: "Alfabéticamente, Z-A",
  },
  {
    id: "price-asc",
    orderBy: "detailPrice",
    order: "asc",
    name: "Precio, menor a mayor",
  },
  {
    id: "price-desc",
    orderBy: "detailPrice",
    order: "desc",
    name: "Precio, mayor a menor",
  },
];
