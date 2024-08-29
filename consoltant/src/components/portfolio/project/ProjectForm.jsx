import React, { useState } from "react";
import styled from "styled-components";
import RangeDatePicker from "../../common/RangeDatePicker";

const ProjectTop = styled.div`
  width: 100%;
`;
const ProjectLeftTop = styled.div`
  width: 70%;
`;
const ProjectRightTop = styled.div`
  width: 30%;
`;

const ProjectItemStyle = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  width: 40rem;
  height: 22rem;
  font-size: 1rem;
  border: #b9d5ff 0.1rem solid;
  border-radius: 0.5rem;
  margin: 0.3rem 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0.5rem;
`;

const ProjectLabelStyle = styled.label`
  display: flex;
  flex-direction: column;
  width: 70%;
`;
const ProjectDatePickerLabelStyle = styled.div`
  width: 20%;
`;

const ProjectHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProjectTitleStyle = styled.input`
  font-family: "OneShinhanBold";
  padding-top: 0.5rem;
  border: #c7c7c7 1px solid;
  border-radius: 0.2rem;
  background-color: #fbfbfd;
  padding-left: 0.3rem;
`;
const ProjectDatePicker = styled.div``;

const ProjectAcqDateStyle = styled.div`
  font-size: 0.7rem;
  text-align: right;
  font-family: "OneShinhanBold";
`;

const ProjectIntroduction = styled.div`
  width: 36rem;
`;

const ProjectIntroductionTitle = styled.div``;
const ProjectIntroductionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProjectInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.2rem 0;
`;

const ProjectInputLargeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  margin: 0.2rem 0;
`;

const ProjectInput = styled.input`
  border: #c7c7c7 1px solid;
  border-radius: 0.2rem;
  background-color: #fbfbfd;
  padding-left: 0.3rem;
  width: 90%;
`;

const ProjectInputMargin = styled.input`
  border: #c7c7c7 1px solid;
  border-radius: 0.2rem;
  background-color: #fbfbfd;
  padding-left: 0.3rem;
  width: 90%;
  margin-left: 1.5rem;
`;

const ProjectInputLarge = styled.textarea`
  border: #c7c7c7 1px solid;
  border-radius: 0.2rem;
  background-color: #fbfbfd;
  padding: 0.1rem 0.5rem;
  align-items: baseline;
  width: 90%;
  height: 5rem;
  resize: none; /* 크기 조절 비활성화 */
`;

const BulletPoint = styled.div`
  background-color: #d9d9d9;
  width: 1rem;
  height: 1rem;
  border-radius: 0.2rem;
  margin: 0.3rem;
`;
const ProjectSelectedKeywordContainer = styled.div`
  width: 36rem;
  display: flex;
  flex-direction: row;
  margin-top: 0.3rem;
`;

const ProjectTeamComposition = styled.div`
  width: 36rem;
  display: flex;
  flex-direction: row;
  margin-top: 0.3rem;
  margin-left: 1.5rem;
`;

const Tag = styled.div`
  background-color: rgb(185, 213, 255, 0.3);
  width: auto;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.5rem;
  margin: 0 0.2rem;
  padding: 0 0.3rem;
  border-radius: 0.5rem;
`;

const PlusButton = styled.div`
  background-color: gray;
  color: white;
  text-align: center;
  line-height: 1rem;
  width: 1rem;
  height: 1rem;
  border-radius: 0.5rem;
  margin-left: 0.5rem;
`;
const SubmitButton = styled.div`
  width: 100%;
  background-color: #b9d5ff;
  color: white;
  display: flex;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  height: 2rem;
  margin-bottom: 0.3rem;
`;

const ProjectDescriptionLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function ProjectForm({ data, updateForm, submitForm }) {
  const [introductionCount, setIntroductionCount] = useState();
  const [description, setDescription] = useState({ title: null, contents: [] });

  const _changeTitle = (value) => {
    updateForm({ ...data, title: value });
  };
  const _changeKeyword = (value) => {
    updateForm({ ...data, content: value });
  };
  const _changeGrade = (value) => {
    updateForm({ ...data, awardGrade: value });
  };
  const _changeOrganization = (value) => {
    updateForm({ ...data, awardOrganization: value });
  };
  const _changeProjectUrl = (value) => {
    updateForm({ ...data, projectUrl: value });
  };

  const addDescription = () => {
    setDescription({
      title: description.title,
      contents: ["", ...description.contents],
    });
  };
  return (
    <ProjectItemStyle>
      <ProjectTop>
        <ProjectLeftTop>
          <ProjectDescriptionLine>
            <BulletPoint />
            프로젝트명
          </ProjectDescriptionLine>
          <ProjectInputMargin
            placeholder="프로젝트명을 입력해주세요"
            value={data?.title}
            onChange={(e) => _changeTitle(e.target.value)}
          />
          <ProjectDescriptionLine>
            <BulletPoint />
            키워드
          </ProjectDescriptionLine>
          <ProjectInputMargin
            placeholder="키워드를 입력해주세요"
            value={data?.title}
            onChange={(e) => _changeKeyword(e.target.value)}
          />
          {/* <ProjectSelectedKeywordContainer>
            {data?.language?.split(",").map((text) => (
              <Tag>{text}</Tag>
            ))}
          </ProjectSelectedKeywordContainer> */}
          <ProjectDescriptionLine>
            <BulletPoint />
            프로젝트 소개
          </ProjectDescriptionLine>
          <ProjectInputMargin
            placeholder="소개 제목을 입력해주세요"
            value={data?.title}
            onChange={(e) => _changeTitle(e.target.value)}
          />
          {description.title &&
            description.contents.map((content, index) => (
              <ProjectInputLargeContainer>
                <BulletPoint />
                <ProjectInputLarge
                  placeholder="자신의 역할 및 한 일에 대해서 작성해주세요"
                  value={content}
                />
                {index === 0 && (
                  <PlusButton onClick={addDescription}>+</PlusButton>
                )}
              </ProjectInputLargeContainer>
            ))}
          <ProjectDescriptionLine>
            <BulletPoint />팀 구성
          </ProjectDescriptionLine>
          <ProjectInputMargin placeholder="팀 구성원을 이메일로 추가해보세요" />
          <ProjectTeamComposition>
            {["@김준우", "@고다현", "@이동열"].map((text) => (
              <Tag>{text}</Tag>
            ))}
          </ProjectTeamComposition>
          <ProjectDescriptionLine>
            <BulletPoint />
            URL
          </ProjectDescriptionLine>
          <ProjectInputMargin
            placeholder="URL을 입력해주세요"
            value={data?.projectUrl}
            onChange={(e) => _changeProjectUrl(e.target.value)}
          />
        </ProjectLeftTop>
        <ProjectRightTop></ProjectRightTop>
      </ProjectTop>
      {/* <ProjectIntroduction>
        <ProjectIntroductionTitle>프로젝트 소개</ProjectIntroductionTitle>
        <ProjectIntroductionContentContainer>
          <ProjectInputContainer>
            <BulletPoint />
            <ProjectInput
              placeholder="프로젝트에 대해 간단한 소개를 적어주세요"
              value={description.title}
            />
          </ProjectInputContainer>
        </ProjectIntroductionContentContainer>
      </ProjectIntroduction> */}
      <ProjectLabelStyle></ProjectLabelStyle>

      <ProjectLabelStyle></ProjectLabelStyle>
      <SubmitButton onClick={submitForm}>제출</SubmitButton>
    </ProjectItemStyle>
  );
}

export default ProjectForm;
