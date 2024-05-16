/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "@parts/Header";
import PortfolioDetail from "@parts/PortfolioDetail";
import Footer from "@parts/Footer";

import Data from "@json/landingPage.json";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const filteredData = Data.portfolio.filter((item) => item.id === id);
    setDetailData(filteredData.length === 1 ? [filteredData[0]] : null);
  }, [id]);

  return (
    <>
      <Header />
      <PortfolioDetail data={detailData} />
      <Footer />
    </>
  );
};

export default ProjectDetailPage;
