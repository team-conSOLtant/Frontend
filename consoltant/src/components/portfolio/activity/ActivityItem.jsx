import React, { useState } from 'react';
import ActivityItemDetail from './ActivityItemDetail.jsx';

function ActivityItem() {
  const [details, setDetails] = useState([{}]);

  const addDetail = () => {
    setDetails([...details, {}]);
  };

  const removeDetail = (index) => {
    const newDetails = details.filter((_, i) => i !== index);
    setDetails(newDetails);
  };

  return (
    <div className="text-[#444444] flex flex-col w-[60%]">
      <div className="relative flex items-start">
        <div className="absolute left-[10px] top-0 h-full w-1 bg-[#B9D5FF]"></div>
        <div className="relative flex flex-col items-center mr-4">
          <div className="w-6 h-6 border-[#B9D5FF] border-4 rounded-full z-10 bg-white"></div>
        </div>
        <div className="flex flex-col my-3 w-[90%]">
          <input
            type="text"
            placeholder="대외활동 명을 작성해주세요."
            className="text-lg py-1 px-2 font-semibold w-full bg-transparent"
            value={"SSAFY(10기)"}
            disabled
          />
          {details.map((_, index) => (
            <div key={index} className="flex-grow w-full items-center mb-2">
              <ActivityItemDetail />
            </div>
          ))}
          <div className="flex flex-col mt-2">
            <span className="text-sm font-semibold mb-1">대외활동 기간</span>
            <div className="text-base w-full">
              <input
                type="date"
                className="w-40 py-1 px-2 rounded-xl bg-transparent"
                value={"2024-12-12"}
                disabled
              />{" "}
              ~{" "}
              <input
                type="date"
                className="w-40 py-1 px-2 rounded-xl bg-transparent"
                value={"2024-12-12"}
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityItem;
