import { getUser } from "@/actions";
import { Dashboard } from "@/components/ui";
import { notFound } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { id } = await getUser();

  if (!id) notFound();

  return <Dashboard>{children}</Dashboard>;
}
