/// <reference types="Cypress" />

describe('Actions functiality', () => {
  beforeEach(function () {
    cy.fixture('localhost').then((localhost) => {
      cy.visit(localhost.localhostIP);
    });
  });

  it('Goes to edit mode when clicking edit button', () => {
    cy.get('p').contains('Actions').next().click();

    cy.get('input[placeholder=Title]').should('exist');
    cy.get('textarea[placeholder=Body]').should('exist');
  });

  it('Goes back to show mode when clicking disable edit button', () => {
    cy.get('p').contains('Actions').next().click();
    cy.get('p').contains('Actions').next().click();

    cy.get('input[placeholder=Title]').should('not.exist');
    cy.get('textarea[placeholder=Body]').should('not.exist');
  });

  it('Creates a new action when saving new title and body', () => {
    const newTitle = 'Dummy new title for Cypress';
    const newBody = 'Dummy new body for Cypress';

    cy.get('p').contains('Actions').next().click();
    cy.get('input[placeholder=Title]').type(newTitle);
    cy.get('textarea[placeholder=Body]').type(newBody);
    cy.contains('Save').click();
    cy.get('p').contains('Actions').next().click();

    cy.contains(newTitle).should('exist');
    cy.contains(newBody).should('exist');
  });

  it('Does not create a new action when not adding new title', () => {
    const newTitle = 'Dummy new title for Cypress';
    const newBody = 'Dummy new body for Cypress';

    cy.get('p').contains('Actions').next().click();

    cy.get('textarea[placeholder=Body]').type(newBody);
    cy.contains('Save').click();
    cy.get('p').contains('Actions').next().click();

    cy.get('p').contains(newTitle).should('not.exist');
    cy.get('p').contains(newBody).should('not.exist');
  });
});

export {};
