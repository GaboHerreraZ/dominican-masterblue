"use client";
import { Product } from "@/domain/model/product";
import { ProductTranslations } from "@/app/models/productTranslations";
import useSWR from "swr";
import { useProductStore } from "@/store/useProductStore";
import { ProductTabs } from "@/app/components/dashboard/product/productTabs";

export const ProductDetailDashboard = ({
  // product,
  id,
  translations,
}: {
  // product: Product;
  id: string;
  translations: ProductTranslations;
}) => {
  const findById = useProductStore((state) => state.findById);
  const { data } = useSWR<Product>(id, findById, { suspense: true });
  if (!data) {
    return;
  }

  return (
    <div className="mt-10 md:mt-5 px-5">
      <header className="mb-5">
        <h1 className="text-2xl font-bold text-master-900/70 ">
          {translations.productDetail}
        </h1>
        <p className="text-small italic text-black/50">
          {translations.productDescription}
        </p>
      </header>
      <section className="flex w-full flex-col ">
        <ProductTabs product={data} translations={translations} />
      </section>
    </div>
  );
};
