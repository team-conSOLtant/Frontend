import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SectionHeader from "../SectionHeader";
import EducationForm from "./EducationForm";
import CareerForm from "./CareerForm";
import CareerItem from "./CareerItem";
import EducationItem from "./EducationItem";
import useFormManager from "../../../Hooks/FormManager";
import CareerDTO from "../../../dto/CareerDTO";

const EducationSectionStyle = styled.div`
  width: 100%;
`;
const SectionTitleText = styled.div``;

const SectionTitleIcon = styled.img``;

const SectionBody = styled.div``;

const SubSectionStyle = styled.div``;

const SubSectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "OneShinhanBold";
  width: 100%;
  margin: 1rem 0;
  margin-left: 1rem;
  align-items: center;
`;

const SubSectionBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const TableHeader = styled.div`
  width: 100%;
  justify-content: space-evenly;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const InputTitle = styled.div`
  font-size: 0.8rem;
  font-family: "OneShinhanBold";
  margin-left: 0.3rem;
`;
const SubSectionTitleText = styled.div``;
const PlusButton = styled.div`
  background-color: #c7c7c7;
  color: white;
  width: 1.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  border-radius: 50%;
  margin-left: 0.5rem;
  box-shadow: 0 2px 2px rgb(0, 0, 0, 0.25);
`;
const SubSectionTitleButton = styled.div`
  background-color: #c7c7c7;
  color: white;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 2rem;
  text-align: center;
  line-height: 1.5rem;
  margin-left: 0.5rem;
`;

const InputLabel = styled.label``;
const InputContainer = styled.input`
  border: 1px solid black;
`;

const CareerItemView = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CompanyName = styled.label``;
const Rank = styled.label``;
const CareerDuration = styled.label``;

function EducationCareerSection({
  isEdit,
  educationAndcareer,
  setPortfolioData,
}) {
  const { state, addForm, deleteForm, updateForm, submitForm } = useFormManager(
    new CareerDTO()
  );

  const clickSubmit = (key) => {
    const selectedForm = state.formList.find((form) => form.key === key);
    if (selectedForm) {
      setPortfolioData((existingData) => ({
        ...existingData,
        educationAndcareer: {
          ...existingData.educationAndcareer,
          career: [
            ...existingData.career,
            {
              id: null,
              company: selectedForm.company,
              positionLevel: selectedForm.positionLevel,
              startDate: selectedForm.startDate,
              endDate: selectedForm.endDate,
              deleted: false,
            },
          ],
        },
      }));
    }
  };

  return (
    <EducationSectionStyle>
      <SectionHeader title={"학력 / 경력"} image={"/Briefcase.svg"} />

      <SectionBody>
        <SubSectionStyle>
          <SubSectionHeader>
            <SubSectionTitleText>학력</SubSectionTitleText>
          </SubSectionHeader>

          <SubSectionBody>
            {isEdit ? (
              <EducationForm></EducationForm>
            ) : (
              <EducationItem
                education={educationAndcareer?.education}
              ></EducationItem>
            )}
          </SubSectionBody>
        </SubSectionStyle>
        <SubSectionStyle>
          <SubSectionHeader>
            <SubSectionTitleText>경력</SubSectionTitleText>
            <PlusButton onClick={addForm}>+</PlusButton>
          </SubSectionHeader>
          <SubSectionBody>
            <TableHeader>
              <InputTitle>회사명</InputTitle>
              <InputTitle>직급</InputTitle>
              <InputTitle>기간</InputTitle>
            </TableHeader>
            {isEdit &&
              state.formList.map((data) => (
                <CareerForm
                  key={data.key}
                  data={data}
                  submit={() => clickSubmit(data.key)}
                ></CareerForm>
              ))}

            {educationAndcareer.career.length > 0 &&
              educationAndcareer.career.map((data) => (
                <CareerItem data={data}></CareerItem>
              ))}
          </SubSectionBody>
        </SubSectionStyle>
      </SectionBody>
    </EducationSectionStyle>
  );
}

export default EducationCareerSection;
