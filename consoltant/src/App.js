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
import CompanySearchPage from "./pages/CompanySearchPage.jsx";
import CompanyLoginPage from "./pages/CompanyLoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import SignupCompletePage from "./pages/SignupCompletePage.jsx";
import SignupInfoPage from "./pages/SignupInfoPage.jsx";
import CheckAccount from "./pages/CheckAccount.jsx";
import AccountInfoPage from "./pages/AccountInfoPage.jsx";
import AllinfoCompletePage from "./pages/AllInfoCompletePage.jsx";
import FollowingFollowerPage from "./pages/FollowingFollowerPage.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/complogin" element={<CompanyLoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signup-info" element={<SignupInfoPage />} />
          <Route path="/check-account" element={<CheckAccount />} />
          <Route path="/signup-complete" element={<SignupCompletePage />} />
          <Route path="/all-complete" element={<AllinfoCompletePage />} />
          <Route path="/account-info" element={<AccountInfoPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/make-portfolio" element={<MakePortfolioPage />} />
          <Route path="/portfolio/:id" element={<PortfolioPage />} />
          <Route path="/recommend" element={<RecommendPage />} />
          <Route path="/finance-mypage" element={<FinanceMyPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/company-search" element={<CompanySearchPage />} />
          <Route path="/follow" element={<FollowingFollowerPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
