import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

const Contanct = () => {
  return (
    <div className="w-full md:h-screen" id="contact">
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
                  src="/../public/assets/contact.png"
                  height="1110"
                  width="1240"
                  alt="/"
                />
              </div>
              <h2 className="py-2">Víctor José Calderón</h2>
              <p className="py-2">
                I'm avaliable for freelance work. Contact me and let's talk.
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
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="text-sm font-medium">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="w-full rounded-lg p-3 flex borde-2"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-medium">Phone Number</label>
                    <input
                      type="text"
                      name="phone_number"
                      className="w-full rounded-lg p-3 flex borde-2 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="text-sm font-medium ">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full rounded-lg p-3 flex borde-2 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="text-sm font-medium ">Subject</label>
                  <input
                    type="text"
                    name="subject"
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
                {/* <div className=" px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contanct;
