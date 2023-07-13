import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center" id="about">
      <div className="max-w-screen m-auto md:grid lg:grid-cols-2 gap-5">
        <div className="">
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
        <div className="flex justify-center pl-20">
          <div className="relative w-full h-full shadow-xl shadow-gray-400 rounded-xl justify-center cursor-pointer hover:scale-105 ease-in duration-300">
            <Image
              className="rounded-xl"
              src="/assets/code.png"
              alt="code Image"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
