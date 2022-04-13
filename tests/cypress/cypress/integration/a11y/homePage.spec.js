describe("Home Page 508 test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Check a11y on AMMAD Page", () => {
    cy.checkA11yOfPage();
  });
});
