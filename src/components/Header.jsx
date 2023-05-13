import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import style from "./Header.module.scss";

function Header() {
  return (
    <>
      <header className="text-blueblack">
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              type: "spring",
              damping: 12,
              staggerChildren: 1
            }
          }}
          className={`max-w-screen-xl mx-auto text-blueblack  ${style.nav}`}
        >
          <NavLink className="text-blueblack hover:underline" to="/">
            HOME
          </NavLink>
          <ul>
            <li className="text-blueblack">
              <a className="text-blueblack" href="#about">
                ABOUT
              </a>
            </li>
            <li>
              <a className="text-blueblack" href="#work">
                WORK
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
