import { EyeIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, githubUrl, preview }) => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-52 lg:h-72 rounded-xl shadow-xl group relative"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div
          className="absolute inset-0 rounded-xl bg-black/60 opacity-0 transition-all duration-300 group-hover:opacity-100 flex justify-center items-center gap-5"
        >
          {preview === '#' ? null : 
          (
            <Link
              href={preview}
              className="border-2 hover:white rounded-full border-secondary-500 hover:border-white"
            >
              <EyeIcon className="h-10 text-secondary-500 hover:text-white" />
            </Link>) 
          }
          <Link
            href={githubUrl}
            className="border-2 hover:text-white rounded-full border-secondary-500 hover:border-white"
          >
            <CodeBracketIcon className="h-10 text-secondary-500 hover:text-white" />
          </Link>
        </div>
      </div>

      <div className="text-white mt-2 rounded-t-2xl text-center mb-5">
        <h5 className="font-semibold text-xl">{title}</h5>
        <p className="text-sm text-secondary-500">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
