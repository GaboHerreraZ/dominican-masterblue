"use client";
import { useSidebarStore } from "@/store";
import clsx from "clsx";
import Link from "next/link";
import { IoHomeOutline, IoDiamond, IoClose } from "react-icons/io5";
import { MdCategory } from "react-icons/md";

import { FaUsers } from "react-icons/fa6";
import { PiListChecksFill } from "react-icons/pi";
import { BiSolidCategoryAlt } from "react-icons/bi";

export const SideBar = () => {
  const isSideMenuOpen = useSidebarStore((state) => state.isSideMenuOpen);
  const toggleSideMenu = useSidebarStore((state) => state.toogleSideMenu);

  return (
    <aside
      className={clsx(
        " fixed text-title z-10 border-r-[1px] border-gold bg-slate-950  h-screen pr-5 transition-all duration-500",
        {
          "translate-x-0": isSideMenuOpen,
          "-translate-x-full": !isSideMenuOpen,
        }
      )}
    >
      <div className="text-end">
        <button className="text-gold" onClick={toggleSideMenu}>
          <IoClose size={30} />
        </button>
      </div>
      <div className="grid  text-gold font-bold  ">
        <ul className="flex flex-col gap-3 w-full px-2 mt-4">
          <li>
            <Link href="/admin" className="flex gap-2 items-center">
              <IoHomeOutline size={20} />
              <h1>Dashboard</h1>
            </Link>
          </li>

          <li>
            <Link href="/admin/productos" className="flex gap-2 items-center">
              <IoDiamond size={20} />
              <h1>Artículos</h1>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
