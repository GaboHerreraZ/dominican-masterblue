import { getTranslation } from "@/i18n";
import { Menu } from "./Menu";

export const MobileNavbar = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "navigation");

  const mainMenu = [
    {
      name: t("about-us"),
      link: "/about-us",
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
    <div className="grid md:hidden ">
      <Menu options={mainMenu} message={t("message")} />
    </div>
  );
};
