import React from "react";
import styled from "styled-components";

const CertificationItemStyle = styled.div`
  background-color: #ffffff;
  width: 12rem;
  font-size: 1rem;
  border: #b9d5ff 0.1rem solid;
  border-radius: 0.5rem;
  margin: 0.3rem 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem 0.5rem 0.2rem;
  color: #444444;
  box-shadow: 2px 2px 2px 1px rgb(185 213 255 / 60%);
`;

const CertificationTitleStyle = styled.div`
  font-family: "OneShinhanBold";
`;

const CertificationOrganizationStyle = styled.div`
  text-align: right;
  font-size: 0.9rem;
`;

const CertificationAcqDateStyle = styled.div`
  font-size: 0.7rem;
  text-align: right;
  font-family: "OneShinhanMedium";
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  color: white;
`;

const Button = styled.div`
  width: 45%;
  height: 1.2rem;
  background-color: #b9d5ff;
  text-align: center;
  line-height: 1.2rem;
  border-radius: 0.2rem;
  font-size: 0.8rem;
`;

// 포트폴리오 옆에서 순서 바꾸게 리모컨 역할 해주는 것
function CertificationItem({ data, isEdit, editItem, deleteItem }) {
  return (
    <CertificationItemStyle>
      <CertificationTitleStyle>{data?.title}</CertificationTitleStyle>
      <CertificationOrganizationStyle>
        {data?.issuingOrganization}
      </CertificationOrganizationStyle>
      <CertificationAcqDateStyle>
        {data?.acquisitionDate}
      </CertificationAcqDateStyle>
      {isEdit && (
        <Buttons>
          <Button onClick={editItem}>수정</Button>
          <Button onClick={deleteItem}>삭제</Button>
        </Buttons>
      )}
    </CertificationItemStyle>
  );
}

export default CertificationItem;
