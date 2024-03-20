import { getTranslation } from "@/i18n";
import { NavbarCategory } from "./NavbarCategory";
import Link from "next/link";
import { LogIn } from "./LogIn";

export const Navbar = async ({ lng }: { lng: string }) => {
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
  ];

  return (
    <nav className="grid items-center  relative">
      <ul className="flex  justify-center py-4 gap-10">
        {mainMenu.map((item) => (
          <li key={item.link}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <LogIn label={t("login")} />
    </nav>
  );
};
