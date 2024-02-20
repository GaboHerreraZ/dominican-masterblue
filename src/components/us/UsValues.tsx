import { getTranslation } from "@/i18n";
import Image, { StaticImageData } from "next/image";

interface Props {
  title1: string;
  title2: string;
  description: string;
  image: StaticImageData;
  lng: string;
}

export const UsValues = async ({
  title1,
  title2,
  description,
  image,
  lng,
}: Props) => {
  const { t } = await getTranslation(lng, "us");

  return (
    <section className="box-border">
      <header className="relative flex h-[350px] flex-col items-center ">
        <Image
          fill
          style={{ objectFit: "cover" }}
          src={image}
          alt={title1 + title2}
        />
        <div className="absolute  h-full  w-full backdrop-contrast-150    "></div>
      </header>
      <footer className="w-full px-2 md:px-0  mt-4">
        <h1 className="italic text-2xl  md:text-md text-master-900/70 font-bold  uppercase opacity-100 transition-opacity duration-1000 group-hover:opacity-0">
          {t(title1)}
        </h1>
        <h1 className="italic text-2xl  md:text-md text-master-900/70 font-bold  uppercase opacity-100 transition-opacity duration-1000 group-hover:opacity-0">
          {t(title2)}
        </h1>
        <p className="pb-5  text-mds text-slate-400  text-justify">
          {t(description)}
        </p>
      </footer>
    </section>
  );
};
