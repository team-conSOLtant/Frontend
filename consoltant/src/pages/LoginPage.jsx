import React from "react";
import { Routes, Route, Router, useNavigate } from "react-router-dom";
// 로그인 페이지
function LoginPage() {
  const navigate = useNavigate();
  const goPortfolioPage = () => {
    navigate("/portfolio");
  };
  const goMakePortfolioPage = () => {
    navigate("/make-portfolio");
  };
  const goMainPage = () => {
    navigate("/main");
  };

  return (
    <>
      <div>This is login page</div>
      <button onClick={goPortfolioPage}> goto portfolipage</button>
      <button onClick={goMakePortfolioPage}> goto make portfolipage</button>
      <button onClick={goMainPage}> goto MainPage</button>
    </>
  );
}

export default LoginPage;
