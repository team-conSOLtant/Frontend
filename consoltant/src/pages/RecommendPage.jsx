import React, { useState } from "react";
import Navbar from "../components/header/Navbar.jsx";
import RecommendGraph from "../components/recommend/RecommendGraph.jsx";
import RecommendTabs from "../components/recommend/RecommendTabs.jsx";

function RecommendPage() {
  const [selectedItems, setSelectedItems] = useState({
    deposit: [],
    savings: [],
    loan: [],
  });

  const [checkedItems, setCheckedItems] = useState({
    deposit: [],
    savings: [],
    loan: [],
  });

  // 아이템 선택 시 호출되는 함수
  const handleItemClick = (item, tab) => {
    const itemsInTab = selectedItems[tab] || [];
    if (itemsInTab.some((selectedItem) => selectedItem.id === item.id)) {
      setSelectedItems({
        ...selectedItems,
        [tab]: itemsInTab.filter((selectedItem) => selectedItem.id !== item.id),
      });
    } else {
      setSelectedItems({
        ...selectedItems,
        [tab]: [...itemsInTab, item],
      });
    }
  };

  // 체크박스 변경 시 호출되는 함수
  const handleCheckboxChange = (item, tab, isChecked) => {
    const itemsInTab = checkedItems[tab] || [];
    if (isChecked) {
      setCheckedItems({
        ...checkedItems,
        [tab]: [...itemsInTab, item],
      });
    } else {
      setCheckedItems({
        ...checkedItems,
        [tab]: itemsInTab.filter((checkedItem) => checkedItem.id !== item.id),
      });
    }
  };

  // 담아두기 버튼 클릭 시 처리할 함수
  const handleSave = () => {
    console.log("선택된 예금 상품들:", checkedItems.deposit);
    console.log("선택된 적금 상품들:", checkedItems.savings);
    console.log("선택된 대출 상품들:", checkedItems.loan);
    // 선택된 상품들을 저장하거나 처리하는 로직 추가
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
            <RecommendGraph />
          </div>
          <div>
            <RecommendTabs
              selectedItems={selectedItems}
              onItemClick={handleItemClick}
              onCheckboxChange={handleCheckboxChange} // 체크박스 상태 변경 핸들러 전달
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
            <RecommendGraph />
          </div>
          <div>
            <RecommendTabs
              selectedItems={selectedItems}
              onItemClick={handleItemClick}
              onCheckboxChange={handleCheckboxChange} // 체크박스 상태 변경 핸들러 전달
              isKimSsafy={true}
            />
          </div>
          <div className="flex justify-end pr-[10%]">
            <button
              className="text-base bg-amber-300 text-white font-semibold p-2 rounded-lg hover:bg-gray-400"
              onClick={handleSave} // 담아두기 버튼 클릭 시 함수 호출
            >
              담아두기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendPage;
