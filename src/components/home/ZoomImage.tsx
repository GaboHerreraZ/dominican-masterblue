import { getTranslation } from "@/i18n";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface Props {
  className?: string;
  urlImage: string;
  label: string;
  link: string;
  lng: string;
}

export const ZoomImage = async ({
  className,
  urlImage,
  label,
  link,
  lng,
}: Props) => {
  const { t } = await getTranslation(lng, "home");

  return (
    <div className={clsx("relative overflow-hidden h-full w-full", className)}>
      <div className=" group absolute h-full w-full ">
        <Image
          src={urlImage}
          alt={label}
          sizes="100%"
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-1000 ease-in-out transform group-hover:scale-110"
        />
        <div className="absolute w-full flex justify-center bottom-4">
          <Link
            href={link}
            className="bg-gold/75 px-3 py-1 rounded  text-white text-lg"
          >
            {t(label)}
          </Link>
        </div>
      </div>
    </div>
  );
};
