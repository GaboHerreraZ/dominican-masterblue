"use client";
import { Input } from "@nextui-org/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/app/utils/iconsUtils";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import { Credential } from "@/domain/model/credential";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { LoginTranslations } from "../../models/loginTranslations";
import Image from "next/image";
import loginImage from "../../../../public/img/jpg/mejoras.jpg";

export const Login = ({
  translations,
}: {
  translations: LoginTranslations;
}) => {
  type Inputs = {
    email: string;
    password: string;
  };

  const {
    formState: { errors, isValid },
    register,
    reset,
    handleSubmit,
  } = useForm<Inputs>();

  const navigation = useRouter();

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const signInWithEmailAndPassword = useAuthStore(
    (state) => state.signInWithEmailAndPassword
  );

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!isValid) return;
    const credentials: Credential = {
      email: data.email,
      password: data.password,
    };
    await signInWithEmailAndPassword(credentials);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.push("/dashboard");
        reset({
          email: "",
          password: "",
        });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <section className="flex h-screen w-full">
      <section className="relative md:block hidden md:w-1/2">
        <Image
          src={loginImage}
          alt="image-login"
          priority={true}
          fill
          sizes="100%"
          style={{
            objectFit: "cover",
          }}
        />
      </section>
      <section className="grid  place-content-center place-items-center  w-full md:w-1/2">
        <h3 className="text-center mb-5 font-bold text-2xl text-master-900/70">
          Dominican Masterblue
        </h3>
        <form
          className="shadow-lg p-5 grid grid-cols-1 justify-center items-center gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            {...register("email", { required: true })}
            isRequired
            type="email"
            variant="underlined"
            color="primary"
            label={translations.email}
            placeholder={translations.emailPlaceHolder}
            errorMessage={errors.email ? "Please enter a valid email" : ""}
            isInvalid={errors.email ? true : false}
          />
          <Input
            isRequired
            type={isVisible ? "text" : "password"}
            {...register("password", { required: true })}
            className="max-w-xs"
            variant="underlined"
            color="primary"
            label={translations.password}
            placeholder={translations.passwordPlaceHolder}
            errorMessage={
              errors.password ? "Please enter a valid password" : ""
            }
            isInvalid={errors.email ? true : false}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? <EyeSlashFilledIcon /> : <EyeFilledIcon />}
              </button>
            }
          />
          <Button
            type="submit"
            color="primary"
            size="sm"
            radius="none"
            variant="bordered"
          >
            {translations.login}
          </Button>
        </form>
      </section>
    </section>
  );
};
