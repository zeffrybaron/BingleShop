const { Model, DataTypes } = require("sequelize")
const connection = require("./sequelize")

class Users extends Model {}

Users.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    role_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'roles',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    // refresh_token: {
    //     type: Sequelize.TEXT
    // }
}, {
    sequelize: connection, //ini adalh sequelize dari config di atas
    timestamps: true, // aktifin update_at dan create_at
    underscored: true, // biar colom-colomnya pake <_>
    paranoid: true, // untuk mengaktifi softdelete yg delete_at
    freezeTableName: true, 
    tableName: 'users'
})

module.exports = Users