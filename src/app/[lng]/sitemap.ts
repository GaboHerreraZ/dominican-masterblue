import ProductService from "@/service/productService";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.dominicanmasterblue.com";

  const lng = ["en", "es"];
  let siteMaps = lng.map((lng) => [
    { url: `${baseUrl}/${lng}/productos`, lastModified: new Date() },
    { url: `${baseUrl}/${lng}/nosotros`, lastModified: new Date() },
    { url: `${baseUrl}/${lng}/servicios`, lastModified: new Date() },
    { url: `${baseUrl}/${lng}/contacto`, lastModified: new Date() },
  ]);

  const { findAll } = ProductService();
  const products = await findAll();

  let productsSiteMap: any = [];

  lng.forEach((lng) => {
    productsSiteMap = [
      ...productsSiteMap,
      products.map((product) => ({
        url: `${baseUrl}/${lng}/productos/${product.slug}`,
        lastModified: new Date(),
      })),
    ];
  });

  return [
    { url: baseUrl, lastModified: new Date() },
    ...siteMaps[0],
    ...siteMaps[1],
    ...productsSiteMap[0],
    ...productsSiteMap[1],
  ];
}
