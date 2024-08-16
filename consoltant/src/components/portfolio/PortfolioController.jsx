import React from "react";
import PortfolioItem from "./PortfolioItem.jsx";

// 포트폴리오 옆에서 순서 바꾸게 리모컨 역할 해주는 것
function PortfolioController() {
  return (
    <div>
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
    </div>
  );
}

export default PortfolioController;
