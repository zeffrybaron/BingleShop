const { Model, DataTypes } = require("sequelize")
const connection = require("./sequelize")
class Orders extends Model {}

Orders.init({
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
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        validate: {
            notEmpty: true
        },
    item_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'items',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
    },
    transcation_date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
}, {
    sequelize: connection,
    timestamps: true,
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'orders'
})

module.exports = Orders