import React from "react";
import { motion } from "framer-motion";
export default function Advantage({ data }) {
  return (
    <div className="py-20 mb-24 bg-gray-50 sm:mb-18 xl:mb-16">
      <motion.div
        className="container mx-auto"
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
      >
        <h1 className="text-5xl font-bold text-center text-theme-blue">
          Why Choose Us
        </h1>

        <p className="mb-12 text-lg font-light text-center text-gray-400 sm:mb-5 xl:mb-0">
          Why you should choose us to handle your project.
        </p>

        <div className="flex flex-col sm:flex-row">
          <motion.div
            className="flex-col"
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
          >
            {data[0].map((item, index) => (
              <div>
                <div className="flex flex-row items-center p-3 mx-3 my-6 transition duration-500 transform bg-white border shadow-xl sm:my-7 sm:mx-3 xl:my-14 xl:mx-7 rounded-2xl border-light-theme-purple hover:scale-105">
                  <img src={item.imageUrl} alt="" className="w-1/3" />
                  <div className="flex-col pl-5">
                    <h2 className="text-2xl text-theme-blue">{item.title}</h2>
                    <p className="font-light text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          <div className="flex-col -mt-4 sm:mt-14">
            {data[1].map((item, index) => (
              <div>
                <div className="flex flex-row items-center p-3 mx-3 my-6 transition duration-500 transform bg-white border shadow-xl sm:my-7 sm:mx-3 xl:my-14 xl:mx-7 rounded-2xl border-light-theme-purple hover:scale-105">
                  <img src={item.imageUrl} alt="" className="w-1/3" />
                  <div className="flex-col pl-5">
                    <h2 className="text-2xl text-theme-blue">{item.title}</h2>
                    <p className="font-light text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
