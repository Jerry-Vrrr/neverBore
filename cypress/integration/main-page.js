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
      .get('.view').click().get('h1')
    });

    it('Should be able to delete activities and return to main', () => {
      cy.visit('http://localhost:3000/')
      .get('.swiper').get('.swiper-button-next').click()
      .click()
      .get('#relaxation').click()
      .get('.but-box').get('button').get('.add').click()
      .get('.view').click()
      .get('.delete').click()
      .get('.close').click()
      .get('.close-modal').click()
    });

    it('Should be able to nav to saved activities from main as well', () => {
      cy.visit('http://localhost:3000/')
      .get('.save').click()
      .get('.saved').click()
      .get('.close').click()
    });

    it('Should be able to nav to saved activities from main as well', () => {
      cy.visit('http://localhost:3000/')
      .get('.saved').click()
      .get('h1').contains('No Notes To Display Yet!')
      .get('.close').click()
      .get('.save').click()
      .get('.saved').click()
      .get('.close').click()
    });

    it('Should be able to nav to about page and back', () => {
      cy.visit('http://localhost:3000/')
      .get('.about').click()
      .get('h1').contains('About neverBore')
      .get('.home').click()
      
    });



  });