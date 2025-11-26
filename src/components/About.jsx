import aboutImg from "../assets/Images/About.jpg"; // update image path

const About = () => {
  return (
    <section
      id="about"
      className="
        w-full 
        px-6 md:px-16 lg:px-24 
        py-20 
        bg-white dark:bg-slate-700
        transition-colors duration-300
      "
    >
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100">
        About Me
      </h2>

      <div
        className="
          mt-12 
          flex flex-col md:flex-row 
          items-center md:items-start 
          gap-12
        "
      >
        {/* IMAGE LEFT (but on mobile top) */}
        <div
          className="
            w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72
            rounded-2xl overflow-hidden shadow-xl
            ring-4 ring-blue-300 dark:ring-blue-600
            opacity-0 animate-fadeIn
          "
        >
          <img
            src={aboutImg}
            alt="Asmita"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT - CONTENT */}
        <div
          className="
            max-w-2xl 
            opacity-0 animate-fadeInUp
            text-center md:text-left
          "
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            I'm Asmita — a passionate Software Developer
          </h3>

          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
            I’m a software developer/.NET MVC Developer specializing in C#, ASP.NET MVC, SQL Server, and full-stack development. I enjoy transforming ideas into clean, scalable, and efficient applications.
            I focus on writing maintainable code, improving performance, and building solutions that make an impact. I’m always exploring new technologies and staying updated because software evolves— and so should we.
          </p>
          <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
            My strengths include being simple, consistent, and a fast learner. I adapt quickly to new tools and concepts, and I enjoy solving problems, learning every day, and delivering quality work on time
          </p>

          {/* KEY SKILLS */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "C#",
              ".NET MVC",
              "SQL Server",
              ".NET CORE",
              "HTML",
              "CSS",
              "JavaScript",
              "React (learning)",
              "OOP",
              "REST APIs",
              "GIT"
            ].map((skill) => (
              <span
                key={skill}
                className="
                  px-4 py-1 
                  text-sm 
                  rounded-full 
                  bg-blue-100 text-blue-700 
                  dark:bg-blue-700 dark:text-white
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
