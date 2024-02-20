import Image from "next/image";
import { MenuNav } from "../interface/menuNav";

export const NavbarBanner = ({ menuNav }: { menuNav?: MenuNav }) => {
  return (
    <div className="h-[400px] relative  w-full">
      <Image
        src={menuNav?.image}
        fill
        sizes="100%"
        style={{ objectFit: "cover" }}
        alt="home"
        className=""
      />
      <div className="flex backdrop-contrast-150 pt-10 place-items-center place-content-center absolute h-full w-full">
        <div className="text-center px-4 mt-10 text-white">
          <p className="text-3xl md:text-5xl font-bold mb-2">
            {menuNav?.bannerTitle}
          </p>
          <p className="text-2xl md:text-3xl italic">
            {menuNav?.bannerDescription}
          </p>
        </div>
      </div>
    </div>
  );
};
