export default class ProjectLanguageDTO {
  static lastKey = 0;
  constructor(word = null) {
    this.key = ProjectLanguageDTO.lastKey++;
    this.word = word;
  }
}
