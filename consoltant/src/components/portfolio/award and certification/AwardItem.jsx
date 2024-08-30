import React, { useState } from "react";
import styled from "styled-components";

const AwardItemStyle = styled.div`
  background-color: #fffbeb;
  width: 12rem;
  height: 14.4rem;
  font-size: 1rem;
  border-top: #ffcc00 0.5rem solid;
  margin: 0.3rem 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0.5rem;
`;
const AwardItemBody = styled.div``;

const AwardTitleStyle = styled.div`
  font-family: "OneShinhanBold";
  padding-top: 0.8rem;
  padding-bottom: 1rem;
  min-height: 3rem;
  border-bottom: #ffcc00 0.15rem solid;
`;

const AwardContentStyle = styled.div`
  font-size: 0.7rem;
  margin-top: 0.4rem;
`;
const AwardItemFooter = styled.div``;

const AwardGradeStyle = styled.div`
  /* font-size: 0.8rem; */
  text-align: right;
  width: 100%;
`;

const AwardOrganizationStyle = styled.div`
  font-size: 0.8rem;
  text-align: right;
  font-family: "OneShinhanBold";
`;

const AwardAcqDateStyle = styled.div`
  font-size: 0.7rem;
  text-align: right;
  font-family: "OneShinhanBold";
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  color: white;
`;

const Button = styled.div`
  width: 40%;
  height: 2rem;
  background-color: #ffcc00;
  text-align: center;
  line-height: 2rem;
  border-radius: 0.2rem;
`;
// const HoverContent = styled.div`
//   display: none; /* 기본적으로 숨김 */
//   background-color: rgb(0, 0, 0, 0.6);
//   position: absolute;
//   top: 0;
//   width: 12rem;
//   height: 14.4rem;
//   transition: opacity 0.5s ease;
// `;

// 포트폴리오 옆에서 순서 바꾸게 리모컨 역할 해주는 것
function AwardItem({ data, isEdit, editItem, deleteItem }) {
  return (
    <AwardItemStyle>
      <AwardItemBody>
        <AwardTitleStyle>{data?.title}</AwardTitleStyle>
        <AwardContentStyle>{data?.content}</AwardContentStyle>
      </AwardItemBody>
      <AwardItemFooter>
        <AwardGradeStyle>{data?.awardGrade}</AwardGradeStyle>
        <AwardOrganizationStyle>
          {data?.awardOrganization}
        </AwardOrganizationStyle>
        <AwardAcqDateStyle>{data?.acquisitionDate}</AwardAcqDateStyle>
      </AwardItemFooter>
      {isEdit && (
        <Buttons>
          <Button onClick={editItem}>수정</Button>
          <Button onClick={deleteItem}>삭제</Button>
        </Buttons>
      )}
    </AwardItemStyle>
  );
}

export default AwardItem;
