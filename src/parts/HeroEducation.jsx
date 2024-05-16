import React from "react";

export default function HeroEducation({ data }) {
  return (
    <>
      <section className="hero sm:items-center lg:items-start sm:flex-row">
        <div className="flex flex-col w-full px-5 mb-5 sm:w-1/2 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
          <h1 className="mb-5 text-6xl font-bold leading-tight text-theme-blue">
            {data[0].title}
          </h1>
          <p className="text-[16px] font-light leading-relaxed text-gray-400 ">
            {data[0].description}
          </p>
        </div>
        <div className="w-full sm:w-1/2 sm:pr-12">
          <lottie-player
            src="./assets/study.json"
            background="##fff"
            speed="1"
            style={{ width: "100%", height: "100%" }}
            autoplay
            loop
            direction="1"
            mode="normal"
          ></lottie-player>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="flex justify-center text-3xl text-black">
          <h1>Education</h1>
        </div>
        <div className="container flex flex-wrap px-5 py-24 mx-auto">
          <div className="relative flex pt-10 pb-20 mx-auto sm:items-center md:w-2/3">
            <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-indigo-500 rounded-full sm:mt-0 title-font">
              X
            </div>
            <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-indigo-500 bg-indigo-100 rounded-full">
                <img src="/assets/images/school.png" alt="" srcset="" />
              </div>
              <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
                <h2 className="mb-1 text-xl font-medium text-gray-900 title-font">
                  Sri Ramana Vidalaya , Rajapalayam
                </h2>
                <h3 className="mb-1 text-lg font-medium text-gray-900 title-font">
                  2018 - 2019
                </h3>
                <p className="leading-relaxed">Percentage: 94%</p>
              </div>
            </div>
          </div>
          <div className="relative flex pb-20 mx-auto sm:items-center md:w-2/3">
            <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-indigo-500 rounded-full sm:mt-0 title-font">
              XII
            </div>
            <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-indigo-500 bg-indigo-100 rounded-full">
                <img src="/assets/images/school.png" alt="" />
              </div>
              <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
                <h2 className="mb-1 text-xl font-medium text-gray-900 title-font">
                  Sri Ramana Vidalaya , Rajapalayam
                </h2>
                <h3 className="mb-1 text-lg font-medium text-gray-900 title-font">
                  2020 - 2021
                </h3>
                <p className="leading-relaxed">Percentage: 91.6%</p>
              </div>
            </div>
          </div>
          <div className="relative flex pb-20 mx-auto sm:items-center md:w-2/3">
            <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-indigo-500 rounded-full sm:mt-0 title-font">
              B.E
            </div>
            <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-indigo-500 rounded-full">
                <img
                  src="https://velammal.edu.in/wp-content/uploads/2021/09/favicon.png"
                  alt=""
                />
              </div>
              <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
                <h2 className="mb-1 text-xl font-medium text-gray-900 title-font">
                  Velammal Engineering College , Chennai
                </h2>
                <h3 className="mb-1 text-lg font-medium text-gray-900 title-font">
                  2021 - 2025
                </h3>
                <p className="leading-relaxed">
                  Degree: Bachelor of Engineering (Computer Science) with
                  Fullstack Development Honours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
