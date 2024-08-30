import React, { useState, useEffect } from "react";
import Navbar from "../components/header/Navbar.jsx";
import RecommendGraph from "../components/recommend/RecommendGraph.jsx";
import RecommendTabs from "../components/recommend/RecommendTabs.jsx";
import { getBestRoadMap, postExpectedRoadMap } from "../apis/RoadMap.jsx";
import { postRecommendList } from "../apis/Recommend.jsx";

function RecommendPage() {
  const [bestRoadMapGraph, setBestRoadMapGraph] = useState();
  const [bestRoadMapProducts, setBestRoadMapProducts] = useState();
  const [bestRoadMapInfo, setBestRoadMapInfo] = useState();
  const [expectedRoadMapGraph, setExpectedRoadMapGraph] = useState();
  const [expectedRoadMapProducts, setExpectedRoadMapProducts] = useState();
  const [expectedRoadMapInfo, setExpectedRoadMapInfo] = useState();
  const [expectedRoadMapPreRecommend, setExpectedRoadMapPreRecommend] =
    useState();
  const [expectedRoadMapRecommend, setExpectedRoadMapRecommend] = useState();
  const [age, setAge] = useState();

  useEffect(() => {
    getBest();
    postExpected();
  }, []);

  // 넣은 상품
  const [selectedItems, setSelectedItems] = useState({
    deposit: [],
    saving: [],
    loan: [],
  });

  // 담아둔 상품
  const [checkedItems, setCheckedItems] = useState({
    deposit: [],
    saving: [],
    loan: [],
  });

  // 아이템 선택 시 호출되는 함수
  const handleItemClick = (item, tab, newStartDate, newEndDate) => {
    setSelectedItems((prevItems) => {
      const itemsInTab = prevItems[tab] || [];

      if (itemsInTab.some((selectedItem) => selectedItem.id === item.id)) {
        // 이미 선택된 아이템이 있을 경우, startDate와 endDate만 업데이트
        return {
          ...prevItems,
          [tab]: itemsInTab.map((selectedItem) =>
            selectedItem.id === item.id
              ? {
                  ...selectedItem,
                  startDate: newStartDate,
                  endDate: newEndDate,
                }
              : selectedItem
          ),
        };
      } else {
        // 아이템이 없을 경우 추가
        return {
          ...prevItems,
          [tab]: [...itemsInTab, item],
        };
      }
    });
  };

  useEffect(() => {
    postExpected();
  }, [selectedItems]);

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
    console.log("선택된 적금 상품들:", checkedItems.saving);
    console.log("선택된 대출 상품들:", checkedItems.loan);

    const allSelectedItems = [
      ...checkedItems.deposit,
      ...checkedItems.saving,
      ...checkedItems.loan,
    ];

    console.log(allSelectedItems);
    postRecommendList(allSelectedItems);
  };

  const getBest = async () => {
    const res = await getBestRoadMap();
    console.log("best res", res.result);
    await setBestRoadMapGraph(res.result.data);
    await setBestRoadMapInfo(res.result.info);
    await setBestRoadMapProducts(res.result.product);
    await setAge(res.result.data.map((item) => item.age).filter((age) => age));
  };

  const postExpected = async () => {
    const res = await postExpectedRoadMap(selectedItems);
    console.log("expected res", res.result);
    await setExpectedRoadMapGraph(res.result.data);
    await setExpectedRoadMapInfo(res.result.info);
    await setExpectedRoadMapProducts(res.result.product);
    await setExpectedRoadMapPreRecommend(res.result.preRecommend);
    await setExpectedRoadMapRecommend(res.result.recommend);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center text-[#444444] mt-10">
        {bestRoadMapGraph && bestRoadMapProducts && bestRoadMapInfo && age && (
          <div className="flex flex-col mr-24">
            <div className="flex flex-col mb-10">
              <div className="text-2xl mb-2 text-[#0046ff] font-semibold">
                추천 로드맵
              </div>
              <div className="text-sm">
                고객님의 포트폴리오 학생 데이터를 활용하여 추천한 선배님들의
                모범 금융 로드맵 입니다.
              </div>
            </div>
            <div className="mb-4">
              <RecommendGraph graph={bestRoadMapGraph} />
            </div>
            <div>
              <RecommendTabs
                financeProducts={bestRoadMapProducts}
                info={bestRoadMapInfo}
                selectedItems={selectedItems}
                onItemClick={handleItemClick}
                onCheckboxChange={handleCheckboxChange} // 체크박스 상태 변경 핸들러 전달
                age={age}
              />
            </div>
          </div>
        )}
        {expectedRoadMapGraph &&
          expectedRoadMapInfo &&
          expectedRoadMapProducts && (
            <div className="flex flex-col">
              <div className="flex flex-col mb-10">
                <div className="text-2xl mb-2 text-[#0046ff] font-semibold">
                  {expectedRoadMapInfo.name}님의 예상 로드맵
                </div>
                <div className="text-sm">
                  추천 로드맵의 금융 상품 중 신한은행 금융 상품과 유사한 상품을
                  매칭하여 제공해드립니다.
                </div>
              </div>
              <div className="mb-4">
                <RecommendGraph graph={expectedRoadMapGraph} />
              </div>
              <div>
                <RecommendTabs
                  financeProducts={expectedRoadMapPreRecommend}
                  info={expectedRoadMapInfo}
                  selectedItems={selectedItems}
                  onItemClick={handleItemClick}
                  onCheckboxChange={handleCheckboxChange} // 체크박스 상태 변경 핸들러 전달
                  isKimSsafy={true}
                />
              </div>
              <div className="flex justify-end pr-[10%]">
                <button
                  className="text-base bg-[#0046ff] text-white font-semibold p-2 rounded-lg hover:bg-gray-400"
                  onClick={handleSave} // 담아두기 버튼 클릭 시 함수 호출
                >
                  담아두기
                </button>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default RecommendPage;
