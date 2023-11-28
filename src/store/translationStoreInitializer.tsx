"use client";
import { useRef } from "react";
import { useProductStore } from "./useProductStore";
import { ProductTranslations } from "@/app/models/productTranslations";
export function TranslationStoreInitializer({
  translations,
}: {
  translations: ProductTranslations;
}) {
  const initialized = useRef(false);

  if (!initialized.current) {
    useProductStore.setState({ translations });
    initialized.current = true;
  }

  return null;
}
