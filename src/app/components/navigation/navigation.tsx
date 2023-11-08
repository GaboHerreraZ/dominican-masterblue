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
      link: "/sobre-nosotros",
      type: "text",
    },
    {
      title: t("services"),
      link: "/servicios",
      type: "dropdown",
      items: [
        {
          title: t("paint"),
          link: "/servicios/pintura",
          description: t("paintDescription"),
          icon: <PaintIcon fill="currentColor" size={20} />,
        },
        {
          title: t("remodeling"),
          link: "/servicios/remodelacion",
          description: t("remodelingDescription"),
          icon: <RemodelingIcon fill="currentColor" size={18} />,
        },
      ],
    },
    {
      title: t("products"),
      link: "/productos",
      type: "dropdown",
      items: [
        {
          title: t("desk"),
          link: "/productos/escritorios",
          description: t("deskDescription"),
          icon: <DeskIcon fill="currentColor" size={20} />,
        },
        {
          title: t("chair"),
          link: "/productos/sillas",
          description: t("chairDescription"),
          icon: <ChairIcon fill="currentColor" size={18} />,
        },
      ],
    },
    {
      title: t("faqs"),
      link: "/faqs",
      type: "text",
    },
    {
      title: t("contact"),
      link: "/contacto",
      type: "text",
    },
  ];

  return <Menu menuItems={menuItems} message={t("message")} />;
}
