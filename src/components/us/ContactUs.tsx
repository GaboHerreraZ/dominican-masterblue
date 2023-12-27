"use client";
import { Contact } from "@/domain/model/contact";
import { Input, Textarea } from "@nextui-org/input";

import { Button } from "@nextui-org/button";
import { SubmitHandler, useForm } from "react-hook-form";
import React from "react";
import EmailService from "@/service/emailService";
import Image from "next/image";
import design from "../../../public/img/jpg/design.jpg";
import { ContactTranslations } from "@/models/contactTranslations";

export const ContactUs = ({
  translations,
}: {
  translations: ContactTranslations;
}) => {
  const {
    formState: { errors, isValid, isSubmitSuccessful },
    register,
    handleSubmit,
  } = useForm<Contact>();

  const onSubmit: SubmitHandler<Contact> = async (data) => {
    if (!isValid) return;
    const { sendEmailContact } = EmailService();

    await sendEmailContact(data);
  };

  return (
    <section className="relative h-[1000px] md:h-[650px]">
      <Image
        fill
        sizes="100%"
        style={{ objectFit: "cover" }}
        src={design}
        alt="home"
      />
      <div className="w-full py-24 h-full absolute backdrop-contrast-150  bg-gradient-to-b from-black/40 to-black/80  grid grid-cols-1 md:grid-cols-2 items-center  justify-center ">
        <article className="font-bold text-white ">
          <p className="text-4xl px-20 text-justify">
            {translations.contactDescription}
          </p>
          <p className="text-5xl mt-5 px-20  text-center">
            {translations.contactInvitation}
          </p>
        </article>
        <div className="px-10 md:px-20">
          <React.Fragment>
            {!isSubmitSuccessful && (
              <form
                className="flex flex-col gap-2 md:gap-5"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Input
                  {...register("name", { required: true })}
                  isRequired
                  type="text"
                  radius="none"
                  size="sm"
                  variant="flat"
                  color="primary"
                  label={translations.name}
                  errorMessage={errors.name && translations.errorName}
                  isInvalid={errors.name && true}
                />
                <Input
                  {...register("email", { required: true })}
                  isRequired
                  type="email"
                  size="sm"
                  radius="none"
                  variant="flat"
                  color="primary"
                  label={translations.email}
                  errorMessage={errors.email && translations.errorEmail}
                  isInvalid={errors.email && true}
                />
                <Input
                  {...register("phone", { required: true })}
                  isRequired
                  type="number"
                  variant="flat"
                  radius="none"
                  size="sm"
                  color="primary"
                  label={translations.phone}
                  errorMessage={errors.phone && translations.errorPhone}
                  isInvalid={errors.phone && true}
                />
                <Textarea
                  {...register("message", { required: true })}
                  isRequired
                  type="text"
                  radius="none"
                  variant="flat"
                  color="primary"
                  size="sm"
                  label={translations?.message}
                  minRows={1}
                  errorMessage={errors.message && translations.errorMessage}
                  isInvalid={errors.message && true}
                />
                <div className="text-center">
                  <Button
                    type="submit"
                    color="primary"
                    size="md"
                    radius="none"
                    variant="solid"
                  >
                    {translations.contactUsButton}
                  </Button>
                </div>
              </form>
            )}
            {isSubmitSuccessful && (
              <div className="w-full text-center font-bold text-success-500  ">
                <p className="text-4xl">
                  {translations.thanksForContacting}
                  {translations.contactSoon}
                </p>
              </div>
            )}
          </React.Fragment>
        </div>
      </div>
    </section>
  );
};
