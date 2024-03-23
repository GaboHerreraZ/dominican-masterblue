"use client";
import { useNavbarStore } from "@/store/navbar/navbar-store";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export const MobileButton = () => {
  const toogleSideMenu = useNavbarStore((state) => state.toogleSideMenu);
  const isSideMenuOpen = useNavbarStore((state) => state.isSideMenuOpen);

  return (
    <div className="absolute z-[100] right-4 flex  items-center">
      <button className=" md:hidden grid text-white" onClick={toogleSideMenu}>
        {!isSideMenuOpen ? <FaBars size={30} /> : <IoClose size={30} />}
      </button>
    </div>
  );
};
