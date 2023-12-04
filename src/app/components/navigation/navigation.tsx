import { useTranslation } from "@/app/i18n";
import { Menu } from "./menu";
import { ChairIcon, DeskIcon, PaintIcon, RemodelingIcon } from "./icons";

type TypeItem = "dropdown" | "text";

export interface MenuNav {
  title: string;
  link: string;
  description?: string;
  type?: TypeItem;
  icon?: React.ReactNode;
  items?: MenuNav[];
}

export default async function Navigation({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng, "navigation");

  const menuItems: MenuNav[] = [
    {
      title: t("about-us"),
      link: `/${lng}/sobre-nosotros`,
      type: "text",
    },
    {
      title: t("services"),
      link: `/${lng}/servicios`,
      type: "text",
    },
    {
      title: t("products"),
      link: `/${lng}/productos`,
      type: "text",
    },
    {
      title: t("contact"),
      link: `/${lng}/contacto`,
      type: "text",
    },
  ];

  return <Menu menuItems={menuItems} message={t("message")} />;
}
