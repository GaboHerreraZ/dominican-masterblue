import { NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";
import { MenuNav } from "./navigation";
import { usePathname } from "next/navigation";

export const TextMenuItem = ({ item }: { item: MenuNav }) => {
  const path = usePathname();

  return (
    <NavbarItem isActive={path === item.link} className="relative group ">
      <Link
        href={item.link}
        className="group-hover:text-master-900/70 group-hover:scale-110 text-medium p-5 uppercase font-bold"
      >
        {item.title}
      </Link>
      <span
        className={
          path === item.link
            ? "absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-master-900/70 via-master-700 to-master-400 text-master-900/70 transition-all group-hover:w-full"
            : "absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-master-400 via-master-700 to-master-900/70 transition-all group-hover:w-full "
        }
      ></span>
    </NavbarItem>
  );
};
