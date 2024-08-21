import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import PortfolioController from "../components/portfolio/PortfolioController.jsx";
import PortfolioSection from "../components/portfolio/PortfolioSection.jsx";
import styled from "styled-components";
import EducationCareerSection from "../components/portfolio/EducationCareerSection.jsx";
import AwardCertificationSection from "../components/portfolio/AwardCertificationSection.jsx";
import ProjectForm from "../components/portfolio/ProjectForm.jsx";
import ProjectSection from "../components/portfolio/ProjectSection.jsx";
// 포트폴리오(이력서) 보는 페이지

const PortfolioPageStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const PortfolioMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  padding: 0 10%;
`;

function PortfolioPage() {
  return (
    <PortfolioPageStyle>
      <PortfolioMain>
        <EducationCareerSection />

        <AwardCertificationSection />
        <ProjectSection />
      </PortfolioMain>
      {/* <PortfolioSection title="수상 / 자격증" />
        <PortfolioSection title="학력 / 경력" />
        <PortfolioSection title="프로젝트" /> */}

      <PortfolioController />
    </PortfolioPageStyle>
  );
}

export default PortfolioPage;
