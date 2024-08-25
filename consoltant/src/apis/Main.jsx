import { axios } from "./Axios";

export const getPersonalInfo = async () => {
  try {
    const response = await axios.get("/Personal.json");
    // console.log(response.data.currentInfos);
    return response.data;
  } catch (error) {
    console.error("get personal Info failed: ", error);
    throw error;
  }
};

export const getMainInfo = async () => {
  try {
    const response = await axios.get("/MainInfo.json");
    return response.data;
  } catch (error) {
    console.error("get MainInfo failed: ", error);
    throw error;
  }
};
