import React, { useEffect, useState, useRef } from "react";
import { Routes, Route, Router } from "react-router-dom";
import SearchItem from "../components/portfolio/makeportfolio/SearchItem.jsx";
import Navbar from "../components/header/Navbar.jsx";
import styled from "styled-components";
import { getSearch } from "../apis/Search.jsx";
import { useInView } from "react-intersection-observer";

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

function CompanySearchPage() {
  const [keyword, setKeyword] = useState(null);
  const [isEmployed, setIsEmployed] = useState(null);
  const [minGpa, setMinGpa] = useState(null);
  const [maxGpa, setMaxGpa] = useState(null);
  const [last, setLast] = useState();

  // const [cursor, setCursor] = useState();
  const [size, setSize] = useState(4);

  const [searchedList, setSearchedList] = useState([]);

  // const searchListRef = useRef(null);

  // 검색 하면 api 불러오기
  const goSearch = async (cursor) => {
    const search = await {
      keyword: keyword,
      isEmployed: isEmployed,
      minGpa: minGpa,
      maxGpa: maxGpa,
    };

    Search(search, cursor);
  };

  const Search = async (search, cursor) => {
    await console.log("search info ", search, "cursor : ", cursor);

    const response = await getSearch(
      cursor ? cursor : "",
      size ? size : "",
      search
    );
    console.log(response.result.content);
    console.log(response.result.last);
    setLast(response.result.last);
    // setSearchedList(response.result.content);
    setSearchedList((prevList) => [...prevList, ...response.result.content]);
  };

  const onEmploySelect = async (e) => {
    setSearchedList([]);
    await setIsEmployed(e.target.value);
    goSearch();
  };

  const onGpaSelect = async (e) => {
    const range = e.target.value.split("~");
    console.log(range);
    setSearchedList([]);
    await setMinGpa(range[0]);
    await setMaxGpa(range[1]);
    goSearch();
  };

  const activeEnter = async (e) => {
    if (e.key === "Enter") {
      setSearchedList([]);
      goSearch();
    }
  };

  useEffect(() => {
    goSearch();
  }, []);

  useEffect(() => {}, [
    setKeyword,
    setIsEmployed,
    setMinGpa,
    setMaxGpa,
    setSearchedList,
  ]);

  // 무한 스크롤 구현
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      console.log(inView, "무한 스크롤 요청");
      const lastIndex = searchedList.length - 1;

      if (!last) {
        console.log("cursor 1 ", searchedList[lastIndex].portfolioId);
        goSearch(searchedList[lastIndex].portfolioId);
      }
    }
  }, [inView]);

  return (
    <div>
      <Navbar />
      <SearchTitle>
        <SearchTitleTextDetail>기업용 포트폴리오 검색</SearchTitleTextDetail>
      </SearchTitle>

      <div className="flex justify-center items-center bg-[#F9FAFB] py-[3rem]">
        <div className="flex w-[60%] justify-between text-[1.3rem]">
          <div className="relative w-[60%] flex items-center">
            <input
              type="text"
              id=""
              name=""
              required
              placeholder="원하는 검색어를 입력하세요"
              className="w-[100%] h-[3rem] border border-[#9C9C9C] rounded px-[0.5rem] focus:outline-none"
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
              onKeyDown={(e) => activeEnter(e)}
            />
            <img
              className="absolute w-[2rem] right-[0.5rem]"
              src="/button/Search.svg"
              alt=""
            />
          </div>
          <select
            name=""
            id=""
            className="h-[3rem] w-[19.5%] border border-[#9C9C9C] rounded px-[0.5rem] focus:outline-none text-[#8F8F8F]"
            onChange={(e) => onEmploySelect(e)}
          >
            <option value="">취업여부</option>
            <option value={true}>예</option>
            <option value={false}>아니오</option>
          </select>
          <select
            name=""
            id=""
            className="h-[3rem] w-[19.5%] border border-[#9C9C9C] rounded px-[0.5rem] focus:outline-none text-[#8F8F8F]"
            onChange={(e) => {
              onGpaSelect(e);
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
      <div className="flex flex-col items-center overflow-auto h-[25rem]">
        {searchedList &&
          searchedList.map((portfolio, index) => {
            return (
              <SearchItem key={index} portfolio={portfolio} index={index} />
            );
          })}
        {searchedList.length > 0 && <div ref={ref}></div>}
      </div>
    </div>
  );
}

export default CompanySearchPage;
