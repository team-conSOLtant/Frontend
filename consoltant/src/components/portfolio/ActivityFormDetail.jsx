import React from 'react';

function ActivityFormDetail({ detail, onDetailChange }) {
  const handleRoleChange = (e) => {
    onDetailChange({ ...detail, role: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    onDetailChange({ ...detail, description: e.target.value });
  };

  return (
    <div className="flex my-2">
      <div className='w-5 h-5 flex justify-center items-center bg-[#D9D9D9] rounded-[5px] m-2'></div>
      <div className='flex flex-col w-full'>
        <input
          type="text"
          placeholder="자신의 역할 및 한일에 대해서 간단히 작성해주세요"
          className="w-full py-1 px-2 rounded-xl bg-gray-100"
          value={detail.role}
          onChange={handleRoleChange}
        />
        <input
          type="text"
          placeholder="한일에 대해서 자세히 작성해주세요"
          className="w-full py-1 px-2 rounded-xl mt-2 bg-gray-100"
          value={detail.description}
          onChange={handleDescriptionChange}
        />
      </div>
    </div>
  );
}

export default ActivityFormDetail;
