'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Businesses', [
        { title: 'Test Star Wars Business', description: 'TEST', location: 'Planet', imageUrl: 'https://unsplash.com/photos/JLHyIwix46c', ownerId: 1 }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Businesses', null, {});
  }
};
