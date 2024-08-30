import React from "react";
import styled from "styled-components";

const EducationItemStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0 1rem 0.5rem 1rem;
`;

const SchoolInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 10rem;
  padding-left: 3rem;
  border-right: 1px solid #5c5c5c;
  margin-right: 2rem;
`;
const SchoolContainer = styled.div`
  margin: 0.5rem 0;
`;
const SchoolName = styled.div`
  font-size: 1.3rem;
  font-family: "OneShinhanBold";
`;
const Duration = styled.div``;
const MajorAndDegree = styled.div``;

const GradeContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0;
`;
const Grade = styled.div``;
const TotalGrade = styled.div``;

const CourseInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
`;

const CourseTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "OneShinhanBold";
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;
const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 7rem; /* 적절한 높이 설정 */
  overflow-y: auto; /* 수직 스크롤뷰 활성화 */
  padding-right: 8px; /* 스크롤바로 인해 내용이 가려지지 않도록 패딩 추가 */

  /* 스크롤바 커스터마이징 */
  ::-webkit-scrollbar {
    width: 6px; /* 스크롤바 너비 조정 */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 모서리 둥글게 */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* 스크롤바 호버 색상 */
  }

  ::-webkit-scrollbar-track {
    background: transparent; /* 트랙 색상 (투명하게 설정) */
  }
`;

const Tag = styled.div`
  background-color: #fff8df;
  color: #444444;
  box-shadow: 0 2px 2px rgb(0, 0, 0, 0.25);
  height: 1.5rem;
  width: auto;
  line-height: 1.5rem;
  font-size: 1rem;
  margin: 0.3rem 0.3rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 1rem;
`;
const TagName = styled.div``;

const TagGrade = styled.div`
  margin-left: 0.5rem;
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
          {props.courseItems.map((course) => (
            <Tag>
              <TagName>{course.subjectName}</TagName>
              <TagGrade>{course.grade}</TagGrade>
            </Tag>
          ))}
        </TagContainer>
      </CourseInfo>
    </EducationItemStyle>
  );
}

export default EducationItem;
