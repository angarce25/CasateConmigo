
describe ("Panel", () => {
    beforeEach(() =>{
        cy.visit("http://localhost:5173/")
    })
    it("Deberia mostrarse Explora todas nuestras opciones", () =>{
        cy.get('.panelHeader').contains("Explora todas nuestras opciones")
    })
})