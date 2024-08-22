import React from "react";
import styled from "styled-components";

const SectionTitleSection = styled.div``;
function SectionTitle({ title, src }) {
  return (
    <SectionTitleSection>
      <div className="underline-rounded">{title}</div>
      <img src={src} />
    </SectionTitleSection>
  );
}

export default SectionTitle;
