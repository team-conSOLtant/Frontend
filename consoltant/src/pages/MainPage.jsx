import React, { useEffect, useState } from "react";
import Navbar from "../components/header/Navbar";
import CurrentMain from "../components/main/CurrentMain";
import HistoryMain from "../components/main/HistoryMain";
import ArrowWithTriangle from "../components/main/ArrowWithTriangle";
import { getAllInfo, getGraphInfo } from "../apis/Main";
import { getNotifications } from "../apis/Notification";
import { useSelector } from "react-redux";
import { getUserInfo } from "../apis/Users";
import { getCurrentRecommend } from "../apis/Recommend";

const MainPage = () => {
  const [angle, setAngle] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  const [radius, setRadius] = useState(0); // 반지름을 상태로 관리
  const [userInfos, setUserInfos] = useState(null);
  const [infos, setInfos] = useState();
  const [notifications, setNotifications] = useState();
  const [products, setProducts] = useState();
  const [graphInfo, setGraphInfo] = useState();

  const loginid = useSelector((state) => {
    console.log("state", state);
    return state.user.loginid;
  });

  useEffect(() => {
    getNotification();
    getUserInfoData();
    getAllInfos();
    getRecommenedProducts();
    getGraphInfos();
    updateRadius(); // 초기 반지름 설정
    window.addEventListener("resize", updateRadius); // 화면 크기 변경 시 반지름 업데이트
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const updateRadius = () => {
    const newRadius = window.innerWidth * 0.57; // 화면 크기에 맞게 반지름 설정
    console.log("Calculated radius:", newRadius); // radius 값을 확인하기 위해 로그 추가
    if (newRadius < 675) {
      setRadius(675);
    } else {
      setRadius(newRadius);
    }
  };

  const getNotification = async () => {
    const res = await getNotifications(loginid);
    await setNotifications(res.result);
  };

  const getUserInfoData = async () => {
    const res = await getUserInfo();
    setUserInfos(res);
  };

  const getAllInfos = async () => {
    const res = await getAllInfo();
    console.log(res.result);
    setInfos(res.result);
  };

  const getGraphInfos = async () => {
    const res = await getGraphInfo();
    console.log(res.result);
    setGraphInfo(res.result);
  };

  const getRecommenedProducts = async () => {
    const res = await getCurrentRecommend();
    await console.log(res.result);
    await setProducts(res.result);
  };

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
      <div className="flex justify-start items-center h-full m-0 bg-gray-100 relative z-10">
        {/* 원형 스크롤 구현 */}
        {infos &&
          infos.map((info, index) => {
            const angleStep = Math.PI / 36;
            const itemAngle = index * angleStep;
            const x = (radius + 90) * Math.cos(itemAngle);
            const y = (radius + 90) * Math.sin(itemAngle);

            return (
              <div
                key={index}
                className={`absolute rounded-full bg-white shadow-lg flex justify-center items-center transition-transform ease-out duration-300`}
                style={{
                  width: `${radius * 2}px`, // radius를 기준으로 width 설정
                  height: `${radius * 2}px`, // radius를 기준으로 height 설정
                  transform: `rotate(${angle}deg)`,
                  left: "-25rem", // 원래 중심 위치로 유지
                  boxShadow: `0px 0px 15px ${infos[itemIndex].rgba}`, // 현재 인덱스에 따른 그림자 색상 적용
                }}
              >
                <div
                  key={index}
                  className={`absolute flex justify-center items-center transition-transform ease-out duration-300`}
                  style={{
                    width: "9rem",
                    height: "3rem",
                    transform: `translate(${x}px, ${y}px) rotate(${itemAngle}rad)`,
                  }}
                >
                  <ArrowWithTriangle
                    color={infos[itemIndex].hex}
                    visible={itemIndex === index}
                  />
                  <span
                    style={{
                      color: itemIndex === index ? "white" : "#525252",
                      position: "absolute",
                      left: "40px",
                      top: "10px",
                    }}
                  >
                    {info.journeyTypeName}
                  </span>
                </div>
              </div>
            );
          })}
        {userInfos && infos && (
          <div className={`w-[${radius}]`}>
            <div className="absolute top-[5rem] min-w-[55rem] w-[78%] z-20">
              {infos[itemIndex].journeyType === userInfos.currentJourneyType ? (
                <CurrentMain
                  userInfo={userInfos}
                  totalInfos={infos[itemIndex]}
                  notification={notifications}
                  products={products}
                />
              ) : (
                <HistoryMain
                  userInfo={userInfos}
                  totalInfos={infos[itemIndex]}
                  graphInfo={graphInfo}
                  index={itemIndex}
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
