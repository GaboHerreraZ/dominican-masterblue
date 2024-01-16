import { Service } from "@/domain/model/service";
import { getTranslation } from "@/i18n";
import Image from "next/image";
interface Props {
  service: Service;
  lng: string;
}

export const UsService = async ({ service, lng }: Props) => {
  const { t } = await getTranslation(lng, "home");
  const { t: usT } = await getTranslation(lng, "us");

  return (
    <section className="relative  h-[550px] w-full">
      <Image
        fill
        sizes="100%"
        style={{ objectFit: "cover" }}
        src={service.image}
        alt={service.title}
      />
      <div className="text-white font-bold absolute group top-0 h-full grid w-full backdrop-contrast-150  bg-gradient-to-b from-black/20 to-black md:hover:bg-master-secondary/50">
        <article className="h-full flex flex-col justify-center ">
          <ul className="group-hover:grid hidden md:grid-cols-1 lg:grid-cols-2 items-center md:translate-x-full md:group-hover:translate-x-0 transition-all duration-1000  justify-center md:gap-5">
            {service.tips!.map((tip, index) => (
              <li key={index} className=" md:text-medium px-2 md:px-5 ">
                <h3 className="font-bold uppercase md:text-md lg:text-lg text-white">
                  {usT(tip.title)}
                </h3>
                <p className="text-slate-400 md:text-md">
                  {usT(tip.description)}
                </p>
              </li>
            ))}
          </ul>
          <footer className=" flex flex-col justify-end items-center group-hover:hidden   transition-opacity duration-1000">
            <h3 className="text-xl text-center  font-bold uppercase text-white ">
              {t(service.title)}
            </h3>
            <div className="border-t-4 h-2 text-center border-white w-5"></div>
          </footer>
        </article>
      </div>
    </section>
  );
};
