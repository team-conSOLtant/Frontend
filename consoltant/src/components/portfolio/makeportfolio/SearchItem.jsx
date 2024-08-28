import React from "react";
import { useNavigate } from "react-router";

function SearchItem({ portfolio, index }) {
  const keywordList = portfolio.myKeyword.split(",");
  const navigate = useNavigate()
  return (
    <div className="scale-90 relative flex flex-col justify-center items-center text-[#444444] w-[100%]">
      {/* <hr className="w-[64%]" /> */}
      <img onClick={()=>navigate("/portfolio")} className="absolute cursor-pointer w-[1.8rem] right-[8rem] top-[0]" src="/button/Detail.svg" alt="" />
      <div className="flex w-[70%] px-[2%] justify-between relative py-3">
        <div className="flex flex-col justify-center w-[25%]">
          <div className="text-2xl relative font-semibold">
            {portfolio.userName}
          </div>
          <div className="text-xl relative">{portfolio.job}</div>
          <div className="flex absolute bottom-0">{index + 1}.</div>
        </div>
        <div className="w-[40%] mr-10 justify-arounds">
          <div className="flex justify-between">
            <div className="w-24 font-semibold">학력</div>
            <p className="flex flex-col text-end">
              <span className="text-base">{portfolio.universityName}</span>
              <span className="font-semibold text-xl">{portfolio.major}</span>
              <span>
                <span className="font-semibold text-xl">
                  {portfolio.majorGpa}
                </span>
                / 4.5
              </span>
            </p>
          </div>
          <div className="flex justify-between my-[0.5rem]">
            <div className="w-24 font-semibold">경력</div>
            <p className="text-end">Google Korea 인턴</p>
          </div>
          <div className="flex justify-between">
            <div className="w-24 font-semibold">Keyword</div>
            <div className="flex justify-end">
              {keywordList &&
                keywordList.map((keyword, index) => {
                  return (
                    <div
                      key={index}
                      className="py-1 px-2 mx-[0.2rem] bg-yellow-200 rounded-xl text-sm font-bold"
                    >
                      {keyword}
                    </div>
                  );
                })}
            </div>
            
          </div>
        </div>
        <div className="flex flex-col w-[25%] justify-between">
          <div className="flex justify-between">
            <div className="w-24 font-semibold">수상</div>
            <p>
              <span className="font-semibold text-lg">
                {portfolio.awardCount}
              </span>
              건
            </p>
          </div>
          <div className="flex justify-between">
            <div className="w-24 font-semibold">자격증</div>
            <p>
              <span className="font-semibold text-lg">
                {portfolio.certificationCount}
              </span>
              건
            </p>
          </div>
          <div className="flex justify-between">
            <div className="w-24 font-semibold">프로젝트</div>
            <p>
              <span className="font-semibold text-lg">
                {portfolio.projectCount}
              </span>
              건
            </p>
          </div>
        </div>
      </div>
      <hr className="w-[80%] my-[1rem]" />
    </div>
  );
}

export default SearchItem;
