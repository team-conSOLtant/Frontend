export default class ProjectContentDTO {
  static lastKey = 0;
  constructor(content = null) {
    this.key = ProjectContentDTO.lastKey++;
    this.content = content;
  }
}
