describe("Books app testing", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("should visit website", () => {
    cy.contains("Log in").should("be.visible");
  });

  it("should login test account", () => {
    cy.login("bropet@mail.ru", "123");
    cy.verifyLogin();
  });

  it("should not login account", () => {
    cy.login(" ", " ");
    cy.checkLoginError();
  })

  it("should add book max info", () => {
    cy.login("bropet@mail.ru", "123");
    cy.addMaxInfoBook("Пикник на обочине", "Короткое описание книги", "Братья Аркадий и Борис Стругацкие", "cypress/fixtures/picnic.jpeg", "cypress/fixtures/picnic.txt");
    cy.checkAddedBook("Пикник на обочине");
  })

  it("should add book min info", () => {
    cy.login("bropet@mail.ru", "123");
    cy.addBook("451 градус", "Рэй Бредбери");
    cy.checkAddedBook("451 градус");
  })

  it("should add favorite book", () => {
    cy.login("bropet@mail.ru", "123");
    cy.addToFavorite("451 градус");
    cy.checkAddToFavorite("451 градус")
  })

  it("should remove favorite book", () => {
    cy.login("bropet@mail.ru", "123");
    cy.removeFromFavorite("451 градус");
    cy.checkRemoving("451 градус");
  })
})