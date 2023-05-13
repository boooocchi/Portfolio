import React from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Work from "@/components/Work";
import About from "@/components/About";
import Form from "@/components/Form";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Form />
      <Footer />
    </>
  );
};

export default Home;
