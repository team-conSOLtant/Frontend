import CareerDTO from "../dto/CareerDTO";
import { axios } from "./Axios";

export const getCareers = async (portfolioId) => {
  try {
    const response = await axios.get(`/careers`, {
      params: { portfolioId: portfolioId },
    });
    console.log("[IN AXIOS] career response : ", response.data.result);
    return response.data.result.map(
      (data) =>
        new CareerDTO(
          data.id, // careerId
          portfolioId, // portfolioId (default to null)
          data.company,
          data.positionLevel,
          data.startDate,
          data.endDate
        )
    );
  } catch (error) {
    console.error("get career failed:", error);
    throw error;
  }
};
