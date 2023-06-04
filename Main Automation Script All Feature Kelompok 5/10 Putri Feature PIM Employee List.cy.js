describe ('TC-PIM-01 : lihat detail', () => {
    it('lihat detail', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'). type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'). type('admin123')
      cy.get('.oxd-button'). click ()

          //Expected : Masuk Ke Dasboard Admin
      cy.url().should('include', '/web/index.php/dashboard/index')
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain','Dashboard')   

      cy.get(':nth-child(2) > .oxd-main-menu-item'). click ()
      cy.get(':nth-child(2) > .oxd-table-row'). click ({Force : true})
          
          //Expected : Laman menunjukan detail employee
    })
})


describe ('TC-PIM-02 : lihat detail', () => {

  it ('cari nama', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'). type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'). type('admin123')
    cy.get('.oxd-button'). click ()

    cy.get(':nth-child(2) > .oxd-main-menu-item'). click ()
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input'). type ('Cecil')
    cy.get('.oxd-form-actions > .oxd-button--secondary'). click ({force : true})
    
    
      //Expected : Bisa cari nama employee

       })
   })



   describe ('TC-PIM-03 : Asal cari', () => {

    it ('cari nama asal', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'). type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'). type('admin123')
      cy.get('.oxd-button'). click ()
  
      cy.get(':nth-child(2) > .oxd-main-menu-item'). click ()
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input'). type ('Naravit')
      cy.get('.oxd-form-actions > .oxd-button--secondary'). click ({force : true})
      
      
        //Expected : Bisa memunculkan respon web terhadap keywords asal
  
         })
     })