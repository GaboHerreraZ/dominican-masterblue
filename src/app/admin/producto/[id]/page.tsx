import { getCategories, getProduct, getSubcategories } from "@/actions";
import { ProductPage } from "@/components/admin";
import Link from "next/link";

const getMasterData = async () => {
  const [categories,subcategories ] = await Promise.all([getCategories(), getSubcategories()]);
  return {
    categories,
    subcategories
  };
};

export default async function ProductoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { categories, subcategories } = await getMasterData();
  const product = id === "nuevo" ? {} : await getProduct(id);

  return (
    <section className="container md:mx-auto px-2 lg:px-10">
      <ProductPage
        product={product!}
        categories={categories}
        subcategories={subcategories}
      />
    </section>
  );
}
