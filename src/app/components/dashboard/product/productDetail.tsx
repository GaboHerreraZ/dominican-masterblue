import { ProductTranslations } from "@/app/models/productTranslations";
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
        <ProductTabs id={id} />
      </section>
    </div>
  );
};
