import React from "react";
import ActivityItem from "./ActivityItem.jsx";

function ActivityForm() {
  return (
    <div className="text-[#444444] flex flex-col">
      <div className="relative flex items-start">
        <div className="absolute left-[10px] top-0 h-full w-1 bg-gray-800"></div>
        <div className="relative flex flex-col items-center mr-4">
          <div className="w-6 h-6 border-gray-800 border-4 rounded-full z-10 bg-white"></div>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="대외활동 명을 작성해주세요."
            className="bg-gray-100 w-[80%] py-1 px-2 rounded-xl"
          />
          <ActivityItem className="w-[80%] mt-4" />
          <div className="flex flex-col mt-4">
            <span className="text-sm font-semibold mb-1">대외활동 기간</span>
            <div>
              <input
                type="date"
                className="bg-gray-100 w-40 py-1 px-2 rounded-xl"
              />{" "}
              ~{" "}
              <input
                type="date"
                className="bg-gray-100 w-40 py-1 px-2 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityForm;
