export default class ProjectLanguageDTO {
  static lastKey = 0;
  constructor(word = "") {
    this.key = ProjectLanguageDTO.lastKey++;
    this.word = word;
  }
}
