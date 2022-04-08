'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Businesses', [
        { title: 'Outlander Club', description: "The Outlande, a facility founded by Volven Roxe and owned by the Baath brothers, was a hangout for gamblers and glitterati of many species on Vos Gesal Street in Coruscant's Uscru District.", location: "Uscr Entertainment District, Coruscant", imageUrl: "http://pm1.narvii.com/5871/52540f0a30aa4d704dd14780ae0e3d5642831931_00.jpg", ownerId: 1 },
        { title: 'Sanctuary (cantina)', description: "The Sanctuary, also known as Garsa's Sanctuary,was a cantina located in Mos Espa, Tatooine, during the New Republic Era. The female Twi'lek Madam Garsa Fwip owned the cantina.The establishment was complete with a bar, gambling tables, and live music, and was even alive with helmet cleaning. At least two individuals were employed there, a male Twi'lek server and a female Twi'lek server. The cantina was destroyed when two members of the Pyke Syndicate left a bomb, disguised as a camtono.", location: "Mos Espa,  Tatooine", imageUrl: "https://lumiere-a.akamaihd.net/v1/images/mos-eisley-cantina-main_4786e80c.jpeg?region=164%2C0%2C953%2C536&width=768", ownerId: 1 }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Businesses', null, {});
  }
};
