const DroppableDataPage = require("../pages/DroppableDataPage");

describe("Droppable box", () => {
  it("drag and drop box", () => {
    DroppableDataPage.openWeb();
    DroppableDataPage.dropBox();
    DroppableDataPage.checkTheBox();
  });
});