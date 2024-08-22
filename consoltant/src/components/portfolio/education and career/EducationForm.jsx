import React from "react";
import styled from "styled-components";

const EducationFormStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0 1rem 0.5rem 1rem;
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
  height: 2rem;
  padding-left: 0.3rem;
  width: 15rem;
  box-shadow: 0 2px 2px rgb(0, 0, 0, 0.25);
`;

const GradeInputContainer = styled.input`
  border: #c7c7c7 0.1rem solid;
  border-radius: 0.3rem;
  background-color: #fbfbfd;
  text-align: center;
  height: 2rem;
  padding-left: 0.3rem;
  width: 7.3rem;
  margin-right: 0.4rem;
  box-shadow: 0 2px 2px rgb(0, 0, 0, 0.25);
`;

const SchoolInput = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 0.1rem solid black;
  width: 50%;
  height: 14rem;
  justify-content: center;
  align-items: center;
`;

const MiddleLine = styled.div`
  border-left: 0.1rem solid black;
  height: 30vh;
`;

const CourseInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
`;

const CourseTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "OneShinhanBold";
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const CourseSelect = styled.select`
  display: flex;
  flex-direction: column;
  border: #c7c7c7 0.1rem solid;
  border-radius: 0.3rem;
  height: 2rem;
  padding-left: 0.3rem;
  width: 20rem;
  margin-right: 0.4rem;
  box-shadow: 0 2px 2px rgb(0, 0, 0, 0.25);
`;

const TagContainer = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 0.3rem;
`;

const Tag = styled.div`
  background-color: #fff8df;
  color: #444444;
  box-shadow: 0 2px 2px rgb(0, 0, 0, 0.25);

  width: auto;
  height: 1.5rem;
  line-height: 1.5rem;
  font-size: 1rem;
  margin: 0.3rem 0.3rem;
  padding: 0 0.7rem;
  border-radius: 1rem;
`;

function EducationForm(props) {
  return (
    <EducationFormStyle>
      <SchoolInput>
        <InputLabel>
          <InputTitle>학교명</InputTitle>
          <InputContainer></InputContainer>
        </InputLabel>
        <InputLabel>
          <InputTitle>학과</InputTitle>
          <InputContainer></InputContainer>
        </InputLabel>
        <InputLabel>
          <InputTitle>학점</InputTitle>
          <GradeInputContainer></GradeInputContainer>
          <GradeInputContainer></GradeInputContainer>
        </InputLabel>
        <InputLabel>
          <InputTitle>기간</InputTitle>
          <InputContainer></InputContainer>
        </InputLabel>
      </SchoolInput>
      <CourseInput>
        <InputLabel>
          <CourseTitle>이수과목</CourseTitle>
          <CourseSelect name="courses">
            <option value="알고리즘">알고리즘</option>
            <option value="운영체제">운영체제</option>
            <option value="창의학기제 및 학습">창의학기제 및 학습</option>
            <option value="컴퓨터구조론">컴퓨터구조론</option>
          </CourseSelect>
        </InputLabel>
        <TagContainer>
          {["운영체제 A", "컴퓨터구조론 A+", "자료구조 A"].map((text) => (
            <Tag>{text}</Tag>
          ))}
        </TagContainer>
      </CourseInput>
    </EducationFormStyle>
  );
}

export default EducationForm;
