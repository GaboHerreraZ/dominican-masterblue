"use client";
import { Product } from "@/domain/model/product";
import { ProductForm } from "@/app/components/dashboard/product/productForm";
import { ProductImages } from "@/app/components/dashboard/product/productImages";
import { Tab, Tabs } from "@nextui-org/tabs";
import { FormIcon, GalleryIcon } from "@/app/utils/iconsUtils";
import { Chip } from "@nextui-org/chip";
import { ProductTranslations } from "@/app/models/productTranslations";

export const ProductDetailDashboard = ({
  product,
  translations,
}: {
  product: Product;
  translations: ProductTranslations;
}) => {
  return (
    <div className="mt-10 md:mt-0 p-5">
      <header className="mb-5">
        <h1 className="text-2xl font-bold text-master-900/70 ">
          {translations.productDetail}
        </h1>
        <p className="text-small italic text-black/50">
          {translations.productDescription}
        </p>
      </header>
      <section className="flex w-full flex-col ">
        <Tabs
          aria-label="Options"
          color="primary"
          variant="underlined"
          classNames={{
            tabList:
              "gap-6 w-full relative rounded-none p-0 border-b border-divider",
            cursor: "w-full bg-master-900/70",
            tab: "max-w-fit px-0 h-12",
            tabContent: "group-data-[selected=true]:text-master-900/70",
          }}
        >
          <Tab
            key="data"
            title={
              <div className="flex items-center space-x-2">
                <FormIcon size={20} />
                <span>{translations.generalInformation}</span>
              </div>
            }
          >
            <ProductForm product={product} translations={translations} />
          </Tab>
          <Tab
            key="photos"
            title={
              <div className="flex items-center space-x-2">
                <GalleryIcon size={20} />
                <span>{translations.productPhotos}</span>
                <Chip size="sm" variant="faded">
                  {product.images ? product.images.length : 0}
                </Chip>
              </div>
            }
          >
            <ProductImages product={product} />
          </Tab>
        </Tabs>
      </section>
    </div>
  );
};
