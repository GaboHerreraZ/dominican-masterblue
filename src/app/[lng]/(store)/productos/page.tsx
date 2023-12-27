import { ProductTranslations } from "@/models/productTranslations";
import GetTranslations from "@/utils/translationsPage";
import { Product } from "@/domain/model/product";
import ProductService from "@/service/productService";
import { ProductsList } from "@/components/product/product/Products";
import { FiltersProduct } from "@/components/product/filters/Filters";
import { OrderByFilter } from "@/components/product/filters/OrderByFilter";
import { Filter } from "@/domain/model/filter";
import { getTranslation } from "@/i18n";
import { Metadata } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface Props {
  params: {
    lng: string;
  };
  searchParams: {
    categorias: string;
    subcategorias: string;
    precio: string;
    orden: string;
  };
}

const GetTranslationsProduct = async (
  lng: string
): Promise<ProductTranslations> => {
  const { getProductTranslations } = GetTranslations();
  return await getProductTranslations(lng);
};

const getProducts = async (filters: Filter): Promise<Product[]> => {
  const { findAll, findByFilter } = ProductService();
  if (
    filters.categories.length > 0 ||
    filters.subcategories.length > 0 ||
    filters.price.length > 0 ||
    filters.orderBy.length > 0
  ) {
    return await findByFilter(filters);
  }

  return await findAll();
};

export async function generateMetadata({
  params: { lng },
}: {
  params: { lng: string };
}): Promise<Metadata> {
  const { t } = await getTranslation(lng, "seo");

  return {
    metadataBase: new URL(
      `https://www.dominicanmasterblue.com/${lng}/productos`
    ),
    title: t("titleProducts"),
    description: t("descriptionProducts"),
    verification: {
      google:
        "google-site-verification=I7msbVupafxpHYu74C85WNUgR0m3oRR8SsK1hfsejqc",
    },
  };
}

export default async function ProductsPage({
  params: { lng },
  searchParams,
}: Props) {
  const { categorias, subcategorias, precio, orden } = searchParams;

  const filters: Filter = {
    categories: categorias ? categorias.split(",") : [],
    subcategories: subcategorias ? subcategorias.split(",") : [],
    price: precio ? precio.split(",").map((p) => Number(p)) : [],
    orderBy: orden === "asc" ? orden : "desc",
  };

  const productTranslations = await GetTranslationsProduct(lng);
  const products = await getProducts(filters);

  const translations = {
    lng,
    translations: productTranslations,
  };

  return (
    <main className="mx-10  md:mx-20 my-10">
      <div className="flex items-center justify-between">
        <FiltersProduct translations={productTranslations} />
        <OrderByFilter translations={productTranslations} />
      </div>
      <ProductsList translations={translations} products={products} />
    </main>
  );
}
