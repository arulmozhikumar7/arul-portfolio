import React from "react";

import Button from "@elements/button";

import NotFound from "@assets/images/NotFound.png";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center w-full h-screen bg-gray-800">
      <div className="flex justify-center w-full">
        <img src={NotFound} alt="Not Found" className="sm:w-3/4 xl:w-5/12" />
      </div>
      <h1 className="mt-5 text-2xl text-center text-white">
        You weren't supposed to find this place...
      </h1>
      <div className="flex justify-center">
        <Button
          href="/"
          type="link"
          className="flex items-center h-10 px-5 mt-5 text-white transition duration-500 transform bg-gray-600 rounded w-30 hover:bg-gray-900"
        >
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
