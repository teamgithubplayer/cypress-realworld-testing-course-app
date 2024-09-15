describe('User-Journey', () => {
    beforeEach(()=>{
     cy.visit('http://localhost:3000/')
   
    })

    context("User-Journey Courses", ()=>{

        it.only("User-journey for course: Testing your first Next.js Application", ()=>{
            cy.getByData("course-0").find("a").contains("Get started").click()
            
            
        })
        






    })

})
