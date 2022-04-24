describe('neverBore main page UI flow ', () => {

    it('Should open main view and see elements', () => {
      cy.visit('http://localhost:3000/')
      .get('.header').get('img')
      .get('.swiper')
      .get('.filter')
    });

    it('Should be able to swipe through activity categories', () => {
      cy.visit('http://localhost:3000/')
      .get('.swiper').get('.swiper-button-next').click()
      .click()
      .get('h2').contains('Relaxation')
    });

    it('Should be able to expand view and get a link', () => {
      cy.visit('http://localhost:3000/')
      .get('.swiper').get('.swiper-button-next').click()
      .click()
      .get('#relaxation').click()
      .get('a').first()
    });

    it('Should be able to save activities', () => {
      cy.visit('http://localhost:3000/')
      .get('.swiper').get('.swiper-button-next').click()
      .click()
      .get('#relaxation').click()
      .get('.but-box').get('button').get('.add').click()
      .get('.view').click()
      //save another and view list
      
    });

  });