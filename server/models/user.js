"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //hasMany to list model
      user.hasMany(models.list, {
        as: "lists",
        foreignKey: {
          name: "idUser",
        },
      });
      // user.hasMany(models.score, {
      //   as: "scores",
      //   foreignKey: {
      //     name: "idUser",
      //   },
      // });
    }
  }
  user.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
