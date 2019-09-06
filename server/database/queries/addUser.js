// Write a query to add the user and their password to the database
const dbConnection = require('../config/connection');

const addUser = userData => {
  const { email, password } = userData;
  const sql = {
    text: 'INSERT INTO users (email, user_password) VALUES ($1, $2);',
    values: [email, password]
  };
  return dbConnection.query(sql);
};

module.exports = { addUser };
