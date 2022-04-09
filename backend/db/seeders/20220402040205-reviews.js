'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
        { content: "Review content 3", rating: 2, userId: 1, businessId: 1 },
        { content: "Review Content 1", rating: 5, userId: 1, businessId: 1 },
        { content: "Review content 2", rating: 4, userId: 1, businessId: 1 }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
