describe("Smoke Test", () => {
    it("Makes sure greeting message appears.", () => {
        cy.visit("http://localhost:3000/")
            .contains("Hello, and welcome!");
    })
})