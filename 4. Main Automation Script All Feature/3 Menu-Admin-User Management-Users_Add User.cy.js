// Rizky Melinda Pranati
// Test Case 1

describe('TC-AddUser-01 : Testing Login as an Admin', () => {
  
    it('Testing Login as an Admin',() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      
      cy.url().should('include', '/web/index.php/dashboard/index')
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain','Dashboard')    
    })
      
  })
  
  // Test Case 2
  
  describe('TC-AddUser-02 : Navigate Admin Menu Testing', () => {
    
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      
      cy.url().should('include', '/web/index.php/dashboard/index')
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain','Dashboard')
    })
    
    it('Navigate Admin Menu Testing', () => {
      
      cy.get(':nth-child(1) > .oxd-main-menu-item').click()
      cy.get('.--visited > .oxd-topbar-body-nav-tab-item > .oxd-icon').click()
      cy.get('.oxd-dropdown-menu > li').click()

      cy.get('.--visited > .oxd-topbar-body-nav-tab-item > .oxd-icon').click()
      cy.get('.orangehrm-background-container')
    
    })
  
  
  })
  
  //Test Case 3
  
  describe('TC-AddUser-03 :  Navigate Add User Function Testing', () => {
    
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      
      cy.url().should('include', '/web/index.php/dashboard/index')
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain','Dashboard')
      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    })  
    
    it('Navigate Add User Function Testing', () => {
      cy.get('.orangehrm-header-container > .oxd-button').click()
  

  })
  
  })
  
  // Test Case 4
  
  describe('TC-AddUser-04 : Test Add New Data Employee', () => {
    
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      

      cy.url().should('include', '/web/index.php/dashboard/index')
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain','Dashboard')
      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
  
      
      
    })    
  
    it('Testing Add New User Data from Employee Data', () => {
      
      cy.get('.orangehrm-header-container > .oxd-button').click()
      
      
  })
  
  })
  
  // Test Case 5
  
  describe('TC-AddUser-05 : Testing Add New User Data from Employee Data | Case: Using The Same Username', () => {
    
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      
      
      cy.url().should('include', '/web/index.php/dashboard/index')
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain','Dashboard')
      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
  

    })    
  
    it('Testing Add New User Data from Employee Data | Case: Using The Same Username', () => {
      cy.get('.orangehrm-header-container > .oxd-button').click()
      
      
      
  })
  
  })
  
  //Test Case 6
  
  describe('TC-AddUser-06 : Testing Add New User Data | Case: Not Input One or More Required Field', () => {
    
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      
      cy.url().should('include', '/web/index.php/dashboard/index')
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain','Dashboard')
      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
  
      
    })    
  
    it('Testing Add New User Data | Case: Not Input One or More Required Field', () => {
      cy.get('.orangehrm-header-container > .oxd-button').click()   
      
      
  })
  
  })
  
  //Test Case 7
  
  describe('TC-AddUser-07 : New User Data | Case:  Input Not The Same Password between Password and Confirm Password Field', () => {
    
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      
      cy.url().should('include', '/web/index.php/dashboard/index')
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain','Dashboard')
      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
  
      
    })    
  
    it('New User Data | Case:  Input Not The Same Password between Password and Confirm Password Field', () => {
      cy.get('.orangehrm-header-container > .oxd-button').click()
     
      
  })
  
  })