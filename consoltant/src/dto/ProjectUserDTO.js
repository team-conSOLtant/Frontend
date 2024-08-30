export default class ProjectUserDTO {
  static lastKey = 0;
  constructor(name = null) {
    this.key = ProjectUserDTO.lastKey++;
    this.name = name;
  }
}
