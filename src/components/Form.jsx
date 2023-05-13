import React from "react";
import { motion, useScroll } from "framer-motion";

const Form = (props) => {
  let y = "0%";
  if (!props.page) {
    y = "10%";
  }

  return (
    <motion.section
      initial={{ filter: "blur(20px)", opacity: 0.5, y: { y } }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
          type: "spring",
          duration: 0.5
        }
      }}
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-col  mb-24 mx-auto w-8/12 max-w-screen-lg mt-20"
    >
      <h2 className="text-2xl my-3 font-sans font-[600] ">Contact</h2>
      <form
        action="https://formsubmit.co/kotaito.dev@gmail.com"
        method="POST"
        className="flex flex-col  gap-1"
      >
        <label className="mt-3" htmlFor="name">
          NAME
        </label>
        <input
          id="name"
          className="border border-black rounded-md p-1 pl-2"
          type="text"
          required
          name="name"
        />
        <label className="mt-3" htmlFor="email">
          EMAIL
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="border border-black rounded-md p-1 pl-2"
        />
        <label className="mt-3" htmlFor="message">
          MESSAGE
        </label>
        <textarea
          id="message"
          type="text"
          className="border border-black rounded-md p-1 pl-2 h-[10rem]"
          required
          name="message"
        />
        <button className="mt-8 text-right text-base">
          <a
            href="#_"
            className="relative bg-primary inline-flex items-center px-10 py-3 overflow-hidden  font-medium text-[white]  rounded-1 hover:text-blueblack group hover:bg-white hover:border hover:border-blueblack text-"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-[white] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative">Button Text</span>
          </a>
        </button>
      </form>
    </motion.section>
  );
};

export default Form;
