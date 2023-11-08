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
  const path = usePathname().split("/");

  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Button
            disableRipple
            className="text-base hover:scale-110 duration-500 hover:bg-gray-100 py-1 px-2 hover:rounded-md  bg-transparent "
            endContent={<ChevronDownIcon fill="currentColor" size={16} />}
          >
            {title}
          </Button>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label="List Products"
        className="w-[340px]"
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
            {item.title}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

/*< <DropdownItem
key="usage_metrics"
description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
startContent={icons.activity}
>
Usage Metrics
</DropdownItem>
<DropdownItem
key="production_ready"
description="ACME runs on ACME, join us and others serving requests at web scale."
startContent={icons.flash}
>
Production Ready
</DropdownItem>
<DropdownItem
key="99_uptime"
description="Applications stay on the grid with high availability and high uptime guarantees."
startContent={icons.server}
>
+99% Uptime
</DropdownItem>
<DropdownItem
key="supreme_support"
description="Overcome any challenge with a supporting team ready to respond."
startContent={icons.user}
>
+Supreme Support
</DropdownItem>*/
