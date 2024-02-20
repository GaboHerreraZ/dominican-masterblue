import Image from "next/image";
import Link from "next/link";

import english from "../../../../public/img/lng/english.avif";
import spanish from "../../../../public/img/lng/spanish.png";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Lang = () => {
  const path = usePathname();

  const [lng, setLng] = useState("en");

  useEffect(() => {
    const lng = path.split("/")[1];
    setLng(lng);
  }, [path]);

  return (
    <div className="flex">
      <Link
        href="/es"
        className={`${
          lng === "es" ? "scale-110 border-[1px]" : "scale-100"
        } p-1`}
      >
        <Image src={spanish} alt="Spanish" height={15} />
      </Link>
      <Link
        href="/en"
        className={`${
          lng === "en" ? "scale-110 border-[1px]" : "scale-100"
        } p-1`}
      >
        <Image src={english} alt="english" height={15} />
      </Link>
    </div>
  );
};
