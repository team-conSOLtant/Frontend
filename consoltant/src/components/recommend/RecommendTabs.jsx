import React, { useEffect, useState } from "react";
import RecommendItem from "./RecommendItem.jsx";

function RecommendTabs({ selectedItems, onItemClick, isKimSsafy }) {
  const [activeTab, setActiveTab] = useState("basicInfo");
  const [products, setProducts] = useState([]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (!isKimSsafy) {
      // 추천 로드맵 탭의 경우 상품 목록을 세팅
      var dddddd = [];
      if (activeTab === "deposit") {
        dddddd = [
          {
            id: 1,
            name: "예금 1",
            description: "이것은 상품 1입니다.",
            rate: 3.4,
          },
          {
            id: 2,
            name: "예금 2",
            description: "이것은 상품 2입니다.",
            rate: 3.4,
          },
          {
            id: 3,
            name: "예금 3",
            description: "이것은 상품 3입니다.",
            rate: 3.4,
          },
        ];
      } else if (activeTab === "savings") {
        dddddd = [
          {
            id: 1,
            name: "적금 1",
            description: "이것은 상품 1입니다.",
            rate: 3.4,
          },
          {
            id: 2,
            name: "적금 2",
            description: "이것은 상품 2입니다.",
            rate: 3.4,
          },
          {
            id: 3,
            name: "적금 3",
            description: "이것은 상품 3입니다.",
            rate: 3.4,
          },
        ];
      } else if (activeTab === "loan") {
        dddddd = [
          {
            id: 1,
            name: "대출 1",
            description: "이것은 상품 1입니다.",
            rate: 3.4,
          },
          {
            id: 2,
            name: "대출 2",
            description: "이것은 상품 2입니다.",
            rate: 3.4,
          },
          {
            id: 3,
            name: "대출 3",
            description: "이것은 상품 3입니다.",
            rate: 3.4,
          },
        ];
      }

      const items = dddddd.map((item) => (
        <RecommendItem
          key={item.id}
          item={item}
          onClick={() => onItemClick(item)} // 클릭 핸들러 호출
          isSelected={selectedItems.some(
            (selectedItem) => selectedItem.id === item.id
          )} // 선택 여부 전달
        />
      ));
      setProducts(items);
    } else {
      // 김싸피 탭의 경우 selectedItems만 표시
      const items = selectedItems.map((item) => (
        <RecommendItem
          key={item.id}
          item={item}
          isSelected={true} // 이미 선택된 항목들만 있으므로 true
        />
      ));
      setProducts(items);
    }
  }, [activeTab, selectedItems, isKimSsafy]);

  return (
    <div className="p-4">
      <div className="flex border-b-2 border-gray-200 mb-4">
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeTab === "basicInfo"
              ? "border-b-2 border-blue-500 font-bold"
              : ""
          }`}
          onClick={() => handleTabClick("basicInfo")}
        >
          기본정보
        </button>
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeTab === "deposit"
              ? "border-b-2 border-blue-500 font-bold"
              : ""
          }`}
          onClick={() => handleTabClick("deposit")}
        >
          예금
        </button>
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeTab === "savings"
              ? "border-b-2 border-blue-500 font-bold"
              : ""
          }`}
          onClick={() => handleTabClick("savings")}
        >
          적금
        </button>
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeTab === "loan" ? "border-b-2 border-blue-500 font-bold" : ""
          }`}
          onClick={() => handleTabClick("loan")}
        >
          대출
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "basicInfo" && (
          <div className="mx-[5%]">
            <p className="text-[#0046FF] text-sm">
              다음은 선배님들의 평균 값 입니다.
            </p>
            {/* 여기에 기본 정보를 표시 */}
          </div>
        )}
        {["deposit", "savings", "loan"].includes(activeTab) && (
          <div className="flex flex-col justify-center item-center mx-[5%]">
            <p className="pb-4 text-sm text-[#0046ff]">
              상품 클릭 시 고객님의 로드맵에 적용할 수 있습니다.
            </p>
            {products}
          </div>
        )}
      </div>
    </div>
  );
}

export default RecommendTabs;
