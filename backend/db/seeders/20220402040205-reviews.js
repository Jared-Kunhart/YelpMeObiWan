'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
        { content: "Someone got their arm chopped off while I was drinking", rating: 2, userId: 1, businessId: 2 },
        { content: "Bounty didn't survive here, he was worth a lot to me.", rating: 1, userId: 3, businessId: 1 },
        { content: "Save the Rebellion. Save the dream.", rating: 4, userId: 2, businessId: 2 },
        { content: "BEEP-BOOP-BEEP: Is BB Hungry ? No, BB8", rating: 7, userId: 8, businessId: 2 }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
