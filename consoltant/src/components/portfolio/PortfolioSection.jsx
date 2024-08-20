import React from "react";
import "./PorfolioSection.css";

// 포트폴리오 각 섹션을 의미한다. ex) 수상/자격증, 학력/경력 등등
function PortfolioSection(props) {
  return (
    <div className="w-50 flex flex-col">
      <div className="underline-rounded">{props.title} 섹션</div>
      <div>{}</div>
    </div>
  );
}

export default PortfolioSection;
