import React from "react";
import { motion } from "motion/react";

function About() {
  const Tilte = "Relaxing " + "_" + "Environment";
  const dev = Tilte.split("");

  const parentVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delay: 0.1, duration: 0.4 },
    },
  };

  const childrenVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const word = "La Elan Spa & Salon".split(" ");
  const parent = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3, duration: 1 } },
  };
  const child = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <div className="m-8 rounded-xl p-4 bg-[#bf6b41]">
      <div className="text-center my-5 flex items-center justify-center">
        <motion.div
          className="bg-black h-20 w-[2px]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.8 }}
        ></motion.div>
        <h2 className="text-4xl mb-4 p-2 border-y-2 inline text-center">
          About us
        </h2>
        <motion.div
          className="bg-black h-20 w-[2px] mb-10"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.8 }}
        ></motion.div>
      </div>
      <motion.div
        variants={parent}
        initial="hidden"
        whileInView="show"
        className="flex justify-center items-center gap-3 text-2xl  mb-4"
      >
        {word.map((word, i) => {
          return (
            <motion.h1 key={i} variants={child}>
              {word}
            </motion.h1>
          );
        })}
      </motion.div>
      <p className="md:text-lg md:text-center">
        La Elan Spa & Salon is a reputed family spa located in Hi-Tech City,
        Hyderabad since 2015. Providing affordable professional spa treatments
        with natural products to our elite guests in a hygienic and relaxing
        environment. We provide massages, scrubs, facials and body wraps.
      </p>
      <div className="md:flex items-center justify-center gap-5">
        <div>
          <motion.div
            className="my-7 text-2xl flex "
            variants={parentVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {dev.map((letter, index) => {
              return (
                <motion.h2
                  key={index}
                  variants={childrenVariant}
                  className="text-black"
                >
                  {letter}
                </motion.h2>
              );
            })}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="md:text-lg"
          >
            From the moment you walk in the door, our focus is on your complete
            relaxation. From massage to salt scrubs, our services are a great
            way to take a step back from the bustle of everyday life. Come take
            a break with us.
          </motion.p>
        </div>
        <div>
          <motion.h2
            className="my-7 text-2xl"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            High-Quality Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0.2, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:text-lg"
          >
            Many people underestimate the effect high-quality lotions and oils
            have on a spa treatment. We guarantee our all-natural products help
            you with that extra feeling of zen. Smell and feel the oils you
            choose.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default About;
