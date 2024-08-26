import React, { useState } from "react";
import { SliderPicker } from "react-color";
import styled from "styled-components";

const ProfileSectionStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
`;
const ProfileTitle = styled.div`
  font-size: 1.5rem;
  font-family: "OneShinhanBold";
  position: relative; /* 가상 요소가 상대적으로 위치할 수 있도록 설정 */

  &::before {
    content: ""; /* 가상 요소가 렌더링되도록 content 속성을 비워둠 */
    display: inline-block; /* 네모 박스를 만들기 위해 inline-block으로 설정 */
    width: 1.2rem; /* 네모 박스의 너비 */
    height: 1.2rem; /* 네모 박스의 높이 */ /* 네모 박스의 색상 */
    border: thick solid #77a5ff;
    border-radius: 0.3rem;
    margin-right: 0.5rem; /* 네모 박스와 텍스트 사이의 간격 */
    vertical-align: middle; /* 텍스트와 네모 박스가 수평으로 맞춰지도록 설정 */
  }
`;
const ProfileSubTitle = styled.div`
  color: #0046ff;
  font-size: 0.8rem;
  width: fit-content; /* 텍스트 크기에 맞춰 width가 조정됩니다 */
  background-color: rgb(185, 213, 255, 0.3);
  border-radius: 0.2rem;
  padding: 0.2rem 0.5rem;
  margin-top: 0.3rem;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-left: 15vw;
  width: 100vw;
  background-color: ${(props) => props.bgcolor.hex};
`;

const ProfileImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 12rem;
  height: 10rem;
  background-color: #f5f5f5;
  border-radius: 0.5rem;
  /* margin: 2rem 2rem 5rem; */
`;

const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const NameInput = styled.input`
  font-size: 2rem;
  outline: none;
  caret-color: #0046ff;
`;

const JobInput = styled.input`
  outline: none;
  margin: 0.5rem 0;
`;
const ProfileSectionLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
const ColorPickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 12rem;
`;

const ProfileIntroductionContainer = styled.div``;
const ProfileIntroductionTitle = styled.div``;
const ProfileIntroductionInput = styled.textarea`
  width: 100%;
  height: 8rem;
  background-color: #fbfbfd;
  border: 0.1rem solid #c7c7c7;
  border-radius: 0.5rem;
  padding: 0.5rem; /* 위 padding을 추가해서 텍스트가 너무 상단에 붙지 않게 합니다 */
  display: flex;
  text-align: start;
  resize: none; /* textarea의 크기 조정 막기 */
`;
const ProfileAdditionalInfo = styled.div`
  display: flex;
  flex-direction: row;
`;
const InputLabel = styled.label``;
const InputTitle = styled.div`
  font-size: 0.8rem;
  font-family: "OneShinhanBold";
  margin-left: 0.3rem;
  margin-bottom: 0.1rem;
`;
const InputContainer = styled.input`
  border: #c7c7c7 0.1rem solid;
  border-radius: 0.3rem;
  background-color: #fbfbfd;
  text-align: center;
  height: 2rem;
  padding-left: 0.3rem;
  width: 15rem;
`;

function ProfileSection({ userInfo }) {
  const [bgcolor, setBgcolor] = useState({ hex: "#FFFFFF" });
  console.log("");
  return (
    <ProfileSectionStyle>
      <ProfileTitleContainer>
        <ProfileTitle>포트폴리오 작성하기</ProfileTitle>
        <ProfileSubTitle>
          해당 포트폴리오가 기업에게 노출되고 선후배 이력서 매칭 시 정보가
          노출되어 추천됩니다!
        </ProfileSubTitle>
      </ProfileTitleContainer>

      <ProfileContainer bgcolor={bgcolor}>
        <ProfileSectionLeft>
          <ProfileImage></ProfileImage>
          <ColorPickerContainer>
            <SliderPicker
              color={bgcolor}
              onChangeComplete={(bgcolor) => {
                console.log("bg color : ", bgcolor);
                return setBgcolor(bgcolor);
              }}
            />
          </ColorPickerContainer>
        </ProfileSectionLeft>
        <ProfileDescription>
          <NameInput
            placeholder="이름을 입력해주세요"
            value={userInfo.name}
          ></NameInput>
          <JobInput
            placeholder="직업을 입력해주세요(ex - 백엔드 개발자)"
            value={userInfo.job}
          ></JobInput>
          <ProfileIntroductionContainer>
            <ProfileIntroductionTitle>
              한줄 소개 (300자 이내)
            </ProfileIntroductionTitle>
            <ProfileIntroductionInput
              placeholder="채용 담당자에게 특별한 인상을 줄 수 있는 소개 글을 작성해보세요."
              value={userInfo.description}
            ></ProfileIntroductionInput>
          </ProfileIntroductionContainer>
          <ProfileAdditionalInfo>
            <InputLabel>
              <InputTitle>생년월일</InputTitle>
              <InputContainer value={userInfo.birthDate}></InputContainer>
            </InputLabel>
            <InputLabel>
              <InputTitle>전화번호</InputTitle>
              <InputContainer value={userInfo.phoneNumber}></InputContainer>
            </InputLabel>
            <InputLabel>
              <InputTitle>이메일</InputTitle>
              <InputContainer value={userInfo.email}></InputContainer>
            </InputLabel>
          </ProfileAdditionalInfo>
        </ProfileDescription>
      </ProfileContainer>
    </ProfileSectionStyle>
  );
}

export default ProfileSection;
