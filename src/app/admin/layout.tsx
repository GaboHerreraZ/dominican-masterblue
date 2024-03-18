import { Dashboard } from "@/components/ui";


export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Dashboard>{children}</Dashboard>;
}
