import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import PortfolioController from "../components/portfolio/PortfolioController.jsx";
import PortfolioSection from "../components/portfolio/PortfolioSection.jsx";
import styled from "styled-components";
// 포트폴리오(이력서) 보는 페이지

const PortfolioPageStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

const PortfolioLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 1000px;
`;

function PortfolioPage() {
  return (
    <PortfolioPageStyle>
      <PortfolioLeft>
        <PortfolioSection title="대외 활동" />
        <PortfolioSection title="수상 / 자격증" />
        <PortfolioSection title="학력 / 경력" />
        <PortfolioSection title="프로젝트" />
      </PortfolioLeft>
      <PortfolioController></PortfolioController>
    </PortfolioPageStyle>
  );
}

export default PortfolioPage;
