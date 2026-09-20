class WebLocator {
  constructor() {
    this.addButton = '//*[@id="addNewRecordButton"]';
    this.firstNameInput = '//*[@id="firstName"]';
    this.lastNameInput = '//*[@id="lastName"]';
    this.ageInput = '//*[@id="age"]';
    this.emailInput = '//*[@id="userEmail"]';
    this.salaryInput = '//*[@id="salary"]';
    this.departmentInput = '//*[@id="department"]';
    this.submitButton = '//*[@id="submit"]';
  }
}

module.exports = WebLocator;
