import React, { useState } from "react";
import styled from "styled-components";

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  color: white;
`;

const Button = styled.div`
  width: 40%;
  height: 2rem;
  background-color: #102fa8;
  text-align: center;
  line-height: 2rem;
  border-radius: 0.2rem;
`;
function ActivityItem({ isEdit, data, editItem, deleteItem }) {
  const [details, setDetails] = useState([{}]);

  const addDetail = () => {
    setDetails([...details, {}]);
  };

  const removeDetail = (index) => {
    const newDetails = details.filter((_, i) => i !== index);
    setDetails(newDetails);
  };

  return (
    <div className="text-[#444444] flex flex-col w-[60%]">
      <div className="relative flex items-start">
        <div className="absolute left-[10px] top-0 h-full w-1 bg-[#B9D5FF]"></div>
        <div className="relative flex flex-col items-center mr-4">
          <div className="w-6 h-6 border-[#B9D5FF] border-4 rounded-full z-10 bg-white"></div>
        </div>
        <div className="flex flex-col my-3 w-[90%]">
          <input
            type="text"
            placeholder="대외활동 명을 작성해주세요."
            className="text-lg py-1 px-2 font-semibold w-full bg-transparent"
            value={data.title}
            disabled
          />
          <div className="flex-grow w-full items-center mb-2">
            <div className="flex my-2">
              <div className="w-5 h-5 flex justify-center items-center bg-[#D9D9D9] rounded-[5px] m-2"></div>
              <div className="flex flex-col w-full">
                <input
                  type="text"
                  placeholder="대외활동에 대한 설명을 적어주세요"
                  className="w-full py-1 px-2 rounded-xl text-base font-semibold bg-transparent"
                  value={data.contentTitle}
                  disabled
                />
                <input
                  type="text"
                  placeholder="자신이 한일에 대해서 자세히 작성해주세요"
                  className="w-full px-2 rounded-xl text-base bg-transparent"
                  value={data.content}
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-2">
            <span className="text-sm font-semibold mb-1">대외활동 기간</span>
            <div className="text-base w-full">
              <input
                type="date"
                className="w-40 py-1 px-2 rounded-xl bg-transparent"
                value={data.startDate}
                disabled
              />{" "}
              ~{" "}
              <input
                type="date"
                className="w-40 py-1 px-2 rounded-xl bg-transparent"
                value={data.endDate}
                disabled
              />
            </div>
            {isEdit && (
              <Buttons>
                <Button onClick={editItem}>수정</Button>
                <Button onClick={deleteItem}>삭제</Button>
              </Buttons>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityItem;
