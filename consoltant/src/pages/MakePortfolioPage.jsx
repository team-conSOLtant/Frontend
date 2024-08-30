import React, { useEffect, useState } from "react";
import { Routes, Route, Router } from "react-router-dom";
import PortfolioController from "../components/portfolio/controller/PortfolioController.jsx";
import styled from "styled-components";
import EducationCareerSection from "../components/portfolio/education and career/EducationCareerSection.jsx";
import AwardCertificationSection from "../components/portfolio/award and certification/AwardCertificationSection.jsx";
import ProjectForm from "../components/portfolio/project/ProjectForm.jsx";
import ProjectSection from "../components/portfolio/project/ProjectSection.jsx";
import ActivityForm from "../components/portfolio/activity/ActivityForm.jsx";
import KeywordSection from "../components/portfolio/makeportfolio/KeywordSection.jsx";
import ProfileSection from "../components/portfolio/makeportfolio/ProfileSection.jsx";
import Navbar from "../components/header/Navbar.jsx";
import ActivitySection from "../components/portfolio/activity/ActivitySection.jsx";
import { getCertifications } from "../apis/Certification.jsx";
import { getProjects } from "../apis/Project.jsx";
import { getAwards } from "../apis/Award.jsx";
import { getCareers } from "../apis/Career.jsx";
import { getUserInfo } from "../apis/Users.jsx";
import { getPortfolios } from "../apis/Portfolio.jsx";
import { getActivities } from "../apis/Activity.jsx";

import { useSelector } from "react-redux";
import { getCourses } from "../apis/Course.jsx";
// 포트폴리오(이력서) 만드는 페이지

const PortfolioPageStyle = styled.div``;

const PortfolioMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  padding: 0 10%;
`;

const PortfolioBody = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 2rem;
`;

function MakePortfolioPage() {
  let { loginid, portfolioid } = useSelector((state) => state.user);

  const [careerItems, setCareerItems] = useState([]);
  const [certificationItems, setCertificationItems] = useState([]);
  const [awardItems, setAwardItems] = useState([]);
  const [projectItems, setProjectItems] = useState([]);
  const [activityItems, setActivityItems] = useState([]);
  const [courseItems, setCourseItems] = useState([]);

  const [portfolioData, setPortfolioData] = useState({
    userInfo: {
      name: null,
      email: null,
      age: null,
      job: null,
      phoneNumber: null,
      imageUrl: null,
      description: null,
    },
    keywords: { financeKeyword: null, myKeyword: [] },
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
  });
  useEffect(() => {
    console.log("this is portfolio page - - - - - - - - - - - - - - - - -");
    getProfileData();
  }, []);

  useEffect(() => {
    if (portfolioid) {
      getUserData();
      getCareerData();
      getAwardsData();
      getCertificationdData();
      getProjectsData();
      getActivitiesData();
      getCoursesdData();

      console.log("after get projects : ", portfolioData);
    }
  }, [portfolioid]);

  const getProfileData = async () => {
    const newData = await getPortfolios(loginid);
    setPortfolioData((existingData) => ({
      ...existingData,
      userInfo: {
        ...existingData.userInfo,
        job: newData.job, // Backend Engineer로 업데이트
        imageUrl: newData.imageUrl, // 새로운 이미지 URL로 업데이트
        description: newData.description, // 새로운 설명으로 업데이트
        portfolioId: newData.id,
        backgroundColor: newData.backgroundColor,
      },
      keywords: {
        ...existingData.keywords,
        financeKeyword: newData.financeKeyword, // 새로운 financeKeyword로 업데이트
        myKeyword: newData.myKeyword.split(","), // 새로운 myKeyword로 업데이트
      },
      education: {
        ...existingData.education,
        totalGpa: newData.totalGpa, // 새로운 totalGpa로 업데이트
        majorGpa: newData.majorGpa, // 새로운 majorGpa로 업데이트
        university: {
          ...existingData.education.university,
          isDeleted: newData.isDeleted, // isDeleted 상태 업데이트
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
      education: {
        ...existingData.education,
        university: newData.university,
        major: newData.major,
        totalGpa: newData.totalGpa, // 새로운 totalGpa로 업데이트
      },
    }));
  };

  const getCareerData = async () => {
    console.log("[getCareer function] start");
    const newData = await getCareers(loginid);
    setCareerItems(newData);
  };

  const getAwardsData = async () => {
    console.log("[getAwards function] start");
    const newData = await getAwards(portfolioid);
    setAwardItems(newData);
  };

  const getCertificationdData = async () => {
    console.log("[getCertification function] start");
    const newData = await getCertifications(portfolioid);
    setCertificationItems(newData);
  };

  const getProjectsData = async () => {
    console.log("[getProjects function] start");
    const newData = await getProjects(portfolioid);
    setProjectItems(newData);
  };
  const getActivitiesData = async () => {
    console.log("[getActivities function] start");
    const newData = await getActivities(portfolioid);
    setActivityItems(newData);
  };

  const getCoursesdData = async () => {
    console.log("[getCourses function] start");
    const newData = await getCourses(loginid);
    setCourseItems(newData);
  };

  return (
    <PortfolioPageStyle>
      <Navbar></Navbar>
      <PortfolioBody>
        <PortfolioMain>
          <ProfileSection
            portfolioData={portfolioData}
            setPortfolioData={setPortfolioData}
          />
          <KeywordSection
            keywords={portfolioData.keywords}
            setPortfolioData={setPortfolioData}
          />
          <EducationCareerSection
            id="educationAndCareer"
            isEdit={true}
            education={portfolioData.education}
            careerItems={careerItems}
            setCareerItems={setCareerItems}
            courseItems={courseItems}
            setCourseItems={setCourseItems}
          />

          <AwardCertificationSection
            id="awardAndCertification"
            isEdit={true}
            certificationItems={certificationItems}
            setCertificationItems={setCertificationItems}
            awardItems={awardItems}
            setAwardItems={setAwardItems}
          />
          <ProjectSection
            isEdit={true}
            projectItems={projectItems}
            setProjectItems={setProjectItems}
          />
          <ActivitySection
            isEdit={true}
            activityItems={activityItems}
            setActivityItems={setActivityItems}
          />
        </PortfolioMain>
        <PortfolioController
          isEdit={true}
          allData={{
            portfolioData,
            awardItems,
            activityItems,
            projectItems,
            courseItems,
            certificationItems,
            careerItems,
          }}
        />
      </PortfolioBody>
    </PortfolioPageStyle>
  );
}

export default MakePortfolioPage;
