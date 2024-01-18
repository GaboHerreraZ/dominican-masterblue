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
    <nav className="w-full    relative">
      <Button
        variant="light"
        color="primary"
        isIconOnly
        className="mx-10 md:hidden text-master-secondary z-20"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <IoClose className="text-white" size={30} />
        ) : (
          <FaBars size={30} />
        )}
      </Button>
      <ul
        className={`flex h-60 sm:h-14 bg-black/80 absolute sm:static w-full z-10 top-0 justify-center gap-4 md:gap-10 flex-col md:flex-row   transition-all duration-500 text-md md:text-xl text-white font-bold ${
          open ? "left-0" : "-left-full sm:left-0"
        } `}
      >
        {CATEGORIES.map((category: Category, idx: number) => (
          <button onClick={() => filterByCategory(category)} key={category.key}>
            {path === "en" ? category.englishLabel : category.spanishLabel}
          </button>
        ))}
      </ul>
    </nav>
  );
};
