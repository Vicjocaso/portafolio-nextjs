import React from "react";
import Link from "next/link";
import Image from "next/image";
import { type ProjectProps } from "@/types/index";

const ProjectItem = ({
  title,
  backgroundImage,
  href,
  overview,
  subtitle,
  technologies,
  github,
}: ProjectProps) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-red-600 to-red-200">
      <div className="w-full h-80">
        <Image
          className="rounded-xl group-hover:opacity-10 absolute object-contain"
          src={backgroundImage}
          fill
          alt="/"
        />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div>
          <h3 className="text-2xl text-white tracking-wider text-center">
            {title}
          </h3>
        </div>
        <div className="py-9 pb-4pt-2 text-white text-center">
          <p className="pb-2 font-bold">Technologies</p>
          {technologies.map((tech, index) => (
            <p key={index}>{tech}</p>
          ))}
        </div>
        <div>
          <Link href={`/projects/${title}`}>
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
