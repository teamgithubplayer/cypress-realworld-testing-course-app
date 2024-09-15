import homePage from "../pages/homePage"

describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    homePage.visit()
  })

  it("allows users to subscribe to the email list", () => {
    homePage.inputEmailAndSubmit("tom@aol.com")
    cy.getByData("success-message").should("exist").contains("tom@aol.com")
  })

  it("does NOT allow an invalid email address", () => {
    homePage.inputEmailAndSubmit("tom")
    cy.getByData("success-message").should("not.exist")
  })

  it("does NOT allow already existing email in the database", () => {
    homePage.inputEmailAndSubmit("john@example.com")
    cy.getByData("server-error-message").should("exist").contains("john@example.com")
  })
})
