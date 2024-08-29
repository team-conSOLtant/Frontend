import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAwards } from "../../../apis/Award";
import AwardItem from "./AwardItem";
import AwardForm from "./AwardForm";
import CertificationItem from "./CertificationItem";
import CertificationForm from "./CertificationForm";
import SectionHeader from "../SectionHeader";
import { getCertifications } from "../../../apis/Certification";
import useFormManager from "../../../Hooks/FormManager";
import CertificationDTO from "../../../dto/CertificationDTO";
import AwardDTO from "../../../dto/AwardDTO";

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

function AwardCertificationSection({
  isEdit,
  certificationItems,
  setCertificationItems,
  awardItems,
  setAwardItems,
}) {
  const [certificationForms, setCertificationForms] = useState([
    new CertificationDTO(),
  ]);
  const addCertificationForm = () => {
    setCertificationForms([...certificationForms, new CertificationDTO()]);
  };
  const updateCertificationForm = (updatedForm) => {
    setCertificationForms((prevForms) =>
      prevForms.map((form) =>
        form.key === updatedForm.key ? updatedForm : form
      )
    );
  };
  const submitCertificationForm = (newForm) => {
    setCertificationItems([...certificationItems, newForm]);
    setCertificationForms(
      certificationForms.filter((form) => form.key !== newForm.key)
    );
  };

  const [awardForms, setAwardForms] = useState([new AwardDTO()]);
  const addAwardForm = () => {
    setAwardForms([...awardForms, new AwardDTO()]);
  };
  const updateAwardForm = (updatedForm) => {
    setAwardForms((prevForms) =>
      prevForms.map((form) =>
        form.key === updatedForm.key ? updatedForm : form
      )
    );
  };
  const submitAwardForm = (newForm) => {
    console.log("newForm", newForm);
    setAwardItems([...awardItems, newForm]);
    setAwardForms(awardForms.filter((form) => form.key !== newForm.key));
  };

  return (
    <AwardCertificationSectionStyle>
      <SectionHeader title={"수상 / 자격증"} image={"/Trophy.svg"} />
      <SectionBody>
        <SubSectionStyle>
          <SubSectionHeader>수상 ({awardItems?.length})</SubSectionHeader>
          <SubSectionBody>
            {awardItems.length > 0 &&
              awardItems.map((data) => (
                <AwardItem key={data.key} data={data} />
              ))}
            {isEdit &&
              awardForms.length > 0 &&
              awardForms.map((data) => (
                <AwardForm
                  key={data.key}
                  data={data}
                  updateForm={updateAwardForm}
                  submitForm={() => submitAwardForm(data)}
                />
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
            자격증 ({certificationItems?.length})
          </SubSectionHeader>
          <SubSectionBody>
            {certificationItems.length > 0 &&
              certificationItems.map((data) => (
                <CertificationItem key={data.key} data={data} />
              ))}
            {isEdit &&
              certificationForms.length > 0 &&
              certificationForms.map((data) => (
                <CertificationForm
                  key={data.key}
                  data={data}
                  updateForm={updateCertificationForm}
                  submitForm={() => submitCertificationForm(data)}
                />
              ))}
            {isEdit && (
              <PlusBoxCertContainer>
                <PlusBoxCertStyle onClick={addCertificationForm}>
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
