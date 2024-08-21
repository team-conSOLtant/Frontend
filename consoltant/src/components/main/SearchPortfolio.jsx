import RoundButton from "../common/RoundButton";

function SearchPortfolio() {
  return (
    <div className="relative shadow rounded-[1rem] h-[6rem] px-[1.5rem] pt-[2rem] bg-[#FAFAFA]">
      <div className="absolute top-[0.5rem] right-[0.5rem]">
        <RoundButton />
      </div>
      <div className="font-OneShinhanBold text-[1.2rem] text-right mr-[1rem]">
        선후배 <br /> 포트폴리오 검색
      </div>
      <img
        className="absolute w-[4rem] top-[0.7rem] left-[1rem]"
        src="/main/search.png"
        alt=""
      />
    </div>
  );
}
export default SearchPortfolio;
