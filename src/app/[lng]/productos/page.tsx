import { ProductContainer } from "@/app/components/product/productContainer";
import { ProductTranslations } from "@/app/models/productTranslations";
import GetTranslations from "@/app/utils/translationsPage";
import { Translations, useTranslationStore } from "@/store/translationStore";
import { TranslationStoreInitializer } from "@/store/translationStoreInitializer";
import furniture from "../../../../public/img/jpg/design.jpg";
import Image from "next/image";
import React from "react";
import { ProductStoreInitializer } from "@/store/productStoreInitializer";
import ProductService from "@/service/productService";
import { Product } from "@/domain/model/product";

const GetTranslationsProduct = async (
  lng: string
): Promise<ProductTranslations> => {
  const { GetProductTranslations } = GetTranslations();
  return await GetProductTranslations(lng);
};

const GetProducts = async (): Promise<Product[]> => {
  const { findAll } = ProductService();
  const response = await findAll();
  return response;
};

export default async function ProductsPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const productTranslations = await GetTranslationsProduct(lng);
  const products = await GetProducts();

  const translations: Translations = {
    lng,
    productTranslations: productTranslations,
  };

  useTranslationStore.setState(translations);

  return (
    <React.Fragment>
      <div className="h-[400px] relative  w-full">
        <Image
          src={furniture}
          fill
          sizes="100%"
          style={{ objectFit: "cover" }}
          alt="home"
          className=""
        />
        <div className="flex backdrop-contrast-150  place-items-center place-content-center  bg-gradient-to-b from-black/20 to-black/70 absolute h-full w-full">
          <div className="text-center px-4  text-white">
            <p className="text-3xl md:text-5xl font-bold mb-2">
              {productTranslations.bannerTitle}
            </p>
            <p className="text-2xl md:text-3xl italic">
              {productTranslations.bannerDescription}
            </p>
          </div>
        </div>
      </div>
      <TranslationStoreInitializer translations={translations} />
      <ProductStoreInitializer products={products} />
      <ProductContainer />
    </React.Fragment>
  );
}
