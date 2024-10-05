import React, { useState, useEffect } from "react";
import MyFinanceItem from "./MyFinanceItem.jsx";
import { useNavigate } from "react-router";

function RecommendTabs({
    financeProducts,
    info,
  }) {
  // 현재 선택된 탭을 관리하는 상태
  const [activeTab, setActiveTab] = useState("basicInfo");
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // 탭을 클릭했을 때 호출되는 함수
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    let pfinance = [];
    const productTypes = {
      deposit: "deposit",
      savings: "saving",
      loan: "loan",
      savedProduct: "recommend",
    };

    if (productTypes[activeTab]) {
      const products = financeProducts[productTypes[activeTab]];
      
      for (let p in products) {
        const product = products[p].productInfo || products[p];
        
        pfinance.push({
          id: product.accountTypeUniqueNo,
          bankName: product.bankName,
          accountName: product.accountName,
          accountDescription: product.accountDescription,
          interestRate: product.interestRate,
          subscriptionPeriod: product.subscriptionPeriod,
          minSubscriptionBalance: product.minSubscriptionBalance || product.minLoanBalance,
          maxSubscriptionBalance: product.maxSubscriptionBalance || product.maxLoanBalance,
        });
      }
    }

    const items = pfinance.map((item) => <MyFinanceItem item={item} />);
    setProducts(items);
  },[]);

  const recommendInfo = {
    salary: info.salary,
    financeKeyword: info.financeKeyword,
    startAsset: info.startAsset,
    presentAsset: info.presentAsset,
    period: info.period,
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
            <div className="flex flex-col text-lg text-[#444444] font-bold">
              <div className="flex justify-between mb-3">
                <div className="font-bold text-[#444444]">월급</div>
                <div className="text-[#656F77]">
                  <span>{recommendInfo.salary}{" "}</span>
                  <span className="">만원</span>
                </div>
              </div>
              <div className="flex justify-between mb-3 items-center">
                <div className="font-bold text-[#444444]">성향</div>
                <div className="text-[#444444] py-1 px-3 rounded-lg bg-indigo-200">
                  <span>{recommendInfo.financeKeyword}{" "}</span>
                </div>
              </div>
              <div className="flex justify-between mb-3">
                <div className="font-bold text-[#444444]">초기자본</div>
                <div className="text-[#656F77]">
                  <span>{recommendInfo.startAsset}{" "}</span>
                  <span>원</span>
                </div>
              </div>
              <div className="flex justify-between mb-3">
                <div className="font-bold text-[#444444]">현 자본</div>
                <div className="text-[#656F77]">
                  <span>{recommendInfo.presentAsset}{" "}</span>
                  <span>원</span>
                </div>
              </div>
              <div className="flex justify-between mb-3">
                <div className="font-bold text-[#444444]">기간</div>
                <div className="text-[#656F77]">
                  <span>{recommendInfo.period}</span>
                  <span>년</span>
                </div>
              </div>
              <div 
                className="mt-10 text-[#444444] bg-[#f9f9f9] w-full h-[10rem] rounded-2xl shadow-xl flex items-center justify-start pl-6 cursor-pointer hover:bg-[#0046ff] hover:text-[#f9f9f9]"
                onClick={()=>{navigate("/recommend")}}
              >
                <img src="/main/chart.png" alt="" className="w-28 mr-5" />
                <div>
                  <p className="text-2xl ">
                    로드맵 추천 받으러 가기
                  </p>
                  <p className="text-base font-light my-2 justify-start flex">어려운 자산관리, <br /> 모법 금융 로드맵 알려드릴게요</p>
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
