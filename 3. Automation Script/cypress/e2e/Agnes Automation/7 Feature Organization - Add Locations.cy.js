// Agnes Zahrani - Kelompok 5

describe('Verify sub-menu Locations', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        // Validation : Masuk Ke Dasboard Admin
        cy.url().should('include', '/web/index.php/dashboard/index')
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
    })

    it('TC-017 : Verify sub-menu Locations',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(2)') // select sub-menu Locations
        // Validation : 
        // cy.url().should('include', '/web/index.php/admin/viewLocations')
        cy.get('.oxd-table-filter-header-title > .oxd-text').should('be.visible')
    })
})

describe('Success search Location user', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        // Validation : Masuk Ke Dasboard Admin
        cy.url().should('include', '/web/index.php/dashboard/index')
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
    })

    it('TC-018 : Search location by valid Name',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click() // select sub-menu Locations
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true}) // click Search button
        // Validation : 
        cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div').contains('Admin')
    })

    it('TC-019 : Search location by valid City',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click() // select sub-menu Locations
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Jakarta')
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true}) // click Search button
        // Validation : 
        cy.get('.oxd-table-card > .oxd-table-row > :nth-child(3) > div').contains('Jakarta')
    })

    it('TC-020 : Search location by valid Country',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click() // select sub-menu Locations
        // Type Country
        cy.get('.oxd-select-text').click()
        cy.get('.oxd-select-dropdown > :nth-child(2) > span').contains('Afghanistan').click()
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true}) // click Search button
        // Validation : 
        cy.get('.oxd-table-card > .oxd-table-row > :nth-child(4) > div').contains('Afghanistan')
    })

    it('TC-021 : Empty Search Location',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click() // select sub-menu Locations
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true}) // click Search button
        // Validation : 
        cy.get('.orangehrm-horizontal-padding > .oxd-text').contains('Records Found')
    })

    it('TC-022 : Verify Reset button on Search Location',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click() // select sub-menu Locations
        cy.get('.oxd-button--ghost').click({force:true}) // click Search button
        // Validation : 
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.empty');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.empty');
        cy.get('.oxd-select-text').contains('Select')
    })
})

describe('Failed search Location user', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        // Validation : Masuk Ke Dasboard Admin
        cy.url().should('include', '/web/index.php/dashboard/index')
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
    })

    it('TC-023 : Search location by invalid Name',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click() // select sub-menu Locations
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('AdminTest')
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true}) // click Search button
        // Validation : 
        cy.get('.oxd-text--toast-message').should('be.visible').contains('No Records Found')
    })

    it('TC-024 : Search location by invalid City',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click() // select sub-menu Locations
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('JakartaTest')
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true}) // click Search button
        // Validation : 
        cy.get('.oxd-text--toast-message').should('be.visible').contains('No Records Found')
    })
})

describe('Success Add Locations', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        // Validation : Masuk Ke Dasboard Admin
        cy.url().should('include', '/web/index.php/dashboard/index')
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
    })

    it('TC-025 : Success Add Locations',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click() // select sub-menu Locations
        cy.get('.orangehrm-header-container > div > .oxd-button').click() // click "+ Add" button
        // Type Name
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin 1')
        // Type City
        cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Jakarta')
        // Type State/Province
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('DKI Jakarta')
        // Type Zip/Postal Code
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('13000')
        // Type Country
        cy.get('.oxd-select-text').click()
        cy.get('.oxd-select-dropdown > :nth-child(2) > span').contains('Afghanistan').click()
        // Type Phone
        cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type('081200000000')
        // Type Fax
        cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').type('021-00000000')
        // Type Address
        cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Jl. Mawar')
        // Type Notes
        cy.get(':nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Nothing')
        cy.get('.oxd-button--secondary').click({force:true}) // click Save button
        // Validation : 
        cy.get('.oxd-text--toast-message').should('be.visible').contains('Successfully Saved')
        cy.get('.orangehrm-header-container > div > .oxd-button').should('be.visible')
    })

    it('TC-026 : Add Locations only input Name and Country',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click() // select sub-menu Locations
        cy.get('.orangehrm-header-container > div > .oxd-button').click() // click "+ Add" button
        // Type Name
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin 2')
        // Type Country
        cy.get('.oxd-select-text').click()
        cy.get('.oxd-select-dropdown > :nth-child(2) > span').contains('Afghanistan').click()
        cy.get('.oxd-button--secondary').click({force:true}) // click Save button
        // Validation : 
        cy.get('.oxd-text--toast-message').should('be.visible').contains('Successfully Saved')
        cy.get('.orangehrm-header-container > div > .oxd-button').should('be.visible')
    })
})

describe('Cancel to Add Locations', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        // Validation : Masuk Ke Dasboard Admin
        cy.url().should('include', '/web/index.php/dashboard/index')
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
    })

    it('TC-027 : Cancel to Add Locations',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click() // select sub-menu Locations
        cy.get('.orangehrm-header-container > div > .oxd-button').click({force:true}) // click "+ Add" button
        cy.get('.oxd-button--ghost').click({force:true}) // click "+ Cancel" button
        // Validation : 
        cy.url().should('include', '/web/index.php/admin/viewLocations')
        cy.get('.oxd-button--ghost').should('be.visible')
    })
})

describe('Failed to Add Locations', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        // Validation : Masuk Ke Dasboard Admin
        cy.url().should('include', '/web/index.php/dashboard/index')
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
    })

    it('TC-028 : Add Locations empty field',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click() // select sub-menu Locations
        cy.get('.orangehrm-header-container > div > .oxd-button').click({force:true}) // click "+ Add" button
        cy.get('.oxd-button--secondary').click({multiple:true}) // click Save button
        // Validation : 
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > .oxd-text').should('be.visible').contains('Required')
    })

    it('TC-029 : Add Locations input Name already exists',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click() // select sub-menu Locations
        cy.get('.orangehrm-header-container > div > .oxd-button').click({force:true}) // click "+ Add" button
        // Type Name
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin 1')
        cy.get('.oxd-button--secondary').click({multiple:true}) // click Save button
        // Validation : 
        cy.get(':nth-child(4) > .oxd-input-group > .oxd-text').should('be.visible').contains('Required')
    })

    it('TC-030 : Add Locations input string Fax',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click() // select sub-menu Locations
        cy.get('.orangehrm-header-container > div > .oxd-button').click({force:true}) // click "+ Add" button
        // Type Name
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin 3')
        // Type Country
        cy.get('.oxd-select-text').click()
        cy.get('.oxd-select-dropdown > :nth-child(2) > span').contains('Afghanistan').click()
        // Type Fax
        cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').type('aaa')
        cy.get('.oxd-button--secondary').click({multiple:true}) // click Save button
        // Validation : 
        cy.get('.oxd-input-group > .oxd-text').should('be.visible').contains('Allows numbers and only + - / ( )')
    })

    it('TC-031 : Add Locations input Address > 250 characters',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click() // select sub-menu Locations
        cy.get('.orangehrm-header-container > div > .oxd-button').click({force:true}) // click "+ Add" button
        // Type Name
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin 3')
        // Type Country
        cy.get('.oxd-select-text').click()
        cy.get('.oxd-select-dropdown > :nth-child(2) > span').contains('Afghanistan').click()
        // Type Address
        cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        cy.get('.oxd-button--secondary').click({multiple:true}) // click Save button
        // Validation : 
        cy.get(':nth-child(7) > .oxd-input-group > .oxd-text').should('be.visible').contains('Should not exceed 250 characters')
    })

    it('TC-032 : Add Locations input Notes > 250 characters',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click() // select sub-menu Locations
        cy.get('.orangehrm-header-container > div > .oxd-button').click({force:true}) // click "+ Add" button
        // Type Name
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin 3')
        // Type Country
        cy.get('.oxd-select-text').click()
        cy.get('.oxd-select-dropdown > :nth-child(2) > span').contains('Afghanistan').click()
        // Type Notes
        cy.get(':nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        cy.get('.oxd-button--secondary').click({multiple:true}) // click Save button
        // Validation : 
        cy.get(':nth-child(8) > .oxd-input-group > .oxd-text').should('be.visible').contains('Should not exceed 250 characters')
    })

})
