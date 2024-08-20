import react from "react";
import ActivityItem from "./ActivityItem.jsx";

function ActivityFrom() {
  return (
    <div className="text-[#444444]">
      <div></div>
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="대외활동 명을 작성해주세요."
          className="bg-gray-100 w-[80%] py-1 px-2 rounded-xl"
        />
        <ActivityItem />
        <div className="flex flex-col">
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
  );
}

export default ActivityFrom;
