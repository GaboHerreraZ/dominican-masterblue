import {
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { NavbarItem } from "@nextui-org/navbar";
import { ChevronDownIcon } from "./icons";
import { MenuNav } from "./navigation";
import { usePathname } from "next/navigation";

export const DropDownMenuItem = ({
  title,
  link,
  items = [],
}: {
  title: string;
  link: string;
  items?: MenuNav[];
}) => {
  const path = usePathname();

  return (
    <Dropdown
      backdrop="blur"
      classNames={{
        content: "rounded-none",
      }}
    >
      <NavbarItem isActive={true}>
        <DropdownTrigger>
          <Button
            disableRipple
            radius="none"
            className="relative group text-base  duration-500  px-2 h-[30px] bg-transparent "
            endContent={<ChevronDownIcon fill="#000000" size={16} />}
          >
            <span
              className={`group-hover:text-master-900/70 ${
                path === link ? "text-master-900/70 font-bold" : ""
              }`}
            >
              {title}
            </span>
            <span
              className={
                path === link
                  ? "absolute -bottom-1 left-0 w-full h-[6px] bg-gradient-to-r from-master-900/70 via-master-700 to-master-400"
                  : "absolute -bottom-1 left-0 w-0 h-[6px] bg-gradient-to-r from-master-900/70 via-master-700 to-master-400 transition-all group-hover:w-full "
              }
            ></span>
          </Button>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label="List Products"
        className="w-[350px]"
        itemClasses={{
          base: "gap-4",
          description: "italic",
        }}
      >
        {items.map((item, idx) => (
          <DropdownItem
            key={idx}
            description={item.description}
            startContent={item.icon}
          >
            <span className="font-bold">{item.title}</span>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
