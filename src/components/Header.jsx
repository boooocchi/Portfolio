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
          className={`max-w-[1200px] mx-auto text-blueblack  ${style.nav} py-[.5rem] px-[2rem] max-sm:px-[1rem]`}
        >
          <NavLink
            className="text-blueblack hover:underline max-sm:text-[.9rem]"
            to="/"
          >
            HOME
          </NavLink>
          <ul className="max-sm:gap-[1.2rem] gap-[2.7rem] max-sm:text-[.9rem]">
            <li className="text-blueblack">
              <a className="text-blueblack" href="#about">
                ABOUT
              </a>
            </li>
            <li className="text-blueblack">
              <a className="text-blueblack" href="#work">
                WORK
              </a>
            </li>
            <li>
              <a
                className="text-blueblack"
                href="https://drive.google.com/file/d/1wcdRiqCYWc4LtjPCWQd35xaGfaZz7irr/view?usp=drive_link"
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
