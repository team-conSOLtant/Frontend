function CurrentMain(props) {
  let userInfo = props.userInfo;
  let totalInfos = props.totalInfos;
  let univInfos = totalInfos.univInfo;
  return (
    <div className="pt-[1rem] px-[2rem]">
      {/* title */}
      <div>
        <div className="font-OneShinhanBold text-[#005DF9] text-[1.8rem] ">SOL 학생로드맵</div>
        <div className="font-OneShinhanLight text-[#444444] text-[0.6rem] ">
          모든 신한 금융상품을 통해 자산관리를 시작해보세요
        </div>
      </div>
      {/* CurrentInfo */}
      <div>
        {/* 고객 이름 */}
        <div className="flex items-end ">
          Hello!
          <div className="font-OneShinhanBold mx-[0.6rem] text-[1.2rem]">{userInfo.name}</div>
          고객님
        </div>
        <hr />
        {/* 대학/학과 정보 */}
        <div>{univInfos.univ} 대학교</div>
        <div>
          <span>{univInfos.major}</span> 재학 중
          <span>
            ({univInfos.level}-{univInfos.semester}학기)
          </span>
        </div>
        {/* 학점 */}
        <div>
          {" "}
          | 총 평점 평균: <span>{univInfos.GPA}</span>/{univInfos.limitGPA}
        </div>
        <div>
          {" "}
          | 총 취득 학점: <span>{univInfos.myGPA}</span>/{univInfos.totalGPA}
        </div>
      </div>
      {/* My Account */}
      <div>
        <div>내 계좌항목</div>
        <div className="border">
          <div>입출금 | 쏠편한 입출금 통장(저축 예금) </div>
          <div>신한 110-123-123456</div>
          <div>100,000,000원</div>
          <div>그래프(hover, component)</div>
        </div>
      </div>
      {/* ShoppingBag */}
      <div>
        <div>상품 장바구니</div>
        {/* container scroll */}
        <div className="border bg-blue-100">
          {/* items */}
          <div className="border bg-white">
            <div>
              <span>2023.03 ~ 2024.04</span>에 가입을 추천하는 상품입니다.
            </div>
            <div>신한 My플러스 정기예금</div>
            <div>
              <span>
                (12개월 기준)<span>연 3.2% ~</span>
              </span>
              3.4%
            </div>
          </div>
        </div>
        <button>round</button>
      </div>
      {/* SeniorPortfolio */}
      <div className="border bg-[#005DF9]">
        <button></button>
        <div className="text-white">선배님의 “신한은행” 합격 포트폴리오가 도착했어요</div>
      </div>
      {/* mid container */}
      <div>
        {/* MyPortfolio */}
        <div className="border">
          <div>My Portfolio</div>
          <button>Explore</button>
        </div>
        {/* SearchPortfolio */}
        <div className="border">
          <button></button>
          <div>선후배 포트폴리오 검색</div>
        </div>
      </div>
      {/* Finance RoadMap */}
      <div className="border">
        <button>Explore</button>
        <div>유사 성향 금융 로드맵이 도착했어요</div>
        <div>추천 금융상품</div>
      </div>
    </div>
  );
}

export default CurrentMain;
