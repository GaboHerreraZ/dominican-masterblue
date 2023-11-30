"use client";
import { Module } from "@/app/models/module";
import Image from "next/image";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const ModuleCard = ({ module }: { module: Module }) => {
  const navigation = useRouter();

  const onPressModule = useCallback(() => {
    navigation.push(`${module.route}`);
  }, []);

  return (
    <Card
      isPressable
      onPress={onPressModule}
      isFooterBlurred
      radius="none"
      className="border-none"
    >
      <CardHeader className="absolute text-center ">
        <h3 className="w-full text-center font-bold text-master-900/70">
          {module.title}
        </h3>
      </CardHeader>
      <Image
        priority={true}
        alt={`module-${module.title}`}
        className="object-cover "
        height={250}
        src={module.image}
        width={250}
      />
      <CardFooter className=" before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-none bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny font-bold text-master-900/70">
          {module.description}
        </p>
      </CardFooter>
    </Card>
  );
};
