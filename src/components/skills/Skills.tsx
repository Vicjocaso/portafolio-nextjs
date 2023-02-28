import React from "react";
import SkillBox from "./SkillItem";

const Skills = () => {
  return (
    <div className="w-full md:h-screen p-2" id="skills">
      <div className="max-w-[1240px] m-auto mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-red-600">Skills</p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillBox
            src="/../public/assets/skills/html.png"
            alt="html"
            title="HTML"
          />
          <SkillBox
            src="/../public/assets/skills/css.png"
            alt="Css"
            title="Css"
          />
          <SkillBox
            src="/../public/assets/skills/nextjs.png"
            alt="NextJs"
            title="NextJS"
          />
          <SkillBox
            src="/../public/assets/skills/node.png"
            alt="Node"
            title="NodeJs"
          />
          <SkillBox
            src="/../public/assets/skills/tailwind.png"
            alt="Taildwind"
            title="Tailwind"
          />
          <SkillBox
            src="/../public/assets/skills/github.png"
            alt="GitHub"
            title="GitHub"
          />
          <SkillBox
            src="/../public/assets/skills/reactjs.png"
            alt="ReactJs"
            title="ReactJs"
          />
          <SkillBox
            src="/../public/assets/skills/typescript.png"
            alt="TypeScript"
            title="TypeScript"
          />
          <SkillBox
            src="/../public/assets/skills/golang.png"
            alt="Golang"
            title="Golang"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
