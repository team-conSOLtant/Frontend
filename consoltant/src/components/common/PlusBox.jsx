import React, { useState } from "react";
import styled from "styled-components";

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
  --ball-size: 1.5rem;
  height: var(--ball-size);
  width: var(--ball-size);
  border-radius: 2rem;
  background-color: #c7c7c7;
`;
function PlusBox(props) {
  return (
    <PlusBoxStyle onClick={props.onClick}>
      <PlusBoxButton></PlusBoxButton>
    </PlusBoxStyle>
  );
}

export default PlusBox;
