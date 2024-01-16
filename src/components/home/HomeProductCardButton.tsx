"use client";
import { useFilterStore } from "@/store/useFilterStore";
import { CATEGORIES } from "@/utils/const";
import { Button } from "@nextui-org/button";
import { Category } from "../../utils/const";
import { useRouter } from "next/navigation";

export const HomeProductCardButton = ({
  label,
  category,
}: {
  label: string;
  category: string;
}) => {
  const setCategory = useFilterStore((state) => state.setCategory);
  const router = useRouter();

  const handleClick = () => {
    const categoryFinded =
      CATEGORIES.find((c) => c.key === category) || ({} as Category);
    setCategory(categoryFinded);
    router.push("/productos");
  };

  return (
    <Button
      onClick={handleClick}
      className="text-tiny text-white bg-black/20"
      variant="flat"
      color="default"
      radius="none"
      size="sm"
    >
      {label}
    </Button>
  );
};
