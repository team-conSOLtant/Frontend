import CertificationDTO from "../dto/CertificationDTO";
import { axios } from "./Axios";

export const getCertifications = async (portfolioId) => {
  try {
    const response = await axios.get(`/certifications`, {
      params: { portfolioId: portfolioId },
    });
    console.log("[IN AXIOS] certifications response : ", response.data.result);
    return response.data.result.map(
      (data) =>
        new CertificationDTO(
          data.id, // certificationId
          portfolioId, // portfolioId (default to null)
          data.title, // title
          data.issuingOrganization, // issuingOrganization
          data.acquisitionDate // acquisitionDate
        )
    );
  } catch (error) {
    console.error("get certifications failed:", error);
    throw error;
  }
};
