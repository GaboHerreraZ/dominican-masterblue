"use client";
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { MenuNav } from "@/app/components/navigation/navigation";
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

  return (
    <div className="absolute w-full">
      <div className="lg:mx-[250px] md:mx-[150px] px-4 md:px-0 py-4 md:py-5 z-10  relative ">
        <div className="flex justify-between w-full pb-2  border-b-1 border-b-white/20">
          <div className="flex gap-5">
            <Link
              href="https://www.instagram.com/ebanisteria_remodelaciones_dmb?igshid=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
              about="Instagram"
            >
              <InstagramIcon fill="#fff" size={30} />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100094358760633&mibextid=ZbWKwL"
              target="_blank"
              about="Facebook"
            >
              <FacebookIcon fill="#fff" size={30} />
            </Link>
          </div>
          <p className="text-xl text-white font-bold uppercase">
            Dominican Master<span className="text-master-400">Blue</span>
          </p>
        </div>
      </div>
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        classNames={{
          base: "bg-transparent  text-white backdrop-blur-none",
          item: [
            "data-[active=true]:font-bold",
            "data-[active=true]:text-master-900/70",
          ],
        }}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="hidden sm:flex w-full gap-4" justify="center">
          {menuItems.map((item, idx) => (
            <TextMenuItem key={idx} item={item} />
          ))}
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
    </div>
  );
};
