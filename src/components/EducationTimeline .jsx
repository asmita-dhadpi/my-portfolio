import React from "react";

const educationData = [
  {
    id: 1,
    title: "Master of Science (Information Technology)",
    college: "Sonopant Dandekar Arts, V.S. Apte Commerce and M.H. Mehta Science College, Palghar (University of Mumbai)",
    year: "2023 - 2025",
    Percentage:"CGPA : 8.54",
    side: "left",
    //description: "Focused on advanced software development, .NET, cloud & web technologies."
  },
  {
    id: 2,
    title: "Bachelor of Science (Information Technology)",
    college: "Sonopant Dandekar Arts, V.S. Apte Commerce and M.H. Mehta Science College, Palghar (University of Mumbai)",
    year: "2020 - 2023",
    Percentage:"CGPA : 9.03",
    side: "right",
    //description: "Built strong foundation in programming, DBMS, OOP, and web development."
  },
  {
    id: 3,
    title: "Higher Secondary Education (HSC)",
    college: "Anand Laxman Chandawarkar Junior college - Wada (Palghar)",
    year: "2017 - 2019",
    Percentage:"Percentage : 53.08%",
    side: "left",
    //description: "Science stream with IT focus."
  },
  {
    id: 4,
    title: "Secondary School Certificate (SSC)",
    college: "Lal Bahadur Shastri High School -  Manor",
    year: "2016 - 2017",
    Percentage:"Percentage : 82%",
    side: "right",
  },
];

const EducationTimeline = () => {
  return (
    <section id="education" className="w-full py-10 px-4  bg-white dark:bg-slate-700">
      <h2 className="text-3xl pt-0 mt-0 pb-10 md:text-4xl font-bold text-center text-black dark:text-white">
        Education
      </h2>
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-purple-400 to-blue-500"></div>

        <div className="space-y-14">
          {educationData.map((item, index) => (
            <div
              key={item.id}
              className={`
                flex items-center w-full 
                ${item.side === "left" ? "justify-start" : "justify-end"} 
                md:flex-row
              `}
            >
              {/* CARD */}
              <div
                className={`
                  dark:bg-[#0d0d0d] bg-blue-100
                  p-6 rounded-xl shadow-lg w-full md:w-[45%]
                  border border-white/10 backdrop-blur 
                  hover:shadow-purple-500/30 transition-all duration-300
                  ${item.side === "left" ? "left md:text-right" : "left md:text-left"}
                `}
              >
                <h3 className="text-xl font-semibold text-dark-200 dark:text-purple-400">{item.title}</h3>
                <p className="text-slate-950 dark:text-gray-300 capitalize">{item.college}</p>
                <p className="text-sm text-slate-900 dark:text-gray-400 mt-1">Year : {item.year}</p>
                <p className="text-slate-800 dark:text-gray-400 mt-2">{item.Percentage}</p>
              </div>

              {/* DOT CONNECTOR */}
              <div className="hidden md:block w-6 h-6 rounded-full border-blue-200 bg-white dark:bg-purple-500 border-4 dark:border-black absolute 
                left-1/2 -translate-x-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
