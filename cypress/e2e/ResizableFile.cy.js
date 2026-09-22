const ResizableDataPage = require("../pages/ResizableDataPage");

describe("Resizable box", () => {
  it("resize element into 400w x 200h", () => {
    ResizableDataPage.openWeb();
    ResizableDataPage.resizeTo(400, 200);
    ResizableDataPage.checkSize(600, 200);
  });
});
