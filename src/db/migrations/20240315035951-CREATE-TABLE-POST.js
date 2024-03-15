"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("post", {
      idPost: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
      },
      likes: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 0,
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
    await queryInterface.dropTable("post");
  },
};
