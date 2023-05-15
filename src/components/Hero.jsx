import React from "react";
import styles from "./Hero.module.scss";
import profile from "@/assets/profile.png";
import vancouver from "@/assets/vancouver.png";
import { motion } from "framer-motion";

const Hero = () => {
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
        className={`h-[550px] max-md:h-[500px] ${styles.heroSection}`}
      >
        <div className={`text-blueblack ${styles.wrapper}`}>
          <div className={styles.wrapperLeft}>
            <motion.p variants={text} initial="hidden" animate="show">
              Hi, I'm
            </motion.p>
            <motion.div
              variants={nameContainer}
              initial="hidden"
              animate="show"
              className="xl:text-[6rem] lg:text-7xl sm:text-6xl color font-sans font-bold flex gap-3"
            >
              <motion.div
                variants={nameChild}
                className="font-sans tracking-[-2px] text-[5rem]"
              >
                KOTA ITO
              </motion.div>
            </motion.div>

            <motion.p variants={text2} initial="hidden" animate="show">
              I'm a Vancouver based front-end developer
            </motion.p>
          </div>
          <div className={`${styles.wrapperRight}`}>
            <motion.img
              variants={profilePic}
              initial="hidden"
              animate="show"
              className={`${styles.vancouver} max-md:bottom-[-20%]`}
              src={vancouver}
              alt="background-pic"
            />
            <motion.img
              variants={profilePic}
              initial="hidden"
              animate="show"
              className={`max-md:left-[10%] md:w-[500px] md:left-[15%] max-md: w-[420px] ${styles.profile}`}
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
