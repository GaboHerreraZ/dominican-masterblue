import { getDashboardInformation } from "@/actions";
import { Menu } from "@/components/admin";

export default async function AdminPage() {
  const { products } = await getDashboardInformation();

  return (
    <section className="container md:mx-auto px-2 lg:px-10">
      <Menu
        products={products}
      />
    </section>
  );
}
