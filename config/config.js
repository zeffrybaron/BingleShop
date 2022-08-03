require('dotenv').config() //untuk ngeload dari environment

module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  seederStorage: 'sequelize',
  seederStorageTableName: 'SequelizeData'
}
