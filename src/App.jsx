import React from "react";
import Home from "@/pages/Home";
import Header from "@/components/Header";
import Contact from "@/pages/Contact";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Header />

      <AnimatePresence mode={"wait"}>
        <motion.div
          key={location.pathname}
          initial={{ x: "100%" }}
          animate={{ x: "0%", transition: { duration: 0.3 } }}
          exit={{ x: "-100%", transition: { duration: 0.3 } }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default App;
