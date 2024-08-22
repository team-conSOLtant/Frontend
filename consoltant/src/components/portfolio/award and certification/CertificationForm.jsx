import React from "react";
import styled from "styled-components";

const CertificationItemStyle = styled.div`
  background-color: #ffffff;
  width: 12rem;
  height: 6rem;
  font-size: 1rem;
  border: #b9d5ff 0.1rem solid;
  border-radius: 0.5rem;
  margin: 0.3rem 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0.5rem;
  padding-top: 0.2rem;
`;

const CertificationTitleStyle = styled.input`
  border: #c7c7c7 1px solid;
  border-radius: 0.2rem;
  background-color: #fbfbfd;
  padding-left: 0.3rem;
`;

const CertificationLabel = styled.label`
  font-size: 0.7rem;
  display: flex;
  justify-content: flex-end;
`;
const CertificationOrganizationStyle = styled.input`
  width: 50%;
  text-align: right;
  border: #c7c7c7 1px solid;
  border-radius: 0.2rem;
  background-color: #fbfbfd;
`;

const CertificationAcqDateStyle = styled.input`
  width: 50%;
  font-size: 0.7rem;
  text-align: right;
  border: #c7c7c7 1px solid;
  border-radius: 0.2rem;
  background-color: #fbfbfd;
`;

const CertificationButton = styled.div`
  border-radius: 0.2rem;
  height: 1.2rem;
  background-color: #b9d5ff;
  text-align: center;
  line-height: 1.2rem;
  font-size: 0.8rem;
  color: white;
`;

// 포트폴리오 옆에서 순서 바꾸게 리모컨 역할 해주는 것
function CertificationForm({ data }) {
  const submitForm = () => {};
  return (
    <CertificationItemStyle>
      <CertificationTitleStyle placeholder="자격증명" />
      <CertificationLabel>
        주최측 : <CertificationOrganizationStyle placeholder="주최측" />
      </CertificationLabel>
      <CertificationLabel>
        수상일 : <CertificationAcqDateStyle placeholder="수상일" />
      </CertificationLabel>
      <CertificationButton onClick={submitForm}>추가</CertificationButton>
    </CertificationItemStyle>
  );
}

export default CertificationForm;
