'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
        { content: "Alcatra sausage cupim beef ribs, flank bresaola ball tip buffalo tenderloin chislic jowl meatball pig filet mignon pork.", rating: 2, userId: 1, businessId: 1 },
        { content: "Kielbasa jerky cupim ground round, filet mignon sirloin salami. Sirloin ham hock short ribs cupim ground round kielbasa andouille", rating: 5, userId: 3, businessId: 1 },
        { content: "Spare ribs rump jerky doner short loin beef, pancetta ribeye drumstick pastrami. Chislic chuck shankle cow.", rating: 4, userId: 2, businessId: 2 }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
