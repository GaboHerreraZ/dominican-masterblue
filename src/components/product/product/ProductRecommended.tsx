import ProductService from "@/service/productService";
import { getCookieProduct } from "../actions/actions";
import { ProductTranslations } from "@/models/productTranslations";
import { ProductRecommendedSlides } from "./ProductRecommendedSlides";

interface Props {
  translations: ProductTranslations;
  lng: string;
}

const getProducts = async (productsInCookie: { id: string }[]) => {
  const { findAll } = ProductService();
  const products = await findAll();
  return products.filter((product) =>
    productsInCookie.map((p) => p.id).includes(product.id)
  );
};

export const ProductRecommended = async ({ translations, lng }: Props) => {
  const productsInCookie = getCookieProduct();

  const products = (await getProducts(productsInCookie)) || [];

  return (
    <>
      {products.length > 0 && (
        <div className="px-20 py-10 mt-5 bg-gray-200/50">
          <h2 className=" text-center  font-bold text-master-900/70 text-2xl">
            {translations.ourRecommended}
          </h2>
          <ProductRecommendedSlides
            products={products}
            translations={{ lng, translations }}
          />
        </div>
      )}
    </>
  );
};
