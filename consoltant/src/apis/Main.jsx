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

// 전체 여정별 자산 통계
export const getAllInfo = async () => {
  try {
    const response = await axios.get("/journeys/stats").then((res) => {
      return res.data;
    });
    console.log("[IN AXIOS] all info response: ", response);
    return response;
  } catch (error) {
    console.log("get All Info failed: ", error);
  }
};

// 여정별 자산 그래프
export const getGraphInfo = async () => {
  try {
    const response = await axios.get("/journeys/graph").then((res) => {
      return res.data;
    });
    console.log("[IN AXIOS] graph info response: ", response);
    return response;
  } catch (error) {
    console.log("get graph Info failed: ", error);
  }
};
