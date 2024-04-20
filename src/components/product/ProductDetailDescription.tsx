import { getTranslation } from "@/i18n";
import { Product } from "@/interfaces/product";
import { currencyFormat } from "@/utils";
import clsx from "clsx";
import { ProductDetailTableDescription } from "./ProductDetailTableDescription";
import { ProductDetailVideoDescription } from "./ProductDetailVideoDescription";

export const ProductDetailDescription = async ({
  product,
  lng,
}: {
  product: Product;
  lng: string;
}) => {
  const { t } = await getTranslation(lng, "products");

  return (
    <div>
      <section className=" pb-10">
        <h1 className="text-4xl font-bold m-0">
          {lng === "es" ? product.spanishName : product.englishName}
        </h1>
        <small className="">
          Ref:<span className="font-bold">{product.sku}</span>
        </small>
        <div className="flex items-center gap-1">
          <div
            className={clsx("h-2 w-2 rounded-full", {
              "bg-green-500": product.state,
              "bg-red-500": !product.state,
            })}
          ></div>
          <label
            className={clsx("text-xs", {
              "text-green-500": product.state,
              "text-red-500": !product.state,
            })}
          >
            {product.state ? t("available") : t("notAvailable")}
          </label>
        </div>

        <div className="flex gap-5 mt-2">
          <div>
            <p className="text-2xl text-gold ">
              {currencyFormat(product.price)}
            </p>
          </div>
        </div>
        <div className=" mt-4">
          <h2 className="text-xl font-bold border-b-[1px] border-gray-200 ">
            {t("description")}
          </h2>
          <p className="text-xl mt-1">
            {lng === "es"
              ? product.spanishDescription
              : product.englishDescription}
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold border-b-[1px] border-gray-200 ">
            {t("characteristics")}
          </h2>
          <div className="overflow-x-auto mt-2">
            <ProductDetailTableDescription lng={lng} product={product} />
          </div>
        </div>
      </section>
    </div>
  );
};
