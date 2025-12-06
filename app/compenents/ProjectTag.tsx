"use client";
import { motion } from "framer-motion";

const ProjectTag = ({ setTagSelected, active, children }) => {
  const tagStyle = active
    ? "bg-primary-500 text-white border-2 border-primary-500 shadow-lg shadow-primary-500/50"
    : "text-secondary-400 hover:text-secondary-300";

  return (
    <motion.button
      onClick={setTagSelected}
      aria-pressed={active}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`rounded-full text-sm lg:text-md cursor-pointer px-6 py-2 transition-all duration-300 font-semibold focus:outline-none ${tagStyle}`}
    >
      {children}
    </motion.button>
  );
};

export default ProjectTag;
