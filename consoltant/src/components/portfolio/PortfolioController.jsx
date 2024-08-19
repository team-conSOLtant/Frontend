import React, { useCallback, useState } from "react";
import update from "immutability-helper";
import { Card } from "./Card";

// 포트폴리오 아이템을 드래그하여 순서를 변경하는 컴포넌트
function PortfolioController() {
  // 아이템들의 순서를 상태로 관리
  const [cards, setCards] = useState([
    {
      id: 1,
      text: "대외 활동",
    },
    {
      id: 2,
      text: "수상 / 자격증",
    },
    {
      id: 3,
      text: "학력 / 경력",
    },
    {
      id: 4,
      text: "프로젝트",
    },
  ]);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);

  const renderCard = useCallback((card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        text={card.text}
        moveCard={moveCard}
      />
    );
  }, []);

  const style = {
    width: 400,
  };

  return (
    <>
      <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
    </>
  );
}

export default PortfolioController;
