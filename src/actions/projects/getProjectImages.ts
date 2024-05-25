"use server";
import prisma from "@/lib/prisma";

export const getProjectImages = async (offset: number) => {
  const projects = await prisma.projectsImages.findMany({
    take: 5,
    skip: offset,
  });

  const projectImagesCount = await prisma.projectsImages.count();

  const totalPages = Math.ceil(projectImagesCount / 5);

  return {
    currentOffset: offset,
    totalPages,
    projects,
  };
};
