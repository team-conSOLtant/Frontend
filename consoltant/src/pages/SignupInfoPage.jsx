import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerAcademy } from "../apis/Login";

function SignupInfo() {
  // const [emailDomain, setEmailDomain] = useState("");
  const [university, setUniversity] = useState();
  const [major, setMajor] = useState();
  const [grade, setGrade] = useState();
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [isError, setIsError] = useState();

  const navigate = useNavigate();

  useEffect(() => {}, [setFileName]);

  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
    // console.log(e.target.files[0].name);
    setFileName(e.target.files[0].name);
  };

  const submit = async () => {
    // 학교 데이터 넘기기
    const form = new FormData();
    if (!file || !university || !major || !grade) {
      setErrorMessage("모든 정보를 입력해주세요");
      setIsError(true);
    } else {
      setIsError(false);
      form.append("subject", file, "[PROXY]");
      let data = {
        university: university,
        major: major,
        status: grade,
      };
      form.append(
        "data",
        new Blob([JSON.stringify(data)], {
          type: "application/json",
        })
      );
      try {
        const response = await registerAcademy(form).then((data) => {
          return data;
        });
        if (response.success) {
          // 계좌 여부 확인 페이지로 넘어가기
          navigate("/check-account");
        } else {
          setErrorMessage("학사정보 등록에 실패했습니다.");
          setIsError(true);
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
        <div className="h-[1rem] w-[50%] max-w-[25rem] min-w-[20rem] mb-[4rem] flex flex-col items-center">
          <div className="text-[1.5rem] text-[#0046ff] font-OneShinhanMedium">
            고객님의 정보가 필요해요
          </div>
          <div className="text-[0.8rem] text-[#444444]">
            고객님의 로드맵 설계를 위해서 학사 정보가 필요해요.
          </div>
          {/* <div className="w-[48%] h-[0.8rem] bg-[#D3E1FB]"></div>
          <div className="w-[48%] h-[0.8rem] bg-[#D9D9D9]"></div> */}
        </div>
        <div className="border rounded-[1rem] shadow-lg p-[1.5rem] w-[50%] max-w-[25rem] min-w-[20rem] ">
          {/* 단계 표시 */}
          <div className="flex flex-col justify-center items-center">
            {/* 대학교 */}
            <div className="my-[0.5rem] flex text-[#5C5C5C] w-[100%] items-center justify-between text-[0.9rem]">
              <div className="w-[20%] min-w-[7rem]">
                대학교<span className="text-red-500"> *</span>
              </div>
              <select
                className="border text-[#8F8F8F] rounded-[0.2rem] w-[20rem] p-[0.2rem] text-[0.8rem] focus:outline-none"
                name="univ"
                id="univ"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
              >
                <option value="">대학교 선택</option>
                <option value="신은대학교">신은대학교</option>
              </select>
            </div>
            {/* 전공 학과 */}
            <div className="my-[0.5rem] flex text-[#5C5C5C] w-[100%] items-center justify-between text-[0.9rem]">
              <div className="w-[20%] min-w-[7rem]">
                전공 학과<span className="text-red-500"> *</span>
              </div>
              <input
                type="text"
                onChange={(e) => setMajor(e.target.value)}
                className="border rounded-[0.2rem] w-[20rem] p-[0.2rem] text-[0.8rem] font-OneShinhanLight focus:outline-none"
              />
            </div>
            {/* 학년 선택 */}
            <div className="my-[0.5rem] flex text-[#5C5C5C] w-[100%] items-center justify-between text-[0.9rem]">
              <div className="w-[20%] min-w-[7rem]">
                학년<span className="text-red-500"> *</span>
              </div>
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
                <option value="5">졸업</option>
              </select>
            </div>
            {/* 파일 업로드 */}
            <div className="my-[0.5rem] flex flex-col text-[#5C5C5C] w-[100%] items-center justify-center text-[0.7rem] border rounded-[0.5rem] border-dashed p-[1.5rem]">
              {fileName && (
                <div className="flex flex-col items-center py-[1rem] ">
                  <img className="w-[2rem]" src="/login/file.svg" alt="" />
                  <div className="text-[1rem]">{fileName}</div>
                </div>
              )}
              <label
                htmlFor="file"
                className="border p-[0.3rem] rounded bg-[#D9D9D9]"
              >
                수강 내역 업로드
              </label>

              <input
                className="hidden"
                type="file"
                name="file"
                id="file"
                // onChange={(e) => setFile(e.target.files[0])}
                onChange={(e) => onChangeFile(e)}
              />
            </div>
            {/* 다음으로 */}
            <div
              onClick={submit}
              className="mt-[3rem] py-[0.3rem] w-[100%] cursor-pointer font-OneShinhanMedium shadow-md border rounded-[0.5rem] flex justify-center bg-[#0046ff] text-white"
            >
              계좌 연결하기
            </div>
            {/* 학과 정보 입력 실패 */}
            {isError && (
              <div className="my-[0.5rem] flex justify-center w-[40%] max-w-[35rem] min-w-[25rem] text-[0.9rem]">
                <div className="text-red-500">{errorMessage}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupInfo;
