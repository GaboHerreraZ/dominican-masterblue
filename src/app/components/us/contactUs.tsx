"use client";
import { Contact } from "@/domain/model/contact";
import { Input, Textarea } from "@nextui-org/input";

import { Button } from "@nextui-org/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { UsTranslations } from "@/app/models/UsTranslations";
import React from "react";
import EmailService from "@/service/emailService";

export const ContactUs = ({
  translations,
}: {
  translations: UsTranslations;
}) => {
  const {
    formState: { errors, isValid, isSubmitSuccessful },
    register,
    reset,
    handleSubmit,
  } = useForm<Contact>();

  const onSubmit: SubmitHandler<Contact> = async (data) => {
    if (!isValid) return;
    const { sendEmailContact } = EmailService();

    await sendEmailContact(data);
  };

  return (
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
            errorMessage={errors.name ? "Please enter a valid email" : ""}
            isInvalid={errors.name ? true : false}
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
            errorMessage={errors.email ? "Please enter a valid email" : ""}
            isInvalid={errors.email ? true : false}
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
            errorMessage={errors.phone ? "Please enter a valid email" : ""}
            isInvalid={errors.phone ? true : false}
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
            errorMessage={
              errors.message ? "Descripción en inglés es requerida" : ""
            }
            isInvalid={errors.message ? true : false}
          />
          <div className="text-center">
            <Button
              type="submit"
              color="primary"
              size="md"
              radius="none"
              variant="solid"
            >
              {translations.contactUs}
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
  );
};
