-- CreateTable
CREATE TABLE "public"."ProjectsImages" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "folder" TEXT NOT NULL,

    CONSTRAINT "ProjectsImages_pkey" PRIMARY KEY ("id")
);
