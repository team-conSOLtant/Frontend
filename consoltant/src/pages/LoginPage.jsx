import React from "react";
import Navbar from "../components/header/Navbar";

// 로그인 페이지
function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div className="flex items-center mb-5">
        <img className="w-[2.5rem]" src="/logo/shinhan_logo_blue.png" alt="" />
        <div className="text-[#5C5C5C] text-[1.4rem] font-[600] px-[1rem]">
          SOL 학생 로드맵
        </div>
      </div>
      <div className="w-[60%]">
        <div className="border flex flex-col items-center p-5">
          <div className="w-[80%]">
            <div className="border rounded-t-[10px] flex items-center py-2 pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="absolute size-5 fill-[#D1D1D1]"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                className="pl-6 focus:outline-none"
                type="text"
                placeholder="아이디(이메일 주소)"
              />
            </div>
            <div className="border rounded-b-[10px] flex items-center py-2 pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="absolute size-5 fill-[#D1D1D1]"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                  clip-rule="evenodd"
                />
              </svg>

              <input
                className="pl-6 focus:outline-none"
                type="text"
                placeholder="비밀번호"
              />
            </div>
            <div className="flex">
              <input type="checkbox" className="" />
              <div>로그인 상태 유지</div>
            </div>
          </div>
          <div className="mt-[1rem] py-[0.5rem] border rounded-[0.5rem] flex justify-center w-[50%] bg-[#0046ff] text-white">
            로그인
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
