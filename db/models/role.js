const { Model, DataTypes } = require("sequelize")
const connection = require("./sequelize")

class Roles extends Model {}

Roles.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING
    },
}, {
    sequelize: connection,
    timestamps: true,
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'roles'
})

module.exports = Roles