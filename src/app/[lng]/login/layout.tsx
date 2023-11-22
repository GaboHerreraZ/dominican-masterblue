import { LoginLayout } from "@/app/components/layouts/loginLayout";

export default function PageLayout({
  params: { lng },
  children,
}: {
  params: { lng: string };
  children: React.ReactNode;
}) {
  console.log("lng", lng);

  return <LoginLayout lng={lng}>{children}</LoginLayout>;
}
