import Image from "next/image";
import logo from "../../../../public/png/logo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { getTranslation } from "@/i18n";

export const Footer = async ({ lng }: { lng: string }) => {
  const { t } = await getTranslation(lng, "footer");

  return (
    <footer className="md:px-0 px-5 pt-10 shadow-2xl mt-20">
      <div className="grid md:px-20 md:mx-20 grid-cols-1 md:grid-cols-4 justify-center ">
        <div>
          <Link href="/">
            <Image
              src={logo}
              alt="Logo Dominican Masterblue"
              width={180}
              height={90}
            />
          </Link>
        </div>
        <div className="mt-10 md:mt-0">
          <h1 className="font-bold text-xl">{t("information")}</h1>
          <div className="grid mt-5">
            <p>+1 (829)960-4730</p>
            <p>{t("address")}</p>
            <p>{t("addressDescription")}</p>
            <p>{t("schedule")}</p>
            <p>{t("weekSchedule")}</p>
            <p>{t("weekendSchedule")}</p>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <h1 className="font-bold text-xl">{t("contactUs")}</h1>
          <div className="grid mt-5">
            <Link href="">Whatsapp</Link>
            <Link href="">{t("e-mail")}</Link>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <h1 className="font-bold text-xl">{t("socialNetworks")}</h1>
          <div className="grid mt-5">
            <Link href="https://www.facebook.com/profile.php?id=100094358760633&mibextid=ZbWKwL">
              Facebook
            </Link>
            <Link href="https://www.instagram.com/ebanisteria_remodelaciones_dmb?igshid=MzRlODBiNWFlZA%3D%3D">
              Instagram
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-5 mt-10 justify-center items-center grid-flow-row">
        <Link
          href="https://www.facebook.com/profile.php?id=100094358760633&mibextid=ZbWKwL"
          target="_blank"
        >
          <FaFacebook size={20} />
        </Link>
        <Link
          href="https://www.instagram.com/ebanisteria_remodelaciones_dmb?igshid=MzRlODBiNWFlZA%3D%3D"
          target="_blank"
        >
          <FaInstagram size={20} />
        </Link>
      </div>

      <div className="md:px-40 border-t-[1px] mt-5  border-gray-200">
        <p className="py-4 text-md">
          {t("developer")}
          <Link href="https://gabrielherrerazdev.com/en"> GaboGhz</Link>
        </p>
      </div>
    </footer>
  );
};
