import { Product } from "@/domain/model/product";
import { ProductForm } from "@/app/components/dashboard/product/productForm";
import { ProductImages } from "@/app/components/dashboard/product/productImages";
import { Tab, Tabs } from "@nextui-org/tabs";
import { FormIcon, GalleryIcon } from "@/app/utils/iconsUtils";
import { Chip } from "@nextui-org/chip";
import { useState } from "react";
import { ProductTranslations } from "@/app/models/productTranslations";
import { Button } from "@nextui-org/button";
export const ProductTabs = ({
  product,
  translations,
}: {
  product: Product;
  translations: ProductTranslations;
}) => {
  const [selected, setSelected] = useState("data");

  return (
    <Tabs
      selectedKey={selected}
      onSelectionChange={(event) => setSelected(event.toString())}
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
              {product?.images ? product.images.length : 0}
            </Chip>
          </div>
        }
      >
        {product.id === "nuevo" ? (
          <div className="w-full text-center my-5  p-3 text-master-900/70 font-bold italic">
            <h1>{translations.fillOutGeneralInformation}</h1>
            <Button
              size="sm"
              variant="bordered"
              radius="none"
              color="primary"
              onPress={() => setSelected("data")}
            >
              {translations.generalInformation}
            </Button>
          </div>
        ) : (
          <ProductImages
            translations={translations}
            product={product}
            setSelected={setSelected}
          />
        )}
      </Tab>
    </Tabs>
  );
};
