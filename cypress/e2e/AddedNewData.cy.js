const Papa = require("papaparse");
const AddNewUserPage = require("../pages/AddNewUserPage");

describe("Add new data from CSV", () => {
  let users = [];

  before(() => {
    cy.readFile("users.csv", "utf8").then((csvText) => {
      users = Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
      }).data;
    });
  });

  it("adds all data from CSV", () => {
    AddNewUserPage.openWeb();
    users.forEach((user) => {
      AddNewUserPage.fillDataForm(user);
      AddNewUserPage.verifyUserVisible(user);
      console.log('Testing push git');
    });
  });

  it("adds all data from CSV with empty email", () => {
    AddNewUserPage.openWeb();
    AddNewUserPage.fillDataFormWithEmptyEmail(users[0]);
  });

  it("adds all data from CSV with empty age", () => {
    AddNewUserPage.openWeb();
    AddNewUserPage.fillDataFormWithEmptyAge(users[0]);
  });

  it("adds all data from CSV with empty salary", () => {
    AddNewUserPage.openWeb();
    AddNewUserPage.fillDataFormWithEmptySalary(users[0]);
  });
});
