import React from "react";
import styled from "styled-components";

const SectionHeaderStyle = styled.div`
  width: 100%;
  border-bottom: 0.1rem solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 0.5rem;
`;
const SectionTitleText = styled.div`
  font-family: "OneShinhanBold";
  font-size: 1.5rem;
`;
const SectionTitleIcon = styled.img`
  width: 2rem;
  margin-left: 0.5rem;
`;

function SectionHeader(props) {
  return (
    <SectionHeaderStyle>
      <SectionTitleText>{props.title}</SectionTitleText>
      <SectionTitleIcon src={props.image} />
    </SectionHeaderStyle>
  );
}

export default SectionHeader;
