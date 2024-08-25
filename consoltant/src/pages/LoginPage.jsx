import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { requestLogin } from "../apis/Login";
import { useDispatch } from "react-redux";
import { setUser, removeUser } from "../feature/user/userSlice";

// 로그인 페이지
function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  const [loginFail, setLoginFail] = useState();

  const login = async () => {
    const form = new FormData();
    form.append("username", id);
    form.append("password", pw);
    try {
      if (
        await requestLogin(form).then((data) => {
          console.log("login data", data);
          dispatch(setUser({ loginid: data }));
          return data;
        })
      ) {
        console.log("로그인 성공!");
        navigate("/main");
      } else {
        console.log("로그인 실패!");
        setLoginFail(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, [loginFail, setLoginFail]);

  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div className="flex items-center mb-5">
        <img className="w-[2.5rem]" src="/logo/shinhan_logo_blue.png" alt="" />
        <div className="font-OneShinhanBold text-[#5C5C5C] text-[1.4rem] px-[1rem]">
          SOL 학생 로드맵
        </div>
      </div>
      <div className="w-[40%] max-w-[27rem] font-OneShinhanLight border border-[#ACACAC] shadow-lg rounded-[0.7rem] flex flex-col items-center p-5">
        <div className="w-[80%] mt-[1.5rem]">
          <div className="border text-[0.9rem] rounded-t-[10px] flex items-center py-2 pl-2">
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
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
          </div>
          <div className="border text-[0.9rem] rounded-b-[10px] flex items-center py-2 pl-2">
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
              type="password"
              placeholder="비밀번호"
              onChange={(e) => {
                setPw(e.target.value);
              }}
            />
          </div>
          {loginFail && (
            <div className="text-red-500 text-[0.7rem] mt-[0.5rem] ml-[0.4rem]">
              아이디 혹은 비밀번호를 확인해주세요.
            </div>
          )}
        </div>
        <div
          onClick={login}
          className="mt-[2rem] py-[0.5rem] font-OneShinhanMedium shadow-md border rounded-[0.5rem] flex justify-center w-[80%] bg-[#0046ff] text-white"
        >
          로그인
        </div>
      </div>
      <div className="mt-[1rem] flex flex-col items-center font-OneShinhanLight">
        <div className="flex text-[0.8rem]">
          <div className="text-[#525252]">아직 회원이 아니신가요?</div>
          <div
            className="mx-1 text-[#0046ff] cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            회원가입
          </div>
        </div>
        <div className="flex text-[0.8rem]">
          <div className="text-[#525252]">혹시 기업 회원이신가요?</div>
          <div
            className="mx-1 text-[#0046ff] cursor-pointer"
            onClick={() => navigate("/complogin")}
          >
            기업 로그인
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
