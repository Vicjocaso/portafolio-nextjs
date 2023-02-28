import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

const HomePage = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
        <div>
          <p>Hello from HomePage Page</p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-red-600">Victor</span>
          </h1>
          <h1 className="py-4 text-gray-700">
            A Full-Stack Web
            <span className="text-red-600"> Developer</span>
          </h1>
          <p className="py-2 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a full-stack web developer bla bla bl al bla
            blaaskdjaskldjaskoldjaskldjasl rem
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://www.linkedin.com/in/victor-jos%C3%A9-calder%C3%B3n-16a194184/">
                <FaLinkedin size={25} />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://github.com/Vicjocaso">
                <FaGithub size={25} />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail size={25} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonFill size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
