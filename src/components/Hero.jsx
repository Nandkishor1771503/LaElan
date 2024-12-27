import React from "react";
import { motion } from "motion/react";
import logo from "../images/Hero.jpg";

function Hero() {
  return (
    <div>
      <motion.img
        src={logo}
        alt=""
        className="w-full md:h-[60vh] lg:h-[70vh]"
        initial={{ opacity: 0.5, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      />
      <div className="flex items-center justify-center gap-10 mt-10 text-xl md:text-2xl lg:text-3xl">
        <h2>RELAX</h2>
        <h2>REFRESH</h2>
        <h2>RE-IMAGINE</h2>
      </div>
      <p className="text-2xl md:text-3xl font-sans  md:ml-[20%] text-[#944f1e] m-10">
        Book a time at our tranquil facility for massage, facials, and hair
        treatments.
      </p>
    </div>
  );
}

export default Hero;
