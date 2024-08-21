import React, { useEffect, useState } from "react";
import "./PorfolioSection.css";
import styled from "styled-components";
import SectionHeader from "./SectionHeader";
import EducationForm from "./EducationForm";
import CareerForm from "./CareerForm";
import CareerItem from "./CareerItem";

const EducationSectionStyle = styled.div`
  width: 100%;
`;
const SectionTitleText = styled.div``;

const SectionTitleIcon = styled.img``;

const SectionBody = styled.div``;

const SubSectionStyle = styled.div``;

const SubSectionHeader = styled.div``;

const SubSectionBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SubSectionTitleText = styled.div``;

const SubSectionTitleButton = styled.div``;

const InputLabel = styled.label``;
const InputContainer = styled.input`
  border: 1px solid black;
`;

function EducationCareerSection() {
  const [awardData, setAwardData] = useState(null);

  useEffect(() => {
    getAwardData();
  }, [awardData]);

  const getAwardData = () => {};
  const getCertificationdData = () => {};

  return (
    <EducationSectionStyle>
      <SectionHeader title={"학력 / 경력"} image={"/Briefcase.svg"} />

      <SectionBody>
        <SubSectionStyle>
          <SubSectionHeader>
            <SubSectionTitleText>학력</SubSectionTitleText>
            <SubSectionTitleButton />
          </SubSectionHeader>

          <SubSectionBody>
            <EducationForm></EducationForm>
          </SubSectionBody>
        </SubSectionStyle>
        <SubSectionStyle>
          <SubSectionHeader>
            <SubSectionTitleText>경력</SubSectionTitleText>
            <SubSectionTitleButton />
          </SubSectionHeader>
          <SubSectionBody>
            <CareerForm></CareerForm>
            <CareerItem></CareerItem>
          </SubSectionBody>
        </SubSectionStyle>
      </SectionBody>
    </EducationSectionStyle>
  );
}

export default EducationCareerSection;
