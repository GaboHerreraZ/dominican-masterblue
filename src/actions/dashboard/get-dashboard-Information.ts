"use server";
import prisma from "@/lib/prisma";

export const getDashboardInformation = async () => {
  const products = await prisma.product.count();

  return {
    products,
  };
};
