import React, { useEffect, useState } from "react";
import { Routes, Route, Router } from "react-router-dom";
import SearchItem from "../components/portfolio/makeportfolio/SearchItem.jsx";
import Navbar from "../components/header/Navbar.jsx";
import styled from "styled-components";

// 검색하는 페이지
// PortfolioView(피그마에 있는 거) 페이지랑 그 밑의 검색창 없는 페이지랑 같은건가?
// 다현이한테 물어봐야함

const SearchTitle = styled.div`
  position: relative; /* 가상 요소가 상대적으로 위치할 수 있도록 설정 */
  display: flex;
  align-items: center;
  margin: 2rem;

  &::before {
    content: ""; /* 가상 요소가 렌더링되도록 content 속성을 비워둠 */
    display: inline-block; /* 네모 박스를 만들기 위해 inline-block으로 설정 */
    width: 1rem; /* 네모 박스의 너비 */
    height: 1rem; /* 네모 박스의 높이 */ /* 네모 박스의 색상 */
    border: 0.2rem solid #77a5ff;
    border-radius: 0.3rem;
    margin-right: 0.5rem; /* 네모 박스와 텍스트 사이의 간격 */
    vertical-align: middle; /* 텍스트와 네모 박스가 수평으로 맞춰지도록 설정 */
  }
`;

const SearchTitleTextDetail = styled.div`
  font-size: 1.3rem;
  font-family: "OneShinhanLight";
  display: flex;
  align-items: end;
`;
const SearchTitleUniv = styled.div`
  font-size: 1.2rem;
  font-family: "OneShinhanBold";
`;

function SearchPage() {
  const [keyword, setKeyword] = useState();
  const [isEmployed, setIsEmployed] = useState();
  const [minGpa, setMinGpa] = useState();
  const [maxGpa, setMaxGpa] = useState();

  // 검색 하면 api 불러오기
  const goSearch = () => {
    const search = {
      keyword: keyword,
      isEmployed: isEmployed,
      minGpa: minGpa,
      maxGpa: maxGpa,
    };
  };

  const onEmploySelect = (e) => {
    setIsEmployed(e.target.value);
    goSearch();
  };

  const onGpaSelect = (e) => {
    const range = e.target.value.split("~");
    setMinGpa(range[0]);
    setMaxGpa(range[1]);
    goSearch();
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      goSearch();
    }
  };

  useEffect(() => {}, [setKeyword, setIsEmployed, setMinGpa, setMaxGpa]);

  // 불러온 list map으로 뿌리기
  const portfolios = [{}];

  // 무한 스크롤 구현

  
  return (
    <div>
      <Navbar />
      <SearchTitle>
        <SearchTitleTextDetail>
          선후배 포트폴리오 검색_
          <SearchTitleUniv>신은대학교</SearchTitleUniv>
        </SearchTitleTextDetail>
      </SearchTitle>

      <div className="flex justify-center items-center bg-[#F9FAFB] py-[2rem]">
        <div className="flex w-[33rem] justify-between">
          <div className="relative flex items-center">
            <input
              type="text"
              id=""
              name=""
              required
              placeholder="원하는 검색어를 입력하세요"
              className="w-[18rem] h-[2.5rem] border border-[#9C9C9C] rounded px-[0.5rem] focus:outline-none"
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
              onKeyDown={(e) => activeEnter(e)}
            />
            <img
              className="absolute w-[1.5rem] right-[0.5rem]"
              src="/button/Search.svg"
              alt=""
            />
          </div>
          <select
            name=""
            id=""
            className="h-[2.5rem] border border-[#9C9C9C] rounded px-[0.5rem] focus:outline-none text-[#8F8F8F]"
            onChange={(e) => onEmploySelect(e)}
          >
            <option value="">취업여부</option>
            <option value={true}>예</option>
            <option value={false}>아니오</option>
          </select>
          <select
            name=""
            id=""
            className="h-[2.5rem] border border-[#9C9C9C] rounded px-[0.5rem] focus:outline-none text-[#8F8F8F]"
            onChange={(e) => {
              goSearch(e);
            }}
          >
            <option value="">학점</option>
            <option value="0.0~2.0">0.0 ~ 2.0</option>
            <option value="2.0~2.5">2.0 ~ 2.5</option>
            <option value="2.5~3.0">2.5 ~ 3.0</option>
            <option value="3.0~3.5">3.0 ~ 3.5</option>
            <option value="3.5~4.0">3.5 ~ 4.0</option>
            <option value="4.0~4.5">4.0 ~ 4.5</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col items-center">
        {/* <SearchItem /> */}
      </div>
    </div>
  );
}

export default SearchPage;
