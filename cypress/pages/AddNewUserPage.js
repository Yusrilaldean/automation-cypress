require("cypress-xpath");
const WebLocator = require("../locator/WebLocator.js");

class AddNewUserPage extends WebLocator {
  constructor() {
    super();
  }

  openWeb() {
    cy.visit("https://demoqa.com/webtables");
  }

  fillDataForm(user) {
    cy.xpath(this.addButton).click();
    cy.xpath(this.firstNameInput).clear().type(user.firstName);
    cy.xpath(this.lastNameInput).clear().type(user.lastName);
    cy.xpath(this.emailInput).clear().type(user.email);
    cy.xpath(this.ageInput).clear().type(user.age);
    cy.xpath(this.salaryInput).clear().type(user.salary);
    cy.xpath(this.departmentInput).clear().type(user.department);
    cy.xpath(this.submitButton).click();
  }

  verifyUserVisible(user) {
    cy.xpath(`//*[contains(text(), "${user.firstName}")]`).should("be.visible");
    cy.xpath(`//*[contains(text(), "${user.lastName}")]`).should("be.visible");
    cy.xpath(`//*[contains(text(), "${user.email}")]`).should("be.visible");
    cy.xpath(`//*[contains(text(), "${user.age}")]`).should("be.visible");
    cy.xpath(`//*[contains(text(), "${user.salary}")]`).should("be.visible");
    cy.xpath(`//*[contains(text(), "${user.department}")]`).should("be.visible");
  }

  fillDataFormWithEmptyEmail(user) {
    cy.xpath(this.addButton).click();
    cy.xpath(this.firstNameInput).clear().type(user.firstName);
    cy.xpath(this.lastNameInput).clear().type(user.lastName);
    cy.xpath(this.ageInput).clear().type(user.age);
    cy.xpath(this.salaryInput).clear().type(user.salary);
    cy.xpath(this.departmentInput).clear().type(user.department);
    cy.xpath(this.emailInput).should("have.value", "");
    cy.xpath(this.submitButton).click();
  }

  fillDataFormWithEmptyAge(user) {
    cy.xpath(this.addButton).click();
    cy.xpath(this.firstNameInput).clear().type(user.firstName);
    cy.xpath(this.lastNameInput).clear().type(user.lastName);
    cy.xpath(this.emailInput).clear().type(user.email);
    cy.xpath(this.salaryInput).clear().type(user.salary);
    cy.xpath(this.departmentInput).clear().type(user.department);
    cy.xpath(this.ageInput).should("have.value", "");
    cy.xpath(this.submitButton).click();
  }

  fillDataFormWithEmptySalary(user) {
    cy.xpath(this.addButton).click();
    cy.xpath(this.firstNameInput).clear().type(user.firstName);
    cy.xpath(this.lastNameInput).clear().type(user.lastName);
    cy.xpath(this.emailInput).clear().type(user.email);
    cy.xpath(this.ageInput).clear().type(user.age);
    cy.xpath(this.departmentInput).clear().type(user.department);
    cy.xpath(this.salaryInput).should("have.value", "");
    cy.xpath(this.submitButton).click();
  }
}

module.exports = new AddNewUserPage();
