"use server";
import prisma from "@/lib/prisma";

interface Props {
  page?: number;
  take?: number;
  category?: string;
  subcategory?: string[];
  orderBy?: string;
  order?: string;
  state?: string
}

export const getProducts = async ({
  page = 1,
  take = 2,
  category,
  subcategory,
  orderBy = "spanishName",
  order = "asc",
  state = "true"
}: Props) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  const whereClause = {
    state: state === "true" ? true : false, 
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
  };

  try {
    const products = await prisma.product.findMany({
      skip: (page - 1) * take,
      take,
      where: !category
        ? {
            state: state === "true" ? true : false, 
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
            state: state === "true" ? true : false, 
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
