import heroImg from "../assets/Images/Home.jpg"; // change to your image path


const Home = () => {
  return (
    <section
      id="home"
      className="
        w-full 
        min-h-[100vh]
        flex flex-col md:flex-row justify-evenly
        md:justify-between items-center 
        px-6 md:px-16 lg:px-24 
        py-20 
        bg-blue-100 dark:bg-[#0f172a]
        transition-colors duration-300
      "
    >

      {/* LEFT — TEXT */}
      <div
        className="
          max-w-xl
          opacity-0 animate-fadeInUp
          pt-20 md:pt-0
        "
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Asmita</span> —{" "}
          <br className="hidden md:block" />
          Software Developer
        </h1>

        <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
          Passionate about turning ideas into stable, high-quality and scalable 
          applications that solve real business problems. I focus on clean code,
          maintainable architecture, and continuous learning.
        </p>
      </div>

      {/* RIGHT — IMAGE */}
      <div
        className="
          mt-10 md:mt-0
          opacity-0 animate-fadeIn
        "
      >
        <div
          className="
            w-52 h-52 md:w-80 md:h-80 lg:w-100 lg:h-100
            rounded-2xl overflow-hidden shadow-xl 
            ring-4 ring-blue-300 dark:ring-blue-600
            transition-transform duration-300
            hover:scale-105
          "
        >
          <img
            src={heroImg}
            alt="Asmita"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;

