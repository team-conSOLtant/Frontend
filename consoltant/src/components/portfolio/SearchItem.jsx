import React from "react";

function SearchItem (){
  return (
    <div className="flex flex-col ">
      <hr />
      <div className="flex">
        <div className="flex flex-col justify-center w-[20%]">
          <div className="text-2xl">Ko Dahyun</div>
          <div className="text-xl">Backend Developer</div>
          <div>1</div>
        </div>
        <div className="w-[40%]">
          <div className="flex">
            <div className="w-24">학력</div>
            <p className="flex flex-col">
              <span>신은대학교</span>
              <span>컴퓨터공학과</span>
              <span><span>3.7</span> / 4.5 </span>
            </p>
          </div>
          <div className="flex">
            <div className="w-24">경력</div>
            <p>Google Korea 인턴</p>
          </div>
          <div className="flex">
            <div className="w-24">Keyword</div>
            <ul>
              <li>성실함</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-[40%]">
          <div className="flex">
            <div className="w-24">수상</div>
            <p><span>4</span>건</p>
          </div>
          <div className="flex">
            <div className="w-24">자격증</div>
            <p><span>4</span>건</p>
          </div>
          <div className="flex">
            <div className="w-24">프로젝트</div>
            <p><span>4</span>건</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchItem;