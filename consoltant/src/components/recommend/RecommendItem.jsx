import React from "react";

function RecommendItem({ item }) {
  return (
    <div className="flex flex-col border p-3 rounded-lg mb-2 text-[#444444] shadow-sm">
      <div>
        <div className="text-base font-semibold">{item.name}</div>
        <p className="text-sm text-[#8E8E93]">{item.description}</p>
      </div>
      <div className="flex justify-end items-baseline">
        <span className="text-sm mr-2 text-sm">12개월 기준</span>
        <span className="text-base text-[#FF0000] font-bold">연 {item.rate}%</span>
      </div>
    </div>
  );
}

export default RecommendItem;
