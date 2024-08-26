import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProjectForm from "./ProjectForm";
import ProjectItem from "./ProjectItem";

import SectionHeader from "../SectionHeader";
import { getProjects } from "../../../apis/Project";
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

const PlusBoxContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PlusBoxStyle = styled.div`
  height: 80%;
  width: 60%;
  background-color: #f5f5f5;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PlusBoxButton = styled.div`
  --ball-size: 1.5rem;
  height: var(--ball-size);
  width: var(--ball-size);
  border-radius: 2rem;
  background-color: #c7c7c7;
  text-align: center;
  color: white;
  font-family: "OneShinhanBold";
`;
function ProjectSection({ isEdit }) {
  const [formList, setFormList] = useState([{}]);
  const [projectList, setProjectList] = useState([]);
  const addForm = () => {};

  useEffect(() => {
    getProjectData();
  }, []);

  const getProjectData = async () => {
    const res = await getProjects();
    // console.log("res", res.award);
    setProjectList(res);
  };

  return (
    <ProjectSectionStyle>
      <SectionHeader title={"프로젝트"} image={"/Folders.svg"} />
      <SectionBody>
        {isEdit && (
          <PlusBoxContainer>
            <PlusBoxStyle onClick={addForm}>
              <PlusBoxButton>+</PlusBoxButton>
            </PlusBoxStyle>
          </PlusBoxContainer>
        )}
        {isEdit && formList.map(() => <ProjectForm />)}
        {projectList.length > 0 &&
          projectList.map((data) => <ProjectItem data={data} />)}
      </SectionBody>
    </ProjectSectionStyle>
  );
}

export default ProjectSection;
