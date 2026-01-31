import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
const projectList = [
    {
    id: 1,
    title: "ERP System (Enterprise Resource Planning)",
    longDesc:
      "I worked on a web-based ERP system designed to streamline and manage core business operations across multiple departments. My role involved developing and maintaining modules such as Customer, Vendor, Subcontractor, Product, Product Category, Inventory, Bill of Materials (BOM), Purchase Orders, Purchase GR, Sales Orders, and Payments. I implemented CRUD functionality, form validations, logging mechanisms, and database relationships to ensure data accuracy and system reliability. I also supported end-to-end purchase-to-sales workflows, including stock updates and report generation, which helped improve operational efficiency and decision-making.",
      tech: ["ASP.NET MVC", "SQL Server","ADO.net", "Javascript","jQuery,","Git","Bootstrap"],
   
  },
  {
    id: 2,
    title: "EMS System (Employee Management System)",
    longDesc:
      "I contributed to the development of an Employee Management System aimed at organizing employee information and internal processes. I worked on modules such as Employee Management, User & Roles, Enquiry, and Quotation, focusing on efficient data handling and workflow management. My responsibilities included writing SQL queries, implementing validation rules, and supporting testing activities to maintain system performance. This project strengthened my understanding of role-based access control, employee data tracking, and real-time operational workflows within an organization.",
    tech: ["ASP.NET MVC", "ASP.NET CORE", "SQL Server","ADO.net", "Javascript","jQuery,","Git","Bootstrap"],
   
  },
  {
    id: 3,
    title: "CRM System (Customer / Student Relationship Management)",
    longDesc:
      "I worked on a CRM system focused on managing leads and student relationships to improve communication and conversion tracking. My involvement included developing modules such as Students, Leads, Enquiries, Programs, and Follow-ups. I implemented validation features and status tracking to ensure accurate lead management and smooth workflow progression. Through this project, I gained hands-on experience in handling real-time business scenarios, improving user interaction, and building efficient systems for data-driven decision-making.",
    tech: ["ASP.NET MVC", "ASP.NET CORE", "SQL Server","ADO.net","Entity Framework", "Javascript","jQuery,","Git","Bootstrap"],
   
  },
  {
    id: 4,
    title: "AI-Powered Chatbot for Doctor Appointment Booking",
    longDesc:
      "Chatbot built with Rasa, FastAPI, and React to automate doctor appointments and provide healthcare guidance. Features include patient login, OTP verification, doctor schedules, and appointment management.",
    tech: ["Python", "Rasa", "FastAPI", "React.js","Bootstrap","PostgreSQL"],
   
  },
  {
    id: 5,
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
