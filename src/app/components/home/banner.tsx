import furniture from "../../../../public/img/jpg/restore-kitchen.jpg";
import Image from "next/image";

export const Banner = () => {
  return (
    <div className="h-[800px] relative  w-full">
      <Image
        src={furniture}
        fill
        sizes="100%"
        style={{ objectFit: "cover" }}
        alt="home"
        className=""
      />
      <div className="flex place-items-center place-content-end  bg-gradient-to-b from-black/20 to-black/70 absolute h-full w-full">
        <div className="text-end px-4  text-white lg:mx-[250px] md:mx-[150px]">
          <p className="text-3xl md:text-5xl font-bold mb-2">
            Bienvenido al Mundo del Diseño Único
          </p>
          <p className="text-2xl md:text-3xl italic">
            Transformamos Espacios, Creamos Experiencias
          </p>
        </div>
      </div>
    </div>
  );
};
