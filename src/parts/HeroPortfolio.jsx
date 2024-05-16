/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { motion } from "framer-motion";
export default function HeroPortfolio() {
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row">
      <motion.div
        initial={{
          opacity: 0,

          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
        className="flex flex-col w-full px-5 mb-5 sm:w-1/2 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20"
      >
        <h1 className="mb-5 text-6xl font-bold leading-tight text-theme-blue">
          Projects
        </h1>
        <p className="text-xl font-light leading-relaxed text-gray-400">
          Currently I am working on improving my skills in MERN Stack. Here are
          some of the projects I have worked on. Check them out on
        </p>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,

          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
        className="w-full sm:w-1/2 sm:pr-12"
      >
        <img src="/assets/images/portfolioHero.png" alt="Hero" />
      </motion.div>
    </section>
  );
}
