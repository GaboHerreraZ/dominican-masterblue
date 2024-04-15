"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const DesktopMenuNavbar = ({
  link,
  name,
}: {
  link: string;
  name: string;
}) => {
  const pathName = usePathname().split("/")[2];

  return (
    <li
      className={clsx("group", {
        "text-gold ": link === `/${pathName}`,
      })}
    >
      <Link href={link}>{name}</Link>
      <div
        className={clsx(
          "group-hover:w-full h-0 group-hover:h-[1px] w-0 group-hover:bg-gold transition-all duration-300 ease-in-out",
          {
            "w-full h-[1px] bg-gold": link === `/${pathName}`,
          }
        )}
      ></div>
    </li>
  );
};
