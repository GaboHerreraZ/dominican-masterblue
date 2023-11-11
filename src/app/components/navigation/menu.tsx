"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { MenuNav } from "@/app/components/navigation/navigation";
import { DropDownMenuItem } from "./dropDownItem";
import { TextMenuItem } from "./textItem";
import { FacebookIcon, InstagramIcon } from "@/app/utils/iconsUtils";

export const Menu = ({
  menuItems,
  message,
}: {
  menuItems: MenuNav[];
  message: string;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path: string = usePathname();
  console.log(path);

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        item: ["data-[active=true]: text-master-900 py-1 px-2 rounded-md"],
      }}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="" justify="start">
        <NavbarBrand>
          {/*<AcmeLogo />*/}
          <p className="font-bold text-inherit">Logo</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        {menuItems.map((item, idx) =>
          item.type === "dropdown" ? (
            <DropDownMenuItem key={idx} title={item.title} items={item.items} />
          ) : (
            <TextMenuItem key={idx} item={item} />
          )
        )}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex gap-2">
          <Link
            href="https://www.instagram.com/ebanisteria_remodelaciones_dmb?igshid=MzRlODBiNWFlZA%3D%3D"
            target="_blank"
            about="Instagram"
          >
            <InstagramIcon
              className="fill-current hover:fill-yellow-700"
              fill="currentColor"
              size={20}
            />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100094358760633&mibextid=ZbWKwL"
            target="_blank"
            about="Facebook"
          >
            <FacebookIcon
              className="fill-current hover:fill-blue-600"
              fill="currentColor"
              size={21}
            />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="text-center pt-10 gap-8 ">
        {menuItems.map((item, idx) => {
          return (
            <NavbarMenuItem isActive={path === item.link} key={idx}>
              <Link color="foreground" href={item.link}>
                {item.title}
              </Link>
            </NavbarMenuItem>
          );
        })}

        <article className="italic">
          <p className="mt-20 mb-0">{message}.</p>
          <p className="m-0 font-bold">-Coco Chanel</p>
        </article>
      </NavbarMenu>
    </Navbar>
  );
};
