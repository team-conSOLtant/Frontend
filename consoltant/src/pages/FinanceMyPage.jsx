import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import RecommendTabs from '../components/recommend/RecommendTabs.jsx';
import RecommendGraph from '../components/recommend/RecommendGraph.jsx';

// 금융 상품 추천 페이지
// 일단 한 개만 만들어놨는데 추후 금융 상품 추천에 대한 계획이 구체화되면 늘릴 수도 있음

function FinanceMyPage() {
  return <div>
    <div className="flex justify-center px-[10%]">
      <div className="flex flex-col w-full">
        <div className="flex flex-col mb-10">
          <div className="text-2xl mb-2 text-[#0046ff] font-semibold">김싸피님의 예상 로드맵</div>
          <div className="text-sm text-[#444444]">추천 로드맵의 금융 상품 중 신한은행 금융 상품과 유사한 상품을 매칭하여 제공해드립니다.</div>
        </div>
        <div className="flex">
          <div className="mb-4 w-[60%]">{/* 그래프 */}
            <RecommendGraph style={{ width: '100%', height: 'auto' }}/>
          </div>
          <div className="mb-4 w-[40%]">{/* 기본정보, 예금, 적금, 대출, 담아두기 */}
            <RecommendTabs />
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default FinanceMyPage;