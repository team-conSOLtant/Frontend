export default class CourseDTO {
  static lastKey = 0;
  constructor(
    courseId = null,
    userId = null,
    subjectId = null,
    grade = null,
    subjectName = null,
    isSelected = null
  ) {
    this.key = CourseDTO.lastKey++;
    this.courseId = courseId;
    this.userId = userId;
    this.subjectId = subjectId;
    this.grade = grade;
    this.subjectName = subjectName;
    this.isSelected = isSelected;
  }
}
