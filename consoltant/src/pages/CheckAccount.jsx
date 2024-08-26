import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function CheckAccount() {
  const navigate = useNavigate();

  const { state } = useLocation();
  

  return (
    <div>
      {/* 좌측 상단 로고 */}
      <div className="flex items-center m-[2rem]">
        <img className="w-[2rem]" src="/logo/shinhan_logo_blue.png" alt="" />
        <div className="text-[#5C5C5C] font-OneShinhanBold text-[1.2rem] px-[0.6rem]">
          SOL 학생 로드맵
        </div>
      </div>
      {/* 선택란 */}
      <div className="h-[80vh] flex flex-col justify-center items-center text-[#444444]">
        <div className="w-[550px] flex justify-between">
          <div
            className="group cursor-pointer relative border flex flex-col items-center rounded-[1rem] p-[1rem] w-[250px] h-[325px] shadow bg-[#FBFBFD] hover:bg-[#EBF3FF]"
            onClick={() => navigate("/account-info", { state: { hasAccount: true, email: state } })}
          >
            <div className=" text-[1.5rem] mt-[3rem]">
              <div className="my-[0.5rem]">이미</div>
              <div className="my-[0.5rem]">
                <span className="font-OneShinhanBold group-hover:text-[#0046FF]">
                  신한 은행 계좌
                </span>
                를
              </div>
              <div className="my-[0.5rem]">
                <span className="font-OneShinhanBold group-hover:text-[#0046FF]">보유중</span>
                입니다
              </div>
            </div>
            <div className="absolute font-OneShinhanMedium bg-[#F5F5F5] border rounded-[1rem] py-[0.3rem] px-[2rem] bottom-[2rem] group-hover:text-white group-hover:bg-[#0046FF]">
              계좌 연결하기
            </div>
          </div>
          <div
            className="group cursor-pointer relative border flex flex-col items-center rounded-[1rem] p-[1rem] w-[250px] h-[325px] shadow bg-[#FBFBFD] hover:bg-[#EBF3FF]"
            onClick={() =>
              navigate("/account-info", { state: { hasAccount: false, email: state } })
            }
          >
            <div className="text-[1.5rem] mt-[3rem]">
              <div className="my-[0.5rem]">보유중인</div>
              <div className="my-[0.5rem]">
                <span className="font-OneShinhanBold group-hover:text-[#0046FF]">
                  신한 은행 계좌
                </span>
                가
              </div>
              <div className="my-[0.5rem]">
                <span className="font-OneShinhanBold group-hover:text-[#0046FF]">없습니다</span>
              </div>
            </div>
            <div className="absolute font-OneShinhanMedium bg-[#F5F5F5] border rounded-[1rem] py-[0.3rem] px-[2rem] bottom-[2rem] group-hover:text-white group-hover:bg-[#0046FF]">
              계좌 생성하기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckAccount;
