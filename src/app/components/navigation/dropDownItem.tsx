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
  items = [],
}: {
  title: string;
  items?: MenuNav[];
}) => {
  const path = usePathname();

  return (
    <Dropdown backdrop="blur">
      <NavbarItem>
        <DropdownTrigger>
          <Button
            disableRipple
            className="text-master-900 text-base hover:scale-110 duration-500 py-1 px-2 hover:rounded-md  bg-transparent "
            endContent={<ChevronDownIcon fill="currentColor" size={16} />}
          >
            {title}
          </Button>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label="List Products"
        className="w-[350px]"
        itemClasses={{
          base: "gap-4",
        }}
      >
        {items.map((item, idx) => (
          <DropdownItem
            key={idx}
            description={item.description}
            startContent={item.icon}
          >
            <span className="text-master-900 underline font-bold">
              {item.title}
            </span>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
