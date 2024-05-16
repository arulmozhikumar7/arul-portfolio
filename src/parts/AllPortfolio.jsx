import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Fade } from "react-awesome-reveal";
import Button from "@elements/button";
export default function AllPortfolio({ data }) {
  const mobile = data.filter((item) => item.type === "Mobile Apps");

  const website = data.filter((item) => item.type === "Website");

  const other = data.filter(
    (item) => item.type !== "Website" && item.type !== "Mobile Apps"
  );
  return (
    <section className="container mx-auto">
      <Tabs className="flex flex-col px-4">
        <TabList>
          <Fade cascade damping={0.5} direction="up" triggerOnce>
            <div className="flex flex-row mb-5">
              <Tab>
                <button className="px-5 py-2 mr-3 text-lg font-normal transition duration-300 border rounded-full text-theme-purple border-theme-purple hover:bg-theme-purple hover:text-white focus:outline-none focus:bg-theme-purple focus:text-white">
                  Web
                </button>
              </Tab>
              <Tab>
                <button className="px-5 py-2 mr-3 text-lg font-normal transition duration-300 border rounded-full text-theme-purple border-theme-purple hover:bg-theme-purple hover:text-white focus:outline-none focus:bg-theme-purple focus:text-white">
                  App
                </button>
              </Tab>
              <Tab>
                <button className="px-5 py-2 mr-3 text-lg font-normal transition duration-300 border rounded-full text-theme-purple border-theme-purple hover:bg-theme-purple hover:text-white focus:outline-none focus:bg-theme-purple focus:text-white">
                  Other
                </button>
              </Tab>
            </div>
          </Fade>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 xl:gap-8 justify-items-center">
            {website.map((item, index) => (
              <Fade cascade damping={0.5} direction="up" triggerOnce>
                <Button type="link" href={`/project/${item.id}`}>
                  <div className="w-11/12 m-3 transition duration-500 transform shadow-xl group rounded-2xl hover:scale-110 portofolio-card">
                    <div className="relative">
                      <img
                        src={item.imageUrl}
                        alt="Portfolio"
                        className="z-0 rounded-t-2xl"
                      />
                      <div className="absolute top-0 flex justify-center w-full h-full bg-black rounded-b opacity-0 rounded-t-2xl img-hover">
                        <button className="focus:outline-none">
                          <svg
                            className="w-20 h-20 text-gray-200"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="py-4">
                      <h2 className="text-xl text-center text-theme-blue">
                        {item.title}
                      </h2>
                      <p className="font-light text-center text-gray-400">
                        {item.type}
                      </p>
                    </div>
                  </div>
                </Button>
              </Fade>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 xl:gap-8 justify-items-center">
            {mobile.map((item, index) => (
              <Fade cascade damping={0.5} direction="up" triggerOnce>
                <Button type="link" href={`/project/${item.id}`}>
                  <div className="w-11/12 m-3 transition duration-500 transform shadow-xl group rounded-2xl hover:scale-110 portofolio-card">
                    <div className="relative">
                      <img
                        src={item.imageUrl}
                        alt="Portfolio"
                        className="z-0 rounded-t-2xl"
                      />
                      <div className="absolute top-0 flex justify-center w-full h-full bg-black rounded-b opacity-0 rounded-t-2xl img-hover">
                        <button className="focus:outline-none">
                          <svg
                            className="w-20 h-20 text-gray-200"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="py-4">
                      <h2 className="text-xl text-center text-theme-blue">
                        {item.title}
                      </h2>
                      <p className="font-light text-center text-gray-400">
                        {item.type}
                      </p>
                    </div>
                  </div>
                </Button>
              </Fade>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 xl:gap-8 justify-items-center">
            {other.map((item, index) => (
              <Fade cascade damping={0.5} direction="up" triggerOnce>
                <Button type="link" href={`/project/${item.id}`}>
                  <div className="w-11/12 m-3 transition duration-500 transform shadow-xl group rounded-2xl hover:scale-110 portofolio-card">
                    <div className="relative">
                      <img
                        src={item.imageUrl}
                        alt="Portfolio"
                        className="z-0 rounded-t-2xl"
                      />
                      <div className="absolute top-0 flex justify-center w-full h-full bg-black rounded-b opacity-0 rounded-t-2xl img-hover">
                        <button className="focus:outline-none">
                          <svg
                            className="w-20 h-20 text-gray-200"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="py-4">
                      <h2 className="text-xl text-center text-theme-blue">
                        {item.title}
                      </h2>
                      <p className="font-light text-center text-gray-400">
                        {item.type}
                      </p>
                    </div>
                  </div>
                </Button>
              </Fade>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
}
