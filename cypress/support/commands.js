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
// Cypress.Commands.add('login', (email, password) => { ... })
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

Cypress.Commands.add("login", (url) => {
    Cypress.env();
    const username = Cypress.env("username");
    const password = Cypress.env("password");
    console.log(username, password);
    let delimiter = "?";
    const haveQuestionInURL = url.indexOf(delimiter) > -1;
    if (haveQuestionInURL) {
      delimiter = "&";
    }
    url += `${delimiter}isCypress=true`;
    cy.visit(
      `http://${Cypress.env("host")}/logon.html?next=${encodeURIComponent(url)}`
    );
    cy.get("#username").click();
    cy.get("input[name=username]").type(username, { force: true });
    cy.get("input[name=password]").type(password, { force: true });
    cy.get("#submit").click({ force: true });
    /*
    cy.get("#admin-header-username").should(
      "have.class",
      "neyross-header__username"
    );
    */
  });
  Cypress.Commands.add("CreateFilter", (filtername) => {
    cy.get("#filters-list-header__add-filter_btn > svg").click();
    cy.get("#name").click();
    cy.get("input[id=name]").type(filtername);
    cy.get(".ant-modal-footer > .ant-btn-primary > span").click();
  });
  Cypress.Commands.add("DeleteFilter", (filtername) => {
    cy.get(".horizontal-menu__list")
      .contains(filtername)
      .click()
      .find(".horizontal-menu__actions")
      .invoke("show")
      .find(".anticon-delete")
      .click();
    cy.wait(1500);
    cy.get(".ant-modal-confirm-btns").find(".ant-btn-primary").click();
  });
