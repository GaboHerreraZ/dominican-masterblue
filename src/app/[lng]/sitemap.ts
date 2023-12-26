import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.dominicanmasterblue.com";

  const lng = ["en", "es"];
  const siteMaps = lng.map((lng) => [
    { url: `${baseUrl}/${lng}/productos`, lastModified: new Date() },
    { url: `${baseUrl}/${lng}/nosotros`, lastModified: new Date() },
    { url: `${baseUrl}/${lng}/servicios`, lastModified: new Date() },
    { url: `${baseUrl}/${lng}/contacto`, lastModified: new Date() },
  ]);

  return [
    { url: baseUrl, lastModified: new Date() },
    ...siteMaps[0],
    ...siteMaps[1],
  ];
}
