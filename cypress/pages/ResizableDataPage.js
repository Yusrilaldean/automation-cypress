const ResizableLocator = require("../locator/ResizableLocator");

class ResizableDataPage extends ResizableLocator {
  openWeb() {
    cy.visit("https://demoqa.com/resizable");
    cy.get(this.resizableBox, { timeout: 10000 }).should("be.visible");
    cy.wait(5000);
  }

  resizeTo(width, height) {
    cy.get(this.resizableBox).invoke("css", "width", `${width}px`)
    cy.get(this.resizableBox).invoke("css", "height", `${height}px`);
    cy.wait(5000);
  }

  checkSize(width, height) {
    cy.get(this.resizableBox).should("have.css", "width", `${width}px`);
    cy.get(this.resizableBox).and("have.css", "height", `${height}px`);
    cy.wait(5000);
  }
}

module.exports = new ResizableDataPage();
