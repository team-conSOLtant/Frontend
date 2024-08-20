import react from 'react';

function ActivityItem(){
  return(
    <div className="flex my-2">
      <div className='w-4 h-4 flex justify-center items-center bg-gray-500 rounded-sm m-2'></div>
      <div className='flex flex-col'>
        <input type="text" 
          placeholder='자신의 역할 및 한일에 대해서 간단히 작성해주세요'
          className='bg-gray-100 w-full py-1 px-2 rounded-xl'
        />
        <input type="text" 
          placeholder='한일에 대해서 자세히 작성해주세요' 
          className='bg-gray-100 w-full w-80 py-1 px-2 rounded-xl mt-2'
        />
      </div>
    </div>
  );
}

export default ActivityItem;