import React, { useEffect, useState } from "react";
import Navbar from "../components/header/Navbar";
import CurrentMain from "../components/main/CurrentMain";
import HistoryMain from "../components/main/HistoryMain";

const MainPage = () => {
  const [angle, setAngle] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  const radius = 890; // 반지름, dial 크기와 아이템 크기에 따라 조정
  const currentInfos = {
    age: "SOPHOMORE",
    name: "김신한",
  };
  const infos = [
    {
      age: "FRESHMAN",
      ageName: "대학교 1학년",
      color: "#005DF9",
      univInfo: {
        univ: "신한",
        major: "컴퓨터공학과",
        level: "2",
        semester: "2",
        GPA: "3.7",
        limitGPA: "4.5",
        myGPA: "70",
        totalGPA: "290",
      },
      accountInfo: {
        accountName: "쏠편한 입출금 통장(저축 예금)",
        accountNum: "110-123-123456",
        accountAmount: 100000000,
        assets: [
          {
            type: "입출금",
            percent: 70,
          },
          {
            type: "적금",
            percent: 20,
          },
          {
            type: "대출",
            percent: 10,
          },
        ],
      },
      products: [
        {
          type: "예적금",
          amount: 20000000,
          nums: 3,
        },
        {
          type: "학자금 대출",
          amount: 10000000,
          nums: 1,
        },
        {
          type: "입출금 통장",
          amount: 70000000,
          nums: 2,
        },
      ],
    },
    {
      age: "SOPHOMORE",
      ageName: "대학교 2학년",
      color: "#59ABE1",
      univInfo: {
        univ: "신한",
        major: "컴퓨터공학과",
        level: "2",
        semester: "2",
        GPA: "3.7",
        limitGPA: "4.5",
        myGPA: "70",
        totalGPA: "290",
      },
      accountInfo: {
        accountName: "쏠편한 입출금 통장(저축 예금)",
        accountNum: "110-123-123456",
        accountAmount: 100000000,
        assets: [
          {
            type: "입출금",
            percent: 70,
          },
          {
            type: "적금",
            percent: 10,
          },
          {
            type: "대출",
            percent: 20,
          },
        ],
      },
      products: [
        {
          recommendStart: "2023.03",
          recommendEnd: "2023.04",
          productName: "신한 My플러스 정기예금",
          productInfo: {
            duration: 12,
            minInterest: 3.2,
            maxInterest: 3.4,
          },
        },
        {
          recommendStart: "2023.03",
          recommendEnd: "2023.04",
          productName: "신한 My플러스 정기예금",
          productInfo: {
            duration: 12,
            minInterest: 3.2,
            maxInterest: 3.4,
          },
        },
      ],
      seniorPorfolio: "신한은행",
    },
    {
      age: "JUNIOR",
      ageName: "대학교 3학년",
      color: "#5AAEC4",
      univInfo: {
        univ: "신한",
        major: "컴퓨터공학과",
        level: "2",
        semester: "2",
        GPA: "3.7",
        limitGPA: "4.5",
        myGPA: "70",
        totalGPA: "290",
      },
      accountInfo: {
        accountName: "쏠편한 입출금 통장(저축 예금)",
        accountNum: "110-123-123456",
        accountAmount: 100000000,
        assets: [
          {
            type: "입출금",
            percent: 70,
          },
          {
            type: "적금",
            percent: 10,
          },
          {
            type: "대출",
            percent: 20,
          },
        ],
      },
      products: [
        {
          type: "예적금",
          amount: 20000000,
          nums: 3,
        },
        {
          type: "학자금 대출",
          amount: 10000000,
          nums: 1,
        },
        {
          type: "입출금 통장",
          amount: 70000000,
          nums: 2,
        },
      ],
    },
    {
      age: "SENIOR",
      ageName: "대학교 4학년",
      color: "#5AC4BD",
      univInfo: {
        univ: "신한",
        major: "컴퓨터공학과",
        level: "2",
        semester: "2",
        GPA: "3.7",
        limitGPA: "4.5",
        myGPA: "70",
        totalGPA: "290",
      },
      accountInfo: {
        accountName: "쏠편한 입출금 통장(저축 예금)",
        accountNum: "110-123-123456",
        accountAmount: 100000000,
        assets: [
          {
            type: "입출금",
            percent: 70,
          },
          {
            type: "적금",
            percent: 10,
          },
          {
            type: "대출",
            percent: 20,
          },
        ],
      },
      products: [
        {
          type: "예적금",
          amount: 20000000,
          nums: 3,
        },
        {
          type: "학자금 대출",
          amount: 10000000,
          nums: 1,
        },
        {
          type: "입출금 통장",
          amount: 70000000,
          nums: 2,
        },
      ],
    },
    {
      age: "THIRTIES",
      ageName: "30대",
      color: "#34C759",
      univInfo: {
        univ: "신한",
        major: "컴퓨터공학과",
        level: "2",
        semester: "2",
        GPA: "3.7",
        limitGPA: "4.5",
        myGPA: "70",
        totalGPA: "290",
      },
      accountInfo: {
        accountName: "쏠편한 입출금 통장(저축 예금)",
        accountNum: "110-123-123456",
        accountAmount: 100000000,
        assets: [
          {
            type: "입출금",
            percent: 70,
          },
          {
            type: "적금",
            percent: 10,
          },
          {
            type: "대출",
            percent: 20,
          },
        ],
      },
      products: [
        {
          type: "예적금",
          amount: 20000000,
          nums: 3,
        },
        {
          type: "학자금 대출",
          amount: 10000000,
          nums: 1,
        },
        {
          type: "입출금 통장",
          amount: 70000000,
          nums: 2,
        },
      ],
    },
    // {
    //   age: "FORTIES",
    //   ageName: "40대",
    //   color: "#F7CE46",
    // },
    {
      age: "FIFTIES",
      ageName: "50대",
      color: "#F7CE46",
      univInfo: {
        univ: "신한",
        major: "컴퓨터공학과",
        level: "2",
        semester: "2",
        GPA: "3.7",
        limitGPA: "4.5",
        myGPA: "70",
        totalGPA: "290",
      },
      accountInfo: {
        accountName: "쏠편한 입출금 통장(저축 예금)",
        accountNum: "110-123-123456",
        accountAmount: 100000000,
        assets: [
          {
            type: "입출금",
            percent: 70,
          },
          {
            type: "적금",
            percent: 10,
          },
          {
            type: "대출",
            percent: 20,
          },
        ],
      },
      products: [
        {
          type: "예적금",
          amount: 20000000,
          nums: 3,
        },
        {
          type: "학자금 대출",
          amount: 10000000,
          nums: 1,
        },
        {
          type: "입출금 통장",
          amount: 70000000,
          nums: 2,
        },
      ],
    },
    {
      age: "RETIRED",
      ageName: "은퇴",
      color: "#F19A37",
      univInfo: {
        univ: "신한",
        major: "컴퓨터공학과",
        level: "2",
        semester: "2",
        GPA: "3.7",
        limitGPA: "4.5",
        myGPA: "70",
        totalGPA: "290",
      },
      accountInfo: {
        accountName: "쏠편한 입출금 통장(저축 예금)",
        accountNum: "110-123-123456",
        accountAmount: 100000000,
        assets: [
          {
            type: "입출금",
            percent: 70,
          },
          {
            type: "적금",
            percent: 10,
          },
          {
            type: "대출",
            percent: 20,
          },
        ],
      },
      products: [
        {
          type: "예적금",
          amount: 20000000,
          nums: 3,
        },
        {
          type: "학자금 대출",
          amount: 10000000,
          nums: 1,
        },
        {
          type: "입출금 통장",
          amount: 70000000,
          nums: 2,
        },
      ],
    },
  ];
  const colors = ["pink", "red", "blue", "green", "orange", "purple", "yellow"];
  const unstyled = "text-[#525252]";
  const styled = "text-white bg-[#005DF9]";

  const handleScroll = (event) => {
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
  }, [itemIndex]);

  return (
    <div className="h-screen overflow-hidden">
      <div className="absolute top-0 z-20 w-full">
        <Navbar />
      </div>
      {/* 원형 스크롤 구현 */}
      <div className="flex justify-start items-center h-full m-0 bg-gray-100 relative z-10">
        <div
          className="absolute w-[102rem] h-[102rem] rounded-full bg-white shadow-lg shadow-[#005DF9] flex justify-center items-center transition-transform ease-out duration-300"
          style={{
            transform: `rotate(${angle}deg)`,
            left: "-25rem",
          }}
        >
          {infos.map((info, index) => {
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
                {info.ageName}
              </div>
            );
          })}
        </div>
        <div className="absolute top-[5rem] z-20">
          {infos[itemIndex].age === currentInfos.age ? (
            <CurrentMain userInfo={currentInfos} totalInfos={infos[itemIndex]}></CurrentMain>
          ) : (
            <HistoryMain userInfo={currentInfos} totalInfos={infos[itemIndex]}></HistoryMain>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
