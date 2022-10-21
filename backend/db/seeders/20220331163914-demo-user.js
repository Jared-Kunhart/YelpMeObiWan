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
      },
      {
        email: '4lom@droidmail.com',
        username: '4-LOM',
        hashedPassword: bcrypt.hashSync('oro')
      },
      {
        email: 'ackbar@alliance.com',
        username: 'Admiral Ackbar',
        hashedPassword: bcrypt.hashSync('oro')
      },
      {
        email: 'thrawn@imperial.com',
        username: 'Admiral Thrawn',
        hashedPassword: bcrypt.hashSync('oro')
      },
      {
        email: 'ahsoka@jedi.com',
        username: 'Ahsoka Tano',
        hashedPassword: bcrypt.hashSync('oro')
      },
      {
        email: 'bb8@droidmail.com',
        username: 'BB-8',
        hashedPassword: bcrypt.hashSync('oro')
      },
      {
        email: 'c3po@droidmail.com',
        username: 'C-3PO',
        hashedPassword: bcrypt.hashSync('oro')
      },
      {
        email: 'chewie@chewyy.com',
        username: 'Chewbacca',
        hashedPassword: bcrypt.hashSync('oro')
      },
      {
        email: 'han@solo.com',
        username: 'Han Solo',
        hashedPassword: bcrypt.hashSync('oro')
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Greedo', 'Gerrera', 'Boba_Fett', '4-LOM', 'Admiral Ackbar', 'Admiral Thrawn', 'Ahsoka Tano', 'BB-8', 'C-3PO', 'Chewbacca', 'Han Solo' ] }
    }, {});
  }
};
