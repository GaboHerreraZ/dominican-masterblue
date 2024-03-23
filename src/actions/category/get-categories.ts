"use server";

import { Category } from "@/interfaces/category";
import prisma from "@/lib/prisma";

export const getCategories = async () => {
  return (await prisma.category.findMany()) as Category[];
};
