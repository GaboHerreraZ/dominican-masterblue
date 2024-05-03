import { ProductsFilter } from "@/components/admin/products/ProductsFilter";
import { getCategories, getSubcategories } from "@/actions";

const getMasterData = async () => {
  const [categories, subcategories] = await Promise.all([
    getCategories(),
    getSubcategories(),
  ]);
  return {
    categories,
    subcategories,
  };
};
export default async function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const {categories, subcategories} = await getMasterData();
  

  return <div className="mt-5">
  <ProductsFilter categories={categories} subcategories={subcategories}/>
  {children}
  </div>;
}

