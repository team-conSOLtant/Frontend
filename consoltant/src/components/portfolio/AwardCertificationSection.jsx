import React, { useEffect, useState } from "react";
import "./PorfolioSection.css";
import styled from "styled-components";
import { getAwards } from "../../apis/Award";
import AwardItem from "./AwardItem";

const AwardCertificationSectionStyle = styled.div`
  width: 100%;
  background-color: red;
`;
const SectionHeader = styled.div`
  width: 100%;
`;
const SectionTitleText = styled.div`
  width: 100%;
`;

const SectionTitleIcon = styled.img`
  width: 100%;
`;

const SectionBody = styled.div`
  width: 100%;
  background-color: blue;
  height: 50vh;
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
  background-color: green;
  height: 40vh;
  width: 100%;
  flex-direction: row;
`;

const SubSectionTitleText = styled.div`
  width: 100%;
`;

const SubSectionTitleButton = styled.div``;

const InputLabel = styled.label``;
const InputContainer = styled.input`
  border: 1px solid black;
`;

function AwardCertificationSection() {
  const [awardData, setAwardData] = useState(null);

  useEffect(() => {
    getAwardData();
  }, []);

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
            {awardData && awardData.map((data) => <AwardItem data={data} />)}
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
