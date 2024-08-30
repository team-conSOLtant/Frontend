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
  margin-bottom: 3rem;
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
  justify-content: start;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const InputTitle = styled.div`
  font-size: 1rem;
  font-family: "OneShinhanBold";
  margin: 0 7rem 0.5rem 3rem;
`;
const SubSectionTitleText = styled.div`
  font-size: 1.2rem;
`;
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
  education,
  isEdit,
  careerItems,
  setCareerItems,
  courseItems,
  setCourseItems,
}) {
  const [careerForms, setCareerForms] = useState([new CareerDTO()]);
  console.log("careerFormscareerFormscareerFormscareerForms", careerForms);
  const addCareerForm = () => {
    setCareerForms([...careerForms, new CareerDTO()]);
  };
  const updateCareerForm = (updatedForm) => {
    setCareerForms((prevForms) =>
      prevForms.map((form) =>
        form.key === updatedForm.key ? updatedForm : form
      )
    );
  };

  const submitCareerForm = (newForm) => {
    console.log("newFornewFormnewFormnewFormnewFormm", newForm);
    setCareerItems([...careerItems, newForm]);
    setCareerForms(careerForms.filter((form) => form.key !== newForm.key));
  };
  const editItem = (data) => {
    setCareerForms([...careerForms, data]);
    setCareerItems(careerItems.filter((item) => item.key !== data.key));
  };
  const deleteItem = (data) => {
    setCareerItems(careerItems.filter((item) => item.key !== data.key));
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
            <EducationItem
              education={education}
              courseItems={courseItems}
            ></EducationItem>
          </SubSectionBody>
        </SubSectionStyle>
        <SubSectionStyle>
          <SubSectionHeader>
            <SubSectionTitleText>경력</SubSectionTitleText>
            {isEdit && <PlusButton onClick={addCareerForm}>+</PlusButton>}
          </SubSectionHeader>
          <hr className="border-[#444444] w-[96%] mx-[2%] mb-4" />
          <SubSectionBody>
            {/* <TableHeader>
              <InputTitle>회사명</InputTitle>
              <InputTitle>직급</InputTitle>
              <InputTitle>기간</InputTitle>
            </TableHeader> */}
            {isEdit &&
              careerForms.map((data) => (
                <CareerForm
                  key={data.key}
                  data={data}
                  updateForm={updateCareerForm}
                  submitForm={() => submitCareerForm(data)}
                ></CareerForm>
              ))}
            {careerItems.length > 0 &&
              careerItems.map((data) => (
                <CareerItem
                  isEdit={isEdit}
                  data={data}
                  key={data.key}
                  editItem={() => editItem(data)}
                  deleteItem={() => deleteItem(data)}
                />
              ))}
          </SubSectionBody>
        </SubSectionStyle>
      </SectionBody>
    </EducationSectionStyle>
  );
}

export default EducationCareerSection;
