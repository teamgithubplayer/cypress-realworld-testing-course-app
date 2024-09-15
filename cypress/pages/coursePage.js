class coursePage{
    getNextLesson(){
        return cy.getByData("next-lesson-button").should("exist")
    }

    answerQuestion(answer){
        cy.getByData("challenge-answer-" + answer).click()
    }
}

module.exports = new coursePage()