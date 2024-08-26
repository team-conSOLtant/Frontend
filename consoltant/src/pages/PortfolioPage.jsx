import React, { useEffect, useState } from "react";
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
import { getPortfolios } from "../apis/Portfolio.jsx";
import { getAwards } from "../apis/Award.jsx";
import { getUserInfo } from "../apis/Users.jsx";
import { getCertifications } from "../apis/Certification.jsx";
import { getProjects } from "../apis/Project.jsx";
import { getCareer } from "../apis/Career.jsx";
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

  const [portfolioData, setPortfolioData] = useState({
    userInfo: {
      name: null,
      email: null,
      age: null,
      job: null,
      phoneNumber: null,
      imageUrl: null,
      description: null,
      portfolioId: null,
    },
    keywords: { financeKeyword: null, myKeyword: null },
    educationAndcareer: {
      education: {
        university: {
          id: null,
          name: null,
          universityCode: null,
          isDeleted: null,
        },
        totalGpa: null,
        majorGpa: null,
        major: null,
      },
      career: [],
    },
    awardsAndcertifications: { awards: [], certifications: [] },
    projects: [],
    activities: [],
  });

  useEffect(() => {
    console.log("this is portfolio page - - - - - - - - - - - - - - - - -");
    getProfileData();
  }, []);

  useEffect(() => {
    if (portfolioData.userInfo.portfolioId) {
      getUserData();
      getCareerData();
      getAwardsData();
      getCertificationdData();
      getProjectsData();
      console.log("after get projects : ", portfolioData);
    }
  }, [portfolioData.userInfo.portfolioId]);

  const getProfileData = async () => {
    // console.log("profile : loginid", loginid);
    const newData = await getPortfolios(loginid);
    setPortfolioData((existingData) => ({
      ...existingData,
      userInfo: {
        ...existingData.userInfo,
        job: newData.job, // Backend Engineer로 업데이트
        imageUrl: newData.imageUrl, // 새로운 이미지 URL로 업데이트
        description: newData.description, // 새로운 설명으로 업데이트
        portfolioId: newData.id,
      },
      keywords: {
        ...existingData.keywords,
        financeKeyword: newData.financeKeyword, // 새로운 financeKeyword로 업데이트
        myKeyword: newData.myKeyword.split(","), // 새로운 myKeyword로 업데이트
      },
      educationAndcareer: {
        ...existingData.educationAndcareer,
        education: {
          ...existingData.educationAndcareer.education,
          totalGpa: newData.totalGpa, // 새로운 totalGpa로 업데이트
          majorGpa: newData.majorGpa, // 새로운 majorGpa로 업데이트
          university: {
            ...existingData.educationAndcareer.education.university,
            isDeleted: newData.isDeleted, // isDeleted 상태 업데이트
          },
        },
      },
    }));
  };

  const getUserData = async () => {
    const newData = await getUserInfo();
    // console.log("new Data", newData);
    setPortfolioData((existingData) => ({
      ...existingData,
      userInfo: {
        ...existingData.userInfo,
        name: newData.name,
        email: newData.email,
        age: newData.age,
        phoneNumber: newData.phoneNumber,
        birthDate: newData.birthDate,
      },
      educationAndcareer: {
        ...existingData.educationAndcareer,
        education: {
          ...existingData.educationAndcareer.education,
          university: newData.university,
          major: newData.major,
        },
      },
    }));
  };

  const getCareerData = async () => {
    console.log("[getCareer function] start");
    const newData = await getCareer(portfolioData.userInfo.portfolioId);
    setPortfolioData((existingData) => ({
      ...existingData,
      educationAndcareer: {
        ...existingData.educationAndcareer,
        career: newData,
      },
    }));
  };

  const getAwardsData = async () => {
    console.log("[getAwards function] start");
    const newData = await getAwards(portfolioData.userInfo.portfolioId);
    setPortfolioData((existingData) => ({
      ...existingData,
      awardsAndcertifications: {
        ...existingData.awardsAndcertifications,
        awards: newData,
      },
    }));
  };

  const getCertificationdData = async () => {
    console.log("[getCertification function] start");
    const newData = await getCertifications(portfolioData.userInfo.portfolioId);
    setPortfolioData((existingData) => ({
      ...existingData,
      awardsAndcertifications: {
        ...existingData.awardsAndcertifications,
        certifications: newData,
      },
    }));
  };

  const getProjectsData = async () => {
    console.log("[getProjects function] start");
    const newData = await getProjects(portfolioData.userInfo.portfolioId);
    setPortfolioData((existingData) => ({
      ...existingData,
      projects: newData,
    }));
  };
  return (
    <PortfolioPageStyle>
      <Navbar></Navbar>
      <PortfolioBody>
        <PortfolioMain>
          <ProfileViewSection userInfo={portfolioData.userInfo} />
          <EducationCareerSection
            educationAndcareer={portfolioData.educationAndcareer}
            isEdit={false}
          />
          <AwardCertificationSection
            awardsAndcertifications={portfolioData.awardsAndcertifications}
            isEdit={false}
          />
          <ProjectSection projects={portfolioData.projects} isEdit={false} />
          <ActivitySection
            activities={portfolioData.activities}
            isEdit={false}
          />
        </PortfolioMain>
      </PortfolioBody>
      <PortfolioController isEdit={false}></PortfolioController>
    </PortfolioPageStyle>
  );
}

export default PortfolioFormPage;
