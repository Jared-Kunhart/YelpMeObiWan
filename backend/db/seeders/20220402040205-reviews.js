'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
        { content: "Bounty didn't survive here, he was worth a lot to me.", rating: 20, userId: 3, businessId: 1 },
        { content: "RAWRGWAWGGR.", rating: 80, userId: 10, businessId: 1 },
        { content: "Boba Fett? Boba Fett? Where?", rating: 40, userId: 3, businessId: 1 },
        { content: "Someone got their arm chopped off while I was drinking", rating: 40, userId: 1, businessId: 2 },
        { content: "Save the Rebellion. Save the dream.", rating: 40, userId: 2, businessId: 2 },
        { content: "BEEP-BOOP-BEEP: Is BB Hungry ? No, BB8", rating: 100, userId: 8, businessId: 2 },
        { content: "Solo, wait-you'll never get away with this.", rating: 20, userId: 4, businessId: 2 },
        { content: "It's a trap!", rating: 20, userId: 5, businessId: 3 },
        { content: "RRRAARRWHHGWWR.", rating: 40, userId: 10, businessId: 3 },
        { content: "You don't have to look tough to be tough.", rating: 80, userId: 7, businessId: 4 },
        { content: "The probabiliity of you escaping is approximately 11,289-to-one.", rating: 80, userId: 4, businessId: 4 },
        { content: "I am fluent in over six million forms of communication, and can readily...", rating: 60, userId: 9, businessId: 5 },
        { content: "My parts are showing? Oh, my goodness, oh!", rating: 60, userId: 9, businessId: 6 },
        { content: "Beep-Boop-Beep", rating: 100, userId: 8, businessId: 6 },
        { content: "Wrrk Beep Boop", rating: 20, userId: 8, businessId: 7 },
        { content: "A good tactician recognizes the soundess of a plan presented on him.", rating: 60, userId: 6, businessId: 8 },
        { content: "Failure to act always brings consequences.", rating: 40, userId: 6, businessId: 9 },
        { content: "Let's see what knowledge is lurking inside that little mind.", rating: 80, userId: 7, businessId: 10 },
        { content: "As you wish.", rating: 80, userId: 3, businessId: 11 },
        { content: "Fun to throw things over the side.", rating: 80, userId: 1, businessId: 11 }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
