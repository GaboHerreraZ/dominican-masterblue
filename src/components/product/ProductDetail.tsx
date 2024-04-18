import { Product } from "@/interfaces/product";
import { ProductDetailImage } from "./ProductDetailImage";
import { ProductDetailDescription } from "./ProductDetailDescription";
import { ProductDetailImageMobile } from "./ProductDetailImageMobile";
import { Breadcrumb } from "./Breadcrumb";
import { ProductDetailVideoDescription } from "./ProductDetailVideoDescription";
import { getTranslation } from "@/i18n";

export const ProductDetail = async ({
  product,
  lng,
}: {
  product: Product;
  lng: string;
}) => {
  const { t } = await getTranslation(lng, "products");
  return (
    <section className="mt-10">
      <Breadcrumb />
      <div className="container mx-auto flex justify-center md:flex-row flex-col  ">
        <div className="hidden md:block w-1/2 px-0  lg:px-10">
          <ProductDetailImage productImage={product.productImage} />
        </div>
        <div className="w-full block sm:hidden">
          <ProductDetailImageMobile images={product.productImage} />
        </div>
        <div className="w-full md:w-1/2 px-5 ld:px-10">
          <ProductDetailDescription product={product} lng={lng} />
        </div>
      </div>
      <div className="mt-4">
        <ProductDetailVideoDescription
          youtubeLink={product.youtubeLink}
          title={t("youtubeTitle")}
        />
      </div>
    </section>
  );
};
