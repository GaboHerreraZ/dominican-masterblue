"use client";
import { QuestionIcon } from "@/app/utils/iconsUtils";
import { Faqs } from "@/domain/model/faq";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import Image from "next/image";
import mejoras from "../../../../public/img/jpg/mejoras.jpg";

export const FaqsComponent = ({ faqs }: { faqs: Faqs }) => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <section>
      <header className="h-[350px] relative ">
        <Image
          alt="imagen-prueba"
          src={mejoras}
          fill
          sizes="100%"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute bg-white bg-opacity-70 h-full w-full"></div>
        <div className="absolute flex flex-col items-center justify-center w-full h-full">
          <h4 className="title-master font-bold text-4xl">FAQs</h4>
          <p className="text-2xl text-master-900">
            &quot;{faqs.subtitle}&quot;
          </p>
        </div>
      </header>
      <section className="m-20">
        <p className="text-center">
          <QuestionIcon fill="#091A7A" size={50} />
        </p>
        <p className="italic text-center m-0 text-4xl ">{faqs.description}</p>
        <h4 className="mb-7 m-0 text-center font-bold text-master-900 text-2xl">
          {faqs.title}
        </h4>
        <Accordion variant="shadow">
          <AccordionItem key="1" aria-label="Accordion 1" title="Question 1">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Question 2">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Question 3">
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </section>
    </section>
  );
};
