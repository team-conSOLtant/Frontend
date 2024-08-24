import React, { useEffect } from "react";
import { Routes, Route, Router, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerAcademy } from "../apis/Login";

function SignupInfo() {
  // const [emailDomain, setEmailDomain] = useState("");
  const [university, setUniversity] = useState();
  const [major, setMajor] = useState();
  const [grade, setGrade] = useState();
  const [file, setFile] = useState();

  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(file);
  // }, [file, setFile]);

  const submit = () => {
    // 학교 데이터 넘기기
    const info = {
      subject: file,
      data: {
        university: university,
        major: major,
      },
    };

    registerAcademy(info);

    // 계좌 여부 확인 페이지로 넘어가기
    // navigate("/check-account");
  };

  return (
    <div>
      {/* 좌측 상단 로고 */}
      <div className="flex items-center m-[2rem]">
        <img className="w-[2rem]" src="/logo/shinhan_logo_blue.png" alt="" />
        <div className="text-[#5C5C5C] font-OneShinhanBold text-[1.2rem] px-[0.6rem]">
          SOL 학생 로드맵
        </div>
      </div>
      {/* 회원정보 입력란 */}
      <div className="h-[80vh] flex flex-col justify-center items-center">
        {/* 단계 표시 */}
        <div className="w-[50%] max-w-[25rem] min-w-[20rem] h-[1rem] pb-[4rem] flex justify-between">
          <div className="w-[48%] h-[0.8rem] bg-[#D3E1FB]"></div>
          <div className="w-[48%] h-[0.8rem] bg-[#D9D9D9]"></div>
        </div>
        <div className="flex flex-col justify-center items-center w-[50%] max-w-[25rem] min-w-[20rem]">
          {/* 대학교 */}
          <div className="my-[0.5rem] flex text-[#5C5C5C] w-[100%] items-center justify-between text-[0.9rem]">
            <div className="w-[20%] min-w-[7rem]">대학교</div>
            <input
              type="text"
              onChange={(e) => setUniversity(e.target.value)}
              className="border rounded-[0.2rem] w-[20rem] p-[0.2rem] text-[0.8rem] font-OneShinhanLight focus:outline-none"
            />
          </div>
          {/* 전공 학과 */}
          <div className="my-[0.5rem] flex text-[#5C5C5C] w-[100%] items-center justify-between text-[0.9rem]">
            <div className="w-[20%] min-w-[7rem]">전공 학과</div>
            <input
              type="text"
              onChange={(e) => setMajor(e.target.value)}
              className="border rounded-[0.2rem] w-[20rem] p-[0.2rem] text-[0.8rem] font-OneShinhanLight focus:outline-none"
            />
          </div>
          {/* 학년 선택 */}
          <div className="my-[0.5rem] flex text-[#5C5C5C] w-[100%] items-center justify-between text-[0.9rem]">
            <div className="w-[20%] min-w-[7rem]">학년</div>
            <select
              className="border text-[#8F8F8F] rounded-[0.2rem] w-[20rem] p-[0.2rem] text-[0.8rem] focus:outline-none"
              name="email"
              id="email"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            >
              <option value="">학년 선택</option>
              <option value="1">1학년</option>
              <option value="2">2학년</option>
              <option value="3">3학년</option>
              <option value="4">4학년</option>
            </select>
          </div>
          {/* 파일 업로드 */}
          <div className="my-[0.5rem] flex text-[#5C5C5C] w-[100%] items-center justify-center text-[0.7rem] border rounded-[0.5rem] border-dashed p-[1.5rem]">
            <label htmlFor="file" className="border p-[0.3rem] rounded bg-[#D9D9D9]">
              수강 내역 업로드
            </label>
            <input
              className=""
              type="file"
              name="file"
              id="file"
              onChange={(e) => setFile(e.target.value)}
            />
          </div>
          {/* 다음으로 */}
          <div
            onClick={submit}
            className="mt-[3rem] py-[0.3rem] w-[100%] cursor-pointer font-OneShinhanMedium shadow-md border rounded-[0.5rem] flex justify-center bg-[#0046ff] text-white"
          >
            계좌 연결하기
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupInfo;
