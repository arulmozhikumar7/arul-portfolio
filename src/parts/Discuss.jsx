/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { motion } from "framer-motion";
import Button from "@elements/button";

export default function Discuss() {
  return (
    <section className="container flex justify-center mx-auto">
      <motion.div
        initial={{
          opacity: 0,

          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
          },
        }}
        viewport={{ once: true }}
        className="flex flex-col w-10/12 text-gray-100 shadow-2xl sm:w-11/12 xl:w-10/12 rounded-2xl bg-theme-purple py-14 sm:px-12 sm:py-20 xl:px-16 discuss"
      >
        <div className="flex flex-col p-5 mb-3 sm:flex-row sm:mb-9 sm:p-0 sm:items-center">
          <h1 className="w-2/3 text-5xl font-semibold leading-tight sm:text-6xl">
            Have an awesome project in mind?
          </h1>
          <Button
            href="/discuss-project"
            type="link"
            className="flex items-center justify-center w-56 h-20 p-5 mt-6 text-xl tracking-wider text-blue-800 transition transform bg-white border-2 rounded-full shadow-xl lg:text-2xl xl:text-xl lg:w-96 lg:h-24 xl:w-56 border-dark-theme-purple sm:mt-0 sm:ml-4 lg:ml-0 xl:ml-12 duration-600 hover:scale-105"
          >
            Lets Discuss!
          </Button>
        </div>
        <p className="p-5 mb-1 text-lg font-light sm:p-0 sm:text-xl lg:text-2xl xl:text-xl">
          Lets discuss it and make your dream software come true!
        </p>
      </motion.div>
    </section>
  );
}
