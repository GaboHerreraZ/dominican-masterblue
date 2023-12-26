"use client";
import { ProductForm } from "@/components/dashboard/product/ProductForm";
import { ProductImages } from "@/components/dashboard/product/ProductImages";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Chip } from "@nextui-org/chip";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { SiGoogleforms } from "react-icons/si";
import { RiGalleryFill } from "react-icons/ri";
import { Product } from "@/domain/model/product";
import { ProductTranslations } from "@/models/productTranslations";

interface Props {
  product: Product;
  translations: ProductTranslations;
  lng: string;
}

export const ProductTabs = ({ product, translations, lng }: Props) => {
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
            <SiGoogleforms size={20} />
            <span>{translations?.generalInformation}</span>
          </div>
        }
      >
        <ProductForm product={product} lng={lng} translations={translations} />
      </Tab>
      <Tab
        key="photos"
        title={
          <div className="flex items-center space-x-2">
            <RiGalleryFill size={20} />
            <span>{translations?.productPhotos}</span>
            <Chip size="sm" variant="faded">
              {product?.images ? product.images.length : 0}
            </Chip>
          </div>
        }
      >
        {product.id === "nuevo" ? (
          <div className="w-full text-center my-5  p-3 text-master-900/70 font-bold italic">
            <h1>{translations?.fillOutGeneralInformation}</h1>
            <Button
              size="sm"
              variant="bordered"
              radius="none"
              color="primary"
              onPress={() => setSelected("data")}
            >
              {translations?.generalInformation}
            </Button>
          </div>
        ) : (
          <ProductImages translations={translations} product={product} />
        )}
      </Tab>
    </Tabs>
  );
};
