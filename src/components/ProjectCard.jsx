import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="
        group relative p-[2px] rounded-xl cursor-pointer 
        bg-gradient-to-r from-purple-600 to-blue-500 
        hover:from-blue-500 hover:to-purple-600 transition-all duration-500
      "
    >
      <div className="bg-white dark:bg-[#0d0d0d]  rounded-xl p-5 h-full group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-500">
        {/* Content */}
        <h3 className="text-xl font-bold  text-blue-700 dark:text-purple-400">{project.title}</h3>
        <p className="text-gray-800 dark:text-gray-300 mt-2 text-sm ">
          {project.longDesc}
        </p>
        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((item, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded text-gray-600 dark:text-gray-400 bg-white/5 border border-black/10 dark:border-white/10"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
