import { ProductsTable } from "@/app/components/dashboard/product/products";

export default async function Products({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return <ProductsTable lng={lng} />;
}
