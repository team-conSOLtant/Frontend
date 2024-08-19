import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import PortfolioController from "../components/portfolio/PortfolioController.jsx";
import PortfolioSection from "../components/portfolio/PortfolioSection.jsx";
import styled from "styled-components";
import EducationSection from "../components/portfolio/EducationSection.jsx";
import AwardCertificationSection from "../components/portfolio/AwardCertificationSection.jsx";
// 포트폴리오(이력서) 보는 페이지

const PortfolioPageStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-color: gray;
`;

const PortfolioLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 80%;
`;

function PortfolioPage() {
  return (
    <PortfolioPageStyle>
      <EducationSection />
      <AwardCertificationSection />
      {/* <PortfolioSection title="수상 / 자격증" />
        <PortfolioSection title="학력 / 경력" />
        <PortfolioSection title="프로젝트" /> */}
      <PortfolioController></PortfolioController>
    </PortfolioPageStyle>
  );
}

export default PortfolioPage;
