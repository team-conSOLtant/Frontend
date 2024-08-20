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

const PortfolioMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  padding: 0 10%;
`;

function PortfolioPage() {
  return (
    <PortfolioPageStyle>
      <PortfolioMain>
        <EducationSection />
        <AwardCertificationSection />
      </PortfolioMain>

      {/* <PortfolioSection title="수상 / 자격증" />
        <PortfolioSection title="학력 / 경력" />
        <PortfolioSection title="프로젝트" /> */}
      <PortfolioController></PortfolioController>
    </PortfolioPageStyle>
  );
}

export default PortfolioPage;
