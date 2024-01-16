"use client";
import { ProductTranslations } from "@/models/productTranslations";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/breadcrumbs";
import { useEffect, useState } from "react";
import { useFilterStore } from "@/store/useFilterStore";
import { Product } from "@/domain/model/product";
import { SUBCATEGORIES } from "@/utils/const";
import { useRouter } from "next/navigation";

interface Props {
  lng: string;
  translations: ProductTranslations;
  product?: Product;
}

interface Breadcrumb {
  label: string;
  key: string;
}

export const BreadCrumbs = ({ lng, translations, product }: Props) => {
  const filter = useFilterStore((state) => state.filter);
  const [breadCrumbs, setBreadCrumbs] = useState<Breadcrumb[]>([]);

  const setCategory = useFilterStore((state) => state.setCategory);
  const setSubCategory = useFilterStore((state) => state.setSubCategory);
  const reset = useFilterStore((state) => state.reset);
  const router = useRouter();

  useEffect(() => {
    const newBreadCrumbs: Breadcrumb[] = [
      { label: translations.products, key: "reset" },
    ];

    if (filter.category.key) {
      newBreadCrumbs.push({
        label:
          lng === "en"
            ? `${filter.category.englishLabel}`
            : `${filter.category.spanishLabel}`,
        key: "category",
      });
    }

    if (product) {
      const subcategory = SUBCATEGORIES.find(
        (subcategory) => subcategory.key === product.subCategory
      );

      newBreadCrumbs.push({
        label:
          lng === "en"
            ? `${subcategory?.englishLabel}`
            : `${subcategory?.spanishLabel}`,
        key: "subcategory",
      });

      newBreadCrumbs.push({
        label:
          lng === "en" ? `${product?.englishName}` : `${product?.spanishName}`,
        key: "product",
      });
    }

    if (!product) {
      filter.subcategories.forEach((subcategory) => {
        const subcategoryFinded = SUBCATEGORIES.find(
          (sub) => sub.key === subcategory.key
        );

        newBreadCrumbs.push({
          label:
            lng === "en"
              ? `${subcategoryFinded?.englishLabel}`
              : `${subcategoryFinded?.spanishLabel}`,
          key: "subcategory",
        });
      });
    }

    setBreadCrumbs(() => [...newBreadCrumbs]);
  }, [filter, lng, product, translations.products]);

  const onSelectBreadcrumb = (breadcrumb: Breadcrumb) => {
    if (breadcrumb.key === "reset") {
      reset();
    }

    if (breadcrumb.key === "category") {
      setCategory(filter.category);
    }

    if (breadcrumb.key === "subcategory" && filter.subcategories.length > 0) {
      setSubCategory(filter.subcategories);
    } else if (
      breadcrumb.key === "subcategory" &&
      filter.category.key !== null
    ) {
      setCategory(filter.category);
    }

    router.back();
  };

  return (
    <Breadcrumbs
      underline="focus"
      variant="light"
      color="primary"
      radius="none"
    >
      {breadCrumbs.map((breadcrumb, idx) => (
        <BreadcrumbItem key={idx}>
          <label
            className="cursor-pointer "
            onClick={() => onSelectBreadcrumb(breadcrumb)}
          >
            {breadcrumb.label}
          </label>
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
};
