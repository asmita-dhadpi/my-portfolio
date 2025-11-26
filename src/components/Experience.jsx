const Experience = () => {
  const experienceData = [
    {
      role: "Software Developer",
      company: "Diligence Web Solutions",
      duration: "2023 — Present",
      description:
        "Working on building scalable web applications using C#, .NET MVC,.NET Core, SQL Server and JavaScript. Focused on writing clean, maintainable code and debugging real-time production issues.",
    },
    {
      role: "Intern — Software Developer",
      company: "Diligence Web Solutions",
      duration: "2022 — 2023",
      description:
      "Assisted in developing web applications using C#, ASP.NET MVC, SQL Server while learning core development workflows and best practices. Supported the team with feature development, debugging, and code reviews, improving my understanding of real-world software development and industry standards"
    },
  ];

  return (
    <section
      id="experience"
      className="
        w-full 
        px-6 md:px-16 lg:px-24 
        py-20 
        bg-blue-50 dark:bg-slate-900 
        transition-colors duration-300
      "
    >
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100">
        Experience
      </h2>

      <div className="mt-12 flex flex-col gap-10">
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className="
              p-6 
              bg-white dark:bg-slate-800 
              shadow-lg 
              rounded-xl 
              border border-gray-200 dark:border-slate-700
              opacity-0 animate-fadeInUp
            "
          >
            <h3 className="text-xl md:text-2xl font-semibold text-blue-700 dark:text-blue-400">
              {exp.role}
            </h3>
            <p className="text-gray-800 dark:text-gray-300 mt-1 font-medium">
              {exp.company}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {exp.duration}
            </p>

            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
