import React from "react";
import MenuDropdown from "./MenuDropdown";

// 상단바
function Navbar() {
  return (
    <div className="bg-[#102FA8] h-[5rem] flex items-center justify-between px-[3rem]">
      <div className="flex items-center">
        <img className="w-[2.5rem] mx-[0.5rem]" src="/nav/shinhan_logo_white.png" />
        <div className="text-[1.7rem] text-white">신한은행</div>
      </div>
      <img className="w-[3rem]" src="/nav/profile_icon.png" />

      <MenuDropdown></MenuDropdown>
    </div>
  );
}
export default Navbar;
