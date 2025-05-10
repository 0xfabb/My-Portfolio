import React from "react";
import { ModeToggle } from "@/components/ThemeToggle"; // Ensure this is correct

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md shadow-lg rounded-full px-6 py-3 z-50">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="text-lg font-semibold text-gray-900 dark:text-white">
          The fabX Space
        </div>

        {/* Links */}
        <div className="flex items-center space-x-6">
          <a
            href="#home"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm font-medium"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm font-medium"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm font-medium"
          >
            Contact
          </a>
        </div>

        {/* Theme Toggle */}
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
