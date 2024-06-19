"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { debounce } from "lodash";

import { getProjectImages } from "@/actions/projects";
import "./style.css";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

interface Props {
  translations: any;
  projects: { id: number; url: string; folder: string }[];
  currentOffset: number;
  totalPages: number;
}

export const Projects = ({
  translations,
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
  }, [isInView, totalPages]);

  return (
    <section ref={containerRef}>
      <header className="py-10 px-5 md:px-0 bg-gold/10">
        <div className="text-center text-5xl font-bold text-gold my-2">
          <h1>{translations.title}</h1>
        </div>
        <div className="flex justify-center intersect:animate-fade-down">
          <p className="text-md text-center scale-50 intersect:scale-100  md:text-2xl font-bold italic">
            {translations.subTitle}
          </p>
        </div>
        <div className="flex mt-5 justify-center  ">
          <div className="h-1 w-[100px] bg-gold "></div>
        </div>
      </header>
      <div className="image-grid container mx-auto mt-20">
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
      </div>
    </section>
  );
};
