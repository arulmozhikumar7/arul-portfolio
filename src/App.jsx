import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import LandingPage from "@pages/LandingPage";
import ProjectPage from "@pages/ProjectPage";
import ProjectDetailPage from "@pages/ProjectDetailPage";
import AboutPage from "@pages/AboutPage";
import DiscussProjectPage from "@pages/DiscussProjectPage";
import NotFoundPage from "@pages/NotFoundPage";
import "@assets/css/styles.css";
import EducationPage from "./pages/EducationPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/project" element={<ProjectPage />} />
        <Route exact path="/project/:id" element={<ProjectDetailPage />} />
        {/* <Route exact path="/about-us" element={<AboutPage />} /> */}
        <Route exact path="/discuss-project" element={<DiscussProjectPage />} />
        <Route exact path="/education" element={<EducationPage />} />
        <Route path="" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
