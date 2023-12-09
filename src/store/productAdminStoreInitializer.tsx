"use client";
import { Product } from "@/domain/model/product";
import { useRef } from "react";
import { useProductAdminStore } from "./useProductAdminStore";
export function ProductAdminStoreInitializer({
  products,
}: {
  products: Product[];
}) {
  const initialized = useRef(false);

  if (!initialized.current) {
    useProductAdminStore.setState({ products });
    initialized.current = true;
  }

  return null;
}
