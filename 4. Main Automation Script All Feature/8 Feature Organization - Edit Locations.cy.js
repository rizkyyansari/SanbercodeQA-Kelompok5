// Agnes Zahrani - Kelompok 5

describe('Success Edit Locations', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        // Validation : Masuk Ke Dasboard Admin
        cy.url().should('include', '/web/index.php/dashboard/index')
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
    })

    it('TC-033 : Edit location input Name',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click() // select sub-menu Locations
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true}) // click icon edit
        // Type Name
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Admin 4')
        // Type City
        cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Jakarta Barat')
        // Type State/Province
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('DKI Jakarta 1')
        // Type Zip/Postal Code
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('130001')
        // Type Country
        cy.get('.oxd-select-text').click()
        cy.get('.oxd-select-dropdown > :nth-child(3) > span').contains('Albania').click()
        // Type Phone
        cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('0812000000001')
        // Type Fax
        cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('021-000000001')
        // Type Address
        cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea').clear().type('Jl. Mawar Merah')
        // Type Notes
        cy.get(':nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea').clear().type('Nothingggg')
        cy.get('.oxd-button--secondary').click({force:true})
        // Validation : 
        cy.get('.oxd-text--toast-message').should('be.visible').contains('Successfully Updated')
    })
})

describe('Cancel to Edit Locations', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        // Validation : Masuk Ke Dasboard Admin
        cy.url().should('include', '/web/index.php/dashboard/index')
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
    })

    it('TC-034 : Cancel to Edit Locations',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click() // select sub-menu Locations
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true}) // click icon edit
        cy.get('.oxd-button--ghost').click({force:true}) // click "+ Cancel" button
        // Validation : 
        cy.url().should('include', '/web/index.php/admin/viewLocations')
        cy.get('.oxd-button--ghost').should('be.visible')
    })
})

describe('Failed Edit Locations', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        // Validation : Masuk Ke Dasboard Admin
        cy.url().should('include', '/web/index.php/dashboard/index')
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
    })

    // it('TC-035 : Failed location input City > 50 characters',() => {
    //     cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
    //     cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
    //     cy.get('.oxd-dropdown-menu > :nth-child(2)').click() // select sub-menu Locations
    //     cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true}) // click icon edit
    //     // Type City
    //     cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    //     cy.get('.oxd-button--secondary').click({force:true})
    //     // Validation : 
    //     cy.get('.oxd-input-group > .oxd-text').should('be.visible').contains('Should not exceed 50 characters')
    // })

    it('TC-036 : Failed location input State/Province > 50 characters',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click() // select sub-menu Locations
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true}) // click icon edit
        // Type State/Province
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        cy.get('.oxd-button--secondary').click({force:true})
        // Validation : 
        cy.get('.oxd-input-group > .oxd-text').should('be.visible').contains('Should not exceed 50 characters')
    })

    it('TC-037 : Failed location input Zip/Postal Code > 30 characters',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click() // select sub-menu Locations
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true}) // click icon edit
        // Type Zip/Postal Code
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        cy.get('.oxd-button--secondary').click({force:true})
        // Validation : 
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('be.visible').contains('Should not exceed 30 characters')
    })

    it('TC-038 : Failed location input string Phone',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click() // select sub-menu Locations
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true}) // click icon edit
        // Type Phone
        cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('aaa')
        cy.get('.oxd-button--secondary').click({force:true})
        // Validation : 
        cy.get('.oxd-input-group > .oxd-text').should('be.visible').contains('Allows numbers and only + - / ( )')
    })

    it('TC-039 : Failed location input string Fax',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click() // select sub-menu Locations
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true}) // click icon edit
        // Type Fax
        cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('aaa')
        cy.get('.oxd-button--secondary').click({force:true})
        // Validation : 
        cy.get(':nth-child(6) > .oxd-input-group > .oxd-text').should('be.visible').contains('Allows numbers and only + - / ( )')
    })

    it('TC-040 : Failed location input Address > 250 characters',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click() // select sub-menu Locations
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true}) // click icon edit
        // Type Address
        cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        cy.get('.oxd-button--secondary').click({force:true})
        // Validation : 
        cy.get(':nth-child(7) > .oxd-input-group > .oxd-text').should('be.visible').contains('Should not exceed 250 characters')
    })

    it('TC-041 : Failed location input Notes > 250 characters',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click() // select sub-menu Locations
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force:true}) // click icon edit
        // Type Notes
        cy.get(':nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        cy.get('.oxd-button--secondary').click({force:true})
        // Validation : 
        cy.get(':nth-child(8) > .oxd-input-group > .oxd-text').should('be.visible').contains('Should not exceed 250 characters')
    })
})