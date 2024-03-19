import { Product } from "@/interfaces/product";
import prisma from "@/lib/prisma";

interface Props {
  page?: number;
  take?: number;
  category?: string[];
  subcategory?: string[];
  orderBy?: string;
  order?: string;
}

export const getProducts = async ({
  page = 1,
  take = 2,
  orderBy = "spanishName",
  order = "asc",
}: Props) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;


  try {
    const products = await prisma.product.findMany({
      skip: (page - 1) * take,
      take,
      include: {
        productImage: true,
        category: true,
        subcategory: true,
      },
      orderBy: {
        [orderBy]: order,
      },
    });    

    const totalCount = await prisma.product.count();

    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages,
      products
    };
  } catch (e) {
    return null;
  }
};
