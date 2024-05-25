"use server";
import prisma from "@/lib/prisma";

export const getProductsSku = async () => {
  return await prisma.product.findMany({
    select: {
      sku: true,
      spanishName:true,
    },
  });
};
