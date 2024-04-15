import Image from "next/image";
import Link from "next/link";

import { getTranslation } from "@/i18n";
import { LogIn } from "./LogIn";
import logoMenu from "../../../../public/png/logo_menu.png";
import { MobileButton } from "./MobileButton";
import { DesktopMenuNavbar } from "./DesktopMenuNavbar";

export const DesktopNavbar = async ({ lng }: { lng: string }) => {
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
    <nav className="grid items-center h-[80px] bg-gold/10  relative">
      <Link
        className="flex z-20 cursor-pointer justify-center md:justify-start absolute top-0 left-4 py-2"
        href="/"
      >
        <Image src={logoMenu} alt="logo" width={300} height={150} />
      </Link>
      <ul className="hidden md:flex  absolute w-full text-gold font-bold text-xl    justify-center py-4 gap-10">
        {mainMenu.map((item) => (
          <DesktopMenuNavbar
            key={item.link}
            link={item.link}
            name={item.name}
          />
        ))}
      </ul>
      <LogIn label={t("login")} />
      <MobileButton />
    </nav>
  );
};
