import React from "react";
import styled from "styled-components";

// 포트폴리오 옆에서 순서 바꾸게 리모컨 역할 해주는 것

const PortfolioControllerItemStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 0.2rem 0;
`;
const PortfolioControllerItemLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const IconContainer = styled.div`
  width: 1.8rem;
  height: 1.8rem;
`;
const PortfolioControllerItemIcon = styled.img`
  object-fit: contain; /* 비율 유지하며 크기 맞추기 */
`;

const PortfolioControllerItemTitle = styled.div`
  margin-left: 0.3rem;
  font-size: 0.8rem;
`;

const PortfolioControllerItemRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const PortfolioControllerItemDelete = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;
const PortfolioControllerItemHandler = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;

function PortfolioControllerItem(props) {
  return (
    <PortfolioControllerItemStyle>
      <PortfolioControllerItemLeft>
        <IconContainer>
          <PortfolioControllerItemIcon
            src={props.image}
          ></PortfolioControllerItemIcon>
        </IconContainer>

        <PortfolioControllerItemTitle>
          {props.text}
        </PortfolioControllerItemTitle>
      </PortfolioControllerItemLeft>
      <PortfolioControllerItemRight>
        {/* <PortfolioControllerItemDelete src="/MinusIcon.svg"></PortfolioControllerItemDelete> */}
        <PortfolioControllerItemHandler src="/HandlerIcon.svg"></PortfolioControllerItemHandler>
      </PortfolioControllerItemRight>
    </PortfolioControllerItemStyle>
  );
}

export default PortfolioControllerItem;
