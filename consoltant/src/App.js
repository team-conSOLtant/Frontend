import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import MakePortfolioPage from "./pages/MakePortfolioPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import MainPage from "./pages/MainPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import PortfolioPage from "./pages/PortfolioPage";
import RecommendPage from "./pages/RecommendPage.jsx";
import FinanceMyPage from "./pages/FinanceMyPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import CompanyLoginPage from "./pages/CompanyLoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import SignupCompletePage from "./pages/SignupCompletePage.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/complogin" element={<CompanyLoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/complete" element={<SignupCompletePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/make-portfolio" element={<MakePortfolioPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/recommend" element={<RecommendPage />} />
          <Route path="/finance-mypage" element={<FinanceMyPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
