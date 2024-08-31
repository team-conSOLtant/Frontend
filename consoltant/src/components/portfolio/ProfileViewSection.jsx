import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getPortfolios } from "../../apis/Portfolio";

const ProfileSectionStyle = styled.div`
  margin-left: 15vw;
  width: 100vw;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.bgcolor};
`;

const ProfileName = styled.div`
  font-size: 2rem;
  font-family: "OneShinhanBold";
`;

const ProfileJob = styled.div`
  font-size: 1.3rem;
  font-family: "OneShinhanBold";
`;

const ProfileImage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  border-radius: 0.5rem;
  margin: 1rem;
  margin-left: 10vw;
`;

const ProfileDescription = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 1.5rem;
`;

const ProfileIntroductionContainer = styled.div``;
const ProfileIntroductionTitle = styled.div`
  font-size: 1.2rem;
`;

const ProfileSubInfoContainer = styled.div`
  display: flex;
  justify-content: between;
`;

const ProfileKeywordContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProfileSubInfo = styled.div`
  font-size: 0.9rem;
  font-family: "OneShinhanLight";
  margin-right: 1rem;
  margin-bottom: 0.1rem;
  margin-top: 0.2rem;
`;

const Keyword = styled.div`
  background-color: #ffde59;
  width: auto;
  height: 1rem;
  line-height: 0.1rem;
  font-size: 0.8rem;
  margin: 0 0.2rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  font-weight: bold;
`;

function ProfileViewSection(props) {
  console.log(
    "ProfileViewSectionProfileViewSectionProfileViewSectionProfileViewSection",
    props
  );
  return (
    <div className="text-[#444444] mb-10">
      <ProfileSectionStyle bgcolor={props.userInfo?.backgroundColor}>
        <ProfileImage>
          <img
            className="rounded-[0.8rem] w-[10rem] h-[12rem] shadow-lg"
            src={`data:image/jpeg;base64,${props.userInfo?.imageUrl}`}
            alt=""
          />
        </ProfileImage>
        <ProfileDescription>
          <div className="mb-4">
            <ProfileName>{props.userInfo?.name}</ProfileName>
            <ProfileJob>{props.userInfo?.job}</ProfileJob>
          </div>
          <div className="mb-4">
            <ProfileIntroductionContainer>
              <ProfileIntroductionTitle>
                {props.userInfo?.description}
              </ProfileIntroductionTitle>
            </ProfileIntroductionContainer>
            <ProfileSubInfoContainer>
              <ProfileSubInfo>{props.userInfo?.birthDate}</ProfileSubInfo>
              <ProfileSubInfo>{props.userInfo?.phoneNumber}</ProfileSubInfo>
              <ProfileSubInfo>{props.userInfo?.email}</ProfileSubInfo>
            </ProfileSubInfoContainer>
          </div>
          <ProfileKeywordContainer>
            {props.keywords.myKeyword.map((word) => (
              <Keyword>{word}</Keyword>
            ))}
          </ProfileKeywordContainer>
        </ProfileDescription>
      </ProfileSectionStyle>
    </div>
  );
}

export default ProfileViewSection;
