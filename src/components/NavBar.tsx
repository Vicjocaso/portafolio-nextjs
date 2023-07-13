import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { navbar } from "src/config/navBar";
import clsx from "clsx";

const NavBar = () => {
  const [sideBar, setSideBar] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);
  const [navBg, setNavBg] = useState<string>("#ecf0f3");
  const [linkColor, setLinkColor] = useState<string>("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/projects/nextjs-ecommerce") {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleSideBar = () => {
    setSideBar(!sideBar);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/#home">
          <div className="relative inline-flex items-center justify-center w-14 h-14 overflow-hidden bg-slate-900 rounded-full">
            <span className="font-medium text-slate-50">VC</span>
          </div>
        </Link>
        <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
          {navbar.map((item, index) => (
            <Link key={index} href={item.path} scroll={false}>
              <li
                className={clsx(
                  "ml-10 text-sm uppercase hover:border-black border-b-2 duration-300",
                  router.asPath === item.path && "border-black"
                )}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
        <div className="hidden md:flex">
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://www.linkedin.com/in/victor-jos%C3%A9-calder%C3%B3n-16a194184/">
                <FaLinkedin size={25} />
              </Link>
            </div>
            <div className="rounded-full shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://github.com/Vicjocaso">
                <FaGithub size={25} />
              </Link>
            </div>
            <div className="rounded-full shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail size={25} />
            </div>
            <div className="rounded-full shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonFill size={25} />
            </div>
          </div>
        </div>
        <div onClick={handleSideBar} className="md:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      <div
        className={
          sideBar
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            sideBar
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/assets/logo.png"
                alt="/webPage Logo"
                width="35"
                height="50"
              />
              <div
                onClick={handleSideBar}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&apos;s build something le
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul>
              <Link href="/#home" scroll={false}>
                <li onClick={() => setSideBar(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about" scroll={false}>
                <li onClick={() => setSideBar(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills" scroll={false}>
                <li onClick={() => setSideBar(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects" scroll={false}>
                <li onClick={() => setSideBar(false)} className="py-4 text-sm">
                  Project
                </li>
              </Link>
              <Link href="/#contact" scroll={false}>
                <li onClick={() => setSideBar(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="tracking-widest text-red-500">Let&apos;s connect</p>
              <div>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedin />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
