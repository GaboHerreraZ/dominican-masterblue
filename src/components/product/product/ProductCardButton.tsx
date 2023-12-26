"use client";
import { Button } from "@nextui-org/button";
import { setCookie } from "../actions/actions";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  slug: string;
  label?: string;
  lng: string;
}

export const ProductCardButton = ({ id, slug, label, lng }: Props) => {
  const router = useRouter();

  const handleProduct = () => {
    setCookie(id);
    router.push(`/${lng}/productos/${slug}`);
  };

  return (
    <Button
      className="text-tiny text-white bg-black/20"
      variant="flat"
      color="default"
      radius="none"
      size="sm"
      onClick={handleProduct}
    >
      {label}
    </Button>
  );
};
