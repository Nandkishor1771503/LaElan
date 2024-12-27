import React from "react";
import { motion } from "motion/react";

import spa from "../images/spa.png";
import hair1 from "../images/hair1.png";
import hair2 from "../images/hair2.png";
import hairstyle1 from "../images/hairStyle1.png";
import hairstyle2 from "../images/hairStyle2.png";
import hero from "../images/Hero.jpg";

const images = [
  { id: 1, src: spa, alt: "Image 1", size: "w-full " },
  { id: 2, src: hair1, alt: "Image 2", size: "w-full " },
  {
    id: 3,
    src: hair2,
    alt: "Image 3",
    size: "row-span-2  md:row-span-1 lg:row-span-2 ",
  },
  {
    id: 4,
    src: hairstyle1,
    alt: "Image 4",
    size: "col-span-2  sm:col-span-1 md:col-span-2",
  },
  {
    id: 5,
    src: hairstyle2,
    alt: "Image 5",
    size: "col-span-2 h-full sm:col-span-1 md:col-span-2  ",
  },
  {
    id: 6,
    src: hero,
    alt: "Image 6",
    size: "row-span-3 h-full sm:row-span-1 md:row-span-3",
  },
];

export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time between each child animation
    },
  },
};

export const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function Gallery() {
  return (
    <>
      <div className="lg:h-[90vh] ">
        <span className="text-3xl m-4 ml-6  text-[#cc9766]">3.</span>
        <h1 className="inline text-4xl lg:text-6xl text-[#cc9766] ">Gallery</h1>
        <motion.div
          className="grid grid-cols-3 h-[80vh] gap-4 p-4 md:grid-cols-4 lg:grid-cols-5 mt-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          // viewport={{once:true}}
        >
          {images.map((image) => (
            <motion.div
              key={image.id}
              className={` overflow-hidden rounded-lg ${image.size}`}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Gallery;
