import ProjectDTO from "../dto/ProjectDTO";
import ProjectLanguageDTO from "../dto/ProjectLanguageDTO";
import ProjectUserDTO from "../dto/ProjectUserDTO";
import ProjectContentDTO from "../dto/ProjectContentDTO";
import { axios } from "./Axios";

export const getProjects = async (portfolioId) => {
  try {
    const response = await axios.get(`/projects`, {
      params: { portfolioId: portfolioId },
    });
    console.log("[IN AXIOS] projects response : ", response.data.result);
    return response.data.result.map(
      (data) =>
        new ProjectDTO(
          data.id, // projectId
          portfolioId, // portfolioId (default to null)
          data.title,
          data.language.split(",").map((word) => new ProjectLanguageDTO(word)),
          data.projectUrl,
          data.description,
          data.startDate,
          data.endDate,
          data.projectUsers.map((name) => new ProjectUserDTO(name)),
          data.contents.map((content) => new ProjectContentDTO(content))
        )
    );
  } catch (error) {
    console.error("get projects failed:", error);
    throw error;
  }
};

export const postProjects = async () => {
  try {
    const response = await axios.post(`/Project.json`);
    // console.log(response.data.award);
    return response.data;
  } catch (error) {
    console.error("post projects failed:", error);
    throw error;
  }
};

export const putProjects = async () => {
  try {
    const response = await axios.put(`/Project.json`);
    // console.log(response.data.award);
    return response.data;
  } catch (error) {
    console.error("put projects failed:", error);
    throw error;
  }
};

export const deleteProjects = async () => {
  try {
    const response = await axios.delete(`/Project.json`);
    // console.log(response.data.award);
    return response.data;
  } catch (error) {
    console.error("delete projects failed:", error);
    throw error;
  }
};
