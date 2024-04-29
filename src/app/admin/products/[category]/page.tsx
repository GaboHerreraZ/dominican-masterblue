import { getCategories, getSubcategories, getProducts } from "@/actions";
import { ProductGrid } from "@/components/admin";

interface Props {
  params: {
    category: string;
  }
  searchParams: {
    page?: string;
    subcategory: string;
    state?: string;
  };
}

export default async function ProductsPage({params, searchParams }: Props) {
  const category = params.category;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const subcategory = searchParams.subcategory ? searchParams.subcategory.split(",") : [];
  const state = searchParams.state;

  const [products, categories, subcategories] = await Promise.all([
    getProducts({ page: page, take: 5, category: category === "all" ? undefined : decodeURIComponent(category), subcategory, state }),
    getCategories(),
    getSubcategories(),
  ]);

  return (
    <section className="container md:mx-auto px-2 lg:px-10">
      <ProductGrid
        products={products!.products}
        categories={categories}
        subcategories={subcategories}
        totalPages={products!.totalPages}
      />
    </section>
  );
}
