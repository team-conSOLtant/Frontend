import React, { useState } from "react";
import styled from "styled-components";
import RangeDatePicker from "../../common/RangeDatePicker";

const ProjectItemStyle = styled.div`
  background-color: #ffffff;
  width: 70%;
  font-size: 1rem;
  border: #b9d5ff 0.1rem solid;
  border-radius: 0.5rem;
  margin: 0.3rem 0.3rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  color: #444444;
`;

const ProjectHeader = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  padding-left: 0.3rem;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const ProjectTitleStyle = styled.div`
  font-family: "OneShinhanBold";
  text-align: center;
`;

const ProjectDateStyle = styled.div`
  width: auto;
  text-align: center;
  font-size: 0.8rem;
  margin-left: 1rem;
`;
// 여기까지 header

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.5rem;
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

const ProjectLabelStyle = styled.label`
  display: flex;
  flex-direction: column;
  width: 36rem;
`;

const ProjectInput = styled.input`
  border: #c7c7c7 1px solid;
  border-radius: 0.2rem;
  background-color: #fbfbfd;
  padding-left: 0.3rem;
`;

const ProjectDescriptionLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.2rem;
`;

const BulletPoint = styled.div`
  background-color: #d9d9d9;
  width: 1rem;
  height: 1rem;
  border-radius: 0.2rem;
  margin: 0.3rem;
`;

const ProjectDescriptionText = styled.div`
  font-family: "OneShinhanLight";
  font-size: 0.9rem;
`;

const ProjectSubDescriptionLine = styled.li`
  margin-left: 2rem;
  font-family: "OneShinhanLight";
  font-size: 0.8rem;
`;

const ProjectAcqDateStyle = styled.div`
  font-size: 0.7rem;
  text-align: right;
  font-family: "OneShinhanBold";
`;

const ProjectIntroduction = styled.ul`
  width: 36rem;
`;
const ProjectIntroductionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProjectSelectedKeywordContainer = styled.div`
  width: 36rem;
`;
const ProjectIntroductionContent = styled.input`
  border: #c7c7c7 1px solid;
  border-radius: 0.2rem;
  background-color: #fbfbfd;
  padding-left: 0.3rem;
`;

const ProjectIntroductionRole = styled.input`
  border: #c7c7c7 1px solid;
  border-radius: 0.2rem;
  background-color: #fbfbfd;
  padding-left: 0.3rem;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  color: white;
`;

const Button = styled.div`
  width: 49%;
  height: 2rem;
  background-color: #b9d5ff;
  text-align: center;
  line-height: 1rem;
  border-radius: 0.2rem;
`;

const ProjectTeamComposition = styled.input``;

const ProjectURL = styled.input``;

// const ProjectTeamCompositionContainer = styled.div``;

// const ProjectTeamCompositionContainer = styled.div``;

// const ProjectIntroduction = styled.div``;

// 포트폴리오 옆에서 순서 바꾸게 리모컨 역할 해주는 것
function ProjectItem({ data, isEdit, editItem, deleteItem }) {
  console.log("ProjectItemProjectItemProjectItemProjectItem", data);
  return (
    <ProjectItemStyle>
      <ProjectHeader>
        <ProjectTitleStyle>{data?.title}</ProjectTitleStyle>
        <ProjectDateStyle>
          {data?.startDate} ~ {data?.endDate}
        </ProjectDateStyle>
      </ProjectHeader>
      <TagContainer>
        {data?.language?.map((dto) => (
          <Tag>{dto.word}</Tag>
        ))}
      </TagContainer>
      <ProjectDescriptionLine>
        <BulletPoint />
        <ProjectDescriptionText>{data?.description}</ProjectDescriptionText>
      </ProjectDescriptionLine>
      {data?.contents.map((dto) => (
        <ProjectSubDescriptionLine>{dto.content}</ProjectSubDescriptionLine>
      ))}
      <ProjectDescriptionLine>
        <BulletPoint />
        <ProjectDescriptionText>
          팀 구성 : {data?.projectUsers?.length}명
        </ProjectDescriptionText>
      </ProjectDescriptionLine>
      <TagContainer>
        {data?.projectUsers.map((dto, index) => (
          <Tag key={index}>{dto.name}</Tag>
        ))}
      </TagContainer>
      <ProjectDescriptionLine>
        <BulletPoint />
        <ProjectDescriptionText>
          URL : {data?.projectUrl}
        </ProjectDescriptionText>
      </ProjectDescriptionLine>
      {isEdit && (
        <Buttons>
          <Button onClick={editItem}>수정</Button>
          <Button onClick={deleteItem}>삭제</Button>
        </Buttons>
      )}
    </ProjectItemStyle>
  );
}

export default ProjectItem;
