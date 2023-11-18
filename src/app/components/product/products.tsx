import { Product } from "@/app/components/product/product";

export const Products = async ({ lng }: { lng: string }) => {
  return (
    <section className="grid grid-cols-1 gap-4  md:grid-cols-4 justify-between ">
      <Product lng={lng} />
      <Product lng={lng} />
      <Product lng={lng} />
      <Product lng={lng} />
      <Product lng={lng} />
    </section>
  );
};
