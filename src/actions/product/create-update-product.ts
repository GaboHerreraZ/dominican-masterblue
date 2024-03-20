"use server";

import prisma from "@/lib/prisma";
import supabase from "@/lib/supabase";
import { Product as PrismaProduct } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const createUpdateProduct = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  const { id, urlImages, images, ...rest } = data as any;

  try {
    const prismaTx = await prisma.$transaction(
      async (client) => {
        const imagesPromise: {
          folder: string;
          urlPath: string;
          promise: Promise<any>;
        }[] = [];
        const urlImages: { url: string; folder: string }[] = [];
        let product: PrismaProduct;
        const idParse = id ? (id as unknown as string) : "";

        const productParse = {
          ...rest,
          price: parseFloat(rest.price.toString()),
          length: parseInt(rest.length.toString()),
          weight: parseInt(rest.weight.toString()),
          width: parseInt(rest.width.toString()),
          height: parseInt(rest.height.toString()),
          categoryId: rest.categoryId.toString(),
          subcategoryId: rest.subcategoryId.toString(),
          quantity: parseInt(rest.quantity.toString())
            ? parseInt(rest.quantity.toString())
            : 0,
          state: rest.state === "true",
        };

        if (images) {
          const listImage = formData.getAll("images") as File[];
          listImage.forEach((file) => {
            const path = `products/${rest.slug}/${file.name}`;
            console.log(path);
            imagesPromise.push({
              urlPath: path,
              folder: `${rest.id}`,
              promise: uploadImage(path, file),
            });
          });

          await Promise.all(imagesPromise.map((item) => item.promise));

          imagesPromise.forEach((image) => {
            urlImages.push({
              folder: image.folder,
              url: getUrlImage(image.urlPath).data.publicUrl,
            });
          });
        }

        if (id) {
          product = await client.product.update({
            where: {
              id: idParse,
            },
            data: {
              ...productParse,
              productImage: {
                create: [
                  ...urlImages.map((url) => {
                    return {
                      url: url.url,
                      folder: url.folder,
                    };
                  }),
                ],
              },
            },
          });
        } else {
          product = await client.product.create({
            data: {
              ...productParse,
              productImage: {
                create: [
                  ...urlImages.map((url) => {
                    return {
                      url: url.url,
                      folder: url.folder,
                    };
                  }),
                ],
              },
            },
          });
        }
        revalidatePath("/admin/productos");
        revalidatePath(`/admin/producto/${product.id}`);
        revalidatePath(`/producto/${product.id}`);
        revalidatePath("/admin");

        return {
          ok: true,
          product: product,
        };
      },
      {
        maxWait: 5000,
        timeout: 10000,
      }
    );

    return {
      ok: prismaTx.ok,
      product: prismaTx.product,
    };
  } catch (error) {
    return {
      ok: false,
      message: "Error creando o actualizando el producto",
    };
  }
};

export const uploadImage = async (path: string, file: File) => {
  const { data, error } = await supabase.storage
    .from("products")
    .upload(path, file, {
      upsert: true,
    });

  console.log(error);
  return data;
};

export const getUrlImage = (path: string) => {
  return supabase.storage.from("products").getPublicUrl(path);
};
