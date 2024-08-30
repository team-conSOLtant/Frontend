export default class ActivityDTO {
  static lastKey = 0;
  constructor(
    activityId = null,
    portfolioId = null,
    title = null,
    content = null,
    startDate = null,
    endDate = null,
    activityType = null,
    contentTitle = null
  ) {
    this.key = ActivityDTO.lastKey++;
    this.activityId = activityId;
    this.portfolioId = portfolioId;
    this.title = title;
    this.content = content;
    this.startDate = startDate;
    this.endDate = endDate;
    this.activityType = activityType;
    this.contentTitle = contentTitle;
  }
}
// activity;
