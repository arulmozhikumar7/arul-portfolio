/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from "react";

import Header from "@parts/Header";
import DiscussForm from "@parts/DiscussForm";
import Footer from "@parts/Footer";

const DiscussProjectPage = (props) => {
  const [data, setData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectIdea: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const resetForm = () => {
    setData({
      name: "",
      company: "",
      email: "",
      phone: "",
      projectIdea: "",
    });
  };

  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Header {...props} />
      <DiscussForm data={data} onChange={onChange} resetForm={resetForm} />
      <Footer />
    </>
  );
};

export default DiscussProjectPage;
