function ExploreButton({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex items-start justify-center w-[6.5rem] py-[0.4rem] text-[0.8rem] bg-white rounded-[1rem]  cursor-pointer"
    >
      Explore
      <img
        className="h-[0.4rem] ml-[0.3rem] mt-[0.3rem]"
        src="/button/ArrowRight.png"
        alt=""
      />
    </div>
  );
}
export default ExploreButton;
