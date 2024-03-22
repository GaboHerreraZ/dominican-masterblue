import Image from "next/image";
import logo from "../../../../public/png/logo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
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
          <h1 className="font-bold text-xl">INFORMACIÓN</h1>
          <div className="grid mt-5">
            <Link href="/terminos-y-condiciones">Terminos y condiciones</Link>
            <p>+1 (829)960-4730</p>
            <p>Warehouse 1 and 2 in front of Cocotal</p>
            <p><b>Opening Hours</b></p>
            <p>Mon a Fri: 8:am - 6:00pm</p>
            <p>Sat: 8:am - 1:00pm</p>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <h1 className="font-bold text-xl">CONTÁCTANOS</h1>
          <div className="grid mt-5">
            <Link href="">Whatsapp</Link>
            <Link href="">Correo Electrónico</Link>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <h1 className="font-bold text-xl">REDES SOCIALES</h1>
          <div className="grid mt-5">
            <Link href="https://www.facebook.com/profile.php?id=61556018750523">
              Facebook
            </Link>
            <Link href="https://www.instagram.com/bellartejoyeria_/">
              Instagram
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-5 mt-10 justify-center items-center grid-flow-row">
        <Link
          href="https://www.facebook.com/profile.php?id=61556018750523"
          target="_blank"
        >
          <FaFacebook size={20} />
        </Link>
        <Link
          href="https://www.instagram.com/bellartejoyeria_/"
          target="_blank"
        >
          <FaInstagram size={20} />
        </Link>
      </div>

      <div className="md:px-40 border-t-[1px] mt-5  border-gray-200">
        <p className="py-4 text-md">
          © 2021 Dominican Masterblue. Diseñado por
          <Link href="https://gabrielherrerazdev.com/en"> GaboGhz</Link>
        </p>
      </div>
    </footer>
  );
};
