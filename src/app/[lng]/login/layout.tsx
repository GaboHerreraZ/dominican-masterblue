import { LoginLayout } from "@/app/components/layouts/loginLayout";

export default function PageLayout({
  params: { lng },
  children,
}: {
  params: { lng: string };
  children: React.ReactNode;
}) {
  return <LoginLayout lng={lng}>{children}</LoginLayout>;
}
