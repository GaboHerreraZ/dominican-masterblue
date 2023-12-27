"use client";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { Button } from "@nextui-org/button";

import { SubmitHandler, useForm } from "react-hook-form";

import { Contact } from "@/domain/model/contact";
import { ContactTranslations } from "@/models/contactTranslations";
import EmailService from "@/service/emailService";
import { EmailSuccess } from "./EmailSuccess";
import { useSearchParams } from "next/navigation";

interface Props {
  translations: ContactTranslations;
  lng: string;
}

const services = [
  {
    englishLabel: "Interior Design",
    spanishLabel: "Diseño Interiores",
    value: "Diseño Interiores",
  },
  {
    englishLabel: "Remodeling",
    spanishLabel: "Remodelación",
    value: "Remodelación",
  },
  {
    englishLabel: "Architecture 3D Render",
    spanishLabel: "Arquitectura Render 3D",
    value: "Arquitectura Render 3D",
  },
];

export const ContactForm = ({ translations, lng }: Props) => {
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams).toString();

  const slug = params.split("=")[1];

  const {
    formState: { errors, isValid, isSubmitSuccessful },
    register,
    handleSubmit,
  } = useForm<Contact>({
    defaultValues: {
      message: slug
        ? `Hola, 
      Quería solicitar más inforamción sobre el producto: 
      https://dominicanmasterblue.com/${lng}/productos/${slug}`
        : "",
    },
  });

  const onSubmit: SubmitHandler<Contact> = async (data) => {
    if (!isValid) return;
    const { sendEmailContact } = EmailService();
    await sendEmailContact(data);
  };

  return (
    <>
      {!isSubmitSuccessful ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col sm:flex-row  gap-2">
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
          </div>
          <div className="flex mt-5 flex-col sm:flex-row  gap-2">
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

            <Select
              variant="flat"
              color="primary"
              size="sm"
              radius="none"
              label={translations.service}
              selectionMode="multiple"
              {...register("service")}
              classNames={{
                popoverContent: "rounded-none",
              }}
            >
              {services.map((service) => (
                <SelectItem key={service.value} value={service.value}>
                  {lng === "en" ? service.englishLabel : service.spanishLabel}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="flex mt-5 flex-col sm:flex-row  gap-2">
            <Textarea
              {...register("message", { required: true })}
              isRequired
              type="text"
              radius="none"
              variant="flat"
              color="primary"
              size="sm"
              label={translations?.message}
              minRows={5}
              errorMessage={errors.message && translations.errorMessage}
              isInvalid={errors.message && true}
            />
          </div>
          <div className="mt-2">
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
      ) : (
        <EmailSuccess translations={translations} lng={lng} />
      )}
    </>
  );
};
