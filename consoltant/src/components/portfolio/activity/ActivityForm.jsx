import React, { useState } from "react";

function ActivityForm({ data, submitForm, updateForm }) {
  const _changeTitle = (value) => {
    updateForm({ ...data, title: value });
  };
  const _changeContent = (value) => {
    updateForm({ ...data, content: value });
  };
  const _changeContentTitle = (value) => {
    updateForm({ ...data, contentTitle: value });
  };
  const _changeStartDate = (value) => {
    updateForm({ ...data, startDate: value });
  };
  const _changeEndDate = (value) => {
    updateForm({ ...data, endDate: value });
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
            className="bg-gray-100 py-1 px-2 rounded-xl"
            value={data.title}
            onChange={(e) => _changeTitle(e.target.value)}
          />
          <div className="flex items-center mt-4">
            <div className="flex-grow">
              <div className="flex my-2">
                <div className="w-5 h-5 flex justify-center items-center bg-[#D9D9D9] rounded-[5px] m-2"></div>
                <div className="flex flex-col w-full">
                  <input
                    type="text"
                    placeholder="대외활동에 대한 설명을 적어주세요"
                    className="w-full py-1 px-2 rounded-xl bg-gray-100"
                    value={data.contentTitle}
                    onChange={(e) => _changeContentTitle(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="자신이 한일에 대해서 자세히 작성해주세요"
                    className="w-full py-1 px-2 rounded-xl mt-2 bg-gray-100"
                    value={data.content}
                    onChange={(e) => _changeContent(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <span className="text-sm font-semibold mb-1">대외활동 기간</span>
            <div>
              <input
                type="date"
                className="bg-gray-100 w-40 py-1 px-2 rounded-xl"
                value={data.startDate}
                onChange={(e) => _changeStartDate(e.target.value)}
              />{" "}
              ~{" "}
              <input
                type="date"
                className="bg-gray-100 w-40 py-1 px-2 rounded-xl"
                value={data.endDate}
                onChange={(e) => _changeEndDate(e.target.value)}
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
