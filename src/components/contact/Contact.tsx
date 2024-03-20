"use client";
import { Contact } from "@/interfaces/contact";
import { useForm } from "react-hook-form";
import Input from "../ui/input/Input";
import TextArea from "../ui/text-area/TextArea";
import { useLoadingStore } from "@/store";

interface Props {
  translations: any;
}

export const ContactForm = ({ translations }: Props) => {
  const toggleLoading = useLoadingStore((state) => state.toggleLoading);

  const {
    register,
    reset,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
  } = useForm<Contact>();

  const onSubmit = async (data: Contact) => {
    toggleLoading(true);

    try {
      await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(data),
      });

      reset();
    } catch (error) {
      console.error(error);
    }
    toggleLoading(false);
  };

  return (
    <section className="grid justify-center px-2 md:px-20 mt-10">
      <h1 className="text-center font-bold text-3xl">{translations.title}</h1>
      <p className="text-center md:px-20 text-lg mt-5">
        {translations.subTitle1}
      </p>
      <p className="text-center md:px-20 text-lg">{translations.subTitle2} </p>

      <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-0 md:gap-5">
          <Input
            {...register("subject", { required: true })}
            placeholder={translations.subject}
            error={errors.subject && translations.errorSubject}
          />
          <Input
            {...register("name", { required: true })}
            placeholder={translations.name}
            error={errors.name && translations.errorName}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5">
          <Input
            {...register("email", { required: true })}
            placeholder={translations.email}
            error={errors.email && translations.errorEmail}
          />
          <Input {...register("phone")} placeholder={translations.phone} />
        </div>
        <TextArea
          {...register("message", { required: true })}
          placeholder={translations.message}
          error={errors.message && translations.errorMessage}
        />
        {isSubmitSuccessful && (
          <div className="flex mt-5 p-5 w-full rounded bg-gold/40 text-gold">
            <p>{translations.thanksForContacting}</p>
          </div>
        )}

        <div className="flex justify-center  md:justify-end">
          <button type="submit" className="button-gold mt-5">
            {translations.contactUsButton}
          </button>
        </div>
      </form>
    </section>
  );
};
