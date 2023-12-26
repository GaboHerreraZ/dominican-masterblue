"use server";
import { Filter } from "@/domain/model/filter";
import { cookies } from "next/headers";
import { ReadonlyURLSearchParams } from "next/navigation";

export const getCookieProduct = (): { id: string }[] => {
  const cookiesList = cookies();
  const hasCookies = cookiesList.has("products");
  if (hasCookies) {
    const products = cookiesList.get("products");
    return JSON.parse(products?.value || "[]");
  }

  return [];
};

export const setCookie = (id: string) => {
  const cookiesList = cookies();
  const cookieProduct = getCookieProduct();

  if (cookieProduct.some((product) => product.id === id)) return;

  cookieProduct.push({ id });

  const cookie = JSON.stringify(cookieProduct);
  cookiesList.set("products", cookie);
};

export const getCookieFilter = async (): Promise<Filter> => {
  const cookiesList = cookies();
  const hasCookies = cookiesList.has("filters");
  if (hasCookies) {
    const filter = cookiesList.get("filters");
    return JSON.parse(filter?.value || "{}") as Filter;
  }

  return {} as Filter;
};

export const setCookieFilter = (filter: Filter) => {
  const cookiesList = cookies();
  const cookie = JSON.stringify(filter);
  cookiesList.set("filters", cookie);
};

export const createPageUrl = async (
  path: string,
  searchParams: ReadonlyURLSearchParams,
  filter: Filter
) => {
  const { categories, subcategories, price } = filter;
  let url = `/${path}/productos?`;
  const params = new URLSearchParams(searchParams);

  categories && categories.length > 0
    ? params.set("categorias", categories.join(","))
    : params.delete("categorias");

  subcategories && subcategories.length > 0
    ? params.set("subcategorias", subcategories.join(","))
    : params.delete("subcategorias");

  price && price.length > 0
    ? params.set("precio", price.join(","))
    : params.delete("price");

  return `${url}${params.toString()}`;
};
