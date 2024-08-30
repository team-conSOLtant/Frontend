import RoundButton from "../common/RoundButton";
import { useNavigate } from "react-router-dom";

function SearchPortfolio() {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col justify-center shadow rounded-[1rem] h-[6rem] px-[1.5rem] bg-[#FAFAFA]">
      <div className="absolute top-[0.5rem] right-[0.5rem]">
        <RoundButton onClick={() => { navigate("/search") }} />
      </div>
      <div className="font-OneShinhanBold text-[1.2rem] text-right mr-[2rem]">
        선후배 <br /> 포트폴리오 검색
      </div>
      <img className="absolute w-[4rem] top-[0.7rem] left-[1rem]" src="/main/search.png" alt="" />
    </div>
  );
}
export default SearchPortfolio;
