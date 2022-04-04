"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      score.belongsTo(models.user, {
        as: "users",
        foreignKey: {
          name: "idUser",
        },
      });
    }
  }
  score.init(
    {
      pemain1: DataTypes.STRING,
      pemain2: DataTypes.STRING,
      pemain3: DataTypes.STRING,
      idUser: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "score",
    }
  );
  return score;
};
