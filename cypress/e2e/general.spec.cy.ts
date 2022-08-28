/// <reference types="Cypress" />

describe('Smoke test', () => {
  beforeEach(function () {
    cy.fixture('localhost').then((localhost) => {
      cy.visit(localhost.localhostIP);
    });
  });

  it('Opens and renders app', () => {
    cy.contains('Sprint');
    cy.contains('Members');
    cy.contains('Actions');
  });
});

export {};
