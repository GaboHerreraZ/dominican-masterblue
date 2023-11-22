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
import { auth } from "@/firebase";

export const Login = () => {
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
    <section className="shadow-md p-4 ">
      {/* {errorsLog && <h1>Gonorreaaaaaa</h1>} */}
      <form
        className="grid grid-cols-1 justify-center items-center gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          {...register("email", { required: true })}
          isRequired
          type="email"
          variant="underlined"
          color="primary"
          label="Email"
          placeholder="Enter your email"
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
          label="Password"
          placeholder="Enter your password"
          errorMessage={errors.password ? "Please enter a valid password" : ""}
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
          Login
        </Button>
      </form>
    </section>
  );
};
