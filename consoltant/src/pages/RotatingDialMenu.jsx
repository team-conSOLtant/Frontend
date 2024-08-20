import React, { useEffect, useState } from "react";

const RotatingDialMenu = () => {
  const [angle, setAngle] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  const radius = 870; // 반지름, dial 크기와 아이템 크기에 따라 조정
  // const items = Array.from({ length: 7 }, (_, i) => `Item ${i + 1}`);
  const items = [
    "대학교 1학년",
    "대학교 2학년",
    "대학교 3학년",
    "대학교 4학년",
    "30대",
    "50대",
    "은퇴",
  ];
  const colors = ["pink", "red", "blue", "green", "orange", "purple", "yellow"];
  const unstyled = "text-[#525252]";
  const styled = "text-white bg-[#005DF9]";

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      // Scroll down (upward movement in UI)
      if (itemIndex > 0) {
        setAngle((prevAngle) => prevAngle + 5);
        setItemIndex((prevIndex) => prevIndex - 1);
      }
    } else {
      // Scroll up (downward movement in UI)
      if (itemIndex < items.length - 1) {
        setAngle((prevAngle) => prevAngle - 5);
        setItemIndex((prevIndex) => prevIndex + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [itemIndex]);

  return (
    <div className="flex justify-start items-center h-screen m-0 overflow-hidden bg-gray-100 relative">
      <div
        className="absolute w-[100rem] h-[100rem] rounded-full bg-white shadow-lg shadow-[#005DF9] flex justify-center items-center transition-transform ease-out duration-300"
        style={{
          transform: `rotate(${angle}deg)`,
          left: "-25rem",
        }}
      >
        {items.map((item, index) => {
          // const angleStep = (2 * Math.PI) / items.length;
          const angleStep = Math.PI / 36;
          const itemAngle = index * angleStep;
          const x = radius * Math.cos(itemAngle);
          const y = radius * Math.sin(itemAngle);

          return (
            <div
              key={index}
              className={`absolute w-[8rem] h-[3rem] flex justify-center rounded-[2rem] p-[1rem] items-center ${
                itemIndex === index ? styled : unstyled
              }`}
              style={{
                transform: `translate(${x}px, ${y}px) rotate(${itemAngle}rad)`,
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
      {/* <div
        className="w-[10rem] h-[10rem] fixed top-2.5 left-2.5"
        style={{ backgroundColor: colors[itemIndex] }}
      >
        test
      </div> */}
    </div>
  );
};

export default RotatingDialMenu;
