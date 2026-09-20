require("@4tw/cypress-drag-drop");
const DroppableLocator = require("../locator/DroppableLocator");

class DroppableDataPage extends DroppableLocator {
  openWeb() {
    cy.visit("https://demoqa.com/droppable");
    cy.wait(5000);
  }

  dropBox() {
    cy.get(this.dragMeBox).drag(this.dropHereBox, { force: true });
  }

  checkTheBox() {
    cy.get(this.dropHereBox).should("contain.text", "Dropped!");
  }
}

module.exports = new DroppableDataPage();
