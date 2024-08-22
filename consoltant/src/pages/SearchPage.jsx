import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import SearchItem from "../components/portfolio/makeportfolio/SearchItem.jsx";
import ActivityFrom from "../components/portfolio/activity/ActivityForm.jsx";
import ActivityItem from "../components/portfolio/activity/ActivityItem.jsx";

// 검색하는 페이지
// PortfolioView(피그마에 있는 거) 페이지랑 그 밑의 검색창 없는 페이지랑 같은건가?
// 다현이한테 물어봐야함
function SearchPage() {
  return (
    <div>
      <h1>SearchPage</h1>
      <div>
        <input
          id=""
          name=""
          required
          placeholder="원하는 검색어를 입력하세요"
          className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
        />
        <button
          type="button"
          className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Subscribe
        </button>
      </div>
      <SearchItem />
      <ActivityFrom />
      <ActivityItem />
    </div>
  );
}

export default SearchPage;
