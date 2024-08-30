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

export const postExpectedRoadMap = async (data) => {
  try {
    console.log("postExpectedRoadMap data: ", data);
    const result = await axios.post("/roadmaps/expect", data).then((res) => {
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
