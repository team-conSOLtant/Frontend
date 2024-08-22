import React, { useEffect, useState } from "react";
import Navbar from "../components/header/Navbar";
import CurrentMain from "../components/main/CurrentMain";
import HistoryMain from "../components/main/HistoryMain";
import { getMainInfo, getPersonalInfo } from "../apis/Main";

const MainPage = () => {
  const [angle, setAngle] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  const [radius, setRadius] = useState(0); // 반지름을 상태로 관리
  const [currentInfos, setCurrentInfos] = useState(null);
  const [infos, setInfos] = useState();

  useEffect(() => {
    getPersonalInfoData();
    getAllInfo();
    updateRadius(); // 초기 반지름 설정
    window.addEventListener("resize", updateRadius); // 화면 크기 변경 시 반지름 업데이트
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const updateRadius = () => {
    const newRadius = window.innerWidth * 0.6; // 화면 크기에 맞게 반지름 설정
    console.log("Calculated radius:", newRadius); // radius 값을 확인하기 위해 로그 추가
    if (newRadius > 800) {
      setRadius(800);
    } else if (newRadius < 675) {
      setRadius(675);
    } else {
      setRadius(newRadius);
    }
  };

  const getPersonalInfoData = async () => {
    const res = await getPersonalInfo();
    setCurrentInfos(res.currentInfos);
  };

  const getAllInfo = async () => {
    const res = await getMainInfo();
    setInfos(res.infos);
  };

  const unstyled = "text-[#525252]";
  const styled = "text-white bg-[#005DF9]";

  const handleScroll = (event) => {
    // infos가 존재하지 않으면 handleScroll 실행 안 함
    if (!infos || !infos.length) return;

    const scrollableDiv = document.querySelector(".scrollable-container");
    if (scrollableDiv && scrollableDiv.contains(event.target)) {
      return; // 스크롤이 특정 컨테이너 내에서 발생하면, 부모의 스크롤 이벤트를 무시
    }

    if (event.deltaY > 0) {
      // Scroll down (upward movement in UI)
      if (itemIndex > 0) {
        setAngle((prevAngle) => prevAngle + 5);
        setItemIndex((prevIndex) => prevIndex - 1);
      }
    } else {
      // Scroll up (downward movement in UI)
      if (itemIndex < infos.length - 1) {
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
  }, [itemIndex, infos]);

  return (
    <div className="h-screen overflow-hidden">
      <div className="absolute top-0 z-20 w-full">
        <Navbar />
      </div>
      {/* 원형 스크롤 구현 */}
      <div className="flex justify-start items-center h-full m-0 bg-gray-100 relative z-10">
        <div
          className="absolute rounded-full bg-white shadow-lg shadow-[#005DF9] flex justify-center items-center transition-transform ease-out duration-300"
          style={{
            width: `${radius * 2}px`, // radius를 기준으로 width 설정
            height: `${radius * 2}px`, // radius를 기준으로 height 설정
            transform: `rotate(${angle}deg)`,
            left: "-25rem", // 원래 중심 위치로 유지
          }}
        >
          {infos &&
            infos.map((info, index) => {
              const angleStep = Math.PI / 36;
              const itemAngle = index * angleStep;
              const x = (radius + 60) * Math.cos(itemAngle);
              const y = (radius + 60) * Math.sin(itemAngle);

              return (
                <div
                  key={index}
                  className={`absolute flex justify-center rounded-[2rem] p-[1rem] items-center ${
                    itemIndex === index ? styled : unstyled
                  }`}
                  style={{
                    width: "8rem",
                    height: "3rem",
                    transform: `translate(${x}px, ${y}px) rotate(${itemAngle}rad)`,
                  }}
                >
                  {info.ageName}
                </div>
              );
            })}
        </div>
        {currentInfos && infos && (
          <div className={`w-[${radius}]`}>
            <div className="absolute top-[5rem] min-w-[55rem] w-[75%] z-20">
              {infos[itemIndex].age === currentInfos.age ? (
                <CurrentMain
                  userInfo={currentInfos}
                  totalInfos={infos[itemIndex]}
                />
              ) : (
                <HistoryMain
                  userInfo={currentInfos}
                  totalInfos={infos[itemIndex]}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;