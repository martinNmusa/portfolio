// src/components/Projects.tsx
import React from "react";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Mental Health App",
    description:
      "An elegant mental health dashboard that provides insights on mental well-being for Kenyan users.",
    link: "https://mental-health-ke.netlify.app/",
  },
  {
    title: "Mood Tracker",
    description:
      "An interactive mood tracker app that tracks your mood changes over time.",
    link: "https://moodtracker-hub.netlify.app/",
  },
  {
    title: "Coffee Shop",
    description: "A beautiful coffee house for coders.",
    link: "https://koffee-house.netlify.app/",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-black px-6">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-blue-400">
          Featured Projects
        </h2>
        <p className="mb-10 mt-4 text-xl text-blue-300 text-center">Here are some of my recent projects that showcase my skills and passion for creating amazing user experiences.</p>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl p-6 shadow-card hover:border-blue-400 transition-all duration-500 hover:transform hover:scale-105 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">
                  {project.title}
                </h3>
                <p className="text-secondary mb-4">{project.description}</p>
              </div>

              {/* Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-blue-400 font-medium px-4 py-2 rounded-lg shadow hover:bg-blue-600 hover:shadow-lg transition-all duration-300"
              >
                View Project
                <ExternalLink size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
