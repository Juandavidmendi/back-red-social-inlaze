const { DataTypes } = require("sequelize");
const sequelize = require("#DB/sequelize");
const config = require("#SRC/config/index");

const User = sequelize.define(
  "user",
  {
    idUser: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: "CreatedAt",
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: "UpdatedAt",
    },
    deleteAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "DeleteAt",
    },
  },
  {
    tableName: "user",
    defaultScope: {
      attributes: { exclude: ["DeleteAt"] },
    },
    schema: config.schemaOne,
  }
);

module.exports = User;
