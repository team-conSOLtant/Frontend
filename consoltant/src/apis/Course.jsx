import CourseDTO from "../dto/CourseDTO";
import { axios } from "./Axios";

export const getCourses = async (loginId) => {
  try {
    const response = await axios.get(`/courses`, {
      params: { userId: loginId },
    });
    console.log("[IN AXIOS] courses response : ", response.data.result);
    return response.data.result.map(
      (data) =>
        new CourseDTO(
          data.id,
          data.userId, //
          data.subjectId, // issuingOrganization
          data.grade, // acquisitionDate
          data.subjectName,
          data.isSelected
        )
    );
  } catch (error) {
    console.error("get courses failed:", error);
    throw error;
  }
};
