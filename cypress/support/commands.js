// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", (email, password) => {
    cy.contains("Log in").click();
    cy.get("#mail").type(email);
    cy.get("#pass").type(password);
    cy.contains("Submit").click();
})

Cypress.Commands.add("verifyLogin", () => {
    cy.contains("Добро пожаловать").should("be.visible");
})

Cypress.Commands.add("checkLoginError", () => {
    cy.get("#mail").then(($el => $el[0].checkValidity())).should("be.false");
})

Cypress.Commands.add("addMaxInfoBook", (title, description, autors, picturePath, bookPath) => {
    cy.contains("Books list").click();
    cy.contains("Add new").click();
    cy.get("[name='title']").type(title);
    cy.get("#description").type(description);
    cy.get("#fileCover").selectFile(picturePath);
    cy.get("#fileBook").selectFile(bookPath);
    cy.get("#authors").type(autors);
    cy.contains("Submit").click();
})

Cypress.Commands.add("addBook", (title, authors) => {
    cy.contains("Books list").click();
    cy.contains("Add new").click();
    cy.get("[name='title']").type(title);
    cy.get("#authors").type(authors);
    cy.contains("Submit").click();
})

Cypress.Commands.add("checkAddedBook", (title) => {
    cy.contains("Books list").click();
    cy.contains(title).should("be.visible");
})

Cypress.Commands.add("addToFavorite", (title) => {
    cy.contains("Books list").click();
    cy.contains(title).contains("Add to favorite").click();
})

Cypress.Commands.add("checkAddToFavorite", (title) => {
    cy.contains("Favorites").click();
    cy.contains(title).should("be.visible");
})

Cypress.Commands.add("removeFromFavorite", (title) => {
    cy.contains("Favorites").click();
    cy.contains(title).contains("Delete from favorite").click();
})

Cypress.Commands.add("checkRemoving", (title) => {
    cy.contains(title).should("not.exist");
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })