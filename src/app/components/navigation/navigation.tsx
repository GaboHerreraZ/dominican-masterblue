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
      title: t("home"),
      link: `/${lng}`,
      type: "text",
    },
    {
      title: t("about-us"),
      link: `/${lng}/sobre-nosotros`,
      type: "text",
    },
    {
      title: t("services"),
      link: `/${lng}/servicios`,
      type: "dropdown",
      items: [
        {
          title: t("paint"),
          link: `/${lng}/servicios/pintura`,
          description: t("paintDescription"),
          icon: <PaintIcon fill="#f6b03f" size={20} />,
        },
        {
          title: t("remodeling"),
          link: `/${lng}/servicios/remodelacion`,
          description: t("remodelingDescription"),
          icon: <RemodelingIcon fill="#35d078" size={18} />,
        },
        {
          title: t("remodeling"),
          link: `/${lng}/servicios/remodelacion`,
          description: t("remodelingDescription"),
          icon: <RemodelingIcon fill="#f21260" size={18} />,
        },
      ],
    },
    {
      title: t("products"),
      link: `/${lng}/productos`,
      type: "dropdown",
      items: [
        {
          title: t("desk"),
          link: "/productos/escritorios",
          description: t("deskDescription"),
          icon: <DeskIcon fill="#f64d88" size={20} />,
        },
        {
          title: t("chair"),
          link: "/productos/sillas",
          description: t("chairDescription"),
          icon: <ChairIcon fill="#35d078" size={18} />,
        },
      ],
    },
    {
      title: t("faqs"),
      link: `/${lng}/faqs`,
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
