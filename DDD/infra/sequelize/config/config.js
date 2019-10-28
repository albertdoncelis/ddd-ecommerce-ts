require('dotenv').config()

const Sequelize = require('sequelize');

const {
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_NAME,
  DB_DIALECT
} = process.env;

module.exports.connection = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  DB_HOST,
  DB_DIALECT,
  port: 3306,
  dialectOptions: {
    multipleStatements: true,
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  logging: false
})