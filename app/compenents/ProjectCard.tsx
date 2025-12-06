import { CodeBracketIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description, githubUrl, preview }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <div
        className="bg-cover bg-center h-52 lg:h-72 rounded-xl shadow-xl group relative overflow-hidden"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-xl bg-black/60 flex justify-center items-center gap-5"
        >
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 rounded-full border-primary-500 hover:border-white p-3 transition-colors flex items-center justify-center"
            >
              <CodeBracketIcon className="h-6 w-6 text-primary-500 hover:text-white" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-white mt-4 text-center"
      >
        <h5 className="font-semibold text-xl">{title}</h5>
        <p className="text-sm text-secondary-500">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
