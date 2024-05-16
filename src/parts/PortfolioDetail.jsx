/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from "react";

import NotFound from "@assets/images/NotFound.png";

import Button from "@elements/button";
import Fade from "react-awesome-reveal";
export default function PortfolioDetail({ data }) {
  if (data === null) {
    return (
      <section className="container mx-auto">
        <Fade cascade damping={0.5} direction="up" triggerOnce>
          <div className="flex flex-col justify-center w-full">
            <div className="flex justify-center w-full">
              <img
                src={NotFound}
                alt="Not Found"
                className="mt-5 sm:w-3/4 xl:w-5/12"
              />
            </div>
            <h1 className="mt-5 text-2xl text-center text-theme-blue">
              Project Not Found
            </h1>
            <div className="flex justify-center">
              <Button
                href="/project"
                type="link"
                className="flex items-center h-10 px-5 mt-5 text-white transition duration-500 transform rounded w-30 bg-theme-blue hover:bg-gray-900"
              >
                Go Back
              </Button>
            </div>
          </div>
        </Fade>
      </section>
    );
  }

  return (
    <section className="container mx-auto">
      <Fade cascade damping={0.5} direction="up" triggerOnce>
        <Button
          type="link"
          href="/project"
          className="flex items-center w-40 h-8 mt-8 ml-6 text-lg font-light text-gray-400 sm:ml-20 hover:underline"
        >
          <svg
            className="w-5 h-5 mr-1 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          See All Project
        </Button>

        {data.map((item) => (
          <Fade cascade damping={0.5} direction="up" triggerOnce>
            <div className="flex flex-col justify-center mt-8">
              <h1 className="text-5xl font-bold text-center text-theme-blue">
                {item.title}
              </h1>

              <p className="mb-10 text-xl font-light text-center text-gray-400">
                {item.type}
              </p>

              <div className="flex justify-center xl:mb-6">
                <img
                  src={`../${item.imageUrl}`}
                  alt="Project"
                  className="flex w-4/5 sm:w-4/6"
                />
              </div>

              <div className="flex flex-col mx-8 mt-16 mb-12 sm:mx-16 xl:mx-28">
                <h1 className="mb-3 text-3xl font-bold text-theme-blue">
                  Project Detail
                </h1>

                <p className="text-lg font-light text-justify text-gray-400">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-col mx-8 sm:mx-16 xl:mx-28">
                <h1 className="mb-5 text-3xl font-bold text-theme-blue">
                  Project Responsibilities
                </h1>

                <div className="flex flex-row ml-1">
                  {item.responsibility.map((responsibility) => (
                    <div className="px-6 py-3 mr-4 border rounded-full shadow-lg text-theme-purple border-theme-purple">
                      {responsibility}
                    </div>
                  ))}
                </div>
              </div>

              <p className="mx-8 mt-16 italic font-light text-gray-400 sm:mx-16 xl:mx-28">
                Link :{" "}
                <Button
                  type="link"
                  href={item.credit}
                  target="_blank"
                  className="text-theme-purple"
                  isExternal
                >
                  {item.credit}
                </Button>
              </p>
            </div>
          </Fade>
        ))}
      </Fade>
    </section>
  );
}
