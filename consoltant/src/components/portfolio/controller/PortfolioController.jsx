import React, { useCallback, useEffect, useState } from "react";
import update from "immutability-helper";
import { Card } from "../makeportfolio/Card";
import styled from "styled-components";
import PortfolioControllerItem from "./PortfolioControllerItem";
import { useNavigate } from "react-router";
import { postSaveAll, uploadImage } from "../../../apis/Portfolio";
import { useSelector } from "react-redux";
import {
  deleteFollows,
  getFollowingList,
  postFollows,
} from "../../../apis/Follow";

// 포트폴리오 아이템을 드래그하여 순서를 변경하는 컴포넌트

const PortfolioControllerStyle = styled.div`
  position: fixed;
  right: 1rem;
  top: 28vh;
  width: 15%;
  border: 0.1rem solid #f5f5f5;
  border-radius: 0.5rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 4px rgb(0, 0, 0, 0.25);
  padding: 1rem 1rem;
`;
const PortfolioControllerTitle = styled.div`
  width: 100%;
  border-bottom: 0.1rem #c7c7cc solid;
  color: #444444;
  margin-bottom: 0.7rem;
  padding-bottom: 0.3rem;
  font-size: 0.9rem;
`;

const SaveButton = styled.div`
  background-color: #77a5ff;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
  color: white;
  width: 80%;
  border-radius: 0.3rem;
  margin-top: 0.5rem;
  font-size: 0.9rem;
`;

const EditButton = styled.div`
  background-color: white;
  border: 0.1rem solid #77a5ff;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
  color: #77a5ff;
  width: 80%;
  border-radius: 0.3rem;
  margin-top: 0.5rem;
  font-size: 0.9rem;
`;

function PortfolioController({ isEdit, isBlur, allData, portid, portloginid }) {
  let { loginid, portfolioid } = useSelector((state) => state.user);
  // 아이템들의 순서를 상태로 관리
  const navigate = useNavigate();

  const [followingList, setFollowingList] = useState([]);
  const [isFollowed, setIsFollowed] = useState();

  useEffect(() => {
    getFollowings();
  }, []);

  const getFollowings = async () => {
    const res = await getFollowingList(loginid);
    console.log("foloooooooooooooooooooooooooooooooo", res.result);
    setFollowingList(res.result);
  };

  const _isFollowed = (portid) => {
    return (
      followingList?.filter(
        (following) => String(following.portfolioId) === String(portid)
      ).length > 0
    );
  };

  const getFollowId = (portid) => {
    console.log(
      "???????????????????????????????????????????????",
      followingList?.filter(
        (following) => String(following.portfolioId) === String(portid)
      )[0]
    );
    return followingList?.filter(
      (following) => String(following.portfolioId) === String(portid)
    )[0].id;
  };

  useEffect(() => {
    console.log(
      "followingListfollowingListfollowingListfollowingList",
      followingList
    );
    setIsFollowed(_isFollowed(portid));
  }, [followingList]);

  const [cards, setCards] = useState([
    {
      id: 1,
      text: "대외 활동",
    },
    {
      id: 2,
      text: "수상 / 자격증",
    },
    {
      id: 3,
      text: "학력 / 경력",
    },
    {
      id: 4,
      text: "프로젝트",
    },
  ]);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);

  const renderCard = useCallback((card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        text={card.text}
        moveCard={moveCard}
      />
    );
  }, []);

  const _savePortfolio = async (allData) => {
    await postSaveAll(loginid, portfolioid, allData);
    // console.log(
    //   "이미지 업로드 여기까지 드러오니ㅣㅣㅣㅣㅣㅣ",
    //   allData.portfolioData.userInfo.imageUrl
    // );
    await uploadImage(portfolioid, allData.portfolioData.userInfo.imageUrl);
    navigate(`/portfolio/${portfolioid}`);
  };

  const _follow = async (loginid, portfolioid) => {
    await postFollows(loginid, portfolioid);
    getFollowings();
  };

  const _unfollow = async (followId) => {
    console.log("followIDfollowIDfollowIDfollowID", followId);
    await deleteFollows(followId);
    getFollowings();
  };

  return (
    <PortfolioControllerStyle>
      <PortfolioControllerTitle>포트폴리오 구성</PortfolioControllerTitle>
      {[
        { title: "대외 활동", image: "/Community.svg", ref: "#activities" },
        {
          title: "학력 / 경력",
          image: "/Briefcase.svg",
          ref: "#educationAndCareer",
        },
        {
          title: "수상 / 자격증",
          image: "/Trophy.svg",
          ref: "#awardAndCertification",
        },
        { title: "프로젝트", image: "/Folders.svg", ref: "#project" },
      ].map((data) => (
        <PortfolioControllerItem
          text={data.title}
          image={data.image}
          targetSection={data.ref}
        ></PortfolioControllerItem>
      ))}
      {isEdit && (
        <SaveButton onClick={() => _savePortfolio(allData)}>
          포트폴리오 저장
        </SaveButton>
      )}
      {!isEdit && !isBlur && (
        <EditButton onClick={() => navigate("/make-portfolio")}>
          포트폴리오 편집
        </EditButton>
      )}
      {!isEdit &&
        isBlur &&
        followingList.length > 0 &&
        (!isFollowed ? (
          <EditButton
            style={{ backgroundColor: "#77a5ff", color: "white" }}
            onClick={() => _follow(loginid, portid)}
          >
            팔로우
          </EditButton>
        ) : (
          <EditButton onClick={() => _unfollow(getFollowId(portid))}>
            팔로잉
          </EditButton>
        ))}
    </PortfolioControllerStyle>
  );
}

export default PortfolioController;
