const { Model, DataTypes } = require("sequelize")
const connection = require("./sequelize")

class Order_items extends Model {}

Order_items.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }

    },
    game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'games',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        validate: {
            notEmpty: true
        }
    },
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'orders',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    item_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'items',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
    stock: {
        type: DataTypes.INTEGER,
    },

}, {
    sequelize: connection,
    timestamps: true,
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'order_items'
})

module.exports = Order_items