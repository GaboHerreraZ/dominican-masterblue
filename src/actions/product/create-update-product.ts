"use server";

import prisma from "@/lib/prisma";
import supabase from "@/lib/supabase";
import { Product } from "@prisma/client";
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
        let product: Product;
        const idParse = id ? (id as unknown as string) : "";

        const productParse = {
          ...rest,
          price: parseFloat(rest.price.toString())
            ? parseFloat(rest.price.toString())
            : 0,
          length: parseInt(rest.length.toString())
            ? parseFloat(rest.length.toString())
            : 0,
          weight: parseInt(rest.weight.toString())
            ? parseFloat(rest.weight.toString())
            : 0,
          width: parseInt(rest.width.toString())
            ? parseFloat(rest.width.toString())
            : 0,
          height: parseInt(rest.height.toString())
            ? parseFloat(rest.height.toString())
            : 0,
          categoryId: parseInt(rest.categoryId),
          subcategoryId: parseInt(rest.subcategoryId),
          quantity: parseInt(rest.quantity.toString())
            ? parseInt(rest.quantity.toString())
            : 0,
          state: rest.state === "true",
        };

        if (images) {
          const listImage = formData.getAll("images") as File[];
          listImage.forEach((file) => {
            const path = `products/${rest.slug}/${file.name}`;
            imagesPromise.push({
              urlPath: path,
              folder: `${rest.sku}/${file.name}`,
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
        revalidatePath(`/admin/producto/${product.sku}`);
        revalidatePath(`/producto/${product.slug}`);
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
  } catch (error: any) { //!
    //! console.log('error al crear',error.meta.target);
    return {
      ok: false,
      message: "Error creando o actualizando el producto",
      error: error.meta.target[0]
    };
  }
};

export const uploadImage = async (path: string, file: File) => {
  const { data } = await supabase.storage.from("products").upload(path, file, {
    upsert: true,
  });

  return data;
};

export const getUrlImage = (path: string) => {
  return supabase.storage.from("products").getPublicUrl(path);
};
