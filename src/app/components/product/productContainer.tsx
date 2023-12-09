import { FiltersProduct } from "@/app/components/product/filters";
import { ProductsList } from "@/app/components/product/products";
import { OrderByFilter } from "@/app/components/product/orderByFilter";
import { FiltersSelected } from "@/app/components/product/filtersSelected";

export const ProductContainer = () => {
  return (
    <section className="flex flex-col md:flex-row gap-5 mx-10  md:mx-20 my-10">
      <section className="flex flex-col w-full">
        <div className="flex flex-col gap-2 md:gap-0  md:flex-row items-center justify-between mb-5">
          <FiltersProduct />
          <span className="text-small italic font-bold">
            <FiltersSelected />
          </span>
          <OrderByFilter />
        </div>
        <ProductsList />
      </section>
    </section>
  );
};
