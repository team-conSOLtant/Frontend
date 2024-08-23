import {localAxios} from "./Axios";

export const getAwards = async () => {
  try {
    const response = await localAxios.get(`/Award.json`);
    // console.log(response.data.award);
    return response.data;
  } catch (error) {
    console.error("get awards failed:", error);
    throw error;
  }
};

export const postAwards = async () => {
  try {
    const response = await localAxios.post(`/Award.json`);
    // console.log(response.data.award);
    return response.data;
  } catch (error) {
    console.error("post awards failed:", error);
    throw error;
  }
};

export const putAwards = async () => {
  try {
    const response = await localAxios.put(`/Award.json`);
    // console.log(response.data.award);
    return response.data;
  } catch (error) {
    console.error("put awards failed:", error);
    throw error;
  }
};

export const deleteAwards = async () => {
  try {
    const response = await localAxios.delete(`/Award.json`);
    // console.log(response.data.award);
    return response.data;
  } catch (error) {
    console.error("delete awards failed:", error);
    throw error;
  }
};
