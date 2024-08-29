import React from "react";
import styled from "styled-components";

const CareerFormStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 0.7rem;
`;

const InputContainer = styled.div`
  border: #c7c7c7 0.1rem solid;
  border-radius: 0.3rem;
  background-color: #fbfbfd;
  text-align: center;
  height: 2rem;
  padding-left: 0.3rem;
  width: 15rem;
  box-shadow: 0 2px 2px rgb(0, 0, 0, 0.25);
`;

const RankInputContainer = styled.div`
  border: #c7c7c7 0.1rem solid;
  border-radius: 0.3rem;
  background-color: #fbfbfd;
  height: 2rem;
  padding-left: 0.3rem;
  width: 10rem;
  box-shadow: 0 2px 2px rgb(0, 0, 0, 0.25);
`;
// const SubmitButton = styled.div`
//   background-color: white;
//   border-radius: 0.3rem;
//   width: 4rem;
//   text-align: center;
//   line-height: 2rem;
// `;

const Buttons = styled.div``;

const Button = styled.div``;

function CareerItem({ data, isEdit, editItem, deleteItem }) {
  return (
    <CareerFormStyle>
      <RankInputContainer>{data?.company}</RankInputContainer>
      <RankInputContainer>{data?.positionLevel}</RankInputContainer>
      <InputContainer>
        {data?.startDate} ~ {data?.endDate}
      </InputContainer>
      {isEdit && (
        <Buttons>
          <Button onClick={editItem}>수정</Button>
          <Button onClick={deleteItem}>삭제</Button>
        </Buttons>
      )}
    </CareerFormStyle>
  );
}

export default CareerItem;
