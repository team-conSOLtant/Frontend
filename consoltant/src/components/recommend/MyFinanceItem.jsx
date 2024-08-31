import React from "react";

function MyFinanceItem({ item, onClick, isSelected }) {
  // console.log("item", item)
  return (
    <div
      onClick={onClick}
      className={`flex flex-col 1border p-3 rounded-lg mb-2 text-[#444444] border-gray-400 shadow-sm cursor-pointer ${
        isSelected ? "bg-blue-700 border-blue-500" : ""
      }`}
    >
      <div>
        <div className="text-base font-semibold">{item.accountName}</div>
        <p className="text-base text-[#8E8E93]">{item.accountDescription}</p>
      </div>
      <div className="flex flex-col justify-end items-baseline mt-2">
        <span className="text-sm mr-2 text-sm font-OneShinhanMedium">
          금액 : {item.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
          원{" "}
        </span>
        <span className="text-sm font-OneShinhanMedium ">
          등록기간 : {item.startDate} ~ {item.endDate}
        </span>
      </div>
      <div className="flex justify-end items-baseline">
        <span className="text-sm mr-2 text-sm">12개월 기준</span>
        <span className="text-base text-[#FF0000] font-bold">
          연 {item.interestRate}%
        </span>
      </div>
    </div>
  );
}

export default MyFinanceItem;
