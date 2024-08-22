import React, { useState } from "react";
import styled from "styled-components";

const KeywordSectionStyle = styled.div`
  width: 100%;
  margin-top: 3rem;
`;

const KeywordTitle = styled.div``;

const KeywordContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 10rem;
  align-content: flex-start;
`;

const HappinessContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 3rem;
  align-content: flex-start;
`;

const KeywordComponent = styled.div`
  border: 0.1rem solid #c7c7c7;
  color: #444444;
  background-color: ${(props) => (props.isSelected ? "#FFCC00" : "#FFFFF")};
  border-radius: 0.5rem;
  height: 2rem;
  width: auto;
  padding: 0 1rem;
  margin: 0.2rem 0.3rem;
  text-align: center;
  line-height: 1.8rem;
`;

const HappinessComponent = styled.div`
  border: 0.1rem solid #c7c7c7;
  color: #444444;
  background-color: ${(props) => (props.isSelected ? "#FFCC00" : "#FFFFF")};
  border-radius: 0.5rem;
  height: 2rem;
  width: auto;
  padding: 0 5rem;
  margin: 0.2rem 0.3rem;
  text-align: center;
  line-height: 1.8rem;
`;

function KeywordSection() {
  const [keywords, setKeywords] = useState([]);
  const [selectedHappiness, setSelectedHappiness] = useState("");

  const clickKeyword = (selectedWord) => {
    if (keywords.includes(selectedWord)) {
      setKeywords(keywords.filter((word) => word !== selectedWord));
    } else if (keywords.length < 3) {
      setKeywords([...keywords, selectedWord]);
    }
  };

  const isSelected = (selectedWord) => {
    return keywords.includes(selectedWord);
  };

  return (
    <KeywordSectionStyle>
      <KeywordTitle>나를 표현하는 키워드 (1개)</KeywordTitle>

      <HappinessContainer>
        {["소확행", "중확행", "대확행"].map((happy) => (
          <HappinessComponent
            className="relative group"
            isSelected={selectedHappiness === happy}
            onClick={() => setSelectedHappiness(happy)}
          >
            {happy}
            <span className="absolute flex items-center bg-[#F7F7F7] rounded-[0.5rem] w-fill px-[0.3rem] top-[1rem] text-[0.6rem] scale-0 group-hover:scale-100 z-30 ">
              <div className="mr-[0.2rem] w-[0.3rem] h-[0.3rem] rounded-full"></div>
              {"소확행은 어쩌구입니다."}
            </span>
          </HappinessComponent>
        ))}
      </HappinessContainer>
      <KeywordTitle>나를 표현하는 키워드 (최대 3개)</KeywordTitle>
      <KeywordContainer>
        {[
          "성실함",
          "혁신적",
          "창의적",
          "협업 지향",
          "솔루션 지향",
          "유연함",
          "분석적",
          "목표 지향적",
          "문제 해결사",
          "학습 지향",
          "효율적",
          "전략적",
          "직관적",
          "커뮤니케이션",
          "기술적",
          "비전 지향",
          "자기 주도적",
          "꼼꼼함",
          "고객 중심",
          "신뢰",
          "열정적",
          "긍정적",
          "적응력",
          "리더쉽",
          "참을성",
        ].map((word) => (
          <KeywordComponent
            isSelected={isSelected(word)}
            onClick={() => clickKeyword(word)}
          >
            {word}
          </KeywordComponent>
        ))}
      </KeywordContainer>
    </KeywordSectionStyle>
  );
}

export default KeywordSection;
