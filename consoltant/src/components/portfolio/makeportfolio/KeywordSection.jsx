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

function KeywordSection({ keywords, setPortfolioData }) {
  const clickKeyword = (selectedWord) => {
    if (isSelected(selectedWord)) {
      setPortfolioData((existingData) => ({
        ...existingData,
        keywords: {
          ...existingData.keywords,
          myKeyword: keywords.myKeyword.filter((word) => word !== selectedWord),
        },
      }));
    } else if (keywords.myKeyword.length < 3) {
      setPortfolioData((existingData) => ({
        ...existingData,
        keywords: {
          ...existingData.keywords,
          myKeyword: [...keywords.myKeyword, selectedWord],
        },
      }));
    }
    console.log("keywordskeywordskeywordskeywords", keywords.myKeyword);
  };

  const clickFinanceKeyword = (happy) => {
    setPortfolioData((existingData) => ({
      ...existingData,
      keywords: {
        ...existingData.keywords,
        financeKeyword: kor2Eng(happy),
      },
    }));
  };

  const isSelected = (selectedWord) => {
    // console.log("keywords.myKeyword", keywords.myKeyword);
    return keywords.myKeyword.includes(selectedWord);
  };

  const eng2Kor = (word) => {
    if (word === "BIG_HAPPINESS") {
      return "대확행";
    } else if (word === "MIDDLE_HAPPINESS") {
      return "중확행";
    } else if (word === "SMALL_HAPPINESS") {
      return "소확행";
    } else {
      console.log("happiness change ERROR!!!");
    }
  };
  const kor2Eng = (word) => {
    if (word === "대확행") {
      return "BIG_HAPPINESS";
    } else if (word === "중확행") {
      return "MIDDLE_HAPPINESS";
    } else if (word === "소확행") {
      return "SMALL_HAPPINESS";
    } else {
      console.log("happiness change ERROR!!!");
    }
  };

  return (
    <KeywordSectionStyle>
      <KeywordTitle>나를 표현하는 키워드 (1개)</KeywordTitle>

      <HappinessContainer>
        {["소확행", "중확행", "대확행"].map((happy) => (
          <HappinessComponent
            key={happy}
            className="relative group"
            isSelected={eng2Kor(keywords.financeKeyword) === happy}
            onClick={() => clickFinanceKeyword(happy)}
          >
            {/* 제목에만 폰트 적용 */}
            <span className="font-OneShinhanBold">{happy}</span>
            <span className="absolute top-[2.3rem] left-0 flex flex-col items-start bg-white border-[0.1rem] border-[#D9D9D9] rounded-[0.5rem] w-fill px-[0.3rem] text-[0.6rem] opacity-0 group-hover:opacity-100 z-30 shadow-lg transition-opacity duration-300">
              <div className="absolute left-[0.8rem] top-[-0.5rem] w-0 h-0 border-l-[0.4rem] border-l-transparent border-r-[0.4rem] border-r-transparent border-b-[0.4rem] border-b-white"></div>
              <div className="absolute left-[0.8rem] top-[-0.6rem] w-0 h-0 border-l-[0.5rem] border-l-transparent border-r-[0.5rem] border-r-transparent border-b-[0.5rem] border-b-[#D9D9D9] shadow-lg"></div>
              <div className="mr-[0.2rem] w-[0.3rem] h-[0.3rem] rounded-full"></div>

              {/* 설명 부분 줄 간격 조정 및 왼쪽 정렬 */}
              {happy === "소확행" && (
                <div className="leading-tight text-left">
                  <span className="font-OneShinhanBold">소확행</span>이란,
                  <br />
                  소소하지만 확실한 행복을 의미합니다.
                </div>
              )}
              {happy === "중확행" && (
                <div className="leading-tight text-left">
                  <span className="font-OneShinhanBold">중확행</span>이란,
                  <br />
                  중간 정도로 확실한 행복을 의미합니다.
                </div>
              )}
              {happy === "대확행" && (
                <div className="leading-tight text-left">
                  <span className="font-OneShinhanBold">대확행</span>이란,
                  <br />큰 확실한 행복을 의미합니다.
                </div>
              )}
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
