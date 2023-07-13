import React from "react";
import SkillBox from "./SkillItem";
import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <div className="w-full md:h-screen p-2" id="skills">
      <div className="max-w-[1240px] m-auto mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-red-600">Skills</p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <SkillBox
              key={skill.title}
              src={skill.src}
              title={skill.title}
              href={skill.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
