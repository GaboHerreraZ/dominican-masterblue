import ProductService from "@/service/productService";
import { MetadataRoute } from "next";

export async function generateSitemaps() {
  const { findAll } = ProductService();
  const products = await findAll();
  return products.map((_, idx) => ({ id: idx + 1 }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.dominicanmasterblue.com";

  const { findAll } = ProductService();
  const products = await findAll();

  const lng = ["en", "es"];
  let siteMaps: any = [];

  lng.forEach((lng) => {
    siteMaps = [
      ...siteMaps,
      products.map((product) => ({
        url: `${baseUrl}/${lng}/productos/${product.slug}`,
        lastModified: new Date(),
      })),
    ];
  });

  return siteMaps;
}
