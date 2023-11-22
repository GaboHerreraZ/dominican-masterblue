import { DashBoardLayout } from "@/app/components/layouts/dashBoardLayout";
import { ProtectedRoute } from "@/app/components/layouts/protectedRoute";

export default function PageLayout({
  params: { lng },
  children,
}: {
  params: { lng: string };
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <DashBoardLayout lng={lng}>{children}</DashBoardLayout>;
    </ProtectedRoute>
  );
}
