const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));

Cypress.Commands.add('checkGranthIndices', ({ granthIndex, indices, source }) => {
  const randomIndex = getRandomNumber(indices.length);

  cy.get('.baniIndex').children('li')
    .eq(granthIndex)
    .click()
    .find('ul li')
    .first()
    .click()

  cy.get('.granthIndex')
  .find('tbody tr')
  .as('granthRows')

  cy.get('@granthRows')
    .find('td a')
    .then(anchors => {
      anchors.each((idx, anchor) => {
        // we just gonnna check 3 indexes
        if (idx === 0 ||
          idx === indices.length - 1 ||
          idx === randomIndex) {
          const ang = indices[idx];
          const href = anchor.getAttribute('href');
          expect(href).to.includes(`/ang?ang=${ang}&source=${source}`);
        }
      });
    });
});

Cypress.Commands.add('loadAmritKeertanFirstChapter', () => {

  cy.get('.baniIndex').children('li')
    .eq(3)
    .click()

  // Amrit Keertan
  cy.get('.granthIndex')
    .find('tbody tr')
    .as('amritKeertanRows')

  // Clicking on first row will load the shabads for that chapter
  cy.get('@amritKeertanRows')
    .first()
    .click({ force: true })
    .get('.amritKeertanIndexRowShabad')
    .as('firstChapterShabads')
    .should('have.length.gt', 0)
})
