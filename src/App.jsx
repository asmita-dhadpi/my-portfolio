import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import EducationTimeline from "./components/EducationTimeline ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

const App = () => {
  // THEME STATE
  const [theme, setTheme] = useState("light");

  // HANDLE THEME ON LOAD
  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    setTheme(systemTheme);
    document.documentElement.classList.toggle("dark", systemTheme === "dark");
  }, []);

  // TOGGLE THEME FUNCTION
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    // <div className="bg-white dark:bg-zinc-900 dark:text-white transition">
    <div>
      {/* Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Home />
      <About />
      <Experience />
      <EducationTimeline/>
      <Contact/>
      <Footer/>
      <BackToTop/>
    </div>
  );
};

export default App;
