"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("user", {
      idUser: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      age: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.DataTypes.NOW,
        field: "CreatedAt",
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.DataTypes.NOW,
        field: "UpdatedAt",
      },
      deleteAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true,
        field: "DeleteAt",
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("users");
  },
};
