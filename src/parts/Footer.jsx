import React from "react";
import BrandIcon from "@parts/BrandIcon";
import Button from "@elements/button";

export default function Footer() {
  return (
    <div className="pb-6 border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="flex justify-center w-full mb-8 sm:w-1/3 sm:justify-start sm:mb-0">
            <BrandIcon />
          </div>
          <div className="flex flex-col items-center w-full mb-8 sm:w-1/3 sm:items-start sm:mb-0">
            <h1 className="pt-4 pb-2 text-lg text-theme-blue">Location</h1>
            <p className="text-lg font-light text-gray-400">
              📍 Rajapalayam, Tamilnadu
            </p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-1/3 sm:items-end">
            <h1 className="pt-4 pb-2 text-lg text-theme-blue">Social</h1>
            <div className="flex flex-col items-center sm:items-end">
              <Button
                href="https://www.instagram.com/arularul_7/"
                type="link"
                target="_blank"
                className="flex mb-2 text-lg font-light text-gray-400 hover:underline"
                isExternal
              >
                Instagram
              </Button>
              <Button
                href="https://www.github.com/arulmozhikumar7/"
                type="link"
                target="_blank"
                className="flex mb-2 text-lg font-light text-gray-400 hover:underline"
                isExternal
              >
                Github
              </Button>
              <Button
                href="https://www.linkedin.com/in/arulmozhikumar/"
                type="link"
                target="_blank"
                className="flex mb-2 text-lg font-light text-gray-400 hover:underline"
                isExternal
              >
                LinkedIn
              </Button>
              <Button
                href="https://wa.me/918122509442"
                type="link"
                target="_blank"
                className="flex text-lg font-light text-gray-400 hover:underline"
                isExternal
              >
                Whatsapp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
