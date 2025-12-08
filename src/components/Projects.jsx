import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
const projectList = [
  {
    id: 1,
    title: "AI-Powered Chatbot for Doctor Appointment Booking",
    longDesc:
      "Chatbot built with Rasa, FastAPI, and React to automate doctor appointments and provide healthcare guidance. Features include patient login, OTP verification, doctor schedules, and appointment management.",
    tech: ["Python", "Rasa", "FastAPI", "React.js","Bootstrap","PostgreSQL"],
   
  },
  {
    id: 2,
    title: "News Blog Website with Citizen Reporting",
    longDesc:
      "Responsive news platform enabling users to post, report, and moderate news stories, promoting local citizen journalism. Includes user registration and admin panel.",
    tech: ["HTML", "CSS", "JavaScript", "PHP","MySQL"],
  },
  
];
const Projects = () => {

  return (
    <section id="projects" className="w-full py-10 px-6 bg-blue-50 dark:bg-slate-900 ">
      <h2 className="text-4xl font-bold text-center mb-14 text-gray-900 dark:text-gray-100">
        Projects
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto align-middle">
        {projectList.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

     
    </section>
  );
};

export default Projects;
