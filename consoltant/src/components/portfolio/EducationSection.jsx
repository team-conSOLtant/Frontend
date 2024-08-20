import React, { useEffect, useState } from "react";
import "./PorfolioSection.css";
import styled from "styled-components";

const EducationSectionStyle = styled.div``;
const SectionHeader = styled.div``;
const SectionTitleText = styled.div``;

const SectionTitleIcon = styled.img``;

const SectionBody = styled.div``;

const SubSectionStyle = styled.div``;

const SubSectionHeader = styled.div``;

const SubSectionBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubSectionTitleText = styled.div``;

const SubSectionTitleButton = styled.div``;

const InputLabel = styled.label``;
const InputContainer = styled.input`
  border: 1px solid black;
`;

function EducationSection() {
  const [awardData, setAwardData] = useState(null);

  useEffect(() => {
    getAwardData();
  }, [awardData]);

  const getAwardData = () => {};
  const getCertificationdData = () => {};

  return (
    <EducationSectionStyle>
      <SectionHeader>
        <SectionTitleText>학력 / 경력</SectionTitleText>
        <SectionTitleIcon />
      </SectionHeader>
      <SectionBody>
        <SubSectionStyle>
          <SubSectionHeader>
            <SubSectionTitleText>학력</SubSectionTitleText>
            <SubSectionTitleButton />
          </SubSectionHeader>
          <SubSectionBody>
            <InputLabel>
              학교명 <InputContainer></InputContainer>
            </InputLabel>
            <InputLabel>
              학과 <InputContainer></InputContainer>
            </InputLabel>
            <InputLabel>
              학점 <InputContainer></InputContainer>
            </InputLabel>
            <InputLabel>
              기간 <InputContainer></InputContainer>
            </InputLabel>
          </SubSectionBody>
        </SubSectionStyle>
        <SubSectionStyle>
          <SubSectionHeader>
            <SubSectionTitleText>경력</SubSectionTitleText>
            <SubSectionTitleButton />
          </SubSectionHeader>
          <SubSectionBody></SubSectionBody>
        </SubSectionStyle>
      </SectionBody>
    </EducationSectionStyle>
  );
}

export default EducationSection;
