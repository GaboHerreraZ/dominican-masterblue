import { FiltersProduct } from "@/app/components/product/filters";
import { Products } from "@/app/components/product/products";
import { OrderByFilter } from "@/app/components/product/orderByFilter";
import { ProductTranslations } from "@/app/models/productTranslations";
import GetTranslations from "../../utils/translationsPage";

const GetTranslationsProduct = async ({
  lng,
}: {
  lng: string;
}): Promise<ProductTranslations> => {
  const { GetProductTranslations } = GetTranslations();
  return await GetProductTranslations(lng);
};

export const ProductContainer = async ({ lng }: { lng: string }) => {
  const translations = await GetTranslationsProduct({ lng });

  return (
    <section className="flex flex-col md:flex-row gap-5 mx-10  md:mx-20 my-10">
      <section className="flex flex-col w-full">
        <div className="flex items-center justify-between mb-5">
          <FiltersProduct translations={translations} />
          <span className="text-small italic font-bold">
            {translations.noNofilterSelected}
          </span>
          <OrderByFilter translations={translations} />
        </div>
        <Products lng={lng} />
      </section>
    </section>
  );
};
