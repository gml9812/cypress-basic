
describe("test counter", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("render [+],[-] buttons and default counter value(10)", () => {
        cy.get("[data-cy=counter]").should("have.value","10");
        cy.get("[data-cy=plus-button]");
        cy.get("[data-cy=minus-button]");
    });

    it("increases count when [+] button clicked", () => {
        cy.get("[data-cy=counter]")
          .then(($counterValue) => {
              const initialCounterValue = Number($counterValue.val());
              
              cy.get("[data-cy=plus-button]").click();
              cy.get("[data-cy=counter]").should("have.value", initialCounterValue + 1);
          });
    });

    it("decreases count when [-] button clicked", () => {
        cy.get("[data-cy=counter]")
          .then(($counterValue) => {
              const initialCounterValue = Number($counterValue.val());
              
              cy.get("[data-cy=minus-button]").click();
              cy.get("[data-cy=counter]").should("have.value", initialCounterValue - 1);
          });
    });

    it("counter max is 13", () => {
        cy.get("[data-cy=plus-button]").click().click().click().click();
        cy.get("[data-cy=counter]").should("have.value","13");
    });

    it("counter min is 7", () => {
        cy.get("[data-cy=minus-button]").click().click().click().click();
        cy.get("[data-cy=counter]").should("have.value","7");
    });
});