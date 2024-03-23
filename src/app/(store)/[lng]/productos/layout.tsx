import { getCategories, getSubcategories } from "@/actions";
import { ProductFilters } from "@/components";
import { getTranslation } from "@/i18n";

export default async function ProductLayout({
  children,
  params: {lng},
}: {
  children: React.ReactNode;
  params: {lng: string;
  };
}) {
  const [categories, subcategories] = await Promise.all([
    getCategories(),
    getSubcategories(),
  ]);

  const {t} = await getTranslation(lng, 'products')

  const translations = {
    filterBy: t('filterBy'),
    categories: t('categories'),
    subcategories: t('subcategories'),
    clearFilter: t('clearFilter'),
    orderBy: t('orderBy'),
  }

  return (
    <div className="">
      <ProductFilters
        translations={translations}
        lng={lng}
        categories={categories}
        subcategories={subcategories}
      />
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
