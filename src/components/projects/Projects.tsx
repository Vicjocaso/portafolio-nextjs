import React from "react";
import ProjectItem from "./ProjectItem";
import { siteConfig } from "@/config/site";

const Project = () => {
  return (
    <div className="w-full md:h-screen p-2" id="projects">
      <div className="max-w-[1240px] m-auto mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-4xl pb-20  tracking-widest text-red-600 font-bold">
          Projects
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {siteConfig.project.map((project, index) => (
            <div key={index}>
              <ProjectItem
                title={project.title}
                backgroundImage={project.backgroundImage}
                href={project.href}
                technologies={project.technologies}
                overview={project.overview}
                subtitle={project.subtitle}
                github={project.github}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
