import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  label: string;
  href: string;
}

export const NavbarItem = ({ label, href }: Props) => {
  const path: string = usePathname();

  return (
    <li className="p-5 mx-2 sm:p-0 text-center relative group">
      <Link
        href={href}
        className={`group-hover:italic group-hover:scale-110 text-lg sm:py-5 px-1  sm:px-5  uppercase font-bold ${
          path === href ? "italic" : ""
        }`}
      >
        {label}
      </Link>
      <span
        className={
          path === href
            ? "absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-master-900/70 via-master-700 to-master-400 text-master-900/70 transition-all group-hover:w-full"
            : "absolute  -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-master-400 via-master-700 to-master-900/70 transition-all group-hover:w-full "
        }
      ></span>
    </li>
  );
};
