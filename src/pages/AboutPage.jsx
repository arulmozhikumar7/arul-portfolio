import React, { useEffect } from "react";

import Header from "@parts/Header";
import HeroTeam from "@parts/HeroTeam";
import AllTeam from "@parts/AllTeam";
import Footer from "@parts/Footer";

import Data from "@json/landingPage.json";

const AboutPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header {...props} />
      <HeroTeam data={Data.about} />
      {/* <AllTeam data={Data.team} /> */}
      <Footer />
    </>
  );
};

export default AboutPage;
