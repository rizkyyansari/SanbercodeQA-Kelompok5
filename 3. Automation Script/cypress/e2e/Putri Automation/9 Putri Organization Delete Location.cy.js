describe ('TC-ADM-01 : menghapus lokasi', () => {
  it('hapus location', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'). type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'). type('admin123')

    cy.get('.oxd-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text'). click ()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)'). click()
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
    cy.get(':nth-child(2) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon'). click ()
    cy.get('.oxd-button--label-danger'). click ()

   //Expected : Dapat menghapus location yang dipilih      
 })
})


describe ('TC-ADM-02 : menghapus beberapa lokasi', () => {
  it('hapus beberapa location', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'). type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'). type('admin123')

    cy.get('.oxd-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text'). click ()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)'). click()
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon'). click ()
    cy.get(':nth-child(2) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon'). click ()
    cy.get('.orangehrm-horizontal-padding > div > .oxd-button'). click ({force : true})
    cy.get('.orangehrm-modal-footer > .oxd-button--label-danger'). click ({force :true})


   //Expected : Dapat menghapus beberapa location yang dipilih      
 })
})


describe ('TC-ADM-03 : menghapus semua lokasi', () => {
  it ('hapus semua location', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'). type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'). type('admin123')

    cy.get('.oxd-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text'). click ()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)'). click()
    cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
    cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon'). click ({force :true})
    cy.get('.orangehrm-horizontal-padding > div > .oxd-button'). click ({force : true})
    cy.get('.orangehrm-modal-footer > .oxd-button--label-danger'). click ({force : true})


   //Expected : Dapat menghapus semua location yang dipilih      
  })
})