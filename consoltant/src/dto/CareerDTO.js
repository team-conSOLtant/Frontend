export default class CareerDTO {
  static lastKey = 0;
  constructor(
    careerId = null,
    portfolioId = null,
    company = null,
    positionLevel = null,
    startDate = null,
    endDate = null
  ) {
    this.key = CareerDTO.lastKey++;
    this.careerId = careerId;
    this.portfolioId = portfolioId;
    this.company = company;
    this.positionLevel = positionLevel;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
