import React, { useEffect, useState } from "react";
import SearchItem from "../components/portfolio/makeportfolio/SearchItem.jsx";
import Navbar from "../components/header/Navbar.jsx";
import styled from "styled-components";
import { getFollower, getFollowing } from "../apis/Follow.jsx";
import { useSelector } from "react-redux";

// 검색하는 페이지
// PortfolioView(피그마에 있는 거) 페이지랑 그 밑의 검색창 없는 페이지랑 같은건가?
// 다현이한테 물어봐야함

const FollowTitle = styled.div`
  font-size: 1.3rem;
  font-family: "OneShinhanLight";
  position: relative; /* 가상 요소가 상대적으로 위치할 수 있도록 설정 */
  display: flex;
  align-items: center;
  margin: 2rem;

  &::before {
    content: ""; /* 가상 요소가 렌더링되도록 content 속성을 비워둠 */
    display: inline-block; /* 네모 박스를 만들기 위해 inline-block으로 설정 */
    width: 1rem; /* 네모 박스의 너비 */
    height: 1rem; /* 네모 박스의 높이 */ /* 네모 박스의 색상 */
    border: 0.2rem solid #77a5ff;
    border-radius: 0.3rem;
    margin-right: 0.5rem; /* 네모 박스와 텍스트 사이의 간격 */
    vertical-align: middle; /* 텍스트와 네모 박스가 수평으로 맞춰지도록 설정 */
  }
`;

function FollowingFollowerPage() {
  const [following, setFollowing] = useState(true);
  const [followingList, setFollowingList] = useState();
  const [followerList, setFollowerList] = useState();

  const loginid = window.localStorage.getItem("userId");
  const portfolioid = window.localStorage.getItem("portfolioId");

  useEffect(() => {}, [setFollowing]);

  useEffect(() => {
    getFollowingList();
    getFollowerList();
  }, []);

  // 팔로잉 목록 불러오기
  const getFollowingList = async () => {
    const response = await getFollowing(loginid);
    // await console.log("following List : ", response.result);
    await setFollowingList(response.result);
  };

  // 팔로워 목록 불러오기
  const getFollowerList = async () => {
    const response = await getFollower(portfolioid);
    // await console.log("follower List : ", response.result);
    await setFollowerList(response.result);
  };

  return (
    <div>
      <Navbar />
      <FollowTitle>{following ? "팔로잉" : "팔로워"}</FollowTitle>
      <div className="mx-[5rem]">
        <div className="text-[#005DF9] mb-[2rem]">
          {following ? (
            <>
              고객님의 포트폴리오를 분석하여 유사한 이력을 가진{" "}
              <span className="font-OneShinhanMedium">선배</span>를 추천합니다.
            </>
          ) : (
            <>
              고객님의 포트폴리오가 추천된{" "}
              <span className="font-OneShinhanMedium">후배</span>의 포트폴리오
              입니다.
            </>
          )}
        </div>
        <div className="flex w-[100%] border-t">
          <div className="flex flex-col items-center w-[10rem]">
            <div
              className="flex w-[100%] h-[5rem] justify-center items-center cursor-pointer"
              style={{ backgroundColor: following ? "#DCEAFF" : "" }}
              onClick={() => setFollowing(true)}
            >
              팔로잉 ({followingList && followingList.length})
            </div>
            <div
              className="flex w-[100%] h-[5rem] justify-center items-center cursor-pointer"
              style={{ backgroundColor: !following ? "#DCEAFF" : "" }}
              onClick={() => setFollowing(false)}
            >
              팔로워 ({followerList && followerList.length})
            </div>
          </div>
          <div className="w-[100%] h-[100%] border-l">
            <div className="flex flex-col w-[100%] items-center h-[30rem] overflow-auto">
              {followingList &&
                followerList &&
                (following
                  ? followingList.map((portfolio, index) => {
                      return (
                        <SearchItem
                          key={index}
                          index={index}
                          portfolio={portfolio}
                        />
                      );
                    })
                  : followerList.map((portfolio, index) => {
                      return (
                        <SearchItem
                          key={index}
                          index={index}
                          portfolio={portfolio}
                        />
                      );
                    }))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FollowingFollowerPage;
