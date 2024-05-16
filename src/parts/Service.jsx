/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from "react";
import { Fade } from "react-awesome-reveal";
export default function Service({ data }) {
  return (
    <div className="bg-gray-50">
      <div className="container pt-20 mx-auto pb-28">
        <h1 className="text-5xl font-bold text-center text-theme-blue">
          Things I Do
        </h1>

        <p className="mb-12 text-lg font-light text-center text-gray-400">
          Currently I am improving my skills in these areas
        </p>

        <div className="grid grid-rows-3 gap-8 px-10 sm:grid-cols-3 sm:grid-rows-1 sm:gap-6 xl:gap-16">
          {data.map((item, index) => (
            <div>
              <Fade cascade damping={0.5} direction="up" triggerOnce>
                <div
                  className="transition duration-500 transform bg-white border shadow-2xl group rounded-2xl border-light-theme-purple hover:scale-105"
                  key={index}
                >
                  <lottie-player
                    src={item.imageUrl}
                    background="##ffffff"
                    speed="1"
                    style={{ width: "100%", height: "300px" }}
                    loop
                    autoplay
                    direction="1"
                    mode="normal"
                  ></lottie-player>
                  <h2 className="text-xl text-center md:text-sm lg:text-xl text-theme-blue py-7 rounded-b-2xl">
                    {item.title}
                  </h2>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
