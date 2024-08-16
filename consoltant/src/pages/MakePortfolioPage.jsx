import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import PortfolioController from "../components/portfolio/PortfolioController.jsx";

// 포트폴리오(이력서) 만드는 페이지
function PortfolioFormPage() {
  return (
    <div>
      <PortfolioController></PortfolioController>
    </div>
  );
}

export default PortfolioFormPage;
