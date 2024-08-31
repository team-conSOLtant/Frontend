import React from "react";
import styled from "styled-components";

const CareerFormStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 0.7rem;
`;

const InputContainer = styled.input`
  border: none;
  background-color: #ffffff;
  border-radius: 0.3rem;
  text-align: center;
  height: 2rem;
  padding-left: 0.3rem;
  width: 15rem;
`;

const RankInputContainer = styled.div`
  border: none;
  background-color: #ffffff;
  border-radius: 0.3rem;
  height: 2rem;
  padding-left: 0.3rem;
  width: 10rem;
  font-weight: bold;
`;
const RankInputPosition = styled.div`
  border: none;
  background-color: #ffffff;
  border-radius: 0.3rem;
  height: 2rem;
  padding-left: 0.3rem;
  width: 10rem;
`;
// const SubmitButton = styled.div`
//   background-color: white;
//   border-radius: 0.3rem;
//   width: 4rem;
//   text-align: center;
//   line-height: 2rem;
// `;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.div`
  margin: 0 0.2rem;
`;

function CareerItem({ data, isEdit, editItem, deleteItem, key }) {
  console.log("in career item", data);
  console.log("key : ", key);
  return (
    <CareerFormStyle>
      {/* <RankInputContainer>{key}.</RankInputContainer> */}
      <RankInputContainer>{data?.company}</RankInputContainer>
      <RankInputPosition>{data?.positionLevel}</RankInputPosition>
      <div>
        {data?.startDate} ~ {data?.endDate}
      </div>
      {/* <InputContainer disabled type="date" value={data?.startDate} />
      <InputContainer disabled type="date" value={data?.endDate} /> */}
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
