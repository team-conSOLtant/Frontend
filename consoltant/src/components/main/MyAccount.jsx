import RoundButton from "../common/RoundButton";

function MyAccount({ accountInfos }) {
  return (
    <div>
      <div className="relative border rounded-[0.5rem] p-[1rem] pt-[1.2rem]">
        <div className="absolute right-[0.3rem] top-[0.3rem]">
          <RoundButton />
        </div>
        <div className="text-[0.7rem] text-[#005DF9] font-OneShinhanMedium">
          입출금 |
          <span className="font-OneShinhanBold">
            {accountInfos.accountName}
          </span>
        </div>
        <div className="text-[0.6rem] my-[0.5rem] font-OneShinhanMedium">
          신한 {accountInfos.accountNum}
        </div>
        <div className="font-OneShinhanBold text-[1.3rem] my-[0.5rem]">
          {accountInfos.accountAmount
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          원
        </div>
        <div>그래프(hover, component)</div>
        <div className="text-[0.6rem] text-[#005DF9] cursor-pointer">
          그래프 자세히 보기
        </div>
      </div>
    </div>
  );
}
export default MyAccount;
