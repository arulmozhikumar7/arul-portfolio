import React from "react";

import Header from "@parts/Header";
import HeroEducation from "@parts/HeroEducation";

import Footer from "@parts/Footer";

import Data from "@json/landingPage.json";

const EducationPage = (props) => {
  return (
    <>
      <Header {...props} />
      <HeroEducation data={Data.education} />
      <Footer />
    </>
  );
};

export default EducationPage;
