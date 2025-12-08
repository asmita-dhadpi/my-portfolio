import { useState, useEffect } from "react";

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact Me" },
  ];

  // Smooth scroll + active link detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (
          section &&
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(link.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#4433A1] text-white z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-2 py-4 flex justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer tracking-wide">
          Asmita Dhadpi
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`cursor-pointer transition-all duration-300 
              ${
                active === link.id
                  ? "text-yellow-300 font-semibold"
                  : "hover:text-yellow-200"
              }`}
            >
              {link.label}
            </li>
          ))}
        </ul>
       {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="hidden md:flex text-xl px-3 py-1 rounded-lg hover:opacity-80 transition"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
      <button
        onClick={toggleTheme}
        className="md:hidden mb-3  text-2xl"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>


        {/* Mobile Menu Button */}
        <div
          className="md:hidden flex flex-col space-y-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`h-1 w-6 bg-white rounded transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-1 w-6 bg-white rounded transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-1 w-6 bg-white rounded transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden bg-[#4433A1] py-4 text-center space-y-4 text-lg animate-slideDown">
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`cursor-pointer transition-all 
              ${active === link.id ? "text-yellow-300" : "hover:text-yellow-200"}`}
            >
              {link.label}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

