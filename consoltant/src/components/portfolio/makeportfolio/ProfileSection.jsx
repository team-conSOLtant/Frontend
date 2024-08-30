import React, { useEffect, useState } from "react";
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
  background-color: ${(props) => props.bgcolor};
`;

const ProfileImage = styled.div`
  /* display: flex;
  flex-direction: column;
  width: 12rem;
  height: 10rem;
  background-color: #f5f5f5;
  border-radius: 0.5rem; */
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
  flex-direction: row;
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
const ColorCircle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  border: ${(props) =>
    props.isSelected ? "0.1rem solid rgb(44, 44, 44, 0.3)" : null};
`;

const PlusBoxContainer = styled.div`
  width: 12rem;
  height: 14.4rem;
  display: flex;
  flex-wrap: "wrap";
  justify-content: center;
  align-items: center;
`;

const PlusBoxStyle = styled.div`
  height: 80%;
  width: 80%;
  background-color: #f5f5f5;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PlusBoxButton = styled.div`
  --ball-size: 5rem;
  height: var(--ball-size);
  width: var(--ball-size);
  border-radius: 3rem;
  font-size: 3rem;
  color: white;
  text-align: center;
  line-height: 5rem;
  background-color: #c7c7c7;
`;

function ProfileSection({ portfolioData, setPortfolioData }) {
  const [profileImage, setProfileImage] = useState();

  useEffect(() => {}, [setProfileImage]);

  const _changeBgColor = (bgColor) => {
    setPortfolioData({
      ...portfolioData,
      userInfo: {
        ...portfolioData.userInfo,
        backgroundColor: bgColor,
      },
    });
  };

  const base64Encoder = (file) => {
    return new Promise((resolve) => {
      let reader = new FileReader();
      reader.onload = (e) => {
        // console.log(e.target.result);
        resolve(e.target.result);
      };
      reader.readAsDataURL(file);
    });
  };

  const profileImageUpload = async (e) => {
    // 파일이 존재하는지 확인
    const file = e.target.files[0];
    if (!file) {
      console.log("No file selected");
      return; // 파일이 없으면 함수 종료
    }

    console.log("프로필 이미지 업로드!!!!", file);
    const img = await base64Encoder(file);
    const basse64Img = img.split(",")[1];
    console.log(basse64Img);
    await setProfileImage(img);
    await setPortfolioData({
      ...portfolioData,
      userInfo: {
        ...portfolioData.userInfo,
        imageUrl: basse64Img,
      },
    });
  };

    // console.log(
    //   "BGCOLORBGCOLORBGCOLORBGCOLORBGCOLORBGCOLOR++++++++++++++++++",
    //   bgColor
    // );
    // console.log(
    //   "BGCOLORBGCOLORBGCOLORBGCOLORBGCOLORBGCOLOR",
    //   portfolioData.userInfo.backgroundColor
    // );
  };
  const _changeJob = (value) => {};

  const _changeDescription = (value) => {
    console.log(
      "_changeDescription_changeDescription_changeDescription_changeDescription",
      value
    );
    setPortfolioData({
      ...portfolioData,
      userInfo: {
        ...portfolioData.userInfo,
        description: value,
      },
    });
  };

  return (
    <ProfileSectionStyle>
      <ProfileTitleContainer>
        <ProfileTitle>포트폴리오 작성하기</ProfileTitle>
        <ProfileSubTitle>
          해당 포트폴리오가 기업에게 노출되고 선후배 이력서 매칭 시 정보가
          노출되어 추천됩니다!
        </ProfileSubTitle>
      </ProfileTitleContainer>

      <ProfileContainer bgcolor={portfolioData.userInfo.backgroundColor}>
        <ProfileSectionLeft>
          <ProfileImage>
            <input
              type="file"
              name="file"
              className="hidden"
              id="file"
              accept="image/*"
              onChange={(e) => profileImageUpload(e)}
            />
            <label htmlFor="file" className="fileLabel">
              {profileImage ? (
                <img
                  className="w-[10rem] rounded-[1rem]"
                  src={profileImage}
                  alt=""
                ></img>
              ) : (
                <div className="flex flex-col items-center">
                  <PlusBoxContainer>
                    {/* 여기에 onClick 추가 */}
                    <PlusBoxStyle>
                      <PlusBoxButton>+</PlusBoxButton>
                    </PlusBoxStyle>
                  </PlusBoxContainer>
                </div>
              )}
            </label>
          </ProfileImage>
          <ColorPickerContainer>
            {["#DFE4FF", "#FFDFDF", "#E9FFDF", "#DFF0FF", "#FFF8DF"].map(
              (bgColor) => (
                <ColorCircle
                  bgColor={bgColor}
                  isSelected={
                    portfolioData.userInfo.backgroundColor === bgColor
                  }
                  onClick={() => _changeBgColor(bgColor)}
                />
              )
            )}
          </ColorPickerContainer>
        </ProfileSectionLeft>
        <ProfileDescription>
          <NameInput
            placeholder="이름을 입력해주세요"
            value={portfolioData.userInfo.name}
          ></NameInput>
          <JobInput
            placeholder="직업을 입력해주세요(ex - 백엔드 개발자)"
            value={portfolioData.userInfo.job}
            onChange={() => _changeJob(portfolioData.userInfo.job)}
          ></JobInput>
          <ProfileIntroductionContainer>
            <ProfileIntroductionTitle>
              한줄 소개 (300자 이내)
            </ProfileIntroductionTitle>
            <ProfileIntroductionInput
              placeholder="채용 담당자에게 특별한 인상을 줄 수 있는 소개 글을 작성해보세요."
              value={portfolioData.userInfo.description}
              onChange={(e) => _changeDescription(e.target.value)}
            ></ProfileIntroductionInput>
          </ProfileIntroductionContainer>
          <ProfileAdditionalInfo>
            <InputLabel>
              <InputTitle>생년월일</InputTitle>
              <InputContainer
                value={portfolioData.userInfo.birthDate}
              ></InputContainer>
            </InputLabel>
            <InputLabel>
              <InputTitle>전화번호</InputTitle>
              <InputContainer
                value={portfolioData.userInfo.phoneNumber}
              ></InputContainer>
            </InputLabel>
            <InputLabel>
              <InputTitle>이메일</InputTitle>
              <InputContainer
                value={portfolioData.userInfo.email}
              ></InputContainer>
            </InputLabel>
          </ProfileAdditionalInfo>
        </ProfileDescription>
      </ProfileContainer>
    </ProfileSectionStyle>
  );
}

export default ProfileSection;
