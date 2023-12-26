import { LoginTranslations } from "../../models/loginTranslations";
import Image from "next/image";
import loginImage from "../../../public/img/webp/mejoras.webp";
import { LoginForm } from "./LoginForm";

export const Login = ({
  translations,
}: {
  translations: LoginTranslations;
}) => {
  return (
    <section className="flex h-screen w-full">
      <section className="relative md:block hidden md:w-1/2">
        <Image
          src={loginImage}
          alt="image-login"
          priority={false}
          fill
          sizes="100%"
          style={{
            objectFit: "cover",
          }}
        />
      </section>
      <section className="grid bg-white  place-content-center place-items-center  w-full md:w-1/2">
        <LoginForm translations={translations} />
      </section>
    </section>
  );
};
