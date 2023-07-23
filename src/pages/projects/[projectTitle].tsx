import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill, RiArrowLeftLine } from "react-icons/ri";
import Router, { useRouter } from "next/router";
import { Project } from "@/types/index";
import { siteConfig } from "@/config/site";

const Project = () => {
  const router = useRouter().query.projectTitle as String;
  const [projectById, setProjectById] = useState<Project>();

  useEffect(() => {
    const filterProject = siteConfig.project.find(
      (project) => project.title === router
    );
    if (filterProject && router !== filterProject.title) {
      Router.push("/#projects");
    }
    setProjectById(filterProject);
  }, [router]);

  if (!projectById) {
    return (
      <div className="w-full">
        <div className="w-screen h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />

          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Loading...</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1 object-cover"
          fill
          src={projectById.backgroundImage}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{projectById.title}</h2>
          <h3>{projectById.subtitle}</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 px-6">
          <p>Project</p>
          <h2 className="py-6">Overview</h2>
          <div className="h-48">
            <p className="">{projectById.overview}</p>
          </div>
          <div className="flex gap-4 py-4">
            <div className="">
              <Link href={projectById.href} rel="noreferrer">
                <button className="px-8 py-2 mt-4">Demo</button>
              </Link>
            </div>

            <div>
              <Link href={projectById.github} rel="noreferrer">
                <button className="px-8 py-2 mt-4">Code</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 border border-slate-300 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {projectById.technologies.map((tech, index) => (
                <>
                  <p
                    key={index}
                    className="text-gray-600 py-2 flex items-center"
                  >
                    <RiRadioButtonFill className="pr-1" /> {tech}
                  </p>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="p-6">
          <Link href="/#projects" scroll={false}>
            <RiArrowLeftLine
              size={40}
              className="rounded-full bg-gradient-to-r from-red-600 to-red-400 text-slate-50"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
