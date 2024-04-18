"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import Input from "@/components/ui/input/Input";
import { Login } from "@/interfaces/login";
import { LoginLng } from "@/interfaces/i18n/loginLng";
import { useLoadingStore } from "@/store";
import { signInWithPassword } from "@/actions";

interface Props {
  translations: LoginLng;
}

export const LoginForm = ({ translations }: Props) => {
  const [errorMessage, setErrorMessage] = useState("");

  const toggleLoading = useLoadingStore((state) => state.toggleLoading);

  const router = useRouter();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<Login>();

  const onSubmit = async (login: Login) => {
    toggleLoading(true);
    const { data, error } = await signInWithPassword(
      login.email,
      login.password
    );

    toggleLoading(false);

    if (error) {
      const message =
        error.message === "Invalid login credentials"
          ? translations.invalidLogin
          : error.message;
      setErrorMessage(message);
      return;
    }

    const { role } = data.user!;

    if (role === "admin") {
      router.replace("/admin");
    } else {
      router.replace("/");
    }
  };

  return (
    <div className="grid px-2  md:p-0 mt-20 w-full items-center md:justify-center py-10">
      <div className="flex  w-full md:w-[280px] flex-col  md:flex-row shadow rounded ">
        <div className="w-full p-5 ">
          <header className=" flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl font-semibold text-gold text-center">
              {translations.title}
            </h1>
            <small className="text-lg text-slate-950 text-center">
              {translations.subTitle}
            </small>
          </header>

          <form className="mt-1" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <Input
                {...register("email", { required: true })}
                placeholder={translations.emailPlaceHolder}
                error={errors.email && translations.errorEmail}
              />

              <Input
                {...register("password", { required: true })}
                placeholder={translations.passwordPlaceHolder}
                type="password"
                autoComplete="current-password"
                error={errors.email && translations.errorPassword}
              />
            </div>

            <div>
              {errorMessage && (
                <p className="bg-red-700 text-center text-white p-2 my-2">
                  {errorMessage}
                </p>
              )}
            </div>

            <div className="mt-3">
              <button
                type="submit"
                className="mb-1.5 block w-full text-center button-gold text-gold "
              >
                {translations.login}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
