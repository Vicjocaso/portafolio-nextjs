import React from "react";
import Image from "next/image";
import Link from "next/link";

type SkillBoxProps = {
  src: string;
  title: string;
  href: string;
};

const SkillBox = ({ src, title, href }: SkillBoxProps) => {
  return (
    <Link href={href} target="_blank">
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image src={src} width={64} height={64} alt={title} />
          </div>
          <div>
            <h3>{title}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SkillBox;
