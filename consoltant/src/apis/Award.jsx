import axios from "./Axios";

export const getAwards = async () => {
  try {
    const response = await axios.get(`/Award.json`);
    // console.log(response.data.award);
    return response.data;
  } catch (error) {
    console.error("get awards failed:", error);
    throw error;
  }
};
