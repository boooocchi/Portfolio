import React from "react";

import { motion, useScroll } from "framer-motion";
import reactIcon from "@/assets/react.svg";
import htmlIcon from "@/assets/html.svg";
import cssIcon from "@/assets/css3-alt.svg";
import nodejsIcon from "@/assets/nodejs.svg";
import javascriptIcon from "@/assets/js.svg";
import tailwindIcon from "@/assets/tailwind-css.svg";
import expressIcon from "@/assets/express.svg";
import nextjsIcon from "@/assets/nextjs.svg";
import prismaIcon from "@/assets/prisma.svg";
import postgresIcon from "@/assets/postgresql.svg";
import reduxIcon from "@/assets/redux.svg";
import typescriptIcon from "@/assets/typescript.svg";
import supabaseIcon from "@/assets/supabase.svg";
import framermotionIcon from "@/assets/framer-logo.svg";

const About = () => {
  return (
    <motion.section
      initial={{ filter: "blur(20px)", opacity: 0, y: "10%" }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
          type: "spring",
          duration: 0.5
        }
      }}
      viewport={{ once: true, amount: 0.6 }}
      className="about w-8/12 max-md:w-[80%] mx-auto mt-24 mb-20 max-w-[1000px] flex max-md:flex-col gap-[7%]"
      id="about"
    >
      <div className="w-[53%] max-md:w-full text-[1.2rem] font-thin">
        <h2 className="text-2xl font-sans font-[600] mb-4">About Me</h2>
        <p>
          Highly motivated web developer with a passion for coding and a strong
          desire to learn. Excels at{" "}
          <span className="font-bold">
            problem-solving and working collaboratively in a team environment
          </span>
          . I am also a <span className="font-bold">quick learner</span> who is
          highly adaptable and comfortable with a rapidly evolving field of
          technologies.
        </p>
        <br />
        <p>
          Seeking a <span className="font-bold">junior developer position</span>{" "}
          to contribute to exciting and innovative projects and continue to
          develop my skills in the field.
        </p>
      </div>

      <div className="w-[40%] max-md:w-full max-md:mt-[3rem]">
        <h2 className="text-2xl mb-4 font-sans font-[600]">Skills</h2>
        <div className="iconHolder flex gap-5 flex-wrap">
          <img src={htmlIcon} alt="html icon" className="h-[2rem] " />
          <img src={cssIcon} alt="css icon" className="h-[2rem] " />
          <img
            src={javascriptIcon}
            alt="javascript icon"
            className="h-[2rem] "
          />
          <img
            src={typescriptIcon}
            alt="typescript icon"
            className="h-[1.8rem] relative top-[2px]"
          />
          <img src={reactIcon} alt="react icon" className="h-[2rem] " />
          <img src={reduxIcon} alt="redux icon" className="h-[2rem] " />
          <img src={nextjsIcon} alt="nextjs icon" className="h-[2rem] " />
          <img src={nodejsIcon} alt="nodejs icon" className="h-[2rem] " />
          <img src={expressIcon} alt="express icon" className="h-[2rem] " />
          <img src={prismaIcon} alt="prisma icon" className="h-[2rem] " />
          <img src={postgresIcon} alt="postgresql icon" className="h-[2rem] " />
          <img src={supabaseIcon} alt="supabase icon" className="h-[2rem] " />
          <img src={tailwindIcon} alt="tailwind icon" className="h-[2rem] " />
          <img
            src={framermotionIcon}
            alt="framer-motion icon"
            className="h-[2rem] "
          />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
