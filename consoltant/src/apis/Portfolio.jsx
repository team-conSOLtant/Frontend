import { axios } from "./Axios";

export const getPortfolios = async (userId) => {
  console.log("userId ::::", userId);

  try {
    const response = await axios.get("/portfolios", {
      params: { userId: userId },
    });
    console.log("[IN AXIOS] portfolios response : ", response.data.result);
    return response.data.result;
  } catch (error) {
    console.error("get portfolios failed:", error);
    throw error;
  }
};

export const postPortfolios = async () => {
  try {
    const response = await axios.post(`/Award.json`);
    // console.log(response.data.award);
    return response.data;
  } catch (error) {
    console.error("post portfolios failed:", error);
    throw error;
  }
};

export const putPortfolios = async () => {
  try {
    const response = await axios.put(`/Award.json`);
    // console.log(response.data.award);
    return response.data;
  } catch (error) {
    console.error("put portfolios failed:", error);
    throw error;
  }
};

export const deletePortfolios = async () => {
  try {
    const response = await axios.delete(`/Award.json`);
    // console.log(response.data.award);
    return response.data;
  } catch (error) {
    console.error("delete portfolios failed:", error);
    throw error;
  }
};

export const postSaveAll = async (loginid, portfolioid, allData) => {
  console.log("{{{ allData }}}", allData);
  const SAVE_ALL_FORMAT = {
    portfolioId: portfolioid,
    userId: loginid,
    portfolioRequestDto: {
      userId: loginid,
      email: allData.portfolioData.userInfo.email,
      financeKeyword: allData.portfolioData.keywords.financeKeyword,
      myKeyword: allData.portfolioData.keywords.myKeyword.join(","),
      job: allData.portfolioData.userInfo.job,
      description: allData.portfolioData.userInfo.description,
      backgroundColor: allData.portfolioData.userInfo.backgroundColor,
    },
    activities: allData.activityItems.map((activityDTO) => ({
      activityId: null,
      portfolioId: activityDTO.portfolioId,
      title: activityDTO.title,
      content: activityDTO.content,
      startDate: activityDTO.startDate,
      endDate: activityDTO.endDate,
      activityType: activityDTO.activityType,
      contentTitle: activityDTO.contentTitle,
    })),
    awards: allData.awardItems.map((awardDTO) => ({
      awardId: null,
      portfolioId: awardDTO.portfolioId,
      title: awardDTO.title,
      acquisitionDate: awardDTO.acquisitionDate,
      awardOrganization: awardDTO.awardOrganization,
      awardGrade: awardDTO.awardGrade,
      content: awardDTO.content,
    })),
    certifications: allData.certificationItems.map((certificationDTO) => ({
      certificationId: null,
      portfolioId: certificationDTO.portfolioId,
      title: certificationDTO.title,
      issuingOrganization: certificationDTO.issuingOrganization,
      acquisitionDate: certificationDTO.acquisitionDate,
    })),
    careers: allData.careerItems.map((careerDTO) => ({
      careerId: null,
      portfolioId: careerDTO.portfolioId,
      company: careerDTO.company,
      positionLevel: careerDTO.positionLevel,
      startDate: careerDTO.startDate,
      endDate: careerDTO.endDate,
    })),
    projects: allData.projectItems.map((projectDTO) => ({
      projectId: null,
      portfolioId: projectDTO.portfolioId,
      title: projectDTO.title,
      language: projectDTO.language.join(","),
      projectUrl: projectDTO.projectUrl,
      description: projectDTO.description,
      startDate: projectDTO.startDate,
      endDate: projectDTO.endDate,
      contents: projectDTO.contents.join("\n"), // 배열을 문자열로 변환
      projectUsers: projectDTO.projectUsers,
    })),
    courses: allData.courseItems.map((courseDTO) => ({
      userId: courseDTO.userId,
      subjectId: courseDTO.subjectId, // 새로운 subjectId로 변경
      grade: courseDTO.grade, // 새로운 grade로 변경
      subjectName: courseDTO.subjectName, // 새로운 subjectName 추가
      isSelected: courseDTO.isSelected, // isSelected 값을 true로 변경
    })),
    allContent: document.documentElement.innerText
      .split("\n")
      .slice(2)
      .join("\n"),
  };
  console.log("{{{ SAVE_ALL_FORMAT }}}", SAVE_ALL_FORMAT);
  try {
    const response = await axios.post(`/portfolios/save-all`, SAVE_ALL_FORMAT);
    if (response) {
      console.log("저장 완료", response);
    }
    return response.data;
  } catch (error) {
    console.error("post portfolios failed:", error);
    throw error;
  }
};

export const uploadImage = async (portfolioid, image) => {
  const imageFile = {
    imageUrl: image,
  };
  try {
    const response = await axios
      .post(`/portfolios/upload-image/${portfolioid}`, imageFile)
      .then((res) => {
        return res.data;
      });
    console.log("[IN AXIOS] portfolio image upload response : ", response);
  } catch (error) {
    console.log("image upload failed : ", error);
  }
};
