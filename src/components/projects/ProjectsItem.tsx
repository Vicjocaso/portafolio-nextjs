import React from "react";
import Link from "next/link";
import Image from "next/image";

type ProjectItemProps = {
  title: string;
  backGroundImg: string;
  projectUrl: string;
  projectTool: string;
};

const ProjectItem = ({
  title,
  backGroundImg,
  projectUrl,
  projectTool,
}: ProjectItemProps) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-red-600 to-red-200">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backGroundImg}
        height={100}
        width={100}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4pt-2 text-white text-center">{projectTool}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
