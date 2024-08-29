import ActivityDTO from "../dto/ActivityDTO";
import { axios } from "./Axios";

export const getActivities = async (portfolioId) => {
  try {
    const response = await axios.get(`/activities`, {
      params: { portfolioId: portfolioId },
    });
    console.log("[IN AXIOS] activities response : ", response.data.result);
    return response.data.result.map(
      (data) =>
        new ActivityDTO(
          data.id,
          portfolioId, // portfolioId (default to null)
          data.title,
          data.content,
          data.startDate,
          data.endDate,
          data.activityType,
          data.contentTitle
        )
    );
  } catch (error) {
    console.error("get awards failed:", error);
    throw error;
  }
};
