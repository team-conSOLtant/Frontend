import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import PortfolioController from "../components/portfolio/controller/PortfolioController.jsx";
import styled from "styled-components";
import EducationCareerSection from "../components/portfolio/education and career/EducationCareerSection.jsx";
import AwardCertificationSection from "../components/portfolio/award and certification/AwardCertificationSection.jsx";
import ProjectForm from "../components/portfolio/project/ProjectForm.jsx";
import ProjectSection from "../components/portfolio/project/ProjectSection.jsx";
import ActivityForm from "../components/portfolio/activity/ActivityForm.jsx";
import KeywordSection from "../components/portfolio/makeportfolio/KeywordSection.jsx";
import ProfileSection from "../components/portfolio/makeportfolio/ProfileSection.jsx";
import Navbar from "../components/header/Navbar.jsx";
import ActivitySection from "../components/portfolio/activity/ActivitySection.jsx";
// 포트폴리오(이력서) 만드는 페이지

const PortfolioPageStyle = styled.div``;

const PortfolioMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  padding: 0 10%;
`;

const PortfolioBody = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 2rem;
`;

function MakePortfolioPage() {
  return (
    <PortfolioPageStyle>
      <Navbar></Navbar>
      <PortfolioBody>
        <PortfolioMain>
          <ProfileSection />
          <KeywordSection />
          <EducationCareerSection isEdit={true} />
          <AwardCertificationSection isEdit={true} />
          <ProjectSection isEdit={true} />
          <ActivitySection isEdit={true} />
        </PortfolioMain>
        <PortfolioController />
      </PortfolioBody>
    </PortfolioPageStyle>
  );
}

export default MakePortfolioPage;
