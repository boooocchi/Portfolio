import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
const ProjectCard = () => {
  const cardClass = `aspect-[5/6] group/item transition z-[1] duration-1000 items-end relative overflow-hidden  shadow-sm before:content-[''] before:z-[1] before:hover:scale-[1.3] before:h-[110%] before:bg-cover before:w-full before:absolute before:top-0 before:left-0 hover:before:translate-y-[-5%] hover:before:transition hover:before:duration-500 before:bg-bottom max-md:h-[350px]   md:h-[400px] hover:items-center p-[1rem] before:transition before:duration-500 after:content-[''] after:block after:absolute after:top-0 after:left-0 after:w-full after:h-[200%] after:bg-gradient-to-b after:from-[rgba(0,0,0,0.2)] after:to-[rgba(0,0,0,0.6)] after:z-[10] after:hover:translate-y-[-50%]`;

  return (
    <motion.div
      // ref={carouselRef}
      className="carousel cursor-grab  overflow-hidden max-w-[1000px]"
      whileHover={{ cursor: "grabbing" }}
      whileTap={{ cursor: "grabbing" }}
      dragElastic={0.8} // Add dragElastic property
      dragMomentum={true} // Add dragMomentum property
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -1000 }}
        className="inner-carousel gap-3 flex"
      >
        <motion.div className="item">
          <div
            className={`${cardClass}  before:bg-[url("@/assets/smartRecipe.png")]`}
          >
            <div className="transition duration-500 content relative flex flex-col items-center w-full h-full z-[11] transform translate-y-[35%] py-5  group-hover/item:translate-y-[0%] justify-center px-5">
              <h2 className="text-[white] text-[1.3rem] leading-1 font-sans font-[700]  mb-5 border-b border-white border-b-width-[1px] border-b-style-solid pb-[1px] drop-shadow-lg">
                Smart Recipe
              </h2>
              <p className="relative  transition duration-500 opacity-0 group-hover/item:opacity-100 translate-y-[1rem] group-hover/item:translate-y-[0rem] text-[white] font-main text-sm">
                A web application that enables users to easily search for
                recipes using relevant keywords and refine the search result by
                specifying the ingredients and diet type.
              </p>
              <a
                className="transition duration-500 opacity-0 group-hover/item:opacity-100  translate-y-[1rem] group-hover/item:translate-y-[0rem] text-blueblack  px-3 py-2 bg-[white] leading-[1rem] tracking-tighter text-[0.9rem] rounded-sm mt-auto"
                href="https://smart-recipe-pearl.vercel.app/"
                target="_blank"
              >
                Visit the Site
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div className="item">
          <div
            className={`${cardClass}  before:bg-[url("@/assets/SharEx.png")]`}
          >
            <div className="transition duration-500 content relative flex flex-col items-center w-full h-full z-[11] transform translate-y-[35%] py-5  group-hover/item:translate-y-[0%] justify-center px-5">
              <h2 className="text-[white] text-[1.3rem] leading-1 font-sans font-[700]  mb-5 border-b border-white border-b-width-[1px] border-b-style-solid pb-[1px] drop-shadow-lg">
                SharEx.
              </h2>
              <p className="relative  transition duration-500 opacity-0 group-hover/item:opacity-100 translate-y-[1rem] group-hover/item:translate-y-[0rem] text-[white] font-main text-sm">
                A web application where users can share their English vocabulary
                and its example sentences. It is a personal vocabulary notebook
                app but also users can contribute to a global community of
                English learners
              </p>
              <a
                className="transition duration-500 opacity-0 group-hover/item:opacity-100  translate-y-[1rem] group-hover/item:translate-y-[0rem] text-blueblack  px-3 py-2 bg-[white] leading-[1rem] tracking-tighter text-[0.9rem] rounded-sm mt-auto"
                href="https://sharexapp-63la7wjyb-boooocchi.vercel.app/"
                target="_blank"
              >
                Visit the Site
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div className="item">
          <div
            className={`${cardClass}  before:bg-[url("@/assets/Snippets_of_my_hazy_days.png")]`}
          >
            <div className="transition duration-500 content relative flex flex-col items-center w-full h-full z-[11] transform translate-y-[35%] py-5  group-hover/item:translate-y-[0%] justify-center px-5">
              <h2 className="text-[white] text-[1.3rem] leading-1 font-sans font-[700]  mb-5 border-b border-white border-b-width-[1px] border-b-style-solid pb-[1px] text-center drop-shadow-lg">
                Snippets of <br /> my hazy days
              </h2>
              <p className="relative  transition duration-500 opacity-0 group-hover/item:opacity-100 translate-y-[1rem] group-hover/item:translate-y-[0rem] text-[white] font-main text-sm">
                A Blog website where users can store their snippets of the daily
                moments.
              </p>
              <a
                className="transition duration-500 opacity-0 group-hover/item:opacity-100  translate-y-[1rem] group-hover/item:translate-y-[0rem] text-blueblack  px-3 py-2 bg-[white] leading-[1rem] tracking-tighter text-[0.9rem] rounded-sm mt-auto"
                href="https://nodejs-midterm-tau.vercel.app/"
                target="_blank"
              >
                Visit the Site
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div className="item">
          <div
            className={`${cardClass}  before:bg-[url("@/assets/portfolio.png")]`}
          >
            <div className="transition duration-500 content relative flex flex-col items-center w-full h-full z-[11] transform translate-y-[35%] py-5  group-hover/item:translate-y-[0%] justify-center px-5">
              <h2 className="text-[white] text-[1.3rem] leading-1 font-sans font-[700]  mb-5 border-b border-white border-b-width-[1px] border-b-style-solid pb-[1px] drop-shadow-lg">
                My Portfolio
              </h2>
              <p className="relative  transition duration-500 opacity-0 group-hover/item:opacity-100 translate-y-[1rem] group-hover/item:translate-y-[0rem] text-[white] font-main text-sm">
                This portofolio website.
              </p>
              <a
                className="transition duration-500 opacity-0 group-hover/item:opacity-100  translate-y-[1rem] group-hover/item:translate-y-[0rem] text-blueblack  px-3 py-2 bg-[white] leading-[1rem] tracking-tighter text-[0.9rem] rounded-sm mt-auto"
                href="https://smart-recipe-iota.vercel.app/login"
                target="_blank"
              >
                Visit the Site
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
