import React from "react";

// 포트폴리오 각 섹션을 의미한다. ex) 수상/자격증, 학력/경력 등등
function PortfolioSection(props) {
  return (
    <div style={{ width: "10rem", height: "2rem", border: "1px solid black" }}>
      {props.title} 섹션
    </div>
  );
}

export default PortfolioSection;
