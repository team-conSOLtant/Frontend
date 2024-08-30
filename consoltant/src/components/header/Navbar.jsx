import React, { useEffect, useState, useRef } from "react";
import MenuDropdown from "./MenuDropdown";
import { useNavigate } from "react-router";
import { isCompany } from "../../apis/Login";

// 상단바
function Navbar() {
  const navigate = useNavigate();

  // 메뉴 드롭다운 관리
  const [menuView, setMenuView] = useState();
  const [company, setCompany] = useState();
  const profileRef = useRef(null);
  const menuRef = useRef(null);

  // 오늘 날짜
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  // 로그인 확인
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("accessToken")) {
      setIsLogin(true);
    }
  }, [isLogin]);

  const checkCompany = async () => {
    const companyRes = await isCompany().then((res) => {
      return res.return;
    });
    console.log("너 기업이니ㅣㅣㅣㅣ???!?!", companyRes);
    setCompany(companyRes);
  };

  useEffect(() => {}, [setCompany]);

  useEffect(() => {
    checkCompany();
    // 메뉴 외부를 클릭했을 때 드롭다운을 닫는 함수
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setMenuView(false);
      }
    };
    // 클릭 이벤트 리스너 추가
    document.addEventListener("mousedown", handleClickOutside);

    // 클린업 함수로 클릭 이벤트 리스너 제거
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-[#102FA8] h-[4rem] flex items-center justify-between px-[3rem]">
      <div className="flex items-center cursor-pointer">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            navigate("/main");
          }}
        >
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
            ref={profileRef}
            className="w-[2rem] cursor-pointer"
            src="/nav/profile_icon.png"
            alt=""
          />
          {menuView && <MenuDropdown ref={menuRef} />}
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
