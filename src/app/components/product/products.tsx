"use client";
import { ProductCard } from "@/app/components/product/product";
import { useProductStore } from "@/store/useProductStore";

export const ProductsList = () => {
  const products = useProductStore((state) => state.products);
  return (
    <section className="grid grid-cols-1 gap-4  md:grid-cols-4 justify-between ">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};
