import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/aliliy.png";
import { motion } from "framer-motion";
import { GiDuration } from "react-icons/gi";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-8 lg:mb-35">
      <div className="flex flex-wrap lg:flex-nowrap items-center">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="px-4 lg:px-4">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-6xl font-thin tracking-tight text-center lg:text-left lg:mt-16 lg:text-8xl"
            >
              Iram Ali
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-tr from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent text-center lg:text-left"
            >
              Business Development Manager
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-xl text-center lg:text-left py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end px-4 lg:px-8">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilePic}
            alt="profilePic"
            className="max-w-full h-[350px] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
