const { Model, DataTypes } = require("sequelize")
const connection = require("./sequelize")

class Items extends Model {}

Items.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    game_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "games",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    item_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "item",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    available_stock: {
      type: DataTypes.INTEGER,
    },
    total_stock: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: connection,
    timestamp: true,
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    tableName: "items",
  }
)

module.exports = Items