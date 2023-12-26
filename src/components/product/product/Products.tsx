import { ProductCard } from "@/components/product/product/ProductCard";
import { Product } from "@/domain/model/product";
import { ProductTranslations } from "@/models/productTranslations";

interface Translations {
  lng: string;
  translations: ProductTranslations;
}

interface Props {
  products: Product[];
  translations: Translations;
}

export const ProductsList = ({ products, translations }: Props) => {
  return (
    <section className="grid grid-cols-1 h-[300px] gap-4 mt-10  md:grid-cols-4 justify-between ">
      {products?.map((product) => (
        <ProductCard
          translations={translations}
          key={product.id}
          product={product}
        />
      ))}
    </section>
  );
};
