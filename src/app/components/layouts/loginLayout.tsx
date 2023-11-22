import { ReactNode } from "react";

export const LoginLayout = ({
  lng,
  children,
}: {
  lng: string;
  children: ReactNode;
}) => {
  return (
    <section className="w-full min-h-screen flex place-items-center place-content-center ">
      {children}
    </section>
  );
};
