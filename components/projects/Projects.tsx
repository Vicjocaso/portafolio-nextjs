import React from "react";
import ProjectItem from "./ProjectsItem";

const Project = () => {
  return (
    <div className="w-full md:h-screen p-2" id="project">
      <div className="max-w-[1240px] m-auto mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-red-600 font-bold">
          Projects
        </p>
        <h2 className="py-6">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Propety Finder"
            backGroundImg="/../public/assets/logo.png"
            projectUrl="/"
            projectTool="NextJs"
          />
          <ProjectItem
            title="Propety Finder"
            backGroundImg="/../public/assets/logo.png"
            projectUrl="/"
            projectTool="NextJs"
          />
          <ProjectItem
            title="Propety Finder"
            backGroundImg="/../public/assets/logo.png"
            projectUrl="/"
            projectTool="NextJs"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
