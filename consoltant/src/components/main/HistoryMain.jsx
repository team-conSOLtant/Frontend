import PersonalInfo from "./PersonalInfo";
import AccountHistory from "./AccountHistory";
import ProductHistory from "./ProductHistory";
import MyFinanceGraph from "./MyFinanceGraph";

function HistoryMain({ userInfo, totalInfos, graphInfo, index }) {
  console.log("graphinfo!!!!", graphInfo);

  const accountInfos = {
    accountName: totalInfos.accountName,
    accountType: totalInfos.accountName,
    accountNum: userInfo.accountNo,
    accountAmount: totalInfos.totalAssetValue,
    assets: [
      {
        type: "demandDeposit",
        name: "입출금",
        percent: totalInfos.demandDeposit,
        value: totalInfos.demandDepositValue,
      },
      {
        type: "deposit",
        name: "예금",
        percent: totalInfos.deposit,
        value: totalInfos.depositValue,
      },
      {
        type: "savings",
        name: "적금",
        percent: totalInfos.savings,
        value: totalInfos.savingsValue,
      },
      {
        type: "loan",
        name: "대출",
        percent: totalInfos.loan,
        value: totalInfos.loanValue,
      },
    ],
  };
  return (
    <div className="pt-[1rem] px-[2rem] text-[#444444]">
      {/* title */}
      <div className="">
        <div className="font-OneShinhanBold text-[#005DF9] text-[1.8rem] ">
          SOL 학생로드맵
        </div>
        <div className="font-OneShinhanLight text-[0.6rem] ">
          모든 신한 금융상품을 통해 자산관리를 시작해보세요
        </div>
      </div>
      {/* 윗줄 */}
      <div className="grid grid-cols-3 gap-2 mt-[2rem]">
        {/* 윗줄 소제목 */}
        {/* 고객 이름 */}
        <div className="font-OneShinhanMedium flex items-end text-[1.2rem]">
          Hello!
          <div className="font-OneShinhanBold mx-[0.6rem] text-[1.4rem] text-[#121418]">
            {userInfo.name}
          </div>
          고객님
        </div>
        {/* 내 계좌항목 */}
        <div className="font-OneShinhanMedium flex items-end">내 자산현황</div>
        {/* 과거 자산 모아보기 */}
        <div className="font-OneShinhanMedium flex items-end">
          과거 자산 모아보기
        </div>
        {/* PersonalInfo */}
        <PersonalInfo userInfos={userInfo} />
        {/* AccountHistory */}
        <AccountHistory userInfo={userInfo} accountInfos={accountInfos} />
        {/* ProductHistory */}
        <ProductHistory products={accountInfos.assets} />
      </div>
      {/* 아랫줄 */}
      <div className="flex justify-center w-[100%]">
        {graphInfo && <MyFinanceGraph graphInfo={graphInfo} currIndex={index} />}
      </div>
    </div>
  );
}

export default HistoryMain;
