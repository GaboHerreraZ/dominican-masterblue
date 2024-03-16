import { ProductTranslations } from "@/models/productTranslations";
import GetTranslations from "@/utils/translationsPage";
import { Product } from "@/domain/model/product";
import ProductService from "@/service/productService";
import { ProductsList } from "@/components/product/product/Products";
import { FiltersProduct } from "@/components/product/filters/Filters";
import { OrderByFilter } from "@/components/product/filters/OrderBy";
import { SimpleFilter } from "@/domain/model/filter";
import { getTranslation } from "@/i18n";
import { Metadata } from "next";
import { CategoryFilter } from "@/components/product/filters/Category";
import { BreadCrumbs } from "@/components/product/product/BreadCrumbs";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface Props {
  params: {
    lng: string;
  };
  searchParams: {
    categoria: string;
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

const getProducts = async (simpleFilter: SimpleFilter): Promise<Product[]> => {
  const { findAll, findByFilter } = ProductService();
  if (
    simpleFilter.category ||
    simpleFilter.subcategories.length > 0 ||
    simpleFilter.price.length > 0 ||
    simpleFilter.orderBy
  ) {
    return await findByFilter(simpleFilter);
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
  const { categoria, subcategorias, precio, orden } = searchParams;

  const filters: SimpleFilter = {
    category: categoria,
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
    <>
      <CategoryFilter path={lng} />
      <section className="mx-10  md:mx-20 my-10">
        <div className="flex md:items-center md:flex-row flex-col justify-between">
          <BreadCrumbs translations={productTranslations} lng={lng} />
          <div className="flex gap-10 w-full md:w-1/2 items-end justify-end">
            <FiltersProduct translations={productTranslations} />
            <OrderByFilter translations={productTranslations} />
          </div>
        </div>
        <ProductsList translations={translations} products={products} />
      </section>
    </>
  );
}
