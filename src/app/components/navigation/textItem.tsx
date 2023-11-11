import { NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";
import { MenuNav } from "./navigation";
import { usePathname } from "next/navigation";

export const TextMenuItem = ({ item }: { item: MenuNav }) => {
  const path = usePathname();

  return (
    <NavbarItem isActive={path === item.link} className="relative group">
      <Link color="foreground" href={item.link} className="hover:scale-150">
        {item.title}
      </Link>
      <span
        className={
          path === item.link
            ? "absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-master-900 via-master-700 to-master-400"
            : "absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-master-900 via-master-700 to-master-400 transition-all group-hover:w-full"
        }
      ></span>
    </NavbarItem>
  );
};
