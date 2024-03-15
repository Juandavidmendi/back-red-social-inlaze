"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Agregar la columna userId a la tabla posts
    await queryInterface.addColumn("post", "userId", {
      type: Sequelize.DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "user",
        key: "idUser",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  down: async (queryInterface) => {
    // Eliminar la columna userId de la tabla posts
    await queryInterface.removeColumn("post", "userId");
  },
};
