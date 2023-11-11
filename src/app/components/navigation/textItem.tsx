import { NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";
import { MenuNav } from "./navigation";
import { usePathname } from "next/navigation";

export const TextMenuItem = ({ item }: { item: MenuNav }) => {
  const path = usePathname();

  return (
    <NavbarItem
      isActive={path === item.link}
      className="hover:scale-110  duration-500 py-1 px-2 hover:text-master-900  "
    >
      <Link color="foreground" href={item.link}>
        {item.title}
      </Link>
    </NavbarItem>
  );
};
