import AwardDTO from "../dto/AwardDTO";
import { axios } from "./Axios";

export const getAwards = async (portfolioId) => {
  try {
    const response = await axios.get(`/awards`, {
      params: { portfolioId: portfolioId },
    });
    console.log("[IN AXIOS] award response : ", response.data.result);

    return response.data.result.map(
      (data) =>
        new AwardDTO(
          data.id, // awardId
          portfolioId, // portfolioId (default to null)
          data.title,
          data.content,
          data.awardGrade,
          data.awardOrganization,
          data.acquisitionDate
        )
    );
  } catch (error) {
    console.error("get awards failed:", error);
    throw error;
  }
};

export const postAwards = async () => {
  try {
    const response = await axios.post(`/Award.json`);
    // console.log(response.data.award);
    return response.data;
  } catch (error) {
    console.error("post awards failed:", error);
    throw error;
  }
};

export const putAwards = async () => {
  try {
    const response = await axios.put(`/Award.json`);
    // console.log(response.data.award);
    return response.data;
  } catch (error) {
    console.error("put awards failed:", error);
    throw error;
  }
};

export const deleteAwards = async () => {
  try {
    const response = await axios.delete(`/Award.json`);
    // console.log(response.data.award);
    return response.data;
  } catch (error) {
    console.error("delete awards failed:", error);
    throw error;
  }
};
