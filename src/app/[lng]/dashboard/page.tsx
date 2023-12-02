import furniture from "../../../../public/img/jpg/furniture.jpg";
import { Module } from "@/app/models/module";
import { ModuleCard } from "@/app/components/dashboard/product/module";
import GetTranslations from "@/app/utils/translationsPage";

const GetDashboardTranslations = async (lng: string) => {
  const { GetDashboardTranslations } = GetTranslations();
  return await GetDashboardTranslations(lng);
};

export default async function DashBoard({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const translations = await GetDashboardTranslations(lng);

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
