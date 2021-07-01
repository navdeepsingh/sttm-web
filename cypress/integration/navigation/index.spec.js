import { raagIndices } from '../../../src/js/pages/BaniIndex/constants/raag-indices';

describe('Navigation', () => {
  describe('Index page', () => {

    const { SGGS, DG } = raagIndices;
    const totalSggsRows = SGGS.indices.length;
    const totalDgRows = DG.indices.length;

    const firstSggsRaagName = SGGS.indices[0].name;
    const lastSggsRaagName = SGGS.indices[totalSggsRows - 1].name;
    const firstDgRaagName = DG.indices[0].name;
    const lastDgRaagName = DG.indices[totalDgRows - 1].name;

    beforeEach(() => {
      cy.visit('/');

      cy.get('.toast-notification-close-button')
        .click();

      cy.get('[data-cy=index]')
        .click();
    })

    it('should open with indexes of SGGS, SDGS', () => {

      // SGGS Granth
      cy.get('.baniIndex').children('li')
        .eq(0)
        .find('ul li')
        .as('sggsRows')

      cy.get('@sggsRows').should('have.length', totalSggsRows)
      cy.get('@sggsRows').first().find('a').should('contain.text', firstSggsRaagName);
      cy.get('@sggsRows').last().find('a').should('contain.text', lastSggsRaagName);

      // DG Granth
      cy.get('.baniIndex').children('li')
        .eq(1)
        .find('ul li')
        .as('dgRows')

      cy.get('@dgRows').should('have.length', totalDgRows)
      cy.get('@dgRows').first().find('a').should('contain.text', firstDgRaagName);
      cy.get('@dgRows').last().find('a').should('contain.text', lastDgRaagName);      
    })

    it("should open the Bhai Nand Lal Ji Vaaran page with all chapters", () => {
      const totalNandLalVaaranRows = 7;
      // Bhai Nand Lal Ji Vaaran
      cy.get('.baniIndex').children('li')
        .eq(2)
        .click()
        .then(() => {
          
          cy.get('.granthIndex')
          .find('tbody tr')
          .as('nandLalVaaranRows')

          cy.get('@nandLalVaaranRows').should('have.length', totalNandLalVaaranRows);
          cy.get('@nandLalVaaranRows').first().find('td a').should('contain.text', 'Divan-e-Goya: Ghazals');
          cy.get('@nandLalVaaranRows').last().find('td a').should('contain.text', 'Tankah Nama');

        })      
    })

    it("should open the Amrit Keertan page with all chapters", () => {     
      const totalAmritKeertanRows = 113;  

      // AmritKeertan Granth
      cy.get('.baniIndex').children('li')
        .eq(3)
        .click()
        .then(() => {
          
          cy.get('.granthIndex')
          .find('tbody tr')
          .as('amritKeertanRows')

          cy.get('@amritKeertanRows').should('have.length', totalAmritKeertanRows);
          cy.get('@amritKeertanRows').first().find('td summary').should('contain.text', 'ਦੁਇ ਕਰ ਜੋੜਿ ਕਰਉ ਅਰਦਾਸਿ ॥');
          cy.get('@amritKeertanRows').last().find('td summary').should('contain.text', 'ਰਹਿਣੀ ਰਹੈ ਸੋਈ ਸਿਖ ਮੇਰਾ');

        })
    })


    it('should open correct shabads on clicking ang ranges - SGGS', () => {
      const sggsIndices = SGGS.indices.map(raagObj => raagObj.pages).flat();
      
      // SGGS Granth
      cy.checkGranthIndices({ granthIndex: 0, source: 'G', indices: sggsIndices });      
    });
    
    it('should open correct shabads on clicking ang ranges - DGS', () => {
      const dgIndices = DG.indices.map(raagObj => raagObj.pages).flat();

      // DG Granth
      cy.checkGranthIndices({ granthIndex: 1, source: 'D', indices: dgIndices })
    });

    context('Amrit Keertan', () => {
      it('should open shabads on clicking Amrit keertan chapter', () => {
        cy.loadAmritKeertanFirstChapter();
      })

      it('should go to correct shabad, on clicking Amrit Keertan shabad link', () => {
        cy.loadAmritKeertanFirstChapter();

        // Clicking on first chapter, will change the url
        cy.get('@firstChapterShabads')
          .first()
          .find('a')
          .scrollIntoView()
          .click({ force: true })

        cy.url().should('include', '/amrit-keertan/shabads/816');
      })
    })
  })

  
})