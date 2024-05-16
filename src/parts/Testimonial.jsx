import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { motion } from "framer-motion";
export default function Testimonial({ data }) {
  return (
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
      className="container mx-auto"
    >
      <h1 className="text-5xl font-bold text-center text-theme-blue">
        Testimonials
      </h1>

      <p className="mb-3 text-lg font-light text-center text-gray-400 sm:mb-3 xl:mb-4">
        What they said about us.
      </p>

      <Splide
        options={{
          type: "loop",
          autoplay: true,
        }}
      >
        {data.map((item) => (
          <SplideSlide>
            <div className="flex-col px-8 py-6 mx-2 mt-6 mb-6 border shadow-xl xl:w-4/5 rounded-2xl sm:shadow-2xl border-light-theme-purple xl:mx-auto sm:mx-6 sm:mb-12">
              <div className="flex items-center mb-5">
                <img
                  src={item.imageUrl}
                  alt="Testimoni"
                  className="w-20 h-20 rounded-full"
                />
                <div className="flex-col pl-5">
                  <h2 className="text-2xl text-theme-blue">{item.name}</h2>
                  <p className="font-light text-gray-400">{item.company}</p>
                </div>
              </div>
              <p className="pt-3 pb-1 pl-5 text-2xl font-light text-gray-400">
                {item.testimoni}
              </p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </motion.div>
  );
}
