"use server";
import prisma from "@/lib/prisma";

interface Props {
  page?: number;
  take?: number;
  category?: string;
  subcategory?: string[];
  orderBy?: string;
  order?: string;
  sku?: string;
}

export const getProducts = async ({
  page = 1,
  take = 2,
  category,
  subcategory,
  orderBy = "spanishName",
  order = "asc",
  sku,
}: Props) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  // console.log("category", category);
  // console.log("subcategory", subcategory);
  // console.log("sku", !!sku);

  const whereClause = {
    category: {
      link: category,
    },
    ...(subcategory?.length && {
      OR: [
        {
          subcategory: {
            link: {
              in: subcategory,
            },
          },
        },
      ],
    }),
    ...(!!sku && {
      sku,
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
                    link: {
                      in: subcategory,
                    },
                  },
                },
              ],
            }),
            ...(!!sku && {
              sku,
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

    const totalCount = await prisma.product.count({
      where: !category
        ? {
            ...(subcategory?.length && {
              OR: [
                {
                  subcategory: {
                    link: {
                      in: subcategory,
                    },
                  },
                },
              ],
            }),
            ...(!!sku && {
              sku,
            }),
          }
        : whereClause,
    });

    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages,
      products,
    };
  } catch (e) {
    return null;
  }
};
