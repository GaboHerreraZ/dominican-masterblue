"use client";
import { ProductCard } from "@/app/components/product/product";
import { Product } from "@/domain/model/product";
import { useProductStore } from "@/store/useProductStore";
import useSWR from "swr";

export const ProductsList = () => {
  const findAll = useProductStore((state) => state.findAll);
  const { data: listProduct } = useSWR<Product[]>("productList", findAll);
  if (!listProduct) return;

  return (
    <section className="grid grid-cols-1 gap-4  md:grid-cols-4 justify-between ">
      {listProduct.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};
