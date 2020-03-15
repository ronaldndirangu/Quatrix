'use strict';
module.exports = (sequelize, DataTypes) => {
  const Personnel = sequelize.define('Personnel', {
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING

    },
    otherName: {
      type: DataTypes.STRING
    }
  }, {});
  Personnel.associate = function (models) {
    // associations can be defined here
  };
  return Personnel;
};
