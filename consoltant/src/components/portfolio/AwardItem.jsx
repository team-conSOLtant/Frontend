import React from "react";
import styled from "styled-components";

const AwardItemStyle = styled.div`
  background-color: #fffbeb;
  width: 10rem;
  height: 6rem;
  font-size: 0.5rem;
  border-top: #ffcc00 0.2rem solid;
  margin: 0 0.3rem;
`;

const AwardItemHrStyle = styled.hr`
  border: none;
  border-top: 1px solid #ffcc00;
  /* margin: 20px 0; */
`;

// 포트폴리오 옆에서 순서 바꾸게 리모컨 역할 해주는 것
function AwardItem({ data }) {
  return (
    <AwardItemStyle>
      <div>{data.title}</div>
      <div>{data.content}</div>
      <AwardItemHrStyle />
      <div>{data.award_organization}</div>
      <div>{data.acquisition_date}</div>
    </AwardItemStyle>
  );
}

export default AwardItem;
