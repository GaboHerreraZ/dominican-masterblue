import { getProjectImages } from "@/actions/projects";
import { Projects } from "@/components/projects";

export default async function ProjectsPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { projects, currentOffset, totalPages } = await getProjectImages(5);
  return (
    <Projects
      lng={lng}
      projects={projects}
      currentOffset={currentOffset}
      totalPages={totalPages}
    />
  );
}
