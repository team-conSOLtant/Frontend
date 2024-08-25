import { axios } from "./Axios";

export const getPortfolios = async (userId) => {
  console.log("userId ::::", userId);
  try {
    const response = await axios.get("/api/portfolios", {
      params: { userId: userId },
    });
    console.log("portfolios response : ", response.data.result);
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
