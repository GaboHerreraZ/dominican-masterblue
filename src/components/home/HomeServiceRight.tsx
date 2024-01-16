import { Service } from "@/domain/model/service";
import { getTranslation } from "@/i18n";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const HomeServiceRight = async ({
  service,
  lng,
}: {
  lng: string;
  service: Service;
}) => {
  const { t } = await getTranslation(lng, "home");
  return (
    <section className="flex h-[600px] flex-col-reverse md:flex-row">
      <article className="flex flex-col justify-center group hover:bg-master-secondary w-full  md:w-1/3 p-4  md:p-10 transition-background duration-100  ">
        <p className="text-2xl group-hover:text-white before:content-['<<'] after:content-['>>'] uppercase mb-5 text-master-900/70 text-center font-bold">
          {t(service.title)}
        </p>
        <p className="flex  text-slate-400 italic text-xl  md:p-8 md:text-xl lg:text-xl text-justify">
          {t(service.description)}
        </p>
        <Link
          className="self-center"
          href={`/${lng}/contacto?servicio=${t(service.title)}`}
        >
          <Button
            disableRipple
            className="m-4 master-button"
            size="sm"
            color="primary"
            radius="none"
            variant="solid"
          >
            {t("seeMore")}
          </Button>
        </Link>
      </article>
      <div className="flex flex-col h-full  w-full md:flex-row md:w-2/3 justify-center relative">
        <Image
          alt="imagen-prueba"
          className="transition-all duration-500 ease-in-out "
          src={service.image}
          sizes="100%"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="bg-gradient-to-b from-transparent to-black/90 absolute h-full w-full"></div>
      </div>
    </section>
  );
};
