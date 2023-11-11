import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import Image from "next/legacy/image";
import interiores from "../../../../../public/img/png/interiores.png";
import { Button } from "@nextui-org/button";

export const CardService = () => {
  return (
    <Card
      isFooterBlurred
      className=" w-[180px] h-[200px] md:w-[200px] md:h-[230px] lg:w-[250px] lg:h-[280px] m-5 col-span-12 sm:col-span-7 card-custom "
    >
      <CardHeader
        title="Card title"
        className="absolute z-10 top-1 flex-col items-start"
      >
        <p className="text-tiny text-white/60 uppercase font-bold">
          Your day your way
        </p>
        <h4 className="text-white/90 font-medium text-xl">
          Your checklist for better sleep
        </h4>
      </CardHeader>
      <Image
        alt="imagen-prueba"
        src={interiores}
        layout="fill"
        objectFit="cover"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 ">
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Breathing App</p>
            <p className="text-tiny text-white/60">Get a good nights sleep.</p>
          </div>
        </div>
        <Button radius="full" size="sm">
          Ver
        </Button>
      </CardFooter>
    </Card>
  );
};
