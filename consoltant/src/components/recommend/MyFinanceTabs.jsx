import React, { useState, useEffect } from "react";
import MyFinanceItem from "./MyFinanceItem.jsx";

function RecommendTabs() {
  // 현재 선택된 탭을 관리하는 상태
  const [activeTab, setActiveTab] = useState("basicInfo");
  const [products, setProducts] = useState([]);

  // 탭을 클릭했을 때 호출되는 함수
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    var dddddd = [];
    if (activeTab == "deposit") {
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
    } else if (activeTab == "savings") {
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
    } else if (activeTab == "loan") {
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
    } else if (activeTab == "savedProduct") {
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

    const items = dddddd.map((item) => <MyFinanceItem item={item} />);
    setProducts(items);
  });

  const recommendInfo = {
    career: 500,
    capitalTendency: "대확행",
    initialCapital: 1000,
    currentCapital: 5000000,
    period: 10,
  };

  return (
    <div className="p-4">
      {/* 탭 버튼들 */}
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
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeTab === "savedProduct"
              ? "border-b-2 border-blue-500 font-bold"
              : ""
          }`}
          onClick={() => handleTabClick("savedProduct")}
        >
          담아둔 상품
        </button>
      </div>

      {/* 선택된 탭에 따라 다른 내용 표시 */}
      <div className="tab-content">
        {activeTab === "basicInfo" && (
          <div className="mx-[7%]">
            <div className="flex flex-col ">
              <div className="flex justify-between mb-3">
                <div>월급</div>
                <div>
                  <span>{recommendInfo.career}</span>
                  <span className="">만원</span>
                </div>
              </div>
              <div className="flex justify-between mb-3">
                <div>성향</div>
                <div>
                  <span>{recommendInfo.capitalTendency}</span>
                </div>
              </div>
              <div className="flex justify-between mb-3">
                <div>초기자본</div>
                <div>
                  <span>{recommendInfo.initialCapital}</span>
                  <span>만원</span>
                </div>
              </div>
              <div className="flex justify-between mb-3">
                <div>현 자본</div>
                <div>
                  <span>{recommendInfo.currentCapital}</span>
                  <span>만원</span>
                </div>
              </div>
              <div className="flex justify-between mb-3">
                <div>기간</div>
                <div>
                  <span>10</span>
                  <span>년</span>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "deposit" && (
          <div>
            <div className="flex flex-col justify-center item-center mx-[5%]">
              {products}
            </div>
          </div>
        )}
        {activeTab === "savings" && (
          <div>
            <div className="flex flex-col justify-center item-center mx-[5%]">
              {products}
            </div>
          </div>
        )}
        {activeTab === "loan" && (
          <div>
            <div className="flex flex-col justify-center item-center mx-[5%]">
              {products}
            </div>
          </div>
        )}
        {activeTab === "savedProduct" && (
          <div>
            <div className="flex flex-col justify-center item-center mx-[5%]">
              {products}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecommendTabs;
