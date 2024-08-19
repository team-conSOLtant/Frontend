import React from "react";
import { useNavigate } from "react-router-dom";
// 랜딩 페이지
function LandingPage() {
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

  const goLandingPage = () => {
    navigate("/login");
  };

  return (
    <>
      <button className="border px-1" onClick={goLandingPage}>
        goto loginpage
      </button>
      <button className="border px-1" onClick={goPortfolioPage}>
        goto portfolipage
      </button>
      <button onClick={goMakePortfolioPage}> goto make portfolipage</button>
      <button onClick={goMainPage}> goto MainPage</button>
    </>
  );
}

export default LandingPage;
