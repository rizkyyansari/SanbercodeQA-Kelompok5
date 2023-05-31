// Login Into Dashboard
describe('Test View List Employee Feature PIM', () => {
  
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    
    //Validation
    cy.url().should('include', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
  })
  
  it('Test View Navigation View Employee List ', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()

    //Validation
    cy.url().should('include', '/web/index.php/pim/viewEmployeeList')    
  })


})

//ADD New Employee to LIST
describe('Test Positive Case Add Employee Feature PIM', () => {
  
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    
    //Validation
    cy.url().should('include', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
  })
  
  
  it('Test Navigation & Add Employee List ', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Rizky')
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Ansari')
    cy.get('.oxd-button--secondary').click()

    //Validation
    cy.url().should('include', '/web/index.php/pim/addEmployee')
    cy.get('.oxd-text--toast-title').should('contain', 'Success')
    cy.get('.oxd-text--toast-message').should('contain', 'Successfully Saved')

})

})