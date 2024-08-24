import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function AccountInfoPage() {
  const [product, setProduct] = useState("");
  const [work, setWork] = useState(null);
  const [hasAccount, setHasAccount] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setHasAccount(location.state.hasAccount);
  }, []);

  const submit = () => {
    // 학교 데이터 넘기기
    // 계좌 여부 확인 페이지로 넘어가기
    navigate("/all-complete");
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
        <div className="w-[50%] max-w-[25rem] min-w-[20rem]  flex flex-col justify-center items-center">
          {/* 단계 표시 */}
          <div className="w-[100%] h-[1rem] pb-[4rem] flex justify-between">
            <div className="w-[48%] h-[0.8rem] bg-[#D9D9D9]"></div>
            <div className="w-[48%] h-[0.8rem] bg-[#D3E1FB]"></div>
          </div>
          {hasAccount ? (
            <div></div>
          ) : (
            <>
              {/* 상품 선택 */}
              <div className="my-[0.5rem] flex text-[#5C5C5C] w-[100%] items-center justify-between text-[0.9rem]">
                <div className="w-[20%] min-w-[7rem]">상품 선택</div>
                <select
                  className="border text-[#8F8F8F] rounded-[0.2rem] w-[30rem] p-[0.2rem] text-[0.8rem] focus:outline-none"
                  name="product"
                  id="product"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                >
                  <option value="">상품 선택하기</option>
                  <option value="1">1학년</option>
                  <option value="2">2학년</option>
                  <option value="3">3학년</option>
                  <option value="4">4학년</option>
                </select>
              </div>
            </>
          )}
          {/* 계좌 번호 */}
          <div className="my-[0.5rem] flex text-[#5C5C5C] w-[100%] items-center justify-between text-[0.9rem]">
            <div className="w-[20%] min-w-[7rem]">신한은행 계좌</div>
            <input
              type="text"
              className="border rounded-[0.2rem] w-[20rem] min-w-[5rem] p-[0.2rem] text-[0.8rem] font-OneShinhanLight focus:outline-none"
            />
            <button className="border min-w-[4rem] p-[0.2rem] text-[0.8rem] rounded-[0.2rem] ml-[0.3rem]">
              인증하기
            </button>
          </div>
          {/* 인증 메시지 */}
          <div className="my-[0.5rem] flex text-[#5C5C5C] w-[100%] items-center justify-between text-[0.9rem]">
            <div className="w-[20%] min-w-[7rem]">인증 메시지</div>
            <div className="w-[30rem] flex justify-between">
              <input
                type="text"
                className="border rounded-[0.2rem] w-[2rem] p-[0.2rem] text-[1rem] text-center font-OneShinhanMedium focus:outline-none"
              />
              <input
                type="text"
                className="border rounded-[0.2rem] w-[2rem] p-[0.2rem] text-[1rem] text-center font-OneShinhanMedium focus:outline-none"
              />
              <input
                type="text"
                className="border rounded-[0.2rem] w-[2rem] p-[0.2rem] text-[1rem] text-center font-OneShinhanMedium focus:outline-none"
              />
              <input
                type="text"
                className="border rounded-[0.2rem] w-[2rem] p-[0.2rem] text-[1rem] text-center font-OneShinhanMedium focus:outline-none"
              />

              <button className="border w-[3rem] p-[0.2rem] text-[0.8rem] rounded-[0.2rem] ml-[0.3rem]">
                확인
              </button>
            </div>
          </div>
          {/* 취업 여부 */}
          <div className="my-[0.5rem] flex text-[#5C5C5C] w-[100%] items-center justify-between text-[0.9rem]">
            <div className="w-[20%] min-w-[7rem]">취업 여부</div>
            <select
              className="border text-[#8F8F8F] rounded-[0.2rem] w-[30rem] p-[0.2rem] text-[0.8rem] focus:outline-none"
              name="work"
              id="work"
              value={work}
              onChange={(e) => setWork(e.target.value)}
            >
              <option value=""></option>
              <option value="true">예</option>
              <option value="false">아니오</option>
            </select>
          </div>
          {/* 월급 취업한 경우만 받음 */}
          {work && work === "true" ? (
            <>
            <div className="my-[0.5rem] flex text-[#5C5C5C] w-[100%] items-center justify-between text-[0.9rem]">
              <div className="w-[20%] min-w-[7rem]">재직중인 회사</div>
              <div className="relative w-[30rem]">
                <input
                  type="text"
                  className="border rounded-[0.2rem] w-full p-[0.2rem] pr-[1.8rem] text-[0.8rem] font-OneShinhanLight focus:outline-none"
                />
              </div>
            </div>
            <div className="my-[0.5rem] flex text-[#5C5C5C] w-[100%] items-center justify-between text-[0.9rem]">
              <div className="w-[20%] min-w-[7rem]">월급</div>
              <div className="relative w-[30rem]">
                <input
                  type="text"
                  className="border text-right rounded-[0.2rem] w-full p-[0.2rem] pr-[1.8rem] text-[0.8rem] font-OneShinhanLight focus:outline-none"
                />
                <div className="absolute top-[0.2rem] right-[0.7rem]">원</div>
              </div>
            </div>
            </>
          ) : (
            <></>
          )}

          {/* 다음으로 */}
          <div
            onClick={submit}
            className="mt-[3rem] py-[0.3rem] w-[100%] cursor-pointer font-OneShinhanMedium shadow-md border rounded-[0.5rem] flex justify-center bg-[#0046ff] text-white"
          >
            완료
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountInfoPage;
