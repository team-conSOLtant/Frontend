import React, { useState, useEffect } from "react";
import MyFinanceItem from "./MyFinanceItem.jsx";
import { useNavigate } from "react-router";

function RecommendTabs({ financeProducts, info, age }) {
  const [activeTab, setActiveTab] = useState("basicInfo");
  const [products, setProducts] = useState([]);
  const [selectedAge, setSelectedAge] = useState(""); // 선택된 나이 상태
  const [allAges, setAllAges] = useState([]); // 모든 나이 값을 저장하는 상태
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleAgeChange = (e) => {
    setSelectedAge(e.target.value); // 선택된 나이 업데이트
  };

  useEffect(() => {
    setAllAges(age); // 모든 나이 값을 상태로 설정
  }, [financeProducts]);

  useEffect(() => {
    let pfinance = [];
    const productTypes = {
      deposit: "deposit",
      saving: "saving",
      loan: "loan",
      savedProduct: "recommend",
    };

    if (productTypes[activeTab]) {
      const products = financeProducts[productTypes[activeTab]];

      console.log(selectedAge);
      for (let p in products) {
        const product = products[p];
        console.log(product);
        if (product.age == selectedAge || selectedAge === "") {
          console.log("in");
          // 나이에 따른 필터링
          pfinance.push({
            id: activeTab + p,
            uniqueNo: product.accountTypeUniqueNo,
            bankName: product.bankName,
            accountName: product.accountName,
            accountDescription: product.accountDescription,
            interestRate: product.interestRate,
            subscriptionPeriod: product.subscriptionPeriod,
            minSubscriptionBalance:
              product.minSubscriptionBalance || product.minLoanBalance,
            maxSubscriptionBalance:
              product.maxSubscriptionBalance || product.maxLoanBalance,
            age: product.age,
            balance: product.balance,
            startDate: product.startDate,
            endDate: product.endDate,
          });
        }
      }
    }

    const items = pfinance.map((item) => (
      <MyFinanceItem key={item.id} item={item} />
    ));
    setProducts(items);
  }, [activeTab, financeProducts, selectedAge]);

  const recommendInfo = {
    salary: info.salary,
    financeKeyword: info.financeKeyword,
    startAsset: info.startAsset,
    presentAsset: info.presentAsset,
    period: info.period,
  };

  return (
    <div className="p-4">
      {/* 나이 선택 드롭다운 */}
      <div className="mb-4">
        <label htmlFor="ageSelect" className="mr-2">
          나이 선택:
        </label>
        <select
          id="ageSelect"
          value={selectedAge}
          onChange={handleAgeChange}
          className="border border-gray-300 rounded px-2 py-1"
        >
          <option value="">전체</option>
          {allAges.map((age) => (
            <option key={age} value={age}>
              {age}
            </option>
          ))}
        </select>
      </div>

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
            activeTab === "saving" ? "border-b-2 border-blue-500 font-bold" : ""
          }`}
          onClick={() => handleTabClick("saving")}
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
      <div className="tab-content overflow-scroll h-[25rem]">
        {activeTab === "basicInfo" && (
          <div className="mx-[7%]">
            <div className="flex flex-col text-lg text-[#444444] font-bold">
              {/* 기본정보 내용 */}
              <div className="flex justify-between mb-3">
                <div className="font-bold text-[#444444]">월급</div>
                <div className="text-[#656F77]">
                  <span>{recommendInfo.salary} </span>
                  <span className="">원</span>
                </div>
              </div>
              <div className="flex justify-between mb-3 items-center">
                <div className="font-bold text-[#444444]">성향</div>
                <div className="text-[#444444] py-1 px-3 rounded-lg bg-indigo-200">
                  <span>{recommendInfo.financeKeyword} </span>
                </div>
              </div>
              <div className="flex justify-between mb-3">
                <div className="font-bold text-[#444444]">초기자본</div>
                <div className="text-[#656F77]">
                  <span>{recommendInfo.startAsset} </span>
                  <span>원</span>
                </div>
              </div>
              <div className="flex justify-between mb-3">
                <div className="font-bold text-[#444444]">현 자본</div>
                <div className="text-[#656F77]">
                  <span>{recommendInfo.presentAsset} </span>
                  <span>원</span>
                </div>
              </div>
              <div className="flex justify-between mb-3">
                <div className="font-bold text-[#444444]">기간</div>
                <div className="text-[#656F77]">
                  <span>{recommendInfo.period} </span>
                  <span>년</span>
                </div>
              </div>
              <div
                className="mt-10 text-[#444444] bg-[#f9f9f9] w-full h-[10rem] rounded-2xl shadow-xl flex items-center justify-start pl-6 cursor-pointer hover:bg-[#0046ff] hover:text-[#f9f9f9]"
                onClick={() => {
                  navigate("/recommend");
                }}
              >
                <img src="/main/chart.png" alt="" className="w-28 mr-5" />
                <div>
                  <p className="md:text-2xl lg:text-xl ">
                    로드맵 추천 받으러 가기
                  </p>
                  <p className="text-base font-light my-2 justify-start flex">
                    어려운 자산관리, <br /> 모법 금융 로드맵 알려드릴게요
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {["deposit", "saving", "loan", "savedProduct"].includes(activeTab) && (
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
