import { NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";
import { MenuNav } from "./navigation";
import { usePathname } from "next/navigation";

export const TextMenuItem = ({ item }: { item: MenuNav }) => {
  const path = usePathname().split("/");

  return (
    <NavbarItem
      isActive={path.includes(item.link.slice(1, item.link.length))}
      className="hover:scale-110  duration-500 hover:bg-gray-100 py-1 px-2 hover:rounded-md "
    >
      <Link color="foreground" href={item.link}>
        {item.title}
      </Link>
    </NavbarItem>
  );
};
