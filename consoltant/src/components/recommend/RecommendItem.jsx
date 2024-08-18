import React from "react";

function RecommendItem({ item }) {
  return (
    <div>
      <div>{item.name}</div>
      <p>{item.description}</p>
      <div>
        <span>12개월 기준</span>
        <span>연 <span>{item.rate}%</span></span>
      </div>
    </div>
  );
}

export default RecommendItem;
