function MenuDropdown({ feed, roadmap, logout }) {
  return (
    <div className="text-[0.8rem] text-[#3F3F3F] bg-indigo-50 absolute right-[3rem] top-[3.5rem] rounded-[0.5rem] p-[1rem] shadow-md flex flex-col items-center">
      <div className={`py-[0.5rem] ${feed ? "font-bold" : ""}`}>
        포트폴리오 피드{" "}
      </div>
      <hr className="w-[5rem] border-[#B5B5B5]" />
      <div className={`py-[0.5rem] ${roadmap ? "font-bold" : ""}`}>
        내 로드맵
      </div>
      <hr className="w-[5rem] border-[#B5B5B5]" />
      <div className={`py-[0.5rem] ${logout ? "font-bold" : ""}`}>로그아웃</div>
    </div>
  );
}
export default MenuDropdown;
