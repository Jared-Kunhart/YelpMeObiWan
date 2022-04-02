'use strict';
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    imageUrl: DataTypes.TEXT,
    ownerId: DataTypes.INTEGER
  }, {});
  Business.associate = function(models) {
    // associations can be defined here
    Business.belongsTo(models.User, {
      foreignKey: 'ownerId'
     })
    Business.hasMany(models.Review, {
      foreignKey: 'businessId',
      hooks: true,
      onDelete: "cascade",
    })
  };
  return Business;
};
