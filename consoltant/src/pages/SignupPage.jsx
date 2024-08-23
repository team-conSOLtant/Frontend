import React, { useEffect } from "react";
import { Routes, Route, Router, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignupPage() {
  const [emailDomain, setEmailDomain] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwdCheck, setPwdCheck] = useState("");
  const [isSamePwd, setIsSamePwd] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [birth, setBirth] = useState();

  const navigate = useNavigate();

  const checkPwd = (pwd) => {
    setPwdCheck(pwd);
    if (pwd === password) {
      setIsSamePwd(true);
    } else {
      setIsSamePwd(false);
    }
  };

  useEffect(() => {}, [setIsSamePwd, isSamePwd, setPwdCheck, pwdCheck]);

  const submit = () => {
    // 회원가입 진행(데이터 넘기기
    // 완료 페이지로 넘어가기
    navigate("/signup-info");
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
      <div className="h-[80vh] flex justify-center items-center">
        <div className="flex  flex-col items-center">
          {/* 이메일 */}
          <div className="my-[0.5rem] flex text-[#5C5C5C] w-[40%] max-w-[35rem] min-w-[25rem] items-center justify-between text-[0.9rem]">
            <div className="w-[20%] min-w-[7rem]">아이디(이메일)</div>
            <div className="flex justify-between items-center w-[30rem] text-[0.8rem] font-OneShinhanLight">
              {/* 이메일 아이디 입력란 */}
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-[0.2rem] w-[35%] p-[0.2rem] focus:outline-none"
              />
              <div className="px-[0.3rem]">@</div>
              {/* 이메일 도메인 입력란 */}
              <input
                type="text"
                className="border rounded-[0.2rem] w-[35%] p-[0.2rem] focus:outline-none"
                value={emailDomain}
                onChange={(e) => setEmailDomain(e.target.value)}
              />
              <select
                className="border text-[#8F8F8F] rounded-[0.2rem] ml-[0.5rem] p-[0.2rem] focus:outline-none"
                name="email"
                id="email"
                value={emailDomain}
                onChange={(e) => setEmailDomain(e.target.value)}
              >
                <option value="">직접입력</option>
                <option value="gmail.com">gmail.com</option>
                <option value="naver.com">naver.com</option>
              </select>
            </div>
          </div>
          {/* 비밀번호 */}
          <div className="my-[0.5rem] flex text-[#5C5C5C] w-[40%] max-w-[35rem] min-w-[25rem] items-center justify-between text-[0.9rem]">
            <div className="w-[20%] min-w-[7rem]">비밀번호</div>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-[0.2rem] w-[30rem] p-[0.2rem] text-[0.8rem] font-OneShinhanLight focus:outline-none"
            />
          </div>
          {/* 비밀번호 재확인 */}
          <div className="relative my-[0.5rem] flex text-[#5C5C5C] w-[40%] max-w-[35rem] min-w-[25rem] items-center justify-between text-[0.9rem]">
            <div className="w-[20%] min-w-[7rem]">비밀번호 재확인</div>
            <input
              type="password"
              onChange={(e) => checkPwd(e.target.value)}
              className="border rounded-[0.2rem] w-[30rem] p-[0.2rem] text-[0.8rem] font-OneShinhanLight focus:outline-none"
            />
            {pwdCheck > 0 &&
              (isSamePwd ? (
                <div className="absolute right-[0.5rem] text-green-500 text-[0.7rem] ">
                  비밀번호가 일치합니다.
                </div>
              ) : (
                <div className="absolute right-[0.5rem] text-red-500 text-[0.7rem]">
                  비밀번호가 일치하지 않습니다.
                </div>
              ))}
          </div>
          {/* 이름 */}
          <div className="my-[0.5rem] flex text-[#5C5C5C] w-[40%] max-w-[35rem] min-w-[25rem] items-center justify-between text-[0.9rem]">
            <div className="w-[20%] min-w-[7rem]">이름</div>
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="border rounded-[0.2rem] w-[30rem] p-[0.2rem] text-[0.8rem] font-OneShinhanLight focus:outline-none"
            />
          </div>
          {/* 전화번호 */}
          <div className="my-[0.5rem] flex text-[#5C5C5C] w-[40%] max-w-[35rem] min-w-[25rem] items-center justify-between text-[0.9rem]">
            <div className="w-[20%] min-w-[7rem]">전화번호</div>
            <input
              type="text"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              className="border rounded-[0.2rem] w-[30rem] p-[0.2rem] text-[0.8rem] font-OneShinhanLight focus:outline-none"
              placeholder="전화번호 입력"
            />
          </div>
          {/* 생년월일 */}
          <div className="my-[0.5rem] flex text-[#5C5C5C] w-[40%] max-w-[35rem] min-w-[25rem] items-center justify-between text-[0.9rem]">
            <div className="w-[20%] min-w-[7rem]">생년월일</div>
            <input
              type="date"
              onChange={(e) => setBirth(e.target.value)}
              className="border rounded-[0.2rem] w-[30rem] p-[0.2rem] text-[0.8rem] font-OneShinhanLight focus:outline-none"
            />
          </div>
          {/* 다음으로 */}
          <div
            onClick={submit}
            className="mt-[3rem] py-[0.3rem] w-[40%] max-w-[35rem] min-w-[25rem] cursor-pointer font-OneShinhanMedium shadow-md border rounded-[0.5rem] flex justify-center bg-[#0046ff] text-white"
          >
            다음으로
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
