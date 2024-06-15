import { getTranslation } from "@/i18n";
import { Menu } from "./Menu";
import { getCategories } from "@/actions";

export const MobileNavbar = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "navigation");
  const categories = await getCategories();
  const optionsMenu = [
    {
      name: t("contact"),
      link: "/contact",
    },
    {
      name: t("login"),
      link: "/auth/login",
    },
  ];

  const mainMenu = [
    ...categories.map((category) => ({
      name:
        lng === "es"
          ? category.spanishDescription
          : category.englishDescription,
      link: `/products/${category.link}`,
    })),
    ...optionsMenu,
  ];

  return (
    <div className="grid md:hidden ">
      <Menu options={mainMenu} message={t("message")} />
    </div>
  );
};
