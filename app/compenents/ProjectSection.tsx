"use client";
import { useState, useTransition } from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "./projectData";
import ProjectTag from "./ProjectTag";
import { motion } from "framer-motion";

const ProjectSection = () => {
  const [isSelected, setIsSelected] = useState("All");
  const [isPending, startTransition] = useTransition();
  const tags = ["All", "Web", "Game", "DevOps", "C"];

  const newProjectData = projectData.filter((p) => {
    if (isSelected === "All") {
      return true;
    }
    return p.tag.includes(isSelected);
  });

  const handleSelected = (tagSelected: string) => {
    startTransition(() => {
      setIsSelected(tagSelected);
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-secondary-400 text-lg">
            Showcasing my best work and technical expertise
          </p>
        </motion.div>

        {/* Filter tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {tags.map((t) => (
            <ProjectTag
              key={t}
              active={isSelected === t}
              setTagSelected={() => handleSelected(t)}
            >
              {t}
            </ProjectTag>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          key={isSelected}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {newProjectData.length > 0 ? (
            newProjectData.map((p) => (
              <motion.div key={p.id} variants={itemVariants}>
                <ProjectCard
                  imgUrl={p.image}
                  title={p.title}
                  description={p.description}
                  githubUrl={p.githubUrl}
                  preview={p.previewUrl}
                />
              </motion.div>
            ))
          ) : (
            <motion.div
              className="col-span-full text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-secondary-500 text-xl">
                No projects in this category
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
