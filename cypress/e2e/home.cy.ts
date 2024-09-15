import homePage, { getHeader, getStartCourseButton } from "../pages/homePage"
import firstCoursePage from "../pages/firstCoursePage"
import secondCoursePage from "../pages/secondCoursePage"
import thirdCoursePage from "../pages/thirdCourdPage"

describe("home page", () => {
  beforeEach(() => {
    homePage.visit()
  })

  context("Hero section", () => {
    it("the h1 contains the correct text", () => {
      homePage.getHeader().contains("Testing Next.js Applications with Cypress")
    })

    it("the features on the homepage are correct", () => {
      homePage.getFeatures(0).contains("4 Courses")
      homePage.getFeatures(1).contains("25+ Lessons")
      homePage.getFeatures(2).contains("Free and Open Source")
    })
  })

  context("Courses section", () => {
    it("Course: Testing Your First Next.js Application", () => {
      homePage.getStartCourseButton("course-0").click()
      cy.comparePathName(firstCoursePage.url)
    })

    it("Course: Testing Foundations", () => {
      homePage.getStartCourseButton("course-1").click()
      cy.comparePathName(secondCoursePage.url)
    })

    it("Course: Testing Foundations", () => {
      homePage.getStartCourseButton("course-2").click()
      cy.comparePathName(thirdCoursePage.url)
    })
  })
})