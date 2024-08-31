import React, { useState, useEffect, useCallback } from "react";
import SearchItem from "../components/portfolio/makeportfolio/SearchItem.jsx";
import Navbar from "../components/header/Navbar.jsx";
import styled from "styled-components";
import { getSearch } from "../apis/Search.jsx";
import { useInView } from "react-intersection-observer";

const SearchTitle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 2rem;
  &::before {
    content: "";
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border: 0.2rem solid #77a5ff;
    border-radius: 0.3rem;
    margin-right: 0.5rem;
    vertical-align: middle;
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
  const [keyword, setKeyword] = useState("");
  const [isEmployed, setIsEmployed] = useState(null);
  const [minGpa, setMinGpa] = useState(null);
  const [maxGpa, setMaxGpa] = useState(null);
  const [last, setLast] = useState(false);
  const [size] = useState(4);
  const [searchedList, setSearchedList] = useState([]);

  // API 호출 함수
  const fetchSearchResults = useCallback(
    async (cursor = "") => {
      const searchParams = {
        keyword,
        isEmployed,
        minGpa,
        maxGpa,
      };
      const response = await getSearch(cursor, size, searchParams);
      if (response && response.result) {
        setLast(response.result.last);
        setSearchedList((prevList) => [
          ...prevList,
          ...response.result.content,
        ]);
      }
    },
    [keyword, isEmployed, minGpa, maxGpa, size]
  );

  useEffect(() => {
    fetchSearchResults();
  }, [fetchSearchResults]);

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
    setSearchedList([]);
  };

  const handleEmploySelect = (e) => {
    setIsEmployed(e.target.value);
    setSearchedList([]);
  };

  const handleGpaSelect = (e) => {
    const range = e.target.value.split("~");
    setMinGpa(range[0]);
    setMaxGpa(range[1]);
    setSearchedList([]);
  };

  // 무한 스크롤 구현
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && !last && searchedList.length > 0) {
      const lastIndex = searchedList.length - 1;
      fetchSearchResults(searchedList[lastIndex].portfolioId);
    }
  }, [inView, last, searchedList, fetchSearchResults]);

  useEffect(() => {
    fetchSearchResults(); // 상태가 변경될 때마다 새로운 검색 결과를 가져옴
  }, [keyword, isEmployed, minGpa, maxGpa]);

  return (
    <div>
      <Navbar />
      <SearchTitle>
        <SearchTitleTextDetail>
          선후배 포트폴리오 검색_
          <SearchTitleUniv>신은대학교</SearchTitleUniv>
        </SearchTitleTextDetail>
      </SearchTitle>

      <div className="flex justify-center items-center bg-[#F9FAFB] py-[3rem]">
        <div className="flex w-[60%] justify-between text-[1.3rem]">
          <div className="relative w-[60%] flex items-center">
            <input
              type="text"
              placeholder="원하는 검색어를 입력하세요"
              className="w-[100%] h-[3rem] border border-[#9C9C9C] rounded px-[0.5rem] focus:outline-none"
              value={keyword}
              onChange={handleKeywordChange}
            />
            <img
              className="absolute w-[2rem] right-[0.5rem]"
              src="/button/Search.svg"
              alt=""
            />
          </div>
          <select
            className="h-[3rem] w-[19.5%] border border-[#9C9C9C] rounded px-[0.5rem] focus:outline-none text-[#8F8F8F]"
            onChange={handleEmploySelect}
          >
            <option value="">취업여부</option>
            <option value={true}>예</option>
            <option value={false}>아니오</option>
          </select>
          <select
            className="h-[3rem] w-[19.5%] border border-[#9C9C9C] rounded px-[0.5rem] focus:outline-none text-[#8F8F8F]"
            onChange={handleGpaSelect}
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

export default SearchPage;
