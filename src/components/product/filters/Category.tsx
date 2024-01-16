"use client";
import { Category, CATEGORIES } from "@/utils/const";
import { useFilterStore } from "@/store/useFilterStore";
import { Button } from "@nextui-org/button";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

interface Props {
  path: string;
}

export const CategoryFilter = ({ path }: Props) => {
  const setCategory = useFilterStore((state) => state.setCategory);
  const [open, setOpen] = useState(false);

  const filterByCategory = async (category: Category) => {
    setCategory(category);
  };

  return (
    <nav className="w-full py-1 md:py-2 bg-master-secondary">
      <Button
        variant="light"
        color="primary"
        isIconOnly
        className="mx-10 md:hidden text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? <IoClose size={40} /> : <FaBars size={30} />}
      </Button>
      <ul
        className={`flex justify-center gap-4 md:gap-10 flex-col md:flex-row   transition-height duration-500 text-md md:text-xl text-white font-bold ${
          open
            ? "h-60 opacity-100 md:h-12 "
            : "h-0 opacity-0  md:h-12 md:opacity-100"
        } `}
      >
        {CATEGORIES.map((category: Category, idx: number) => (
          <button onClick={() => filterByCategory(category)} key={idx}>
            {path === "en" ? category.englishLabel : category.spanishLabel}
          </button>
        ))}
      </ul>
    </nav>
  );
};
