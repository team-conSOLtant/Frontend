import React, { useEffect, useState } from "react";
import "./PorfolioSection.css";
import styled from "styled-components";
import { getAwards } from "../../apis/Award";
import AwardItem from "./AwardItem";
<<<<<<< HEAD
import AwardForm from "./AwardForm";
import CertificationItem from "./CertificationItem";
=======
>>>>>>> 5e9ffaebb53271a0ff5049ed17f7946501a6badd

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
  flex-wrap: wrap;
  background-color: green;
  height: auto;
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
const PlusBoxContainer = styled.div`
  width: 12rem;
  height: 14.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PlusBox = styled.div`
  height: 12rem;
  width: 10rem;
  background-color: #f5f5f5;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PlusBoxButton = styled.div`
  height: 4rem;
  width: 4rem;
  border-radius: 2rem;
  background-color: #c7c7c7;
`;

function AwardCertificationSection() {
  const [awardData, setAwardData] = useState(null);
  const [awardNum, setAwardNum] = useState(1);
  const [certificationData, setCertificationData] = useState(null);
  const [certificationNum, setCertificationNum] = useState(1);

  useEffect(() => {
    getAwardData();
  }, []);

  const getAwardData = async () => {
    const res = await getAwards();
    // console.log("res", res.award);
    setAwardData(res.award);
  };

  const getCertificationdData = () => {
    // const res = await getCertifications();
    // console.log("res", res.award);
    // setAwardData(res.award);
  };

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
<<<<<<< HEAD
            <CertificationItem />
            {awardData && awardData.map((data) => <AwardItem data={data} />)}
            {Array.from({ length: awardNum }, (_, index) => (
              <AwardForm key={index}>Award {index + 1}</AwardForm>
            ))}
            <PlusBoxContainer>
              <PlusBox>
                <PlusBoxButton></PlusBoxButton>
              </PlusBox>
            </PlusBoxContainer>
=======
            <AwardItem data={awardData}></AwardItem>
>>>>>>> 5e9ffaebb53271a0ff5049ed17f7946501a6badd
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
