import { DashBoardLayout } from "@/app/components/dashboard/dashBoardLayout";
import { ProtectedRoute } from "@/app/components/layouts/protectedRoute";
import GetTranslations from "@/app/utils/translationsPage";
import { Translations } from "@/store/translationStore";
import { TranslationStoreInitializer } from "@/store/translationStoreInitializer";

export default async function PageLayout({
  params: { lng },
  children,
}: {
  params: { lng: string };
  children: React.ReactNode;
}) {
  const { GetDashboardTranslations, GetProductTranslations } =
    GetTranslations();

  const [dashboardTranslations, productTranslations] = await Promise.all([
    GetDashboardTranslations(lng),
    GetProductTranslations(lng),
  ]);
  const translations: Translations = {
    lng,
    dashboardTranslations,
    productTranslations,
  };

  return (
    <ProtectedRoute>
      <TranslationStoreInitializer translations={translations} />
      <DashBoardLayout>{children}</DashBoardLayout>
    </ProtectedRoute>
  );
}
