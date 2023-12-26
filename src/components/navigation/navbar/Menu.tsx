"use client";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { MenuNav } from "../interface/menuNav";
import { NavbarItem } from "./NavbarItem";
import { usePathname } from "next/navigation";
import { NavbarBanner } from "./NavbarBanner";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";

export const Menu = ({
  items,
  message,
}: {
  items: MenuNav[];
  message: string;
}) => {
  const [toggle, setToggle] = useState(false);

  const path = usePathname();

  const item = items.find((item) => item.link === path);

  return (
    <>
      <div className="w-full absolute top-0 left-0 z-10 bg-black/80  sm:bg-transparent">
        <div className="lg:mx-[200px] md:mx-[100px] px-4 md:px-0 py-4 md:py-5 z-10  relative ">
          <div className="flex justify-between w-full pb-2  sm:border-b-1 border-b-white/20">
            <div className="flex gap-5">
              <Link
                href="https://www.instagram.com/ebanisteria_remodelaciones_dmb?igshid=MzRlODBiNWFlZA%3D%3D"
                target="_blank"
                about="Instagram"
                className="text-white"
              >
                <AiFillInstagram size={30} />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100094358760633&mibextid=ZbWKwL"
                target="_blank"
                about="Facebook"
                className="text-white"
              >
                <FaFacebook size={29} />
              </Link>
            </div>
            <Link href={"/"}>
              <p className="text-xl text-white font-bold uppercase">
                Dominican Master<span className="text-master-400">Blue</span>
              </p>
            </Link>
          </div>
        </div>
        <label htmlFor="toggle">
          <button
            className="absolute right-2 z-20 text-white sm:hidden"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <IoClose size={40} /> : <IoMenu size={40} />}
          </button>
        </label>
        <div
          className={`${
            toggle
              ? "left-0 bg-black/80 sm:bg-transparent"
              : "-left-full sm:left-0 "
          } flex w-full absolute transition-all duration-500 ease-in flex-col sm:flex-row justify-center items-center h-screen sm:h-16 `}
        >
          <nav>
            <ul className="flex flex-col sm:flex-row text-white font-bold antialiased text-2xl sm:text-2xl">
              {items.map((item, idx) => (
                <NavbarItem key={idx} href={item.link} label={item.title} />
              ))}
            </ul>
          </nav>
          <article className="italic text-2xl sm:hidden px-5 text-white">
            <p className="mt-20 mb-0 text-center">{message}</p>
            <h3 className="m-0 font-bold text-center">-Coco Chanel</h3>
          </article>
        </div>
      </div>
      {item ? (
        <NavbarBanner menuNav={item} />
      ) : (
        <div className="h-[150px] relative bg-[#1c2022]  w-full"></div>
      )}
    </>
  );
};
