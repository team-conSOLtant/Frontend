import React from "react";

function SearchItem({ portfolioInfo }) {
  return (
    <div className="flex flex-col justify-center items-center text-[#444444] w-[100%]">
      {/* <hr className="w-[64%]" /> */}
      <div className="flex w-[70%] px-[2%] justify-between relative py-3">
        <div className="flex flex-col justify-center w-[25%]">
          <div className="text-2xl relative font-semibold">Ko Dahyun</div>
          <div className="text-xl relative">Backend Developer</div>
          <div className="flex absolute bottom-0">1.</div>
        </div>
        <div className="w-[40%] mr-10 justify-arounds">
          <div className="flex justify-between">
            <div className="w-24 font-semibold">학력</div>
            <p className="flex flex-col text-end">
              <span className="text-base">신은대학교</span>
              <span className="font-semibold text-xl">컴퓨터공학과</span>
              <span>
                <span className="font-semibold text-xl">3.7</span> / 4.5{" "}
              </span>
            </p>
          </div>
          <div className="flex justify-between">
            <div className="w-24 font-semibold">경력</div>
            <p className="text-end">Google Korea 인턴</p>
          </div>
          <div className="flex justify-between">
            <div className="w-24 font-semibold">Keyword</div>
            <ul className="text-end">
              <li className="py-1 px-2 bg-yellow-200 rounded-xl text-sm font-bold">성실함</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-[25%] justify-between">
          <div className="flex justify-between">
            <div className="w-24 font-semibold">수상</div>
            <p>
              <span className="font-semibold text-lg">4</span>건
            </p>
          </div>
          <div className="flex justify-between">
            <div className="w-24 font-semibold">자격증</div>
            <p>
              <span className="font-semibold text-lg">4</span>건
            </p>
          </div>
          <div className="flex justify-between">
            <div className="w-24 font-semibold">프로젝트</div>
            <p>
              <span className="font-semibold text-lg">4</span>건
            </p>
          </div>
        </div>
      </div>
      <hr className="w-[70%] my-[1rem]" />
    </div>
  );
}

export default SearchItem;
