"use server";

import { Base } from "@/interfaces/base";
import prisma from "@/lib/prisma";

export const getSubcategories = async () => {
  return (await prisma.subcategory.findMany()) as Base[];
};
