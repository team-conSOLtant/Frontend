import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAwards } from "../../../apis/Award";
import AwardItem from "./AwardItem";
import AwardForm from "./AwardForm";
import CertificationItem from "./CertificationItem";
import CertificationForm from "./CertificationForm";
import SectionHeader from "../SectionHeader";
import { getCertifications } from "../../../apis/Certification";

const AwardCertificationSectionStyle = styled.div`
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

  height: auto;
`;

const SubSectionStyle = styled.div`
  width: 100%;
`;

const SubSectionHeader = styled.div`
  font-family: "OneShinhanBold";
  width: 100%;
  margin: 1rem 0;
  margin-left: 1rem;
`;

const SubSectionBody = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
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
  flex-wrap: "wrap";
  justify-content: center;
  align-items: center;
`;

const PlusBoxStyle = styled.div`
  height: 80%;
  width: 80%;
  background-color: #f5f5f5;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PlusBoxButton = styled.div`
  --ball-size: 5rem;
  height: var(--ball-size);
  width: var(--ball-size);
  border-radius: 3rem;
  font-size: 3rem;
  color: white;
  text-align: center;
  line-height: 5rem;
  background-color: #c7c7c7;
`;

const PlusBoxCertContainer = styled.div`
  width: 12rem;
  height: 4.8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const PlusBoxCertStyle = styled.div`
  height: 80%;
  width: 80%;
  background-color: #f5f5f5;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PlusBoxCertButton = styled.div`
  --ball-size: 3rem;
  height: var(--ball-size);
  width: var(--ball-size);
  border-radius: 3rem;
  font-size: 2rem;
  color: white;
  text-align: center;
  line-height: 3rem;
  background-color: #c7c7c7;
`;

function AwardCertificationSection({ isEdit }) {
  const [awardData, setAwardData] = useState([]);
  const [awardNum, setAwardNum] = useState(1);
  const [certificationData, setCertificationData] = useState([]);
  const [certificationNum, setCertificationNum] = useState(1);

  useEffect(() => {
    getAwardData();
    getCertificationdData();
  }, []);

  const getAwardData = async () => {
    const res = await getAwards();
    // console.log("res", res.award);
    setAwardData(res.award);
  };

  const addAwardForm = () => {
    console.log(awardNum);
    setAwardNum(awardNum + 1);
  };

  const addCertForm = () => {
    console.log(certificationNum);
    setCertificationNum(certificationNum + 1);
  };

  const getCertificationdData = async () => {
    const res = await getCertifications();
    // console.log("res", res.award);
    setCertificationData(res.result);
  };

  return (
    <AwardCertificationSectionStyle>
      <SectionHeader title={"수상 / 자격증"} image={"/Trophy.svg"} />
      <SectionBody>
        <SubSectionStyle>
          <SubSectionHeader>수상 ({awardData?.length})</SubSectionHeader>
          <SubSectionBody>
            {awardData && awardData.map((data) => <AwardItem data={data} />)}
            {isEdit &&
              Array.from({ length: awardNum }, (_, index) => (
                <AwardForm key={index}>Award {index + 1}</AwardForm>
              ))}
            {isEdit && (
              <PlusBoxContainer>
                <PlusBoxStyle onClick={addAwardForm}>
                  <PlusBoxButton>+</PlusBoxButton>
                </PlusBoxStyle>
              </PlusBoxContainer>
            )}
          </SubSectionBody>
        </SubSectionStyle>
        <SubSectionStyle>
          <SubSectionHeader>
            자격증 ({certificationData?.length})
          </SubSectionHeader>
          <SubSectionBody>
            {certificationData &&
              certificationData.map((data) => (
                <CertificationItem data={data} />
              ))}
            {isEdit &&
              Array.from({ length: certificationNum }, (_, index) => (
                <CertificationForm key={index}>
                  Award {index + 1}
                </CertificationForm>
              ))}
            {isEdit && (
              <PlusBoxCertContainer>
                <PlusBoxCertStyle onClick={addCertForm}>
                  <PlusBoxCertButton>+</PlusBoxCertButton>
                </PlusBoxCertStyle>
              </PlusBoxCertContainer>
            )}
          </SubSectionBody>
        </SubSectionStyle>
      </SectionBody>
    </AwardCertificationSectionStyle>
  );
}

export default AwardCertificationSection;
