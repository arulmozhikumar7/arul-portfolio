/* eslint-disable react/jsx-filename-extension */
import React from "react";

import Team from "@assets/images/about.png";
import Team2 from "@assets/images/self-service.png";
export default function HeroTeam({ data }) {
  return (
    <>
      <section className="hero sm:items-center lg:items-start sm:flex-row">
        <div className="flex flex-col w-full px-5 mb-5 sm:w-1/2 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
          <h1 className="mb-5 text-6xl font-bold leading-tight text-theme-blue">
            {data[0].title}
          </h1>
          <p className="text-xl font-light leading-relaxed text-gray-400">
            {data[0].description}
          </p>
        </div>
        <div className="w-full sm:w-1/2 sm:pr-12">
          <img src={Team} alt="Hero" />
        </div>
      </section>
      <section className="hero sm:items-center lg:items-start sm:flex-row">
        <div className="w-full sm:w-1/2 sm:pr-12">
          <img src={Team2} alt="Hero" />
        </div>
        <div className="flex flex-col w-full px-5 mb-5 sm:w-1/2 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
          <h1 className="mb-5 text-6xl font-bold leading-tight text-theme-blue">
            Our Team
          </h1>
          <p className="text-xl font-light leading-relaxed text-gray-400">
            About VG Tech team is a bunch of unconventional thinkers who help
            you create out-of-the-box ideas for the Epic outcomes that your
            business requires. In addition, We have a sincere and dedicated team
            of highly skilled and creative people working endlessly with a
            passionate aspiration to change the face of the global media and
            entertainment industry.
          </p>
        </div>
      </section>
    </>
  );
}
