/// <reference types="Cypress" />

describe('Timeline functionality', () => {
  beforeEach(() => {
    cy.fixture('localhost').then((localhost) => {
      cy.visit(localhost.localhostIP);
    });
  });

  it('Goes to edit mode when clicking edit button', () => {
    cy.get('[data-cy="timeline-enable-edit"]').click();

    cy.get('input[type=date]').should('exist');
  });

  it('Goes back to show mode when clicking disable edit button', () => {
    cy.get('[data-cy="timeline-enable-edit"]').click();
    cy.get('[data-cy="timeline-disable-edit"]').click();

    cy.get('input[type=date]').should('not.exist');
  });

  it('Shows the new sprint value after editing sprint', () => {
    const newSprintValue = 'dummyValue';

    cy.get('[data-cy="timeline-enable-edit"]').click();
    cy.get('input[type=text]').clear();
    cy.get('input[type=text]').type(newSprintValue);
    cy.get('[data-cy="timeline-disable-edit"]').click();

    cy.contains(newSprintValue);
  });

  it('Shows the new dates value after editing dates', () => {
    const newStartDate = new Date('2002-07-15');
    const newEndDate = new Date('2002-07-22');

    cy.get('[data-cy="timeline-enable-edit"]').click();
    cy.get('input[type=date]')
      .first()
      .type(newStartDate.toISOString().split('T')[0]);
    cy.get('input[type=date]')
      .last()
      .type(newEndDate.toISOString().split('T')[0]);
    cy.get('[data-cy="timeline-disable-edit"]').click();

    cy.contains(
      newStartDate.toLocaleDateString('en-US', {
        dateStyle: 'long',
      })
    );
    cy.contains(
      newEndDate.toLocaleDateString('en-US', {
        dateStyle: 'long',
      })
    );
  });

  it('Shows error message on incorrect dates', () => {
    const newStartDate = new Date('2002-07-22');
    const newEndDate = new Date('2002-07-15');

    cy.get('[data-cy="timeline-enable-edit"]').click();
    cy.get('input[type=date]')
      .first()
      .type(newStartDate.toISOString().split('T')[0]);
    cy.get('input[type=date]')
      .last()
      .type(newEndDate.toISOString().split('T')[0]);
    cy.get('[data-cy="timeline-disable-edit"]').click();

    cy.contains('Dates are set incorrectly');
  });

  it('Does not show error message on correct dates', () => {
    let newStartDate = new Date();
    newStartDate.setDate(newStartDate.getDate() - 5);
    let newEndDate = new Date();
    newEndDate.setDate(newEndDate.getDate() + 5);

    cy.get('[data-cy="timeline-enable-edit"]').click();
    cy.get('input[type=date]')
      .first()
      .type(newStartDate.toISOString().split('T')[0]);
    cy.get('input[type=date]')
      .last()
      .type(newEndDate.toISOString().split('T')[0]);
    cy.get('[data-cy="timeline-disable-edit"]').click();

    cy.contains('Dates are set incorrectly').should('not.exist');
  });
});

export {};
