import { ZoomImage } from "./ZoomImage";

interface Props {
  title: string;
  description: string;
  urlImage: string;
  lng: string;
}

export const HomeServiceRight = ({
  lng,
  description,
  urlImage,
  title,
}: Props) => {
  return (
    <div className="intersect:animate-fade-right  md:p-5 ">
      <div className="grid grid-cols-1 w-full md:grid-cols-2 md:w-[80vw] lg:w-[60vw] justify-center md:-translate-x-10 lg:-translate-x-24  ">
        <div className="h-[250px]  order-2 md:order-1 ">
          <ZoomImage
            label=""
            hasLink={false}
            link=""
            urlImage={urlImage}
            lng={lng}
          />
        </div>
        <div className=" bg-gold/5  order-1 pb-10 md:pb-0 md:order-2 ">
          <h1 className="text-center text-gold font-bold text-2xl mt-2 md:my-5 ">
            {title}
          </h1>
          <p className="px-10 text-xl italic">{description}</p>
        </div>
      </div>
    </div>
  );
};
