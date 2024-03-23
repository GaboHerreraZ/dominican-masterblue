"use client";
import { Base } from "@/interfaces/base";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  categories: Base[];
  category: string;
  lng: string;
}

export const CategorySelector = ({ categories, category, lng }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(category);

  const router = useRouter();

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  const handleChange = (event: any) => {
    setSelectedCategory(event.target.value);
    router.replace(`/products/${event.target.value}`);
  };

  return (
    <div className="grid grid-cols-2 justify-between px-2 gap-2  w-full">
      <div key="all" className="flex flex-row items-center">
        <input
          onChange={handleChange}
          type="checkbox"
          value="all"
          checked={selectedCategory === "all"}
          id="all"
          className="appearance-none h-6 w-6 bg-white border-[1px] border-slate-200 rounded-full checked:bg-gold checked:scale-75 transition-all duration-200 peer"
        />
        <div className="h-6 w-6 absolute rounded-full pointer-events-none peer-checked:border-gold peer-checked:border-2"></div>
        <label
          htmlFor="all"
          className="flex flex-col justify-center px-2 peer-checked:text-gold text-raffle-text select-none"
        >
          {lng === "es" ? "Todos" : "All"}
        </label>
      </div>
      {categories.map((category: Base) => (
        <div key={category.id} className="flex flex-row items-center">
          <input
            onChange={handleChange}
            type="checkbox"
            value={category.link}
            checked={selectedCategory === category.link}
            id={category.name}
            className="appearance-none h-6 w-6 bg-white border-[1px] border-slate-200 rounded-full checked:bg-gold checked:scale-75 transition-all duration-200 peer"
          />
          <div className="h-6 w-6 absolute rounded-full pointer-events-none peer-checked:border-gold peer-checked:border-2"></div>
          <label
            htmlFor={category.name}
            className="flex flex-col justify-center px-2 peer-checked:text-gold text-raffle-text select-none"
          >
            {lng === "es"
              ? category.spanishDescription
              : category.englishDescription}
          </label>
        </div>
      ))}
    </div>
  );
};
