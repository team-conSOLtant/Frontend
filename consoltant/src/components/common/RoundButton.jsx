function RoundButton({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-[#F7F7F7] rounded-[50%] w-[2rem] h-[2rem] flex justify-center items-center cursor-pointer"
    >
      <img className="w-[0.8rem]" src="/button/Arrow.png" alt="" />
    </div>
  );
}
export default RoundButton;
