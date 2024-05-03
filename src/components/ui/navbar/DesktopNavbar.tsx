import Image from "next/image";
import Link from "next/link";

import { getTranslation } from "@/i18n";
import { LogIn } from "./LogIn";
import logoMenu from "../../../../public/png/logo_menu.png";
import { MobileButton } from "./MobileButton";
import { DesktopMenuNavbar } from "./DesktopMenuNavbar";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";

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
      <div className="hidden md:flex  absolute w-full text-gold font-bold text-xl    justify-center py-4 gap-10">
        <div className="w-full flex gap-5 justify-center items-center grid-flow-row">
          <Link
            href="https://www.facebook.com/profile.php?id=100094358760633&mibextid=ZbWKwL"
            target="_blank"
          >
            <FaFacebook size={30} />
          </Link>
          <Link
            href="https://www.instagram.com/ebanisteria_remodelaciones_dmb?igshid=MzRlODBiNWFlZA%3D%3D"
            target="_blank"
          >
            <FaInstagram size={30} />
          </Link>
          <Link
            href="https://wa.me/18299604730?text=Hola%20Dominican%20MasterBlue%2C%20quer%C3%ADa%20tener%20m%C3%A1s%20informaci%C3%B3n"
            target="_blank"
          >
            <FaWhatsapp size={30} />
          </Link>
        </div>
      </div>
      <LogIn label={t("login")} />
      <MobileButton />
    </nav>
  );
};
