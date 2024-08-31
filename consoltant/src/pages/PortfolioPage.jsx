import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Router,
  useNavigate,
  useLocation,
} from "react-router-dom";
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
import {
  getPortfolios,
  getPortfoliosByPortfolioId,
} from "../apis/Portfolio.jsx";
import { getAwards } from "../apis/Award.jsx";
import { getUserInfo } from "../apis/Users.jsx";
import { getCertifications } from "../apis/Certification.jsx";
import { getProjects } from "../apis/Project.jsx";
import { getCareers } from "../apis/Career.jsx";
import { setUser, removeUser } from "../feature/user/userSlice";
import { getActivities } from "../apis/Activity.jsx";
import { getCourses } from "../apis/Course.jsx";
import CommentController from "../components/portfolio/controller/CommentController.jsx";
import { useParams } from "react-router-dom";

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
  console.log("PortfolioFormPage RENDER");
  const navigate = useNavigate();
  const location = useLocation();

  let portloginid = location.state?.portloginid;
  let { portid } = useParams();

  // let { loginid, portfolioid } = useSelector((state) => state.user);
  const loginid = window.localStorage.getItem("userId");
  const portfolioid = window.localStorage.getItem("portfolioId");
  console.log(portid, portfolioid);
  const isBlur = !(String(portid) === String(portfolioid));
  // console.log(
  //   "????????????????????????????????????????????????????????????????"
  // );
  // console.log(portloginid);
  // console.log(portid);
  console.log("isBlurisBlurisBlurisBlurisBlurisBlurisBlurisBlurisBlur", isBlur);
  if (!isBlur) {
    portloginid = loginid;
    portid = portfolioid;
  }
  console.log(
    "///////////////////////////////////////////////////////////",
    portloginid,
    portid
  );

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
    // console.log("portfolioid : : ", portfolioid);
    if (portid) {
      // 나중에 병렬처리 하기
      if (!isBlur) {
        getUserData();
      } else {
        getPortfoliosByPortfolio();
      }
      getCareerData();
      getAwardsData();
      getCertificationdData();
      getProjectsData();
      getActivitiesData();
      getCoursesdData();
      console.log("after get projects : ", portfolioData);
    }
  }, [portid]);

  const getProfileData = async () => {
    // console.log("profile : loginid", loginid);
    const newData = await getPortfolios(portloginid);
    // dispatch(setUser({ loginid: loginid, portfolioid: portfolioid }));
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
      },
    }));
  };
  const getPortfoliosByPortfolio = async () => {
    const newData = await getPortfoliosByPortfolioId(portid);
    setPortfolioData((existingData) => ({
      ...existingData,
      userInfo: {
        ...existingData.userInfo,
        name: newData.userName,
        email: newData.email,
        age: newData.age,
        phoneNumber: newData.phoneNumber,
        birthDate: newData.birthDate,
      },
      education: {
        ...existingData.education,
        university: newData.university,
        major: newData.major,
      },
    }));
  };

  const getCareerData = async () => {
    console.log("[getCareer function] start");
    const newData = await getCareers(portid);
    setCareerItems(newData);
  };

  const getAwardsData = async () => {
    console.log("[getAwards function] start");
    const newData = await getAwards(portid);
    setAwardItems(newData);
  };

  const getCertificationdData = async () => {
    console.log("[getCertification function] start");
    const newData = await getCertifications(portid);
    setCertificationItems(newData);
  };

  const getProjectsData = async () => {
    console.log("[getProjects function] start");
    const newData = await getProjects(portid);
    setProjectItems(newData);
  };

  const getActivitiesData = async () => {
    console.log("[getActivities function] start");
    const newData = await getActivities(portid);
    setActivityItems(newData);
  };

  const getCoursesdData = async () => {
    console.log("[getCourses function] start");
    const newData = await getCourses(portloginid);
    setCourseItems(newData);
  };

  return (
    <PortfolioPageStyle>
      <Navbar></Navbar>
      <PortfolioBody>
        <PortfolioMain>
          <ProfileViewSection
            userInfo={portfolioData.userInfo}
            keywords={portfolioData.keywords}
          />
          {careerItems.length > 0 && (
            <EducationCareerSection
              education={portfolioData.education}
              isEdit={false}
              careerItems={careerItems}
              setCareerItems={setCareerItems}
              courseItems={courseItems}
              setCourseItems={setCourseItems}
            />
          )}
          {certificationItems.length > 0 && awardItems.length > 0 && (
            <AwardCertificationSection
              isEdit={false}
              certificationItems={certificationItems}
              setCertificationItems={setCertificationItems}
              awardItems={awardItems}
              setAwardItems={setAwardItems}
            />
          )}
          {projectItems.length > 0 && (
            <ProjectSection
              isEdit={false}
              projectItems={projectItems}
              setProjectItems={setProjectItems}
            />
          )}
          <ActivitySection
            isEdit={false}
            activityItems={activityItems}
            setActivityItems={setActivityItems}
          />
        </PortfolioMain>
      </PortfolioBody>
      <PortfolioController
        isBlur={isBlur}
        isEdit={false}
        portid={portid}
        portloginid={portloginid}
      ></PortfolioController>
      <CommentController
        userName={portfolioData.userInfo.name}
        portid={portid}
        portloginid={portloginid}
      ></CommentController>
    </PortfolioPageStyle>
  );
}

export default PortfolioFormPage;
