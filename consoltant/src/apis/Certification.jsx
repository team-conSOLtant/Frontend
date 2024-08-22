import axios from "./Axios";

export const getCertifications = async () => {
  try {
    const response = await axios.get(`/Certification.json`);
    return response.data;
  } catch (error) {
    console.error("get certifications failed:", error);
    throw error;
  }
};
