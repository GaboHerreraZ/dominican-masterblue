import { MenuNav } from "../interface/menuNav";
import { getTranslation } from "@/i18n";
import { Menu } from "./Menu";
import furniture from "../../../../public/img/jpg-end/kitchen.jpg";
import home from "../../../../public/img/jpg-end/home.jpg";
import aboutUs from "../../../../public/img/jpg-end/about-us.jpg";
import contact from "../../../../public/img/jpg-end/contact.jpg";

interface Props {
  lng: string;
}

export const NavBar = async ({ lng }: Props) => {
  const { t } = await getTranslation(lng, "navigation");

  const menuItems: MenuNav[] = [
    {
      title: t("home"),
      link: `/${lng}`,
      bannerTitle: t("bannerHomeTitle"),
      bannerDescription: t("bannerHomeDescription"),
      image: home,
    },
    {
      title: t("about-us"),
      link: `/${lng}/nosotros`,
      bannerTitle: t("bannerUsTitle"),
      bannerDescription: t("bannerUsDescription"),
      image: aboutUs,
    },
    /*   {
      title: t("services"),
      link: `/${lng}/servicios`,
      bannerTitle: t("bannerServiceTitle"),
      bannerDescription: t("bannerServiceDescription"),
      image: furniture,
    }, */
    {
      title: t("products"),
      link: `/${lng}/productos`,
      bannerTitle: t("bannerProjectTitle"),
      bannerDescription: t("bannerProjectDescription"),
      image: furniture,
    },
    {
      title: t("contact"),
      link: `/${lng}/contacto`,
      bannerTitle: t("bannerContactTitle"),
      bannerDescription: t("bannerContactDescription"),
      image: contact,
    },
  ];

  return <Menu items={menuItems} message={t("message")} />;
};
