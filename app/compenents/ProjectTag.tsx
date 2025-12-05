"use client";

const ProjectTag = ({ setTagSelected, active, children }) => {
  const tagStyle = active
    ? "border-primary-500 text-white border-2 scale-105"
    : "border-secondary-500 text-secondary-500 hover:border-2 hover:border-white hover:scale-105 transition-transform";

  return (
    <button
      onClick={setTagSelected}
      aria-pressed={active}
      className={`rounded-full text-sm lg:text-md cursor-pointer px-6 py-2 transition-all duration-100 ${tagStyle} focus:outline-none`}
    >
      {children}
    </button>
  );
};

export default ProjectTag;
