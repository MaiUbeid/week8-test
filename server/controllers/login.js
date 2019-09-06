const { join } = require('path');
const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');

const { getUser } = require('../database/queries/getUser');

exports.renderLogin = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'login.html'));
};

exports.postLogin = (req, res, next) => {
  const { email, password } = req.body;
  const key = process.env.KEY;
  let id;
  getUser(email)
    .then(res => {
      id = res.rows[0].id;
      return compare(password, res.rows[0].user_password);
    })
    .then(result => {
      if (result) {
        let token = sign({ email: email }, key);
        res.cookie('token', token, { maxAge: 10000, httpOnly: true });
        res.redirect('/cities');
      } else {
        throw new Error('User Does not exist');
      }
    })
    .catch(next);
};
