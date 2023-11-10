"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/legacy/image";
import muebles from "../../../../../public/img/jpg/muebles.jpg";
import { Link as LinkDefault } from "@nextui-org/link";
import { Link } from "@nextui-org/link";

export const Product = () => {
  return (
    <Card
      className="w-[300px]"
      shadow="sm"
      isPressable
      onPress={() => console.log("item pressed")}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          alt={"mesas"}
          className="w-full object-cover h-[140px]"
          src={muebles}
        />
      </CardBody>
      <CardFooter className="text-small justify-center">
        <b>{"Desks"}</b>
      </CardFooter>
    </Card>
  );
};
