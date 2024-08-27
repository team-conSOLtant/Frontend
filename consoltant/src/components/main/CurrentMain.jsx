import PersonalInfo from "./PersonalInfo";
import MyAccount from "./MyAccount";
import ShoppingBag from "./ShoppingBag";
import SeniorPortfolio from "./SeniorPortfolio";
import MyPortfolio from "./MyPortFolio";
import SearchPortfolio from "./SearchPortfolio";
import FinanceRoadMap from "./FinanceRoadMap";

function CurrentMain(props) {
  let userInfo = props.userInfo;
  let totalInfos = props.totalInfos;
  let products = props.products;
  let notification = props.notification;

  const notificationNum = notification.filter(
    (item) => item.notificationType === "PORTFOLIO_COMMENT"
  ).length;

  const seniorPortfolio = notification.filter(
    (item) => item.notificationType === "PORTFOLIO_MATCHING"
  );

  const accountInfos = {
    accountName: totalInfos.accountName,
    accountType: totalInfos.accountType,
    accountNum: userInfo.accountNo,
    accountAmount: totalInfos.totalAssetValue,
    assets: [
      {
        type: "demandDeposit",
        name: "입출금",
        percent: totalInfos.demandDeposit,
      },
      {
        type: "deposit",
        name: "예금",
        percent: totalInfos.deposit,
      },
      {
        type: "savings",
        name: "적금",
        percent: totalInfos.savings,
      },
      {
        type: "loan",
        name: "대출",
        percent: totalInfos.loan,
      },
    ],
  };

  return (
    <div className="pt-[1rem] px-[2rem] text-[#444444]">
      {/* title */}
      <div>
        <div className="font-OneShinhanBold text-[#005DF9] text-[1.8rem] ">
          SOL 학생로드맵
        </div>
        <div className="font-OneShinhanLight text-[0.6rem] ">
          모든 신한 금융상품을 통해 자산관리를 시작해보세요
        </div>
      </div>
      {/* 윗줄 */}
      <div className="grid grid-cols-3 gap-2 mt-[2rem]">
        {/* 고객 이름 */}
        <div className="font-OneShinhanMedium flex items-end text-[1.2rem]">
          Hello!
          <div className="font-OneShinhanBold mx-[0.6rem] text-[1.4rem] text-[#121418]">
            {userInfo.name}
          </div>
          고객님
        </div>
        {/* 내 계좌항목 */}
        <div className="font-OneShinhanMedium flex items-end">내 계좌항목</div>
        {/* 상품 장바구니 */}
        <div className="font-OneShinhanMedium flex items-end">
          상품 장바구니
        </div>
        {/* CurrentInfo */}
        <PersonalInfo userInfos={userInfo} />
        {/* My Account 내 계좌항목 */}
        <MyAccount accountInfos={accountInfos} />
        {/* ShoppingBag 상품 장바구니 */}
        <ShoppingBag products={products} />
      </div>
      <hr className="mt-[1.5rem]" />
      {/* 아랫줄 */}
      <div className="grid grid-cols-3 gap-2 mt-[2rem]">
        {/* SeniorPortfolio */}
        <SeniorPortfolio seniorPortfolio={seniorPortfolio[0]} />

        {/* mid container */}
        <div className="flex flex-col justify-between">
          {/* MyPortfolio */}
          <MyPortfolio notification={notificationNum} />
          {/* SearchPortfolio */}
          <SearchPortfolio />
        </div>
        {/* Finance RoadMap */}
        <FinanceRoadMap />
      </div>
    </div>
  );
}

export default CurrentMain;
