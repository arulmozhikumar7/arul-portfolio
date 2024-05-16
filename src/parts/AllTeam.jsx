/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { motion } from "framer-motion";
import "./AllTeam.css";
export default function AllTeam({ data }) {
  return (
    <section className="container mx-0 sm:mx-auto">
      <div className="grid grid-cols-2 mx-16 sm:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-32 sm:gap-14 lg:gap-10 justify-items-center">
        {data.map((item, index) => (
          <motion.div
            initial={{
              opacity: 0,

              y: 300,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3 + (index + 1) * 0.1,
              },
            }}
            viewport={{ once: true }}
            className="flip-card "
          >
            <div className="flex flex-col justify-center transition duration-500 transform border shadow-xl flip-card-inner w-44 h-60 sm:w-56 sm:h-72 rounded-xl border-light-theme-purple hover:scale-105">
              <div className="flex flex-col justify-center flip-card-front">
                {" "}
                <div className="flex justify-center xl:mb-5">
                  <img
                    src={item.imageUrl}
                    alt="Team Member"
                    className="flex w-32 h-32 rounded-full"
                  />
                </div>
                <h2 className="text-xl text-center text-theme-blue">
                  {item.name}
                </h2>
                <p className="mb-3 font-light text-center text-gray-400">
                  {item.position}
                </p>
              </div>
              <div className="flex flex-col py-6 text-center text-black r flip-card-back">
                <h1 className="text-theme-blue">{item.name}</h1>
                <p className="text-gray-400">{item.position}</p>
                <div className="flex-col items-center mt-6 ml-6 text-left">
                  <h3 className="font-semibold ">Skills:</h3>
                  <ul className="flex-col items-center justify-center ml-3 text-left">
                    {item.description.skills.map((skill, index) => (
                      <li
                        key={index}
                        className="text-gray-800 sm:text-sm md:text-lg"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
