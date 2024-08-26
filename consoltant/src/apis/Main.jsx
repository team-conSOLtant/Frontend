import { axios, localAxios } from "./Axios";

export const getPersonalInfo = async () => {
  try {
    const response = await localAxios.get("/Personal.json");
    // console.log(response.data.currentInfos);
    return response.data;
  } catch (error) {
    console.error("get personal Info failed: ", error);
    throw error;
  }
};

export const getMainInfo = async () => {
  try {
    const response = await localAxios.get("/MainInfo.json");
    return response.data;
  } catch (error) {
    console.error("get MainInfo failed: ", error);
    throw error;
  }
};

export const getAllInfo = async () => {
  try {
    const response = await axios.get("/journeys/stats").then((res) => {
      return res.data;
    });
    return response;
  } catch (error) {
    console.log("get All Info failed: ", error);
  }
};
