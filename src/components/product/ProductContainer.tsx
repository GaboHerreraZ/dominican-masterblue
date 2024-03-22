import { Product } from "@/interfaces/product";
import { ProductCard } from "./ProductCard";

interface Props {
  products: Product[];
  lng: string;
}

export const ProductContainer = ({ products, lng }: Props) => {
  return (
    <section className="flex container mx-auto  flex-wrap gap-5 justify-center md:justify-normal">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} lng={lng} />
      ))}
    </section>
  );
};
