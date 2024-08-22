import React from "react";

function RecommendItem({
  item,
  onClick,
  isSelected,
  isKimSsafy,
  onCheckboxChange,
  isChecked,
}) {
  return (
    <div
      onClick={onClick}
      className={`group flex flex-col border p-3 rounded-lg mb-2 text-[#444444] shadow-sm cursor-pointer 
        ${isSelected && !isKimSsafy ? "bg-gray-100 border-gray-200" : ""}`}
    >
      {isSelected && !isKimSsafy && (
        <div className=" parent inset-0 flex items-center justify-center text-sm text-red-500 opacity-0 group-hover:opacity-100 bg-gray-200 bg-opacity-50">
          <span className="absolute z-20 justify-center items-center">
            다시 클릭 하시면 선택이 취소 됩니다.
          </span>
        </div>
      )}
      {isKimSsafy && (
        <div className="flex justify-end">
          <label className="parent inline-flex items-center">
            <input
              type="checkbox"
              className="hidden"
              onChange={(e) => onCheckboxChange(item, e.target.checked)}
              checked={isChecked} // 이 부분이 체크박스 상태를 결정합니다.
            />
            <span className="w-5 h-5 border-2 border-gray-300 rounded-md items-center justify-center cursor-pointer">
              {isChecked ? ( // isChecked 상태에 따라 아이콘이 변경됩니다.
                <svg
                  className="w-4 h-4 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="20"
                    height="20"
                    x="2"
                    y="2"
                    rx="3"
                    ry="3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              )}
            </span>
          </label>
        </div>
      )}
      <div>
        <div className="text-base font-semibold">{item.name}</div>
        <p className="text-sm text-[#8E8E93]">{item.description}</p>
      </div>
      <div className="flex justify-end items-baseline">
        <span className="text-sm mr-2 text-sm">12개월 기준</span>
        <span className="text-base text-[#FF0000] font-bold">
          연 {item.rate}%
        </span>
      </div>
    </div>
  );
}

export default RecommendItem;
