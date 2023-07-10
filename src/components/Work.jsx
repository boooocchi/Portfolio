import React from "react";
import { motion, useScroll } from "framer-motion";

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
      className="work w-8/12 max-md:w-[80%] mx-auto  max-w-screen-lg"
      id="work"
    >
      <h2 className="text-2xl mt-3 mb-4 font-sans font-[600]">Work</h2>
      <div className="grid grid-cols-2 gap-3">
        <div className="aspect-[5/6] group/item transition z-[1] duration-1000 items-end relative overflow-hidden  shadow-sm before:content-[''] before:z-[1] before:hover:scale-[1.3] before:bg-[url('@/assets/smartRecipe.jpg')] before:h-[110%] before:bg-cover before:w-full before:absolute before:top-0 before:left-0 hover:before:translate-y-[-5%] hover:before:transition hover:before:duration-500 before:bg-bottom max-sm:h-[200px] h-[350px] hover:items-center p-[1rem] before:transition before:duration-500 after:content-[''] after:block after:absolute after:top-0 after:left-0 after:w-full after:h-[200%] after:bg-gradient-to-b after:from-[rgba(0,0,0,0.2)] after:to-[rgba(0,0,0,0.6)] after:z-[10] after:hover:translate-y-[-50%]">
          <div className="transition duration-500 content relative flex flex-col items-center w-full h-full z-[11] transform translate-y-[35%] py-5  group-hover/item:translate-y-[0%] justify-center px-5">
            <h2 className="text-[white] text-[1.3rem] leading-1 font-sans font-[700]  mb-5 border-b border-white border-b-width-[1px] border-b-style-solid pb-[1px]">
              Smart Recipe
            </h2>
            <p className="relative  transition duration-500 opacity-0 group-hover/item:opacity-100 translate-y-[1rem] group-hover/item:translate-y-[0rem] text-[white] font-main text-sm">
              Check out all of these gorgeous mountain trips with beautiful
            </p>
            <a
              className="ransition duration-500 opacity-0 group-hover/item:opacity-100  translate-y-[1rem] group-hover/item:translate-y-[0rem] text-blueblack  px-3 py-2 bg-[white] leading-[1rem] tracking-tighter text-[0.9rem] rounded-sm mt-auto"
              href="https://smart-recipe-iota.vercel.app/login"
            >
              Visit the Site
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
