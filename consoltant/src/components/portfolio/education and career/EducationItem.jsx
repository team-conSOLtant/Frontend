import React from "react";
import styled from "styled-components";

const EducationItemStyle = styled.div`
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

const SchoolInfo = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 0.1rem solid black;
  width: 50%;
  height: 14rem;
  justify-content: center;
  align-items: center;
`;
const SchoolContainer = styled.div``;
const SchoolName = styled.div``;
const Duration = styled.div``;
const MajorAndDegree = styled.div``;

const GradeContainer = styled.div``;
const Grade = styled.div``;
const TotalGrade = styled.div``;

const MiddleLine = styled.div`
  border-left: 0.1rem solid black;
  height: 30vh;
`;

const CourseInfo = styled.div`
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

function EducationItem(props) {
  // console.log("props: ", props);
  return (
    <EducationItemStyle>
      <SchoolInfo>
        <SchoolContainer>
          <SchoolName>{props.education.university?.name}</SchoolName>
          <Duration></Duration>
        </SchoolContainer>
        <MajorAndDegree>{props.education.major} / 학사</MajorAndDegree>
        <GradeContainer>
          <Grade>{props.education.totalGpa}</Grade>
          <TotalGrade>/ {"4.5"}</TotalGrade>
        </GradeContainer>
      </SchoolInfo>
      <CourseInfo>
        <CourseTitle>이수과목</CourseTitle>
        <TagContainer>
          {["운영체제 A", "컴퓨터구조론 A+", "자료구조 A"].map((text) => (
            <Tag>{text}</Tag>
          ))}
        </TagContainer>
      </CourseInfo>
    </EducationItemStyle>
  );
}

export default EducationItem;
