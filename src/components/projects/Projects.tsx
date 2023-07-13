import React from "react";
import ProjectItem from "./ProjectsItem";
import { project } from "../../data/projects";

const Project = () => {
  return (
    <div className="w-full md:h-screen p-2" id="projects">
      <div className="max-w-[1240px] m-auto mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-red-600 font-bold">
          Projects
        </p>
        <h2 className="py-6">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {project.map((project, index) => (
            <div key={index}>
              <ProjectItem
                title={project.title}
                backGroundImg={project.backgroundImage}
                projectUrl={project.href}
                projectTool={project.technologies}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
