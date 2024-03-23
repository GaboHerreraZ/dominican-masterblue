"use server";

import prisma from "@/lib/prisma";
import supabase from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export const deleteImage = async (id: number, path: string) => {
  try {
    const prismaTx = await prisma.$transaction(async (client) => {
      await client.productImage.delete({
        where: {
          id,
        },
      });

      const { data, error } = await supabase.storage
        .from("products")
        .remove([path]);

      return {
        data,
        error,
      };
    });

    revalidatePath("/admin/products");
    revalidatePath(`/admin/product/${id}`);
    revalidatePath(`/product/${id}`);

    return {
      ok: true,
      data: prismaTx.data,
    };
  } catch (error) {
    return {
      ok: false,
      data: "Error eliminando la imagen",
    };
  }
};
