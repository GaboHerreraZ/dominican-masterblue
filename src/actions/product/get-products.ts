"use server";
import prisma from "@/lib/prisma";

interface Props {
  page?: number;
  take?: number;
  category?: string;
  subcategory?: string[];
  orderBy?: string;
  order?: string;
}

export const getProducts = async ({
  page = 1,
  take = 2,
  category,
  subcategory,
  orderBy = "spanishName",
  order = "asc",
}: Props) => {
  console.log("entre");
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  const whereClause = {
    category: {
      spanishDescription: category,
    },
    ...(subcategory?.length && {
      OR: [
        {
          subcategory: {
            spanishDescription: {
              in: subcategory,
            },
          },
        },
      ],
    }),
  };

  try {
    const products = await prisma.product.findMany({
      skip: (page - 1) * take,
      take,
      where: !category
        ? {
            ...(subcategory?.length && {
              OR: [
                {
                  subcategory: {
                    spanishDescription: {
                      in: subcategory,
                    },
                  },
                },
              ],
            }),
          }
        : whereClause,
      include: {
        productImage: true,
        category: true,
        subcategory: true,
      },
      orderBy: {
        [orderBy]: order,
      },
    });

    // console.log("products prisma", products);

    const totalCount = await prisma.product.count();

    // console.log("products totalCount", totalCount);

    const totalPages = Math.ceil(totalCount / take);

    // console.log("products totalPages", totalCount);

    return {
      currentPage: page,
      totalPages,
      products,
    };
  } catch (e) {
    // console.log("error", e);
    return null;
  }
};
