"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { debounce } from "lodash";

import { getProjectImages } from "@/actions/projects";
import "./style.css";

interface Props {
  lng: string;
  projects: { id: number; url: string; folder: string }[];
  currentOffset: number;
  totalPages: number;
}

export const Projects = ({
  lng,
  currentOffset,
  projects,
  totalPages,
}: Props) => {
  const [loadedProjects, setLoadedProjects] = useState(projects);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState({
    isInView: false,
  });
  const [offset, setOffset] = useState(currentOffset);

  const getMoreProjects = async (offset: number) => {
    setOffset(offset);
    const { projects } = await getProjectImages(offset);

    setLoadedProjects((state) => [...state, ...projects]);
  };

  const handleScroll = () => {
    if (containerRef.current && typeof window !== "undefined") {
      const container: any = containerRef.current;
      const { bottom } = container.getBoundingClientRect();
      const { innerHeight } = window;

      setIsInView(() => ({ isInView: bottom < innerHeight }));
    }
  };

  useEffect(() => {
    const handleDebouncedScroll = debounce(() => handleScroll(), 100);
    window.addEventListener("scroll", handleDebouncedScroll);

    return () => {
      window.removeEventListener("scroll", handleDebouncedScroll);
    };
  }, []);

  useEffect(() => {
    if (isInView.isInView && offset <= totalPages * 5) {
      getMoreProjects(offset + 5);
    }
  }, [isInView]);

  return (
    <section className="image-grid container mx-auto mt-20 " ref={containerRef}>
      {loadedProjects.map((project) => (
        <div className="image-item relative h-[500px]" key={project.id}>
          <Image
            src={project.url}
            alt="project"
            sizes="100%"
            fill
            objectFit="cover"
          />
        </div>
      ))}
    </section>
  );
};
