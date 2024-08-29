export default class ProjectDTO {
  static lastKey = 0;
  constructor(
    projectId = null,
    portfolioId = null,
    title = null,
    language = null,
    projectUrl = null,
    description = null,
    startDate = null,
    endDate = null,
    projectUsers = [],
    contents = []
  ) {
    this.key = ProjectDTO.lastKey++;
    this.projectId = projectId;
    this.portfolioId = portfolioId;
    this.title = title;
    this.language = language;
    this.projectUrl = projectUrl;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.projectUsers = projectUsers;
    this.contents = contents;
  }
}
