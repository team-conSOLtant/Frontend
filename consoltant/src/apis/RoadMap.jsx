import { axios } from "./Axios";

export const getBestRoadMap = async () => {
  try {
    const result = await axios.get("/roadmaps/best").then((res) => {
      return res.data;
    });
    return result;
  } catch (error) {
    console.error("getBestRoadMap failed:", error);
    throw error;
  }
};

export const getExpectedRoadMap = async () => {
  try {
    const result = await axios.get("/roadmaps/expected").then((res) => {
      return res.data;
    });
    return result;
  } catch (error) {
    console.error("getExpectedRoadMap failed:", error);
    throw error;
  }
};

export const getPresentRoadMap = async () => {
  try {
    const result = await axios.get("/roadmaps/present").then((res) => {
      return res.data;
    });
    console.log(result);
    return result;
  } catch (error) {
    console.error("getPresentRoadMap failed:", error);
    throw error;
  }
};
