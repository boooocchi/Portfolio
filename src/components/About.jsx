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

const About = () => {
  return (
    <motion.section
      initial={{ filter: "blur(20px)", opacity: 0.5, y: "10%" }}
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
      className="about w-8/12 mx-auto mt-24 mb-20 max-w-screen-lg"
    >
      <h2 className="text-2xl my-3 font-sans font-[600]">About Me</h2>
      <p>
        Highly motivated web developer with a passion for coding and a strong
        desire to learn. Excels at problem-solving and working collaboratively
        in a team environment. I am also a quick learner who is highly adaptable
        and comfortable with a rapidly evolving field of technologies.
      </p>
      <br />
      <p>
        Seeking a junior developer position to contribute to exciting and
        innovative projects and continue to develop my skills in the field.
      </p>

      <h2 className="text-2xl mb-3 mt-10 font-sans font-[600]">Skills</h2>
      <div className="iconHolder flex gap-3">
        <img src={htmlIcon} alt="html icon" className="h-[2rem] " />
        <img src={cssIcon} alt="css icon" className="h-[2rem] " />
        <img src={javascriptIcon} alt="javascript icon" className="h-[2rem] " />
        <img src={reactIcon} alt="react icon" className="h-[2rem] " />
        <img src={nodejsIcon} alt="nodejs icon" className="h-[2rem] " />
        <img src={tailwindIcon} alt="tailwind icon" className="h-[2rem] " />
        <img src={expressIcon} alt="express icon" className="h-[2rem] " />
        <img src={nextjsIcon} alt="nextjs icon" className="h-[2rem] " />
      </div>
    </motion.section>
  );
};

export default About;
