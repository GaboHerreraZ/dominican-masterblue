import { getCategories, getSubcategories } from "@/actions";
import { ProductFilters } from "@/components";

export default async function ProductLayout({
  children,
  lng,
}: {
  children: React.ReactNode;
  lng: string;
}) {
  const [categories, subcategories] = await Promise.all([
    getCategories(),
    getSubcategories(),
  ]);

  return (
    <div className="">
      <ProductFilters
        lng={lng}
        categories={categories}
        subcategories={subcategories}
      />
      <div className="container   mx-auto">{children}</div>
    </div>
  );
}
