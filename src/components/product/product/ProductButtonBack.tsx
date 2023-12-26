"use client";
import { IoMdArrowRoundBack } from "react-icons/io";
import { createPageUrl, getCookieFilter } from "../actions/actions";
import { useRouter, useSearchParams } from "next/navigation";
import { ProductTranslations } from "@/models/productTranslations";

interface Props {
  lng: string;
  translations: ProductTranslations;
}

export const ProductButtonBack = ({ lng, translations }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const back = async () => {
    const cookie = await getCookieFilter();
    if (cookie) {
      const url = await createPageUrl(lng, searchParams, cookie);
      router.push(url);
      return;
    }
    router.back();
  };

  return (
    <label
      className="flex items-center font-bold text-small cursor-pointer hover:underline"
      onClick={back}
    >
      <IoMdArrowRoundBack size={20} />
      {translations.back}
    </label>
  );
};
