// src/components/Hero.tsx
import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-black text-blue-400 px-6"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-blue-300">
        Hello I'm <span className="text-blue-400">Musa Nyale</span>
      </h1>
      <p className="text-lg md:text-xl max-w-xl text-blue-400 mb-6">
        I’m a passionate developer who builds modern, user-friendly, and impactful web experiences.
      </p>
      <a
        href="#projects"
        className="bg-blue-200 text-blue-900 px-6 py-3 rounded-xl shadow-lg hover:bg-accent/80 transition-transform transform hover:scale-105"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
