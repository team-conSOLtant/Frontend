import ExploreButton from "../common/ExploreButton";
function FinanceRoadMap() {
  return (
    <div className="relative flex flex-col justify-end px-[1rem] pb-[1rem] border bg-[#FAFAFA] rounded-[1rem] h-[13rem] shadow">
      <div className="absolute right-[1rem] top-[1rem]">
        <ExploreButton />
      </div>
      <img
        className="absolute w-[6rem] top-[0.5rem]"
        src="/main/chart.png"
        alt=""
      />
      <div className="text-[1.3rem]">
        유사 성향 <span className="font-OneShinhanBold">금융 로드맵</span>이<br />
        도착했어요
      </div>
      <div className="text-[0.8rem]">추천 금융상품</div>
    </div>
  );
}
export default FinanceRoadMap;
