import React, { useEffect } from "react";
import { Routes, Route, Router } from "react-router-dom";
import PortfolioController from "../components/portfolio/controller/PortfolioController.jsx";
import styled from "styled-components";
import Navbar from "../components/header/Navbar.jsx";
import ProfileViewSection from "../components/portfolio/ProfileViewSection.jsx";
import KeywordSection from "../components/portfolio/makeportfolio/KeywordSection.jsx";
import EducationCareerSection from "../components/portfolio/education and career/EducationCareerSection.jsx";
import AwardCertificationSection from "../components/portfolio/award and certification/AwardCertificationSection.jsx";
import ProjectSection from "../components/portfolio/project/ProjectSection.jsx";
import ActivitySection from "../components/portfolio/activity/ActivitySection.jsx";
import { useDispatch, useSelector } from "react-redux";
// 포트폴리오(이력서) 보는 페이지

const PortfolioPageStyle = styled.div``;

const PortfolioBody = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 2rem;
`;

const PortfolioMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  padding: 0 10%;
`;

function PortfolioFormPage() {
  const loginid = useSelector((state) => state.user.loginid);
  console.log("loginid", loginid);
  // const dispatch = useDispatch();

  useEffect(() => {
    console.log(
      "this is portfolio page - - - - - - - - - - - - - - - - - - - -"
    );
    // console.log(loginid);
  }, []);
  return (
    <PortfolioPageStyle>
      <Navbar></Navbar>
      <PortfolioBody>
        <PortfolioMain>
          <ProfileViewSection />
          <EducationCareerSection isEdit={false} />
          <AwardCertificationSection isEdit={false} />
          <ProjectSection isEdit={false} />
          <ActivitySection isEdit={false} />
        </PortfolioMain>
        {/* <PortfolioController /> */}
      </PortfolioBody>
      <PortfolioController isEdit={false}></PortfolioController>
    </PortfolioPageStyle>
  );
}

export default PortfolioFormPage;
