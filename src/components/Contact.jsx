import React from "react";
import { motion } from "motion/react";
import { containerVariants,itemVariants } from "./Gallery";
import fb from "../assets/facebook.svg";
import trip from "../assets/tripAdvisor.svg";
import google from "../assets/google.svg";

function Contact() {
  return (
    <div>
      <h2 className="ml-5 text-xl md:text-2xl mb-2">KNOW US ON :</h2>
      <motion.div className="flex items-center justify-center gap-14 md:gap-20 lg:gap-28" variants={containerVariants} initial="hidden" whileInView="show">
        <motion.img
          variants={itemVariants}
          src={fb}
          alt=""
          className="shadow-xl rounded-full p-2 w-[22%] md:w-[15%] lg:w-[12%]"
        />
        <motion.img
          variants={itemVariants}
          src={trip}
          alt=""
          className="shadow-xl rounded-full p-2 w-[22%] md:w-[15%] lg:w-[12%]"
        />
        <motion.img
          variants={itemVariants}
          src={google}
          alt=""
          className="shadow-xl rounded-full p-2 w-[22%] md:w-[15%] lg:w-[12%]"
        />
      </motion.div>
    </div>
  );
}

export default Contact;
