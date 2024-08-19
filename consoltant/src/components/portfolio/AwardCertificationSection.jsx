import React, { useEffect, useState } from "react";
import "./PorfolioSection.css";
import styled from "styled-components";
import { getAwards } from "../../apis/Award";

const AwardCertificationSectionStyle = styled.div``;
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

function AwardCertificationSection() {
  const [awardData, setAwardData] = useState(null);

  useEffect(() => {
    getAwardData();
  }, [awardData]);

  const getAwardData = async () => {
    const res = await getAwards();
    // console.log("res", res.award);
    setAwardData(res.award);
  };
  const getCertificationdData = () => {};

  return (
    <AwardCertificationSectionStyle>
      <SectionHeader>
        <SectionTitleText>수상 / 자격증</SectionTitleText>
        <SectionTitleIcon />
      </SectionHeader>
      <SectionBody>
        <SubSectionStyle>
          <SubSectionHeader>
            <SubSectionTitleText>수상</SubSectionTitleText>
            <SubSectionTitleButton />
          </SubSectionHeader>
          <SubSectionBody>
            <AwardItem data={data}></AwardItem>
          </SubSectionBody>
        </SubSectionStyle>
        <SubSectionStyle>
          <SubSectionHeader>
            <SubSectionTitleText>자격증</SubSectionTitleText>
            <SubSectionTitleButton />
          </SubSectionHeader>
          <SubSectionBody></SubSectionBody>
        </SubSectionStyle>
      </SectionBody>
    </AwardCertificationSectionStyle>
  );
}

export default AwardCertificationSection;
