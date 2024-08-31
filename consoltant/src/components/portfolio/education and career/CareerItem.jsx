import React from "react";
import styled from "styled-components";

const CareerFormStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 0.7rem;
`;

// const InputContainer = styled.input`
//   border: none;
//   background-color: #ffffff;
//   border-radius: 0.3rem;
//   text-align: center;
//   height: 2rem;
//   padding-left: 0.3rem;
//   width: 15rem;
// `;

const RankInputContainer = styled.div`
  border: none;
  background-color: #ffffff;
  border-radius: 0.3rem;
  height: 2rem;
  padding-left: 0.3rem;
  width: 10rem;
  font-weight: bold;
  text-align: center;
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
  width: 15%;
  justify-content: space-evenly;
  color: white;
`;

const Button = styled.div`
  width: 45%;
  height: 1.2rem;
  background-color: #b9d5ff;
  text-align: center;
  line-height: 1.2rem;
  border-radius: 0.2rem;
  font-size: 0.8rem;
  color: white;
`;

function CareerItem({ data, isEdit, editItem, deleteItem }) {
  console.log("in career item", data);
  return (
    <CareerFormStyle>
      <RankInputContainer>{data?.company}</RankInputContainer>
      <RankInputContainer>{data?.positionLevel}</RankInputContainer>
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
