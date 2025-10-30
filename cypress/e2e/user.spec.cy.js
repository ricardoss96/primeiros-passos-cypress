import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {
  const selectorsList = {
    usernameField: "",
    passwordField: "",
    loginButton: ".orangehrm-login-button",
    selectionTitleTopBar: "",
    deshboadGrid: ".oxd-layout-context",
    wrongCredentialAlert: ""                
  } 

  it.only('User Info Update - Success', () => {
    cy.visit(
      '/auth/login'
    )
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.deshboadGrid)
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login'
    )
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})
