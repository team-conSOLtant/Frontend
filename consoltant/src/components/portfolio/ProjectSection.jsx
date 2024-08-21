import React from "react";
import styled from "styled-components";
import ProjectForm from "./ProjectForm";
import ProjectItem from "./ProjectItem";

import PlusBox from "../common/PlusBox";
import SectionHeader from "./SectionHeader";
const ProjectSectionStyle = styled.div`
  width: 100%;
`;

const SectionBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubSectionStyle = styled.div`
  width: 100%;
`;

const SubSectionHeader = styled.div`
  width: 100%;
`;

const SubSectionBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: green;
  height: auto;
  width: 100%;
  flex-direction: row;
`;

const SubSectionTitleText = styled.div`
  width: 100%;
`;

const SubSectionTitleButton = styled.div``;

const InputLabel = styled.label``;

const InputContainer = styled.input`
  border: 1px solid black;
`;

const PlusBoxContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProjectSection(props) {
  const addForm = () => {
    // console.log(awardNum);
    // setAwardNum(awardNum + 1);
  };

  return (
    <ProjectSectionStyle>
      <SectionHeader title={"프로젝트"} image={"/Folders.svg"} />
      <SectionBody>
        <PlusBoxContainer>
          <PlusBox onClick={addForm} />
        </PlusBoxContainer>
        <ProjectForm />
        <ProjectItem />
      </SectionBody>
    </ProjectSectionStyle>
  );
}

export default ProjectSection;
