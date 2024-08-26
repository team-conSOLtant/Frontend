function PersonalInfo({ userInfos }) {
  return (
    <div>
      <hr className="mb-[0.5rem]" />
      {/* 대학/학과 정보 */}
      <div className="font-OneShinhanBold text-[1.2rem]">
        {userInfos.university.name}
      </div>
      <div className="text-[0.8rem]">
        <span className="font-OneShinhanMedium">{userInfos.major}</span>
        재학 중
        <span className="">
          {" "}
          ({userInfos.level}-{userInfos.semester}학기)
        </span>
      </div>
      {/* 학점 */}
      <div className="w-[70%] text-[0.9rem] my-[1rem]">
        <div className="flex justify-between">
          <div>
            | 총 <span className="font-OneShinhanMedium">평점 평균</span>:
          </div>
          <div>
            <span className="font-OneShinhanMedium text-[#005DF9]">
              {userInfos.majorGpa}
            </span>
            / {userInfos.maxGpa}
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div>
              | 총 취득 <span className="font-OneShinhanMedium">학점</span>:
            </div>
            <div>
              <span className="font-OneShinhanMedium">{userInfos.credit}</span>/{" "}
              {userInfos.maxCredit}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PersonalInfo;
