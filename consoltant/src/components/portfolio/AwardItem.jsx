import React from "react";
import styled from "styled-components";

const AwardItemStyle = styled.div`
  background-color: lightgoldenrodyellow;
`;
// 포트폴리오 옆에서 순서 바꾸게 리모컨 역할 해주는 것
function AwardItem({ data }) {
  return (
    <AwardItemStyle>
      <div>{data.title}</div>
    </AwardItemStyle>
  );
}

export default AwardItem;
