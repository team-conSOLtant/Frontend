import RoundButton from "../common/RoundButton";
import { useNavigate } from "react-router";

function SeniorPortfolio({ seniorPortfolio }) {
  console.log(seniorPortfolio);
  // const seniorCompany = seniorPortfolio.content.split(",")[0];

  const navigate = useNavigate();
  const seniorId = seniorPortfolio.content.split(",")[1];
  return (
    <div className="relative px-[1rem] pt-[2rem] pb-[1rem] border bg-[#005DF9] rounded-[1rem] h-[13rem] shadow">
      <div className="absolute top-[0.5rem] right-[0.5rem]">
        <RoundButton onClick={() => navigate(`/portfolio/${seniorId}`)} />
      </div>
      <img
        className="absolute w-[5rem] right-[2rem]"
        src="/main/Envelope.png"
        alt=""
      />
      {seniorPortfolio.content ? (
        <div className="text-white text-[1.5rem]">
          선배님의
          <div className="font-OneShinhanBold my-[0.2rem]">
            "{seniorPortfolio.content.split(",")[0]}"
          </div>
          합격 포트폴리오가 <br /> 도착했어요
        </div>
      ) : (
        <div className="text-white text-[1.5rem] pt-[1.5rem] h-[10rem] flex items-center">
          아직 매칭된
          <br />
          합격 포트폴리오가 <br /> 없어요
        </div>
      )}
    </div>
  );
}
export default SeniorPortfolio;
