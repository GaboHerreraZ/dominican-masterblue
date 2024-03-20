import { LoginForm } from "@/components/login/LoginForm";

export default function LoginPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return <LoginForm />;
}
