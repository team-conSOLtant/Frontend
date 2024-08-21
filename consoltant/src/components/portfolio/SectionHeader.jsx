import React from "react";
import styled from "styled-components";

const SectionHeaderStyle = styled.div`
  width: 100%;
  border-bottom: 0.1rem solid black;
`;
const SectionTitleText = styled.div`
  width: 100%;
`;
const SectionTitleIcon = styled.img`
  width: 100%;
`;

function SectionHeader(props) {
  return (
    <SectionHeaderStyle>
      <SectionTitleText>{props.title}</SectionTitleText>
      <SectionTitleIcon />
    </SectionHeaderStyle>
  );
}

export default SectionHeader;
