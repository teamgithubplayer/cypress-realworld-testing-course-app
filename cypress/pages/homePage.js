class homePage{
    constructor(){
        this.url = "/"
    }

    visit(){
        cy.visit(this.url)
    }

    getHeader(){
        return cy.getByData("hero-heading")
    }

    getFeatures(targetFeature){
        return cy.get("dt").eq(targetFeature)
    }

    getStartCourseButton(course){
        return cy.getByData(course).find("a").contains("Get started")
    }

    inputEmailAndSubmit(email){
        cy.getByData("email-input").type(email)
        cy.getByData("submit-button").click()
    }
}

module.exports = new homePage();