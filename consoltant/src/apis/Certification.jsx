import { localAxios } from "./Axios";

export const getCertifications = async () => {
  try {
    const response = await localAxios.get(`/Award.json`);
    return response.data;
  } catch (error) {
    console.error("get certifications failed:", error);
    throw error;
  }
};
