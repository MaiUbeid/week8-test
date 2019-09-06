// Write a query to get the user and their password from the database
const dbConnection = require('../config/connection');

const getUser = email => {
  const sql = {
    text: 'SELECT * FROM users WHERE email LIKE ($1);',
    values: [email]
  };
  return dbConnection.query(sql);
};

module.exports = { getUser };
