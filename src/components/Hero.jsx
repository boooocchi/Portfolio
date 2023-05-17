import React from "react";
import styles from "./Hero.module.scss";
import profile from "@/assets/profile.png";
import vancouver from "@/assets/vancouver.png";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isSM = useMediaQuery({ query: "(max-width: 640px)" });
  const profilePic = {
    hidden: { opacity: 0, scale: 0.7 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", duration: 0.2, damping: 10, delay: 0.55 }
    }
  };

  const text = {
    hidden: { opacity: 0, scale: 0.7 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", duration: 0.3, damping: 10, delay: 0.8 }
    }
  };
  const text2 = {
    hidden: { opacity: 0, x: 10 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, delay: 1.3 }
    }
  };
  const nameContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 1.3 }
    }
  };

  const nameChild = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };
  return (
    <>
      <motion.section
        className={`h-[550px] max-md:h-[430px] ${styles.heroSection} max-sm:h-screen max-sm:min-h-[600px] max-sm:max-h-[750px] max-phone:max-h-[600px]`}
      >
        <div
          className={`h-full flex overflow-hidden text-blueblack ${styles.wrapper} gap-[1%] w-full  justify-center max-w-[1200px] first-line:max-sm:flex max-sm:flex-col max-sm:gap-0`}
        >
          <div
            className={
              "mt-[1rem] mb-[17%] justify-center flex flex-col lg:w-[22%]  w-[30%] ml-[5%] max-sm:h-[38%] max-sm:min-w-full max-sm:items-center max-sm:justify-center max-sm:ml-[0%] pl-5 max-sm:pl-0 lg:gap-0  max-sm:mt-[3rem] max-phone:h-[29%] max-sm:mb-[10%]"
            }
          >
            <motion.p
              variants={text}
              initial="hidden"
              animate="show"
              className="ml-2"
            >
              Hi, I'm
            </motion.p>
            <motion.div
              variants={nameContainer}
              initial="hidden"
              animate="show"
              className="xl:text-[6rem] lg:text-7xl sm:text-6xl color font-sans font-bold flex  gap-3"
            >
              <motion.div
                variants={nameChild}
                className="mb-2 font-sans tracking-[-1px] text-[6.5rem] max-lg:text-[5rem] max-lg:leading-[4.3rem] max-md:text-[4rem] max-md:mb-1 max-md:mt-1 leading-[5.3rem] max-md:leading-[3.5rem] max-sm:mb-3 max-md:ml-1 "
              >
                KOTA {!isSM && <br></br>}ITO
              </motion.div>
            </motion.div>

            <motion.p
              variants={text2}
              className="leading-[1rem] w-full mt-5 ml-2  max-sm:text-center max-md:ml-2 max-phone:mt-1"
              initial="hidden"
              animate="show"
            >
              I'm a Vancouver based <br></br> front-end developer
            </motion.p>
          </div>
          <div
            className={`${styles.wrapperRight}  max-sm:h-[60%] max-sm:min-w-full flex items-end justify-center`}
          >
            <motion.img
              variants={profilePic}
              initial="hidden"
              animate="show"
              className={
                "min-w-[700px] w-[700px]  absolute bottom-[-12%] max-md:min-w-[550px] z-1 max-sm:min-w-[550px] max-phone:min-w-[480px] max-lg:min-w-[650px]"
              }
              src={vancouver}
              alt="background-pic"
            />
            <motion.img
              variants={profilePic}
              initial="hidden"
              animate="show"
              className={`max-md:w-[410px] max-md:min-w-[410px] w-[500px] relative md:min-w-[500px]  z-2 max-sm:min-w-[500px] ml-5 max-phone:min-w-[380px]`}
              src={profile}
              alt="profile-pic"
            />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
