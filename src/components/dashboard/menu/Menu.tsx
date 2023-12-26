import { FaClipboardList } from "react-icons/fa6";
import Link from "next/link";
import { DashboardTranslations } from "@/models/dashboardTranslations";

interface Props {
  lng: string;
  translations: DashboardTranslations;
}

export const Menu = ({ lng, translations }: Props) => {
  return (
    <section className="p-2 ">
      <h4 className="text-white font-bold pt-5 text-center  uppercase">
        Dominican Master<span className="text-master-400">blue</span>
      </h4>
      <p className="text-slate-400 pb-5  text-small  text-center">
        Manage your actions or activities
      </p>
      <ul className="z-40 text-xs text-white py-2 px-4 bg-black/30  ">
        <li className="flex items-center gap-1 ">
          <FaClipboardList size={15} />
          <Link
            className="hover:underline"
            href={`/${lng}/dashboard/productos`}
          >
            {translations?.listProductTitle}
          </Link>
        </li>
      </ul>
    </section>
  );
};
