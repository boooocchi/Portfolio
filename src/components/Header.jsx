import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import style from "./Header.module.scss";

function Header() {
  return (
    <>
      <header className="text-blueblack ">
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              type: "spring",
              damping: 12,
              staggerChildren: 1,
              delay: 0.3
            }
          }}
          className={`max-w-[1000px] mx-auto text-blueblack  ${style.nav} py-[.5rem] w-8/12 max-md:w-[80%] max-phone:w-[90%]`}
        >
          <NavLink
            className="text-blueblack hover:underline max-sm:text-[.9rem]"
            to="/"
          >
            HOME
          </NavLink>
          <ul className="max-sm:gap-[0.8rem] gap-[2.7rem]  max-sm:text-[.9rem]">
            <li className="text-blueblack">
              <a
                className="text-blueblack"
                href="https://portfolio-kotaito-development.vercel.app/#about"
              >
                ABOUT
              </a>
            </li>
            <li className="text-blueblack">
              <a
                className="text-blueblack"
                href="https://portfolio-kotaito-development.vercel.app/#work"
              >
                WORK
              </a>
            </li>
            <li>
              <a
                className="text-blueblack"
                href="https://drive.google.com/file/d/1wcdRiqCYWc4LtjPCWQd35xaGfaZz7irr/view?usp=drive_link"
                target="_blank"
              >
                RESUME
              </a>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-inherit hover:underline underline"
                    : "text-inherit hover:underline"
                }
                to="/contact"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </motion.nav>
      </header>
    </>
  );
}
export default Header;
