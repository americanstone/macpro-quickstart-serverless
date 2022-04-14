describe("Home Page 508 test", () => {
  beforeEach(() => {
    cy.visit("APPLICATION_ENDPOINT/");
  });

  it("Check a11y on AMMAD Page", () => {
    cy.checkA11yOfPage();
  });
});
