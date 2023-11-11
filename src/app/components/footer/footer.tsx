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
    <footer className="text-sm bg-footer bg-center bg-cover">
      <div className="bg-white bg-opacity-90 h-full pt-10">
        <section className="flex flex-col md:flex-row justify-evenly center mx-10 pb-4 gap-10  ">
          <section>
            <span className="text-center">Logo</span>
            <article className="w-64 mt-5 text-justify ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              rerum eaque nulla obcaecati sint dolor omnis maxime et veritatis
              ipsa eum explicabo minima
            </article>
          </section>
          <section className="text-center">
            <h4 className="text-master-900 font-bold text-lg">Our Company </h4>
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
            <h4 className="my-3 text-master-900 font-bold text-lg">
              Follow us on
            </h4>
            <div className="flex gap-5 justify-center">
              <InstagramIcon fill="#091A7A" size={30} />
              <FacebookIcon fill="#091A7A" size={30} />
            </div>
          </section>
          <section>
            <h4 className="mb-5 font-bold text-master-900 text-lg">
              Contact Us
            </h4>
            <div className="flex items-center gap-1">
              <PhoneIcon fill="#091A7A" size={30} />
              <p>
                <span className="text-master-900 font-bold">Phone: </span>+1
                (829) 960-4730
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <ScheduleIcon fill="#091A7A" size={25} />
              <div>
                <h3 className="font-bold text-master-900">Schedule</h3>
                <p>Monday to Friday</p>
                <p>8:00 am - 5:00 pm</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              <LocationIcon fill="#091A7A" size={30} />
              <div>
                <h3 className="font-bold text-master-900">Location</h3>
                <address>
                  <p>Avenida Estados Unidos</p>
                  <p>Nave 1 Y 2 Frente a Cocotal</p>
                </address>
              </div>
            </div>
          </section>
        </section>
        <section className="border-t-1 text-center p-1 text-[14px]  text-master-900 font-bold">
          <p>All rights reserved</p>
          <p>COPYRIGHT ©Dominican MasterBlue 2023</p>
        </section>
      </div>
    </footer>
  );
};
