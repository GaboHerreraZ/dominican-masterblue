import Image from "next/image";
import Link from "next/link";

import { getTranslation } from "@/i18n";
import { LogIn } from "./LogIn";
import backgroundImage from "../../../../public/png/navbar-background.png";
import logoMenu from "../../../../public/png/logo_menu.png";
import { MobileButton } from "./MobileButton";

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
    <nav className="grid items-center h-[80px]  relative">
      <Image
        className="w-full"
        src={backgroundImage}
        alt="background image"
        fill
        sizes="100%"
        style={{ objectFit: "cover" }}
      />
      <Link
        className="flex justify-center md:justify-start absolute top-3 left-4 py-4"
        href="/"
      >
        <Image src={logoMenu} alt="logo" width={220} height={150} />
      </Link>
      <ul className="hidden md:flex  absolute w-full text-white font-bold text-xl    justify-center py-4 gap-10">
        {mainMenu.map((item) => (
          <li key={item.link}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <LogIn label={t("login")} />
      <MobileButton />
    </nav>
  );
};
