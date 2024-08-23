import {localAxios} from "./Axios";

export const getProjects = async () => {
  try {
    const response = await localAxios.get(`/Project.json`);
    // console.log(response.data.award);
    return response.data;
  } catch (error) {
    console.error("get projects failed:", error);
    throw error;
  }
};

export const postProjects = async () => {
  try {
    const response = await localAxios.post(`/Project.json`);
    // console.log(response.data.award);
    return response.data;
  } catch (error) {
    console.error("post projects failed:", error);
    throw error;
  }
};

export const putProjects = async () => {
  try {
    const response = await localAxios.put(`/Project.json`);
    // console.log(response.data.award);
    return response.data;
  } catch (error) {
    console.error("put projects failed:", error);
    throw error;
  }
};

export const deleteProjects = async () => {
  try {
    const response = await localAxios.delete(`/Project.json`);
    // console.log(response.data.award);
    return response.data;
  } catch (error) {
    console.error("delete projects failed:", error);
    throw error;
  }
};
