"use client";
import { useNavbarStore } from "@/store/navbar/navbar-store";
import clsx from "clsx";
import Link from "next/link";

interface Props {
  options: { name: string; link: string }[];
  message: string;
}

export const Menu = ({ options, message }: Props) => {
  const isSideMenuOpen = useNavbarStore((state) => state.isSideMenuOpen);

  return (
    <div
      className={clsx("transition-all duration-500 fixed top-0  w-full", {
        "translate-x-0  min-h-screen": isSideMenuOpen,
        "-translate-x-full": !isSideMenuOpen,
      })}
    >
      <ul
        className={`text-white flex flex-col justify-center gap-10 items-center text-center  bg-slate-950/80 w-full fixed min-h-screen text-xl`}
      >
        {options.map((item) => (
          <Link key={item.name} href={item.link}>
            {item.name}
          </Link>
        ))}
        <li className="mt-10 italic px-5">
          <p className="text-white font-bold">{message}</p>
          <p className="text-center text-gold text-xl">Coco Chanel</p>
        </li>
      </ul>
    </div>
  );
};
