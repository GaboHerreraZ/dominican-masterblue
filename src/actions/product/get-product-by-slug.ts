"use server";
import prisma from "@/lib/prisma";

export const getProductBySlug = async (slug: string) => {
  return await prisma.product.findUnique({
    where: {
      slug,
    },
    include: {
      productImage: true,
      category: true,
      subcategory: true,
    },
  });
};
