// Agnes Zahrani - Kelompok 5

describe('Success Login', () => {
    it('TC-001 - Success login as Admin',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        // Validation : Masuk Ke Dasboard Admin
        cy.url().should('include', '/web/index.php/dashboard/index')
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
    })   
})

describe('Menu Admin', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        // Validation : Masuk Ke Dasboard Admin
        cy.url().should('include', '/web/index.php/dashboard/index')
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
    })

    it('TC-002 : Verify Menu Admin',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        // Validation : 
        cy.url().should('include', '/web/index.php/admin/viewSystemUsers')
        cy.get('.oxd-topbar-header-breadcrumb-module').should('be.visible')
    })   
})

describe('Verify sub-menu General Information', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        // Validation : Masuk Ke Dasboard Admin
        cy.url().should('include', '/web/index.php/dashboard/index')
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
    })

    it('TC-003 : Verify sub-menu General Information',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click() // select sub-menu General Information
        // Validation : 
        cy.url().should('include', '/web/index.php/admin/viewOrganizationGeneralInformation')
        cy.get('.orangehrm-header-container > .oxd-text').should('be.visible')
    })
})

describe('Verify on-off Edit Button', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        // Validation : Masuk Ke Dasboard Admin
        cy.url().should('include', '/web/index.php/dashboard/index')
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
    })

    it('TC-004 : Success on-off edit button',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click() // select sub-menu General Information
        cy.get('.oxd-switch-input').click({force:true})
        // Validation : 
        cy.get('.oxd-button').should('be.visible') // button save enabled
    }) 
})

describe('Success Edit General Information', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        // Validation : Masuk Ke Dasboard Admin
        cy.url().should('include', '/web/index.php/dashboard/index')
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
    })

    it('TC-005 : Success edit General Information',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click() // select sub-menu General Information
        cy.get('.oxd-switch-input').click({force:true}) // clik on Edit button
        // Type Organization Name
        cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Admin')
        // Type Registration Number
        cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('001')
        // Type Tax ID
        cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('001')
        // Type Phone
        cy.get(':nth-child(4) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('081200000000')
        // Type Fax
        cy.get(':nth-child(4) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('021-00000000')
        // Type Email
        cy.get(':nth-child(4) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('admin@gmail.com')
        // Type Address Street 1
        cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Jl. Mawar')
        // Type Address Street 2
        cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Jl. Mawar')
        // Type City
        cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Jakarta')
        // Type State/Province
        cy.get(':nth-child(7) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('DKI Jakarta')
        // Type Zip/Postal Code
        cy.get(':nth-child(7) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('13000')
        // select dropdown Country
        cy.get('.oxd-select-text').click()
        cy.get('.oxd-select-dropdown > :nth-child(2) > span').contains('Afghanistan').click()
        // cy.get('.oxd-select-text').click()
        // cy.get('.oxd-select-dropdown.--positon-bottom').click()
        // cy.get('.oxd-select-option').contains('Afghanistan').click()
        // Type Notes
        cy.get('.oxd-textarea').type('Nothing')
        // Click button Save
        cy.get('.oxd-button').click()
        // Validasi :
        cy.get('.oxd-text--toast-message').should('be.visible').contains('Successfully Updated')
    }) 
})

describe('Failed Edit General Information', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        // Validation : Masuk Ke Dasboard Admin
        cy.url().should('include', '/web/index.php/dashboard/index')
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
    })

    it('TC-006 : Edit General Information input Registration Number > 30 characters',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click() // select sub-menu General Information
        cy.get('.oxd-switch-input').click({force:true}) // clik on Edit button
        // Type Organization Name
        cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Admin')
        // Type Tax ID > 30 chart
        cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        // Click button Save
        cy.get('.oxd-button').click()
        // Validasi :
        cy.get('.oxd-input-group > .oxd-text').should('be.visible').contains('Should not exceed 30 characters')
    })

    it('TC-007 : Edit General Information input Tax > 30 characters',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click() // select sub-menu General Information
        cy.get('.oxd-switch-input').click({force:true}) // clik on Edit button
        // Type Organization Name
        cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Admin')
        // Type Registration Number > 30 chart
        cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        // Click button Save
        cy.get('.oxd-button').click()
        // Validasi :
        cy.get('.oxd-input-group > .oxd-text').should('be.visible').contains('Should not exceed 30 characters')
    })

    it('TC-008 : Edit General Information input string Phone',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click() // select sub-menu General Information
        cy.get('.oxd-switch-input').click({force:true}) // clik on Edit button
        // Type Organization Name
        cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Admin')
        // Type Phone
        cy.get(':nth-child(4) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('aaa')
        // Click button Save
        cy.get('.oxd-button').click()
        // Validasi :
        cy.get('.oxd-input-group > .oxd-text').should('be.visible').contains('Allows numbers and only + - / ( )')
    })

    it('TC-009 : Edit General Information input string Fax',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click() // select sub-menu General Information
        cy.get('.oxd-switch-input').click({force:true}) // clik on Edit button
        // Type Organization Name
        cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Admin')
        // Type Fax
        cy.get(':nth-child(4) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('aaa')
        // Click button Save
        cy.get('.oxd-button').click()
        // Validasi :
        cy.get('.oxd-input-group > .oxd-text').should('be.visible').contains('Allows numbers and only + - / ( )')
    })

    it('TC-010 : Edit General Information input invalid Email',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click() // select sub-menu General Information
        cy.get('.oxd-switch-input').click({force:true}) // clik on Edit button
        // Type Organization Name
        cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Admin')
        // Type Email
        cy.get(':nth-child(4) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('admin@gmail.')
        // Click button Save
        cy.get('.oxd-button').click()
        // Validasi :
        cy.get('.oxd-input-group > .oxd-text').should('be.visible').contains('Expected format: admin@example.com')
    })

    it('TC-011 : Edit General Information input Address Street 1 > 100 characters',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click() // select sub-menu General Information
        cy.get('.oxd-switch-input').click({force:true}) // clik on Edit button
        // Type Organization Name
        cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Admin')
        // Type Address Street 1
        cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        // Click button Save
        cy.get('.oxd-button').click()
        // Validasi :
        cy.get('.oxd-input-group > .oxd-text').should('be.visible').contains('Should not exceed 100 characters')
    })

    it('TC-012 : Edit General Information input Address Street 2 > 100 characters',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click() // select sub-menu General Information
        cy.get('.oxd-switch-input').click({force:true}) // clik on Edit button
        // Type Organization Name
        cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Admin')
        // Type Address Street 2
        cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        // Click button Save
        cy.get('.oxd-button').click()
        // Validasi :
        cy.get('.oxd-input-group > .oxd-text').should('be.visible').contains('Should not exceed 100 characters')
    })

    it('TC-013 : Edit General Information input City > 30 characters',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click() // select sub-menu General Information
        cy.get('.oxd-switch-input').click({force:true}) // clik on Edit button
        // Type Organization Name
        cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Admin')
        // Type City
        cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        // Click button Save
        cy.get('.oxd-button').click()
        // Validasi :
        cy.get('.oxd-input-group > .oxd-text').should('be.visible').contains('Should not exceed 30 characters')
    })

    it('TC-014 : Edit General Information input State/Province > 30 characters',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click() // select sub-menu General Information
        cy.get('.oxd-switch-input').click({force:true}) // clik on Edit button
        // Type Organization Name
        cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Admin')
        // Type State/Province
        cy.get(':nth-child(7) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        // Click button Save
        cy.get('.oxd-button').click()
        // Validasi :
        cy.get('.oxd-input-group > .oxd-text').should('be.visible').contains('Should not exceed 30 characters')
    })

    it('TC-015 : Edit General Information input Zip/Postal Code > 30 characters',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click() // select sub-menu General Information
        cy.get('.oxd-switch-input').click({force:true}) // clik on Edit button
        // Type Organization Name
        cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Admin')
        // Type Zip/Postal Code
        cy.get(':nth-child(7) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        // Click button Save
        cy.get('.oxd-button').click()
        // Validasi :
        cy.get('.oxd-input-group > .oxd-text').should('be.visible').contains('Should not exceed 30 characters')
    })

    it('TC-016 : Edit General Information input Notes > 255 characters',() => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click() // click menu Admin
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click() // click menu Organization
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click() // select sub-menu General Information
        cy.get('.oxd-switch-input').click({force:true}) // clik on Edit button
        // Type Organization Name
        cy.get('.organization-name-container > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Admin')
        // Type Notes
        cy.get('.oxd-textarea').clear().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        // Click button Save
        cy.get('.oxd-button').click()
        // Validasi :
        cy.get('.oxd-input-group > .oxd-text').should('be.visible').contains('Should not exceed 255 characters')
    })
})