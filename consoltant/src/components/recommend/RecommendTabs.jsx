import React, { useEffect, useState } from "react";
import RecommendItem from "./RecommendItem.jsx";

function RecommendTabs({
  financeProducts,
  info,
  selectedItems,
  onItemClick,
  isKimSsafy,
  onCheckboxChange,
  age,
}) {
  const [activeTab, setActiveTab] = useState("basicInfo");
  const [products, setProducts] = useState([]);
  const [selectedAge, setSelectedAge] = useState("");
  const [allAges, setAllAges] = useState([]);

  const [checkedItems, setCheckedItems] = useState({
    deposit: {},
    savings: {},
    loan: {},
  }); // 탭별로 체크박스 상태를 관리하는 상태

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleAgeChange = (e) => {
    setSelectedAge(e.target.value); // 선택된 나이 업데이트
  };

  useEffect(() => {
    setAllAges(age); // 모든 나이 값을 상태로 설정
  }, [financeProducts]);

  const handleCheckboxChange = (item, checked) => {
    setCheckedItems((prev) => ({
      ...prev,
      [activeTab]: {
        ...prev[activeTab],
        [item.id]: checked,
      },
    }));
    onCheckboxChange(item, activeTab, checked); // 부모에서 받은 핸들러 호출
  };

  const recommendInfo = {
    salary: info.salary,
    financeKeyword: info.financeKeyword,
    startAsset: info.startAsset,
    presentAsset: info.presentAsset,
    period: info.period,
  };

  useEffect(() => {
    if (!isKimSsafy) {
      // 추천 로드맵 탭의 경우 상품 목록을 세팅
      let pfinance = [];
      const productTypes = {
        deposit: "deposit",
        saving: "saving",
        loan: "loan",
      };

      if (productTypes[activeTab]) {
        const products = financeProducts[productTypes[activeTab]];

        console.log(selectedAge);

        for (let p in products) {
          const product = products[p];
          console.log(product);
          if (product.age == selectedAge || selectedAge === "") {
            pfinance.push({
              id: activeTab + p,
              accountTypeUniqueNo: product.accountTypeUniqueNo,
              bankName: product.bankName,
              accountTypeName: product.accountTypeName,
              accountName: product.accountName,
              accountDescription: product.accountDescription,
              interestRate: product.interestRate,
              subscriptionPeriod: product.subscriptionPeriod,
              minSubscriptionBalance: product.minSubscriptionBalance || product.minLoanBalance,
              maxSubscriptionBalance: product.maxSubscriptionBalance || product.maxLoanBalance,
              age: product.age,
              balance: product.balance,
              startDate: product.startDate,
              endDate: product.endDate,
            });
          }
        }
      }

      const items = pfinance.map((item) => (
        <RecommendItem
          key={item.id}
          item={item}
          onClick={() => onItemClick(item, activeTab)} // 클릭 핸들러에 탭 정보도 전달
          isSelected={selectedItems[activeTab]?.some((selectedItem) => selectedItem.id === item.id)} // 선택 여부 전달
          isKimSsafy={isKimSsafy} // isKimSsafy prop 전달
          isChecked={checkedItems[activeTab]?.[item.id] || false} // 탭별로 체크박스 상태 전달
          onCheckboxChange={handleCheckboxChange} // 체크박스 상태 변경 핸들러 전달
        />
      ));
      setProducts(items);
    } else {
      // 김싸피 탭의 경우 해당 탭의 selectedItems만 표시
      const items = selectedItems[activeTab]?.map((item) => (
        <RecommendItem
          key={item.id}
          item={item}
          isSelected={true} // 이미 선택된 항목들만 있으므로 true
          isKimSsafy={isKimSsafy} // isKimSsafy prop 전달
          isChecked={checkedItems[activeTab]?.[item.id] || false} // 탭별로 체크박스 상태 전달
          onCheckboxChange={handleCheckboxChange} // 체크박스 상태 변경 핸들러 전달
        />
      ));
      setProducts(items || []);
    }
  }, [activeTab, selectedItems, isKimSsafy, checkedItems, selectedAge]);

  return (
    <div className="p-4">
      {/* 나이 선택 드롭다운 */}

      <div className="mb-4">
        {!isKimSsafy ? (
          <>
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
          </>
        ) : (
          <>
            <div className="h-[2rem]"></div>
          </>
        )}
      </div>

      <div className="flex border-b-2 border-gray-200 mb-4">
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeTab === "basicInfo" ? "border-b-2 border-blue-500 font-bold" : ""
          }`}
          onClick={() => handleTabClick("basicInfo")}
        >
          기본정보
        </button>
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeTab === "deposit" ? "border-b-2 border-blue-500 font-bold" : ""
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
      </div>

      <div className="tab-content overflow-scroll h-[23rem]">
        {activeTab === "basicInfo" && (
          <div className="mx-[5%]">
            <p className="text-[#0046FF] text-[#444444] font-OneShinhanMedium text-sm py-2 px-4 mb-2 bg-slate-200 rounded-xl">
              {!isKimSsafy
                ? "동문 선배님의 모범 로드맵 기본 정보 입니다."
                : "고객님의 로드맵 기본 정보 입니다."}
            </p>
            <div className="flex flex-col text-lg text-[#444444] font-bold">
              <div className="flex justify-between mb-3">
                <div className="font-bold text-[#444444]">월급</div>
                <div className="text-[#656F77]">
                  <span>
                    {recommendInfo.salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  </span>
                  <span className="">원</span>
                </div>
              </div>
              <div className="flex justify-between mb-3">
                <div className="font-bold text-[#444444]">성향</div>
                <div className="text-[#444444] py-1 px-3 rounded-lg bg-indigo-200">
                  <span>{recommendInfo.financeKeyword} </span>
                </div>
              </div>
              <div className="flex justify-between mb-3">
                <div className="font-bold text-[#444444]">초기자본</div>
                <div className="text-[#656F77]">
                  <span>
                    {recommendInfo.startAsset.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  </span>
                  <span>만원</span>
                </div>
              </div>
              <div className="flex justify-between mb-3">
                <div className="font-bold text-[#444444]">현 자본</div>
                <div className="text-[#656F77]">
                  <span>
                    {recommendInfo.presentAsset.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  </span>
                  <span>만원</span>
                </div>
              </div>
              <div className="flex justify-between mb-3">
                <div className="font-bold text-[#444444]">기간</div>
                <div className="text-[#656F77]">
                  <span>{recommendInfo.period} </span>
                  <span>년</span>
                </div>
              </div>
            </div>
          </div>
        )}
        {["deposit", "saving", "loan"].includes(activeTab) && (
          <div className="flex flex-col justify-center item-center mx-[5%] ">
            {!isKimSsafy && (
              <p className="px-4 py-2 rounded-xl mb-2 text-sm text-[#444444] font-OneShinhanMedium bg-slate-200">
                ❗상품 클릭 시 고객님의 로드맵에 적용할 수 있습니다.
              </p>
            )}
            {products}
          </div>
        )}
      </div>
    </div>
  );
}

export default RecommendTabs;
