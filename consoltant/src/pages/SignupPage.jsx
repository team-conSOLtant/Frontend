import React, { useEffect } from "react";
import { Routes, Route, Router, useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../apis/Login";

function SignupPage() {
  const [emailDomain, setEmailDomain] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwdCheck, setPwdCheck] = useState("");
  const [isSamePwd, setIsSamePwd] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [birth, setBirth] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [isError, setIsError] = useState();

  const navigate = useNavigate();

  const checkPwd = (pwd) => {
    setPwdCheck(pwd);
    if (pwd === password) {
      setIsSamePwd(true);
    } else {
      setIsSamePwd(false);
    }
  };

  useEffect(() => {
    checkPwd(pwdCheck);
  }, [setIsSamePwd, isSamePwd, setPwdCheck, pwdCheck, password, setPassword]);

  useEffect(() => {}, [setIsError, isError]);
  const submit = async () => {
    // 빈 정보란 check
    if (
      !email ||
      !emailDomain ||
      !password ||
      !pwdCheck ||
      !name ||
      !phone ||
      !birth
    ) {
      setErrorMessage("모든 정보를 입력해주세요");
      setIsError(true);
    } else if (!isSamePwd) {
      setErrorMessage("비밀 번호를 확인해주세요");
      setIsError(true);
    } else {
      setIsError(false);

      // 회원가입 데이터 넘기기
      const fullEmail = `${email}@${emailDomain}`;
      const currYear = new Date();
      const myBirth = new Date(birth);
      const age =
        Number(currYear.getFullYear()) - Number(myBirth.getFullYear()) + 1;
      const info = {
        email: fullEmail,
        password: password,
        name: name,
        age: `${age}`,
        phoneNumber: phone,
        birthDate: birth,
      };
      try {
        const response = await register(info).then((data) => {
          return data;
        });
        console.log(response.success);
        if (response.success) {
          console.log("회원가입 성공!");
          console.log(response.result.email);
          navigate("/signup-complete", { state: response.result.email });
        } else {
          setErrorMessage("회원가입 실패");
          setIsError(true);
          console.log("회원가입 실패!");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      {/* 좌측 상단 로고 */}
      <div
        className="flex items-center m-[2rem] cursor-pointer"
        onClick={() => navigate("/login")}
      >
        <img className="w-[2rem]" src="/logo/shinhan_logo_blue.png" alt="" />
        <div className="text-[#5C5C5C] font-OneShinhanBold text-[1.2rem] px-[0.6rem]">
          SOL 학생 로드맵
        </div>
      </div>
      {/* 회원정보 입력란 */}
      <div className="h-[80vh] flex flex-col justify-center items-center scale-110">
        <div className="font-OneShinhanBold text-[#5C5C5C] text-[1.7rem] mb-[1rem]">
          회원가입
        </div>
        <div className="flex border rounded-[1rem] shadow-lg w-[50%] max-w-[35rem] min-w-[25rem] flex-col items-center p-[1.5rem]">
          {/* 이메일 */}
          <div className="my-[0.5rem] w-[100%] flex text-[#5C5C5C] items-center justify-between text-[0.9rem]">
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
                <option value="gmail.com">Google</option>
                <option value="naver.com">Naver</option>
              </select>
            </div>
          </div>
          {/* 비밀번호 */}
          <div className="my-[0.5rem] flex text-[#5C5C5C] w-[100%] items-center justify-between text-[0.9rem]">
            <div className="w-[20%] min-w-[7rem]">비밀번호</div>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-[0.2rem] w-[30rem] p-[0.2rem] text-[0.8rem] font-OneShinhanLight focus:outline-none"
            />
          </div>
          {/* 비밀번호 재확인 */}
          <div className="relative my-[0.5rem] flex text-[#5C5C5C] w-[100%] items-center justify-between text-[0.9rem]">
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
          <div className="my-[0.5rem] flex text-[#5C5C5C] w-[100%] items-center justify-between text-[0.9rem]">
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
          <div className="my-[0.5rem] flex text-[#5C5C5C] w-[100%] items-center justify-between text-[0.9rem]">
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
          <div className="my-[0.5rem] flex text-[#5C5C5C] w-[100%] items-center justify-between text-[0.9rem]">
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
            className="mt-[3rem] py-[0.3rem] w-[100%] cursor-pointer font-OneShinhanMedium shadow-md border rounded-[0.5rem] flex justify-center bg-[#0046ff] text-white"
          >
            다음으로
          </div>
          {/* 회원가입 실패 */}
          {isError && (
            <div className="my-[0.5rem] flex justify-center w-[40%] max-w-[35rem] min-w-[25rem] text-[0.9rem]">
              <div className="text-red-500">{errorMessage}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
