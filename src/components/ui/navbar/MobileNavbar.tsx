import { getTranslation } from "@/i18n";
import { Menu } from "./Menu";

export const MobileNavbar = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "navigation");

  const mainMenu = [
    {
      name: t("about-us"),
      link: "/about",
    },
    {
      name: t("services"),
      link: "/services",
    },
    {
      name: t("contact"),
      link: "/contact",
    },
    {
      name: t("login"),
      link: "/auth/login",
    },
  ];
  return (
    <div className="block md:hidden z-50 ">
      <Menu options={mainMenu} message={t("message")} />
    </div>
  );
};
