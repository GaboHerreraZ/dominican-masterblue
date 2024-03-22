import { Metadata } from "next";
import { getCategories, getProducts } from "@/actions";
import { Category } from "@/interfaces/category";
import { ProductContainer } from "@/components";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const languages = ["en", "es"];

interface Props {
  params: {
    lng: string;
    category: string;
  };
  searchParams: {
    subcategoria: string;
    pagina: string;
    orden: string;
    ordernarPor: string;
  };
}

export async function generateStaticParams() {
  const categories = await getCategories();
  const params: { lng: string; category: string }[] = [];

  languages.forEach((lng) => {
    categories.forEach((category: Category) => {
      params.push({ lng, category: category.link });
    });
  });

  return params;
}

export async function generateMetadata({
  params: { lng, category },
}: {
  params: { lng: string; category: string };
}): Promise<Metadata> {
  return {
    metadataBase: new URL(
      `https://dominicanmasterblue.com/${lng}/productos/${category}`
    ),
    title: `Muebles para ${category}`,
    description:
      "Descubre muebles únicos para tu hogar, oficina y cocinas: camas, lámparas y más. Diseños exclusivos para cada estilo. Encuentra la pieza perfecta aquí.",
    openGraph: {
      title: `Muebles para ${category}`,
      description:
        "Descubre muebles únicos para tu hogar, oficina y cocinas: camas, lámparas y más. Diseños exclusivos para cada estilo. Encuentra la pieza perfecta aquí.",
      siteName: "Dominican MasterBlue",
      url: `https://dominicanmasterblue.com/${lng}/${category}`,
    },
    verification: {
      google:
        "google-site-verification=I7msbVupafxpHYu74C85WNUgR0m3oRR8SsK1hfsejqc",
    },
  };
}

export default async function ProductsPage({
  params: { lng, category },
  searchParams: { pagina, subcategoria, ordernarPor, orden },
}: Props) {
  const productPage = pagina ? parseInt(pagina) : 1;
  const subcategory = subcategoria ? subcategoria.split(",") : [];

  const productOrder = orden ? orden : "asc";
  const productOrderBy = ordernarPor ? ordernarPor : "spanishName";

  const products = await getProducts({
    page: productPage,
    take: 10,
    category: category === "todos" ? undefined : category,
    subcategory,
    orderBy: productOrderBy,
    order: productOrder,
  });

  console.log("datos", products);

  return <ProductContainer lng={lng} products={products?.products!} />;
}

/* export default async function GenderPage({
  params: { gender },
  searchParams: { page, categoria, subcategoria, order, orderBy },
}: Props) {
  let wholesalerUser = false;
  const productPage = page ? parseInt(page) : 1;

  const category = categoria ? categoria.split(",") : [];
  const subcategory = subcategoria ? subcategoria.split(",") : [];

  const productOrder = order ? order : "asc";
  const productOrderBy = orderBy ? orderBy : "name";

  const { id } = await getUser();
  if (id) {
    const user = await getUserByAuthId(id);
    wholesalerUser = user?.wholesaler!;
  }

  const products = await getProducts({
    page: productPage,
    take: 10,
    gender: gender === "all" ? undefined : (gender as Gender),
    category,
    subcategory,
    orderBy: productOrderBy,
    order: productOrder,
    wholesaler: wholesalerUser,
  });

  return <ProductContainer products={products?.products!} />;
}
 */
