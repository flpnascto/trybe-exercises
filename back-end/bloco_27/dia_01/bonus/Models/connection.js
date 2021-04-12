const mysql = require('mysql2/promise')

const USER = process.env.DB_USER
const PASSWORD = process.env.DB_PASSWORD;
const HOST = process.env.DB_HOST;
const DATABASE = process.env.DB_DATABASE

const connection = mysql.createPool({
  user: USER,
  password: PASSWORD,
  host: HOST,
  database: DATABASE
});

module.exports = connection;