import { ZoomImage } from "./ZoomImage";

interface Props {
  title: string;
  description: string;
  urlImage: string;
  lng: string;
}

export const HomeServiceLeft = ({
  lng,
  description,
  urlImage,
  title,
}: Props) => {
  return (
    <div className=" intersect:animate-fade-left mt-10 md:p-5 ">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center md:w-[80vw] lg:w-[60vw] md:translate-x-10  lg:translate-x-24">
        <div className="bg-gold/5  pb-10 md:pb-0">
          <h1 className="text-center text-gold font-bold text-2xl mt-2 md:my-5">
            {title}
          </h1>
          <p className="px-10 text-xl italic">{description}</p>
        </div>
        <div className="h-[250px] ">
          <ZoomImage
            label=""
            hasLink={false}
            link=""
            urlImage={urlImage}
            lng={lng}
          />
        </div>
      </div>
    </div>
  );
};
