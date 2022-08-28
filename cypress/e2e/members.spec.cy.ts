/// <reference types="Cypress" />

describe('Actions functiality', () => {
  beforeEach(function () {
    cy.fixture('localhost').then((localhost) => {
      cy.visit(localhost.localhostIP);
    });
  });

  it('Goes to edit mode when clicking edit button', () => {
    cy.get('[data-cy="members-enable-edit"]').click();

    cy.get('p').contains('Add new member').should('exist');
    cy.get('input[placeholder=Name]').should('exist');
    cy.get('input[placeholder=Surname]').should('exist');
    cy.get('input[placeholder=Picture]').should('exist');
  });

  it('Goes back to show mode when clicking disable edit button', () => {
    cy.get('[data-cy="members-enable-edit"]').click();
    cy.get('[data-cy="members-disable-edit"]').click();

    cy.get('p').contains('Add new member').should('not.exist');
    cy.get('input[placeholder=Name]').should('not.exist');
    cy.get('input[placeholder=Surname]').should('not.exist');
    cy.get('input[placeholder=Picture]').should('not.exist');
  });

  it('Creates a new member with picture when added', () => {
    const name = 'dummyName';
    const surname = 'dummySurname';
    const picture = 'dummyPicture';

    cy.get('[data-cy="members-enable-edit"]').click();

    cy.get('input[placeholder=Name]').type(name);
    cy.get('input[placeholder=Surname]').type(surname);
    cy.get('input[placeholder=Picture]').type(picture);
    cy.contains('Save').click();

    cy.get('div[alt="member picture"')
      .should('have.css', 'background-image')
      .should('include', picture);
  });

  it('Creates a new member with initials when picture not added', () => {
    const name = 'ñdummyName';
    const surname = 'zdummySurname';

    cy.get('[data-cy="members-enable-edit"]').click();

    cy.get('input[placeholder=Name]').type(name);
    cy.get('input[placeholder=Surname]').type(surname);
    cy.contains('Save').click();

    cy.get('p').contains(name[0].toUpperCase() + surname[0].toUpperCase());
  });

  it('deletes the member when clicking in delete button associated', () => {
    const membersToInsert = [
      { name: 'asdf', surname: 'qwer' },
      { name: 'thisone', surname: 'todelete' },
      { name: 'alberto', surname: 'caparros' },
    ];

    cy.get('[data-cy="members-enable-edit"]').click();
    membersToInsert.forEach((member) => {
      cy.get('input[placeholder=Name]').type(member.name);
      cy.get('input[placeholder=Surname]').type(member.surname);
      cy.contains('Save').click();
    });
    cy.get('[data-cy="delete-member"]').eq(1).click();

    cy.get('p').contains(membersToInsert[1].name).should('not.exist');
    cy.get('p').contains(membersToInsert[1].surname).should('not.exist');
    cy.get('p')
      .contains(
        membersToInsert[1].name[0].toUpperCase() +
          membersToInsert[1].surname[0].toUpperCase()
      )
      .should('not.exist');
  });

  it('Moves the member through the screen', () => {
    const name = 'ñdummyName';
    const surname = 'zdummySurname';

    cy.get('[data-cy="members-enable-edit"]').click();

    cy.get('input[placeholder=Name]').type(name);
    cy.get('input[placeholder=Surname]').type(surname);
    cy.contains('Save').click();

    cy.get('[data-cy="draggable-member"]').should(
      'have.css',
      'transform',
      'matrix(1, 0, 0, 1, 0, 0)'
    );

    cy.get('[data-cy="draggable-member"]')
      .trigger('mousedown', 'center')
      .trigger('mousemove', { clientX: 300, clientY: 240 })
      .trigger('mouseup');

    cy.get('[data-cy="draggable-member"]').should(
      'not.have.css',
      'transform',
      'matrix(1, 0, 0, 1, 0, 0)'
    );
  });
});

export {};
