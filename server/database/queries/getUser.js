// Write a query to get the user and their password from the database
const dbConnection = require('../config/connection');

const getUser = userData => {
  const { email } = userData;
  const sql = {
    text: 'SELECT user_password FROM users WHERE email = ($1);',
    value: [email]
  };
  return dbConnection.query(sql);
};

module.exports = { getUser };
