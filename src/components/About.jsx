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
      className="about w-8/12 max-md:w-[80%] mx-auto mt-24 mb-20 max-w-[1000px] flex max-md:flex-col gap-[10%]"
      id="about"
    >
      <div className="w-[55%] max-md:w-full">
        <h2 className="text-2xl font-sans font-[600] mb-4">About Me</h2>
        <p>
          Highly motivated web developer with a passion for coding and a strong
          desire to learn. Excels at problem-solving and working collaboratively
          in a team environment. I am also a quick learner who is highly
          adaptable and comfortable with a rapidly evolving field of
          technologies.
        </p>
        <br />
        <p>
          Seeking a junior developer position to contribute to exciting and
          innovative projects and continue to develop my skills in the field.
        </p>
      </div>

      <div className="w-[35%] max-md:w-full max-md:mt-[3rem]">
        <h2 className="text-2xl mb-4 font-sans font-[600]">Skills</h2>
        <div className="iconHolder flex gap-5 flex-wrap">
          <img src={htmlIcon} alt="html icon" className="h-[2rem] " />
          <img src={cssIcon} alt="css icon" className="h-[2rem] " />
          <img
            src={javascriptIcon}
            alt="javascript icon"
            className="h-[2rem] "
          />
          <img src={reactIcon} alt="react icon" className="h-[2rem] " />
          <img src={nodejsIcon} alt="nodejs icon" className="h-[2rem] " />
          <img src={tailwindIcon} alt="tailwind icon" className="h-[2rem] " />
          <img src={expressIcon} alt="express icon" className="h-[2rem] " />
          <img src={nextjsIcon} alt="nextjs icon" className="h-[2rem] " />
          <img src={prismaIcon} alt="prisma icon" className="h-[2rem] " />
          <img src={postgresIcon} alt="postgresql icon" className="h-[2rem] " />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
