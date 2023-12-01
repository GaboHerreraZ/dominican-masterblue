"use client";
import { Module } from "@/app/models/module";
import Image from "next/image";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
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
      radius="none"
      className="border-none h-[250px] w-[250px]"
    >
      <CardHeader className=" flex flex-col text-center ">
        <h3 className="w-full text-center font-bold text-master-900/70">
          {module.title}
        </h3>
        <p className="text-tiny text-justify italic font-bold text-black/40">
          {module.description}
        </p>
      </CardHeader>

      <CardBody className="overflow-visible py-2">
        <Image
          priority={true}
          alt={`module-${module.title}`}
          src={module.image}
          fill
          sizes="100%"
        />
      </CardBody>
    </Card>
  );
};
