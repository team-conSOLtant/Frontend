import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import RecommendTabs from '../components/recommend/RecommendTabs.jsx';

// 금융 상품 추천 페이지
// 일단 한 개만 만들어놨는데 추후 금융 상품 추천에 대한 계획이 구체화되면 늘릴 수도 있음

function RecommendPage() {
  return <div>
    <div className="flex">
      <div className="flex flex-col">
        <div>
          <div>추천 로드맵</div>
          <div>고객님의 포트폴리오 학생 데이터를 활용하여 추천한 선배님들의 평균 금융 로드맵 입니다.</div>
        </div>
        <div>{/* 그래프 */}</div>
        <div>{/* 기본정보, 예금, 적금, 대출 */}
          <RecommendTabs />
        </div>
      </div>
      <div className="flex flex-col">
        <div>
          <div>김싸피님의 예상 로드맵</div>
          <div>추천 로드맵의 금융 상품 중 신한은행 금융 상품과 유사한 상품을 매칭하여 제공해드립니다.</div>
        </div>
        <div>{/* 그래프 */}</div>
        <div>{/* 기본정보, 예금, 적금, 대출 */}</div>
      </div>
    </div>
  </div>;
}

export default RecommendPage;