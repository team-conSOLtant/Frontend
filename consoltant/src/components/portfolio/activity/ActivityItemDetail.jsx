import React from 'react';

function ActivityItemDetail() {
  return (
    <div className="flex my-2">
      <div className='w-5 h-5 flex justify-center items-center bg-[#D9D9D9] rounded-[5px] m-2'></div>
      <div className='flex flex-col w-full'>
        <input
          type="text"
          placeholder='자신의 역할 및 한일에 대해서 간단히 작성해주세요'
          className='w-full py-1 px-2 rounded-xl text-base font-semibold bg-transparent'
          value={"1학기 프로젝트 최우수상 수상"}
          disabled
        />
        <input
          type="text"
          placeholder='한일에 대해서 자세히 작성해주세요'
          className='w-full px-2 rounded-xl text-base bg-transparent'
          value={": 국내 여행지 AI 맞춤 웹 서비스"}
          disabled
        />
      </div>
    </div>
  );
}

export default ActivityItemDetail;
