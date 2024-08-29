export default class CertificationDTO {
  static lastKey = 0;
  constructor(
    certificationId = null,
    portfolioId = null,
    title = null,
    issuingOrganization = null,
    acquisitionDate = null
  ) {
    this.key = CertificationDTO.lastKey++;
    this.certificationId = certificationId;
    this.portfolioId = portfolioId;
    this.title = title;
    this.issuingOrganization = issuingOrganization;
    this.acquisitionDate = acquisitionDate;
  }
}
