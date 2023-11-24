"use client";
import { Product } from "@/domain/model/product";
import { useRef } from "react";
import { useProductStore } from "./useProductStore";
import { ProductTranslations } from "@/app/models/productTranslations";
export function ProductStoreInitializer({
  products,
  translations,
}: {
  products: Product[];
  translations: ProductTranslations;
}) {
  const initialized = useRef(false);

  if (!initialized.current) {
    useProductStore.setState({ products, translations });
    initialized.current = true;
  }

  return null;
}
