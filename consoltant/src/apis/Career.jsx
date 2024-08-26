import { axios } from "./Axios";

export const getCareer = async (portfolioId) => {
  try {
    const response = await axios.get(`/careers`, {
      params: { portfolioId: portfolioId },
    });
    console.log("[IN AXIOS] career response : ", response.data.result);
    return response.data.result;
  } catch (error) {
    console.error("get career failed:", error);
    throw error;
  }
};
