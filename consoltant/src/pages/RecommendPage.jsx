import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import RecommendTabs from '../components/recommend/RecommendTabs.jsx';
import RecommendGraph from '../components/recommend/RecommendGraph.jsx';

// 금융 상품 추천 페이지
// 일단 한 개만 만들어놨는데 추후 금융 상품 추천에 대한 계획이 구체화되면 늘릴 수도 있음

function RecommendPage() {
  return <div>
    <div className="flex justify-center">
      <div className="flex flex-col mr-24">
        <div className="flex flex-col mb-10">
          <div className="text-2xl mb-2 text-[#0046ff] font-semibold">추천 로드맵</div>
          <div className="text-sm">고객님의 포트폴리오 학생 데이터를 활용하여 추천한 선배님들의 평균 금융 로드맵 입니다.</div>
        </div>
        <div className="mb-4">{/* 그래프 */}
          <RecommendGraph />
        </div>
        <div>{/* 기본정보, 예금, 적금, 대출 */}
          <RecommendTabs />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col mb-10">
          <div className="text-2xl mb-2 text-[#0046ff] font-semibold">김싸피님의 예상 로드맵</div>
          <div className="text-sm">추천 로드맵의 금융 상품 중 신한은행 금융 상품과 유사한 상품을 매칭하여 제공해드립니다.</div>
        </div>
        <div className="mb-4">{/* 그래프 */}
          <RecommendGraph />
        </div>
        <div>{/* 기본정보, 예금, 적금, 대출 */}
          <RecommendTabs />
        </div>
      </div>
    </div>
  </div>;
}

export default RecommendPage;