import { getProjectImages } from "@/actions/projects";
import { Projects } from "@/components/projects";
import { getTranslation } from "@/i18n";

export default async function ProjectsPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { projects, currentOffset, totalPages } = await getProjectImages(5);

  const { t } = await getTranslation(lng, "projects");

  const translations = {
    title: t("title"),
    subTitle: t("subTitle"),
  };

  return (
    <Projects
      translations={translations}
      projects={projects}
      currentOffset={currentOffset}
      totalPages={totalPages}
    />
  );
}
