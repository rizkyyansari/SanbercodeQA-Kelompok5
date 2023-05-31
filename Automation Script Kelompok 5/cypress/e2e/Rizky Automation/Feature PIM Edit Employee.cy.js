
describe('Test Positive Case Edit Employee Feature PIM', () => {
  
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      
      //Validation
      cy.url().should('include', '/web/index.php/dashboard/index')
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
    })
    
    
    it('Test Navigation & Edit Employee List ', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
      
      //Search Nama Employee
      cy.get(':nth-child(2) > .oxd-input').type('0275')      
      cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})

      //Edit Data Employee
      cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click()
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Muhammad')
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Rizky')
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Ansari')
      cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()


      //Validation
      cy.get('.oxd-text--toast-message')
      
  
      
  
  })

})