import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProjectForm from "./ProjectForm";
import ProjectItem from "./ProjectItem";

import SectionHeader from "../SectionHeader";
import { getProjects } from "../../../apis/Project";
import ProjectDTO from "../../../dto/ProjectDTO";
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

function ProjectSection({ isEdit, projectItems, setProjectItems }) {
  const [projectForms, setProjectForms] = useState([new ProjectDTO()]);
  const addProjectForm = () => {
    setProjectForms([...projectForms, new ProjectDTO()]);
  };
  const updateProjectForm = (updatedForm) => {
    setProjectForms((prevForms) =>
      prevForms.map((form) =>
        form.key === updatedForm.key ? updatedForm : form
      )
    );
  };
  const submitProjectForm = (newForm) => {
    console.log(newForm);
    setProjectItems([...projectItems, newForm]);
    setProjectForms(projectForms.filter((form) => form.key !== newForm.key));
  };

  return (
    <ProjectSectionStyle>
      <SectionHeader title={"프로젝트"} image={"/Folders.svg"} />
      <SectionBody>
        {isEdit && (
          <PlusBoxContainer>
            <PlusBoxStyle onClick={addProjectForm}>
              <PlusBoxButton>+</PlusBoxButton>
            </PlusBoxStyle>
          </PlusBoxContainer>
        )}
        {isEdit &&
          projectForms.length > 0 &&
          projectForms.map((data) => (
            <ProjectForm
              key={data.key}
              data={data}
              updateForm={updateProjectForm}
              submitForm={() => submitProjectForm(data)}
            />
          ))}
        {projectItems.length > 0 &&
          projectItems.map((data) => (
            <ProjectItem key={data.key} data={data} />
          ))}
      </SectionBody>
    </ProjectSectionStyle>
  );
}

export default ProjectSection;
