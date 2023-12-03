"use client";
import { ProductCard } from "@/app/components/product/product";
import { Product } from "@/domain/model/product";
import { useProductStore } from "@/store/useProductStore";
import useSWR from "swr";
import { ProductSkeleton } from "@/app/components/product/productSkeleton";

export const ProductsList = () => {
  const findAll = useProductStore((state) => state.findAll);
  const { data: listProduct, isLoading } = useSWR<Product[]>(
    "productList",
    findAll
  );

  if (isLoading) return <ProductSkeleton />;

  return (
    <section className="grid grid-cols-1 gap-4  md:grid-cols-4 justify-between ">
      {listProduct?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};
