/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Transition } from "@headlessui/react";

import Button from "@elements/button";
import BrandIcon from "@parts/BrandIcon";

export default function Header({ ...props }) {
  const location = useLocation();
  const [isCollapse, setIsCollapse] = useState(false);
  const path = location.pathname;

  return (
    <header className="header">
      <div className="flex justify-between px-4 lg:px-0">
        <BrandIcon />

        <button
          className="block text-theme-blue lg:hidden focus:outline-none"
          onClick={() => setIsCollapse(!isCollapse)}
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              className={`${isCollapse ? "hidden" : "block"}`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
            <path
              className={`${!isCollapse ? "hidden" : "block"}`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <ul className="flex-row items-center hidden mt-0 tracking-widest text-theme-blue lg:flex">
        <li>
          <Button
            className={`${
              path === "/" ? "active-link" : ""
            } text-lg px-5 no-underline hover:underline`}
            type="link"
            href="/"
          >
            Home
          </Button>
        </li>
        {/* <li className="py-2 lg:py-0">
          <Button
            className={`${
              path === "/about-us" ? "active-link" : ""
            } text-lg px-5 no-underline hover:underline`}
            type="link"
            href="/about-us"
          >
            About Us
          </Button>
        </li> */}
        <li className="py-2 lg:py-0">
          <Button
            className={`${
              path === "/education" ? "active-link" : ""
            } text-lg px-5 no-underline hover:underline`}
            type="link"
            href="/education"
          >
            Education
          </Button>
        </li>
        <li className="py-2 lg:py-0">
          <Button
            className={`${
              path === "/project" ? "active-link" : ""
            } text-lg px-5 no-underline hover:underline`}
            type="link"
            href="/project"
          >
            Project
          </Button>
        </li>
        <li>
          <Button
            className="px-6 py-2 mx-auto ml-3 text-lg text-white transition duration-200 border-2 rounded-full bg-theme-purple border-theme-purple hover:bg-dark-theme-purple"
            type="link"
            href="/discuss-project"
          >
            Discuss
          </Button>
        </li>
      </ul>

      <Transition
        show={isCollapse}
        enter="transition-opacity duration-400"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ul className="absolute z-50 flex flex-col w-full my-6 tracking-widest bg-white border-b-2 border-gray-300 text-theme-blue lg:hidden">
          <li className="py-2 bg-white">
            <Button
              className={`${
                path === "/" ? "active-link" : ""
              } px-10 no-underline hover:underline`}
              type="link"
              href="/"
            >
              Home
            </Button>
          </li>
          {/* <li className="py-2 bg-white">
            <Button
              className={`${
                path === "/about-us" ? "active-link" : ""
              } px-10 no-underline hover:underline`}
              type="link"
              href="/about-us"
            >
              About Us
            </Button>
          </li> */}
          <li className="py-2 bg-white">
            <Button
              className={`${
                path === "/education" ? "active-link" : ""
              } px-10 no-underline hover:underline`}
              type="link"
              href="/education"
            >
              Education
            </Button>
          </li>
          <li className="py-2 bg-white">
            <Button
              className={`${
                path === "/project" ? "active-link" : ""
              } px-10 no-underline hover:underline`}
              type="link"
              href="/project"
            >
              Project
            </Button>
          </li>
          <li className="mx-auto bg-white my-9">
            <Button
              className="px-5 py-2 mx-auto text-white transition duration-200 border-2 rounded-full bg-theme-purple border-theme-purple hover:bg-dark-theme-purple"
              type="link"
              href="/discuss-project"
            >
              Discuss Project
            </Button>
          </li>
        </ul>
      </Transition>
    </header>
  );
}
