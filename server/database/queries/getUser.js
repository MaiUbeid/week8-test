// Write a query to get the user and their password from the database
const dbConnection = require('../config/connection');

const getUser = () => {
  const sql = 'SELECT * FROM users;';
  return dbConnection.query(sql);
};

module.exports = { getUser };
