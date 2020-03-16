'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    customerFirstName: DataTypes.STRING,
    personnelFirstName: DataTypes.STRING,
    customerPhone: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Task.associate = function (models) {
    // associations can be defined here
  };
  return Task;
};
