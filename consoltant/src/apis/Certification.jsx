import { axios } from "./Axios";

export const getCertifications = async (portfolioId) => {
  try {
    const response = await axios.get(`/certifications`, {
      params: { portfolioId: portfolioId },
    });
    console.log("cert", response.data.result);
    return response.data.result;
  } catch (error) {
    console.error("get certifications failed:", error);
    throw error;
  }
};
