import { Product } from "@/interfaces/product";
import { currencyFormat } from "@/utils";

export const ProductDetailDescription = ({ product }: { product: Product }) => {
  return (
    <div>
      <section className="border-b-[1px] border-gray-200 pb-10">
        <h1 className="text-4xl font-bold m-0">{product.spanishName}</h1>
        <small className="">
          Ref:<span className="font-bold">{product.sku}</span>
        </small>
        <div className="flex gap-5 mt-4">
          <div>
            <h3 className="text-sm font-bold">Precio:</h3>
            <p className="text-2xl text-gold ">
              {currencyFormat(product.price)}
            </p>
          </div>
        </div>

        <p className="text-xl mt-4">{product.spanishDescription}</p>
      </section>
    </div>
  );
};
