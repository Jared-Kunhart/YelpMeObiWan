'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'greedo@shotfirst.com',
        username: 'Greedo',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'saw@gerrera.com',
        username: 'Gerrera',
        hashedPassword: bcrypt.hashSync('oro')
      },
      {
        email: 'boba@fett.com',
        username: 'Boba_Fett',
        hashedPassword: bcrypt.hashSync('oro')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Greedo', 'Gerrera', 'Boba_Fett'] }
    }, {});
  }
};
