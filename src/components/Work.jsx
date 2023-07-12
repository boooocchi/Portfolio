import React from "react";
import ProjectCard from "./ProjectCard";
import { motion, useScroll } from "framer-motion";
import smartRecipeImg from "../assets/smartRecipe.jpg";
const Work = () => {
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
      viewport={{ once: true, amount: 0.2 }}
      className="work w-8/12 max-md:w-[80%] mx-auto  max-w-[1000px] "
      id="work"
    >
      <h2 className="text-2xl mt-3 mb-4 font-sans font-[600]">Work</h2>

      <ProjectCard imageName="smartRecipeImg"></ProjectCard>
    </motion.section>
  );
};

export default Work;
