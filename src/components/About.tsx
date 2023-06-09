import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center" id="about">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-red-600">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-4 text-gray-600">Developer</p>
          <p className="py-4 text-gray-600">
            A full-stack developer is a developer or engineer who can build both
            the front end and the back end of a website. The front end (the
            parts of a website a user sees and interacts with) and the back end
            (the behind-the-scenes data storage and processing) require
            different skill sets. Since full-stack developers are involved with
            all aspects of the development process, they must have expertise in
            both.
          </p>
          <p className="py-4 text-gray-600">
            A full-stack developer is a developer or engineer who can build both
            the front end and the back end of a website. The front end (the
            parts of a website a user sees and interacts with) and the back end
            (the behind-the-scenes data storage and processing) require
            different skill sets. Since full-stack developers are involved with
            all aspects of the development process, they must have expertise in
            both.
          </p>
        </div>
        <div className="w-[90%] h-[50%] shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 cursor-pointer hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl w-full"
            src="/assets/code.png"
            alt="code Image"
            width="1244"
            height="1200"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
