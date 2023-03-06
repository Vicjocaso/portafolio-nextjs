import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import emailjs from "@emailjs/browser";

const Contanct = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVER as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE as string,
        e.currentTarget,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_Key as string
      )
      .then(
        (result) => {
          console.log(result.text, "Menssage");
        },
        (error) => {
          console.log(error.text, "Error");
        }
      );

    e.currentTarget.reset();
  };

  return (
    <div id="contact" className="w-full md:h-screen lg:h-screen">
      <div className="max-w-[1240px] m-auto mx-auto px-2 py-16 w-full ">
        <p className="uppercase text-xl tracking-widest text-red-600 font-bold">
          Contact
        </p>
        <h2 className="py-6">Get in Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left side of contact*/}
          <div className="col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-500"
                  src="/assets/contact.png"
                  height="1110"
                  width="1240"
                  alt="/"
                />
              </div>
              <h2 className="py-2">Víctor José Calderón</h2>
              <p className="py-2">
                I&apos;m avaliable for freelance work. Contact me and let&apos;s
                talk.
              </p>
              <div>
                <p className="uppercase pt-8">Connect with Me: </p>
                <div className="flex items-center justify-between py-4">
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
          {/* right side of contact */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <h2>{process.env.TZ}</h2>
              <form onSubmit={sendEmail}>
                <div className="flex flex-col py-2">
                  <label className="text-sm font-medium ">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    className="w-full rounded-lg p-3 borde-2"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="text-sm font-medium ">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    className="w-full rounded-lg p-3 flex borde-2 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="text-sm font-medium ">Subject</label>
                  <input
                    type="text"
                    name="user_subject"
                    className="w-full rounded-lg p-3 flex borde-2 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="text-sm font-medium ">Message</label>
                  <textarea
                    name="message"
                    className="border-2 rounded-lg p-3 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    rows={10}
                  />
                </div>
                <button
                  type="submit"
                  value="send"
                  className="w-full p-3 rounded-xl mt-4 text-gray-100 shadow-xl shadow-gray-400 uppercase bg-gradient-to-r  from-red-600 to-red-200"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/#home" scroll={false}>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-red-600" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contanct;
