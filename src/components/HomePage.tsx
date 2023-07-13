import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

const HomePage = () => {
  // Function will execute on click of button
  const downloadResume = () => {
    // using Java Script method to get PDF file
    fetch("resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(
          new Blob([blob], { type: "application/pdf" })
        );
        // Setting various property values
        let linkElement = document.createElement("a");
        linkElement.href = fileURL;
        linkElement.download = "victor_calderon_resume";
        // window.open(fileURL, "_blank");
        linkElement.click();
      });
    });
  };

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-red-600">Victor</span>
          </h1>
          <h1 className="py-4 text-gray-700">
            A Full-Stack Web
            <span className="text-red-600"> Developer</span>
          </h1>
          <p className="py-2 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a full-stack web developer passionate about web technology
            that seeks to learn more about it every day.
          </p>

          <div className="pt-4">
            <button
              onClick={downloadResume}
              className="py-3 px-6 bg-red-600 text-slate-50 rounded-lg shadow-lg shadow-gray-400 m-auto hover:scale-110 ease-in duration-300"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
