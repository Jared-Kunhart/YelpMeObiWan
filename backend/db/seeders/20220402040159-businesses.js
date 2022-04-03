'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Businesses', [
        { title: 'Test Star Wars Business', description: 'TEST', location: 'Planet', imageUrl: 'https://images.unsplash.com/photo-1608346128025-1896b97a6fa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', ownerId: 1 }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Businesses', null, {});
  }
};
