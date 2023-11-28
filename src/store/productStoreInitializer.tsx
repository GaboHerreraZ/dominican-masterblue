"use client";
import { Product } from "@/domain/model/product";
import { useRef } from "react";
import { useProductStore } from "./useProductStore";
export function ProductStoreInitializer({ products }: { products: Product[] }) {
  const initialized = useRef(false);

  if (!initialized.current) {
    useProductStore.setState({ products });
    initialized.current = true;
  }

  return null;
}
