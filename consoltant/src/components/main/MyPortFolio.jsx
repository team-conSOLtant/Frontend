import ExploreButton from "../common/ExploreButton";
import Alert from "../common/Alert";

function MyPortfolio({notification}) {
  
  return (
    <div className="relative shadow rounded-[1rem] h-[6rem] px-[1.5rem] pt-[0.6rem] bg-[#FAFAFA]">
      <div className=" text-[0.7rem]">내 포트폴리오</div>
      <div className="font-OneShinhanBold text-[1.2rem]">My Portfolio</div>
      <div className="absolute left-[4rem] w-[5rem]">
        <ExploreButton />
        <div className="absolute right-[-2rem] top-[-0.5rem]">
          <Alert num={notification} />
        </div>
      </div>
      <img
        className="absolute w-[4rem] top-[1rem] right-[1rem]"
        src="/main/portfolio.png"
        alt=""
      />
    </div>
  );
}
export default MyPortfolio;
