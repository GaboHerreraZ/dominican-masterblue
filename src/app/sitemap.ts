import { getProducts } from "@/actions";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.dominicanmasterblue.com";

  const lng = ["en", "es"];
  let siteMaps = lng.map((lng) => [
    { url: `${baseUrl}/${lng}/products/all`, lastModified: new Date() },
    { url: `${baseUrl}/${lng}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/${lng}/projects`, lastModified: new Date() },
  ]);

  const products = await getProducts({ page: 1, take: 100 });

  let productsSiteMap: any = [];

  lng.forEach((lng) => {
    productsSiteMap = [
      ...productsSiteMap,
      products?.products.map((product) => ({
        url: `${baseUrl}/${lng}/products/${product.slug}`,
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
