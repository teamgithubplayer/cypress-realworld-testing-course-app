import homePage from "../pages/homePage"
import coursePage from "../pages/coursePage"
import firstCoursePage from "../pages/firstCoursePage"

describe("User Journey", () => {
    it("a user can find a course on the home page and complete the courses lessons", () => {
        homePage.visit()
        homePage.getStartCourseButton("course-0").click()
        cy.location("pathname").should("equal", firstCoursePage.url)
        coursePage.getNextLesson().click()
        cy.location("pathname").should("equal", firstCoursePage.firstLessonUrl)
        coursePage.answerQuestion(0)
        coursePage.getNextLesson().click()
        cy.location("pathname").should("equal", firstCoursePage.secondLessonUrl)
        coursePage.answerQuestion(0)
        coursePage.getNextLesson().click()
        cy.location("pathname").should("equal", firstCoursePage.thirdLessonUrl)
        coursePage.answerQuestion(0)
        coursePage.getNextLesson().contains("Complete Course").click()

        cy.location("pathname").should("equal", homePage.url)
    })
})