import {
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  PhoneIcon,
  ScheduleIcon,
} from "@/app/utils/iconsUtils";
import Link from "next/link";

export const Footer = ({ lng }: { lng: string }) => {
  return (
    <footer className="relative w-full -bottom-10  text-sm bg-footer bg-center bg-cover -z-1">
      <div className="bg-white bg-opacity-90 h-full pt-10">
        <section className="flex flex-col justify-center items-center md:flex-row md:justify-evenly  mx-10 pb-4 gap-10  ">
          <section>
            <span className="text-center">Logo</span>
            <article className="w-64 mt-5 text-justify ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              rerum eaque nulla obcaecati sint dolor omnis maxime et veritatis
              ipsa eum explicabo minima
            </article>
          </section>
          <section className="text-center">
            <h4 className="text-center font-bold text-lg">Our Company</h4>
            <ul className="grid grid-cols-2 gap-3 mt-5 text-left">
              <li className="hover:text-master-900 before:content-['>'] before:mx-1">
                <Link href={`/${lng}/about-us`}>About Us</Link>
              </li>
              <li className="hover:text-master-900 before:content-['>'] before:mx-1">
                <Link href={`/${lng}/servicios`}>Services</Link>
              </li>
              <li className="hover:text-master-900 before:content-['>'] before:mx-1">
                <Link href={`/${lng}/productos`}>Products</Link>
              </li>
              <li className="hover:text-master-900 before:content-['>'] before:mx-1">
                <Link href={`/${lng}/faqs`}>FAQs</Link>
              </li>
              <li className="hover:text-master-900 before:content-['>'] before:mx-1">
                <Link href={`/${lng}/contacto`}>Contacto</Link>
              </li>
            </ul>
            <h4 className="my-3  font-bold text-lg">Follow us on</h4>
            <div className="flex gap-5 justify-center">
              <Link
                href="https://www.instagram.com/ebanisteria_remodelaciones_dmb?igshid=MzRlODBiNWFlZA%3D%3D"
                target="_blank"
              >
                <InstagramIcon fill="#091a7ab3" size={30} />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100094358760633&mibextid=ZbWKwL"
                target="_blank"
              >
                <FacebookIcon fill="#091a7ab3" size={30} />
              </Link>
            </div>
          </section>
          <section>
            <h4 className="mb-5 font-bold  text-center text-lg">Contact Us</h4>
            <div className="flex items-center gap-1">
              <PhoneIcon fill="#091a7ab3" size={30} />
              <p>
                <span className="font-bold">Phone: </span>+1 (829) 960-4730
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <ScheduleIcon fill="#091a7ab3" size={25} />
              <div>
                <h3 className="font-bold ">Schedule</h3>
                <p>Monday to Friday</p>
                <p>8:00 am - 5:00 pm</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              <LocationIcon fill="#091a7ab3" size={30} />
              <div>
                <h3 className="font-bold ">Location</h3>
                <address>
                  <p>Avenida Estados Unidos</p>
                  <p>Nave 1 Y 2 Frente a Cocotal</p>
                </address>
              </div>
            </div>
          </section>
        </section>
        <section className="border-t-1 text-center p-1 text-[14px] font-bold">
          <p>All rights reserved</p>
          <p>COPYRIGHT ©Dominican MasterBlue 2023</p>
        </section>
      </div>
    </footer>
  );
};
