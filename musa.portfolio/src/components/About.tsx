// src/components/About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 pt-10 bg-black text-blue-400 px-6 pb-15 -mt-25">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-400">About Me</h2>
        <p className="text-lg text-blue-300 leading-relaxed">
          I'm a passionate web developer building modern web applications. I love combining clean code with beautiful design to create digital experiences that users genuinely enjoy.
When I'm not coding, you'll find me contributing to open-source projects, or diving into the vast Serena Beach. I believe in continuous learning and pushing the boundaries of what's possible. I love solving problems and creating intuitive user experiences.
        </p>
      </div>
    </section>
  );
};

export default About;
