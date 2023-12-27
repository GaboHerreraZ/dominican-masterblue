import furniture from "../../../../../public/img/jpg/furniture.jpg";
import { Module } from "@/models/module";
import { ModuleCard } from "@/components/dashboard/product/Module";
import GetTranslations from "@/utils/translationsPage";

const getDashboardTranslations = async (lng: string) => {
  const { getDashboardTranslations } = GetTranslations();
  return await getDashboardTranslations(lng);
};

export default async function DashBoard({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const translations = await getDashboardTranslations(lng);

  const modules: Module[] = [
    {
      id: 1,
      title: translations.moduleProductsTitle,
      description: translations.moduleProductsDescription,
      image: furniture,
      route: `/dashboard/productos`,
      enabled: true,
    },
  ];

  return (
    <section className="flex px-5 mt-10">
      {modules.map((module: Module) => (
        <ModuleCard key={module.id} module={module} />
      ))}
    </section>
  );
}
