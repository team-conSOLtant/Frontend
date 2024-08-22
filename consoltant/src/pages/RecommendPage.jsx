import React, { useState } from "react";
import Navbar from "../components/header/Navbar.jsx";
import RecommendGraph from "../components/recommend/RecommendGraph.jsx";
import RecommendTabs from "../components/recommend/RecommendTabs.jsx";

function RecommendPage() {
  const [selectedItems, setSelectedItems] = useState([]); // 선택된 아이템들을 관리하는 상태 추가

  // 아이템 선택 시 호출되는 함수
  const handleItemClick = (item) => {
    if (selectedItems.some((selectedItem) => selectedItem.id === item.id)) {
      // 이미 선택된 아이템이면 해제
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem.id !== item.id)
      );
    } else {
      // 선택되지 않은 아이템이면 추가
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center text-[#444444] mt-10">
        <div className="flex flex-col mr-24">
          <div className="flex flex-col mb-10">
            <div className="text-2xl mb-2 text-[#0046ff] font-semibold">
              추천 로드맵
            </div>
            <div className="text-sm">
              고객님의 포트폴리오 학생 데이터를 활용하여 추천한 선배님들의 평균
              금융 로드맵 입니다.
            </div>
          </div>
          <div className="mb-4">
            {/* 그래프 */}
            <RecommendGraph />
          </div>
          <div>
            {/* 기본정보, 예금, 적금, 대출 */}
            <RecommendTabs
              selectedItems={selectedItems}
              onItemClick={handleItemClick} // 아이템 클릭 핸들러 전달
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col mb-10">
            <div className="text-2xl mb-2 text-[#0046ff] font-semibold">
              김싸피님의 예상 로드맵
            </div>
            <div className="text-sm">
              추천 로드맵의 금융 상품 중 신한은행 금융 상품과 유사한 상품을
              매칭하여 제공해드립니다.
            </div>
          </div>
          <div className="mb-4">
            {/* 그래프 */}
            <RecommendGraph />
          </div>
          <div>
            {/* 기본정보, 예금, 적금, 대출 */}
            <RecommendTabs
              selectedItems={selectedItems} // 선택된 아이템들만 전달
              onItemClick={() => {}} // 클릭 기능은 필요 없으므로 빈 함수 전달
              isKimSsafy={true} // 김싸피 탭임을 나타내기 위한 prop 전달
            />
          </div>
          <div>
            <button className="text-base bg-amber-300 text-white font-semibold p-2 rounded-lg hover:bg-gray-400">
              담아두기
            </button>
          </div>
        </div>
      </div>
      {/* <MyFinanceGraph /> */}
    </div>
  );
}

export default RecommendPage;
