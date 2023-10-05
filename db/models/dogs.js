'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dogs extends Model {
    static associate(models) {
      // define association here
    }
  }
  Dogs.init({
    breeds: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Dogs',
  });
  return Dogs;
};
