import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getPortfolios } from "../../apis/Portfolio";

const ProfileSectionStyle = styled.div`
  margin-left: 15vw;
  width: 100vw;
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  background-color: #fff8df;
`;

const ProfileName = styled.div`
  font-size: 2rem;
  font-family: "OneShinhanBold";
`;

const ProfileJob = styled.div`
  font-size: 1.1rem;
  font-family: "OneShinhanBold";
`;

const ProfileImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 12rem;
  height: 10rem;
  background-color: #f5f5f5;
  border-radius: 0.5rem;
  margin: 1rem;
  margin-left: 15vw;
`;

const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProfileIntroductionContainer = styled.div``;
const ProfileIntroductionTitle = styled.div``;

const ProfileSubInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProfileKeywordContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProfileSubInfo = styled.div`
  font-size: 0.8rem;
  font-family: "OneShinhanBold";
  margin-left: 0.3rem;
  margin-bottom: 0.1rem;
`;

const Keyword = styled.div`
  background-color: #ffde59;
  width: auto;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.5rem;
  margin: 0 0.2rem;
  padding: 0 0.3rem;
  border-radius: 0.3rem;
`;

function ProfileViewSection() {
  const loginid = useSelector((state) => {
    console.log("state", state);
    return state.user.loginid;
  });

  useEffect(() => {
    getProfileData();
  }, []);

  const getProfileData = async () => {
    console.log("profile : loginid", loginid);
    const res = await getPortfolios(loginid);
    console.log(res);
  };

  return (
    <ProfileSectionStyle>
      <ProfileImage></ProfileImage>
      <ProfileDescription>
        <ProfileName>Ko Dahyun</ProfileName>
        <ProfileJob>BackEnd Developer</ProfileJob>
        <ProfileIntroductionContainer>
          <ProfileIntroductionTitle>
            사람을 향한 소프트웨어 기술 기반의 안전하고 행복한 세상을 만드는
            것이 저의 비전입니다.
          </ProfileIntroductionTitle>
        </ProfileIntroductionContainer>
        <ProfileSubInfoContainer>
          <ProfileSubInfo>2001년 9월 7일</ProfileSubInfo>
          <ProfileSubInfo>010-0000-0000</ProfileSubInfo>
          <ProfileSubInfo>example@gmail.com</ProfileSubInfo>
        </ProfileSubInfoContainer>
        <ProfileKeywordContainer>
          <Keyword>성실함</Keyword>
          <Keyword>협업</Keyword>
          <Keyword>자기주도적</Keyword>
        </ProfileKeywordContainer>
      </ProfileDescription>
    </ProfileSectionStyle>
  );
}

export default ProfileViewSection;
