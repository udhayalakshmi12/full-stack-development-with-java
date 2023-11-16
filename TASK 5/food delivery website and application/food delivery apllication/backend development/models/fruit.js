'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fruit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Fruit.init({
    name: DataTypes.STRING,
    family: DataTypes.STRING,
    calories: DataTypes.INTEGER,
    fat: DataTypes.INTEGER,
    sugar: DataTypes.INTEGER,
    carbohydrates: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    MovementId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Fruit',
  });
  return Fruit;
};