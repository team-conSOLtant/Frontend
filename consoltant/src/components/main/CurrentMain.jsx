function CurrentMain(props) {
  let userInfo = props.userInfo;
  let totalInfos = props.totalInfos;
  let univInfos = totalInfos.univInfo;
  return (
    <div className="pt-[1rem] px-[2rem]">
      {/* title */}
      <div>
        <div className="font-OneShinhanBold text-[#005DF9] text-[1.8rem] ">
          SOL 학생로드맵
        </div>
        <div className="font-OneShinhanLight text-[#444444] text-[0.6rem] ">
          모든 신한 금융상품을 통해 자산관리를 시작해보세요
        </div>
      </div>
      {/* CurrentInfo */}
      <div>
        {/* 고객 이름 */}
        <div className="flex items-end ">
          Hello!
          <div className="font-OneShinhanBold mx-[0.6rem] text-[1.2rem]">
            {userInfo.name}
          </div>
          고객님
        </div>
        {/* 대학 */}
        <div>{univInfos.univ} 대학교</div>
        {/* 학점 */}
      </div>
    </div>
  );
}

export default CurrentMain;
