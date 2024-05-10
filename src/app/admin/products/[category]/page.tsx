import {
  getCategories,
  getSubcategories,
  getProducts,
  getProductsSku,
} from "@/actions";
import { ProductGrid } from "@/components/admin";
import { ProductsFilter } from "@/components/admin/products/ProductsFilter";
import Link from "next/link";

interface Props {
  params: {
    category: string;
  };
  searchParams: {
    page?: string;
    subcategory?: string;
    state?: string;
  };
}

export default async function ProductsPage({ params, searchParams }: Props) {
  const category = params.category;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const subcategory = searchParams.subcategory
    ? searchParams.subcategory.split(",")
    : [];
  const state = searchParams.state;

  const [products, categories, subcategories, productsSku] = await Promise.all([
    getProducts({
      page: page,
      take: 5,
      category: category === "all" ? undefined : decodeURIComponent(category),
      subcategory,
      state,
    }),
    getCategories(),
    getSubcategories(),
    getProductsSku(),
  ]);

  const formattedSku = productsSku.map((product, i) => ({
    id: i,
    name: product.sku + "-" + product.spanishName,
    spanishDescription: "",
    englishDescription: "",
    link: product.sku
  }));


  return (
    <section className="container md:mx-auto lg:px-10">
      <header className="flex my-5 md:my-0 md:flex-row flex-col md:justify-between md:items-center border-b-[1px] border-gray-300 container md:mx-auto px-2 mt-5">
        <h1 className="text-xl font-extrabold mb-5 uppercase">Productos</h1>
        <Link className="button-gold" href="/admin/product/nuevo">
          Agregar Producto
        </Link>
      </header>

      {/* Filter */}
      <ProductsFilter
        sku={formattedSku}
        categories={categories}
        subcategories={subcategories}
      />

      <ProductGrid
        products={products!.products}
        categories={categories}
        subcategories={subcategories}
        totalPages={products!.totalPages}
      />
    </section>
  );
}
