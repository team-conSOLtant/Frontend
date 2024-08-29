import React from "react";
import styled from "styled-components";

const CareerFormStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 0.5rem;
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
  /* margin-top: 1.2rem; */
  width: 4rem;
  text-align: center;
  line-height: 2rem;
  color: white;
  box-shadow: 0 2px 2px rgb(0, 0, 0, 0.25);
`;
function CareerForm({ data, updateForm, submitForm }) {
  const _changeCompany = (value) => {
    updateForm({ ...data, company: value });
  };
  const _changePositionLevel = (value) => {
    updateForm({ ...data, positionLevel: value });
  };
  const _changeStartDate = (value) => {
    updateForm({ ...data, startDate: value });
  };
  const _changeEndDate = (value) => {
    updateForm({ ...data, endDate: value });
  };

  return (
    <CareerFormStyle>
      <RankInputContainer
        value={data.company}
        onChange={(e) => _changeCompany(e.target.value)}
      />
      <RankInputContainer
        value={data.positionLevel}
        onChange={(e) => _changePositionLevel(e.target.value)}
      />
      <InputContainer
        type="date"
        value={data.startDate}
        onChange={(e) => _changeStartDate(e.target.value)}
      />
      <InputContainer
        type="date"
        value={data.endDate}
        onChange={(e) => _changeEndDate(e.target.value)}
      />
      <SubmitButton onClick={submitForm}>확인</SubmitButton>
    </CareerFormStyle>
  );
}

export default CareerForm;
