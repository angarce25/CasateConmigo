describe ("Aboutus", () => {
    beforeEach(() =>{
        cy.visit("http://localhost:5173/about")
    })
    it("Deberia mostrarse texto bienvenida", () =>{
        cy.get("h2").contains("Bienvenida")
    })
})