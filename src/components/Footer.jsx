import React from "react";
import { RiGithubFill, RiLinkedinFill, RiMailLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="py-6 px-6 bg-blue-50 dark:bg-slate-900 dark:text-white border-t border-gray-300 dark:border-zinc-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Name / Copyright */}
        <p className="text-sm text-gray-600 dark:text-gray-300 text-center md:text-left">
          © {new Date().getFullYear()} <span className="font-semibold">Asmita</span>. All Rights Reserved.
        </p>

        {/* Social Icons */}
       <div className="flex flex-col text-sm space-y-2">
            <a
              href="https://github.com/asmita-dhadpi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <RiGithubFill /> 
              <span>Asmita Dhadpi</span>
            </a>

            <a
              href="https://www.linkedin.com/in/asmita-dhadpi-002014233/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <RiLinkedinFill className="text-blue-900"/>
              <span>Asmita Dhadpi</span>
            </a>

            <a
              href="mailto:asmitadhadpi.dev@gmail.com"
              className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
            <RiMailLine className="text-orange-600"/>
            <span>asmitadhadpi.dev@gmail.com</span>
          </a>
      </div>

      </div>
    </footer>
  );
};

export default Footer;
