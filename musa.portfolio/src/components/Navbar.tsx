// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-blue-300 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold cursor-pointer">MNM</h1>
        <ul className="flex gap-6">
          {["home", "about", "projects", "contact"].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-accent transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
