"use server";

import { Base } from "@/interfaces/base";
import prisma from "@/lib/prisma";

export const getCategories = async () => {
  return (await prisma.category.findMany()) as Base[];
};
