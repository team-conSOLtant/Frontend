import React, { useState } from "react";
import MenuDropdown from "./MenuDropdown";
import { useNavigate } from "react-router";

// 상단바
function Navbar() {
  const navigate = useNavigate();

  // 메뉴 드롭다운 관리
  const [menuView, setMenuView] = useState(false);

  // 오늘 날짜
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  // 로그인 확인
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-[#102FA8] h-[4rem] flex items-center justify-between px-[3rem]">
      <div className="flex items-center cursor-pointer">
        <div className="flex items-center">
          <img
            className="w-[2rem] mx-[0.5rem]"
            src="/nav/shinhan_logo_white.png"
            alt=""
          />
          <div className="text-[1.4rem] text-[#EAF1FF] font-OneShinhanBold">
            신한은행
          </div>
        </div>
        <div className="px-[1rem] text-[0.7rem] text-white font-[100]">
          {formattedDate}
        </div>
      </div>
      {isLogin ? (
        <>
          <img
            onClick={() => {
              setMenuView(!menuView);
            }}
            className="w-[2.5rem] cursor-pointer"
            src="/nav/profile_icon.png"
            alt=""
          />
          {menuView && <MenuDropdown />}
        </>
      ) : (
        <div
          className="text-white cursor-pointer"
          onClick={() => navigate("/login")}
        >
          로그인
        </div>
      )}
    </div>
  );
}
export default Navbar;
