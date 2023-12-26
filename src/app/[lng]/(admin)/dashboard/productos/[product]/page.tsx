import { Product } from "@/domain/model/product";
import { ProductTranslations } from "@/models/productTranslations";
import GetTranslations from "@/utils/translationsPage";
import ProductService from "@/service/productService";
import { ProductTabs } from "@/components/dashboard/product/ProductTabs";

export async function generateStaticParams() {
  const { findAll } = ProductService();
  const products = await findAll();
  const params = products.map((product: Product) => ({
    params: { product: product.slug },
  }));
  return params;
}

async function getProductBySlug(slug: string) {
  const { findById } = ProductService();
  return await findById(slug);
}

async function getTranslationsProduct(
  lng: string
): Promise<ProductTranslations> {
  const { GetProductTranslations } = GetTranslations();
  return await GetProductTranslations(lng);
}

export default async function ProductDetail({
  params: { lng, product },
}: {
  params: { lng: string; product: string };
}) {
  const translationsPromise = getTranslationsProduct(lng);
  const productPromise = getProductBySlug(product);

  const [translations, productFinded] = await Promise.all([
    translationsPromise,
    productPromise,
  ]);

  return (
    <main className="mt-10 md:mt-5 px-5">
      <header className="mb-5">
        <h1 className="text-2xl font-bold text-master-900/70 ">
          {translations.productDetail}
        </h1>
        <p className="text-small italic text-black/50">
          {translations.productDescription}
        </p>
      </header>
      <section className="flex w-full flex-col ">
        <ProductTabs
          lng={lng}
          product={productFinded}
          translations={translations}
        />
      </section>
    </main>
  );
}
