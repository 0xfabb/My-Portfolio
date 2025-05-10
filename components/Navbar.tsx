import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-4 w-2/5 left-1/2 transform -translate-x-1/2 bg-white/70 dark:bg-zinc-800/70 backdrop-blur-lg shadow-md rounded-full px-6 py-3 flex items-center justify-center space-x-8">
      <a
        href="#home"
        className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium"
      >
        Home
      </a>
       <a
        href="#contact"
        className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium"
      >
        Blog
      </a>
      <a
        href="#about"
        className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium"
      >
        About
      </a>

      <a
        href="#projects"
        className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium"
      >
        Projects
      </a>
      <a
        href="#contact"
        className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium"
      >
        Contact
      </a>
  
    </nav>
  );
};

export default Navbar;