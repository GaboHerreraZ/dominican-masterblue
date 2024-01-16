"use client";
import { Input } from "@nextui-org/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import { Credential } from "@/domain/model/credential";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { LoginTranslations } from "@/models/loginTranslations";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type Inputs = {
  email: string;
  password: string;
};

export const LoginForm = ({
  translations,
}: {
  translations: LoginTranslations;
}) => {
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
  }, [reset, navigation]);

  return (
    <div className="bg-master-secondary py-20 px-10 rounded">
      <h2 className="text-center mb-5 font-bold text-3xl text-white">
        Dominican Master<span className="text-blue-400">blue</span>
      </h2>
      <form
        className="min-w-[300px] grid grid-cols-1 justify-center items-center gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          {...register("email", { required: true })}
          isRequired
          type="email"
          size="sm"
          variant="flat"
          radius="none"
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
          variant="flat"
          radius="none"
          size="sm"
          color="primary"
          label={translations.password}
          placeholder={translations.passwordPlaceHolder}
          errorMessage={errors.password ? "Please enter a valid password" : ""}
          isInvalid={errors.email ? true : false}
          endContent={
            <button
              className="focus:outline-none text-white"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
            </button>
          }
        />
        <Button
          type="submit"
          color="primary"
          size="sm"
          radius="none"
          variant="faded"
        >
          {translations.login}
        </Button>
      </form>
    </div>
  );
};
