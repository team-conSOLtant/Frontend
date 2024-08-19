import React from "react";

// 포트폴리오 옆에서 순서 바꾸게 리모컨 역할 해주는 것
function PortfolioControllerItem(props) {
  return (
    <div style={{ width: "15rem", height: "2rem", border: "1px solid black" }}>
      <div>{props.text}</div>
      <div className="handle"> 핸들러</div>
    </div>
  );
}

export default PortfolioControllerItem;
