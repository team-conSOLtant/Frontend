import { useNavigate } from "react-router-dom";

function AllinfoCompletePage() {
  const navigate = useNavigate();
  return (
    <div>
      {/* 좌측 상단 로고 */}
      <div
        className="flex items-center m-[2rem] cursor-pointer"
        onClick={() => navigate("/login")}
      >
        <img className="w-[2rem]" src="/logo/shinhan_logo_blue.png" alt="" />
        <div className="text-[#5C5C5C] font-OneShinhanBold text-[1.2rem] px-[0.6rem]">
          SOL 학생 로드맵
        </div>
      </div>
      <div className="h-[80vh] flex flex-col justify-center items-center">
        <div className="border rounded-[0.7rem] border-[#ACACAC] shadow-lg w-[40%] py-[3rem] flex flex-col justify-center items-center">
          <div className="font-OneShinhanBold text-[1.5rem] text-[#5C5C5C] mb-[1.5rem]">
            모든 준비를 마쳤습니다
          </div>
          <div className="text-center font-OneShinhanLight text-[#5C5C5C] w-[90%]">
            SOL 학생 로드맵 서비스를 이용해보세요
          </div>
          {/* 로그인 */}
          <div
            onClick={() => navigate("/main")}
            className="mt-[3rem] py-[0.3rem] w-[40%] cursor-pointer font-OneShinhanMedium shadow-md border rounded-[0.5rem] flex justify-center bg-[#0046ff] text-white"
          >
            메인으로
          </div>
        </div>
      </div>
    </div>
  );
}
export default AllinfoCompletePage;
