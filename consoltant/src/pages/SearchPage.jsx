import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import SearchItem from "../components/portfolio/SearchItem.jsx";

// 검색하는 페이지
// PortfolioView(피그마에 있는 거) 페이지랑 그 밑의 검색창 없는 페이지랑 같은건가?
// 다현이한테 물어봐야함
function SearchPage() {
  return <div>
    <SearchItem />
  </div>;
}

export default SearchPage;
