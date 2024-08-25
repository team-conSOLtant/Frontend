import { axios } from "./Axios";

export const getCertifications = async () => {
  try {
    const response = await axios.get(`/certifications?portfolioId=4`);
    // console.log("cert", response.data.result);
    return response.data.result;
  } catch (error) {
    console.error("get certifications failed:", error);
    throw error;
  }
};
