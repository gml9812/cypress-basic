
describe("test counter", () => {
    beforeEach(() => {
        cy.visit("/");
    })

    it("render [+],[-] buttons and default counter value(10)", () => {
        cy.get(".counter").should("have.value","10");
        cy.get(".plus-button")
        cy.get(".minus-button")
    })
})