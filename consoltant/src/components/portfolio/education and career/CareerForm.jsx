import React from "react";
import styled from "styled-components";

const CareerFormStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 0.7rem;
`;

const InputLabel = styled.label``;
const InputTitle = styled.div`
  font-size: 0.8rem;
  font-family: "OneShinhanBold";
  margin-left: 0.3rem;
  margin-bottom: 0.1rem;
`;
const InputContainer = styled.input`
  border: #c7c7c7 0.1rem solid;
  border-radius: 0.3rem;
  background-color: #fbfbfd;
  text-align: center;

  height: 2rem;
  padding-left: 0.3rem;
  width: 15rem;
  box-shadow: 0 2px 2px rgb(0, 0, 0, 0.25);
`;

const RankInputContainer = styled.input`
  border: #c7c7c7 0.1rem solid;
  border-radius: 0.3rem;
  background-color: #fbfbfd;
  height: 2rem;
  padding-left: 0.3rem;
  width: 10rem;
  box-shadow: 0 2px 2px rgb(0, 0, 0, 0.25);
`;
const SubmitButton = styled.div`
  background-color: #616161;
  border-radius: 0.3rem;
  margin-top: 1.2rem;
  width: 4rem;
  text-align: center;
  line-height: 2rem;
  color: white;
  box-shadow: 0 2px 2px rgb(0, 0, 0, 0.25);
`;
function CareerForm() {
  return (
    <CareerFormStyle>
      <InputLabel>
        <InputTitle>회사명</InputTitle>
        <RankInputContainer></RankInputContainer>
      </InputLabel>
      <InputLabel>
        <InputTitle>직급</InputTitle>
        <RankInputContainer></RankInputContainer>
      </InputLabel>
      <InputLabel>
        <InputTitle>기간</InputTitle>
        <InputContainer></InputContainer>
      </InputLabel>
      <SubmitButton>확인</SubmitButton>
    </CareerFormStyle>
  );
}

export default CareerForm;
