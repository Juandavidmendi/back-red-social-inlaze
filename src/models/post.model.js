const { DataTypes } = require("sequelize");
const sequelize = require("#DB/sequelize");
const config = require("#SRC/config/index");
const User = require("./User");

const Post = sequelize.define(
  "post",
  {
    idPost: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
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
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "User",
        key: "idUser",
      },
    },
  },
  {
    tableName: "post",
    schema: config.schemaOne,
  }
);

// Definir la relación entre Post y User
Post.belongsTo(User, { foreignKey: "userId" });

module.exports = Post;
