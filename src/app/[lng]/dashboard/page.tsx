import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import furniture from "../../../../public/img/jpg/furniture.jpg";
import { Module } from "@/app/models/module";
import { ModuleCard } from "@/app/components/dashboard/product/module";
import { useTranslation } from "@/app/i18n";

export default async function DashBoard({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, "dashboard");

  const modules: Module[] = [
    {
      id: 1,
      title: t("moduleProductsTitle"),
      description: t("moduleProductsDescription"),
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
