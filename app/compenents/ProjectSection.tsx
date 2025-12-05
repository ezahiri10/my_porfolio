"use client";
import { useState, useTransition } from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "./projectData";
import ProjectTag from "./ProjectTag";

const ProjectSection = () => {
  const [isSelected, setIsSelected] = useState("All");
  const [isPending, startTransition] = useTransition();
  const tags = ["All", "Web", "Game", "DevOps", "C"];

  const newProjectData = projectData.filter((p) => {
    return p.tag.find((t) => {
      return isSelected === t;
    });
  });
  const handleSelected = (tagSelected: string) => {
    startTransition(() => {
      setIsSelected(tagSelected);
    });
  };
  return (
    <div className="mt-24 px-4">
      <h1 className="text-center mb-5 text-2xl font-semibold text-white">
        My Projects
      </h1>

      <div className="flex flex-wrap justify-center text-white pb-6 gap-2">
        {tags.map((t) => (
          <ProjectTag
            key={t}
            setTagSelected={() => handleSelected(t)}
            active={isSelected === t}
          >
            {t}
          </ProjectTag>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {newProjectData.map((p) => (
          <ProjectCard
            key={p.id}
            imgUrl={p.image}
            title={p.title}
            description={p.description}
            githubUrl={p.githubUrl}
            preview={p.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
