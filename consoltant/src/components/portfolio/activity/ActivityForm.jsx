import React, { useState } from "react";
import ActivityFormDetail from "./ActivityFormDetail.jsx";

function ActivityForm({ submitForm }) {
  const [details, setDetails] = useState([{ role: "", description: "" }]);

  // const addDetail = () => {
  //   setDetails([...details, { role: "", description: "" }]);
  // };

  const removeDetail = (index) => {
    const newDetails = details.filter((_, i) => i !== index);
    setDetails(newDetails);
  };

  const updateDetail = (index, newDetail) => {
    const newDetails = [...details];
    newDetails[index] = newDetail;
    setDetails(newDetails);
  };

  console.log(details);

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
            className="bg-gray-100 py-1 px-2 rounded-xl"
          />
          {details.map((detail, index) => (
            <div key={index} className="flex items-center mt-4">
              <div className="flex-grow">
                <ActivityFormDetail
                  detail={detail}
                  onDetailChange={(newDetail) => updateDetail(index, newDetail)}
                />
              </div>
              <button
                type="button"
                className="ml-2 p-1 text-red-500 bg-gray-100 rounded-lg"
                onClick={() => removeDetail(index)}
              >
                삭제
              </button>
            </div>
          ))}

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
          <button
            type="button"
            className="mt-4 p-2 bg-blue-500 text-white rounded-xl"
            onClick={submitForm}
          >
            제출
          </button>
        </div>
      </div>
    </div>
  );
}

export default ActivityForm;
