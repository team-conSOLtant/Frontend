import React from "react";

function RecommendItem({ item }) {
  return (
    <div className="flex flex-col border p-3 rounded-lg mb-2 mx-[5%]">
      <div>
        <div className="text-base">{item.name}</div>
        <p className="text-[1rem]">{item.description}</p>
      </div>
      <div className="flex justify-end items-baseline">
        <span className="text-sm mr-2">12개월 기준</span>
        <span className="text-base">연 <span>{item.rate}%</span></span>
      </div>
    </div>
  );
}

export default RecommendItem;
