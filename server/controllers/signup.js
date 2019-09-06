const { join } = require('path');
const { hash } = require('bcrypt');

const { getUser } = require('../database/queries/getUser');
const { addUser } = require('../database/queries/addUser');

exports.renderSignup = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'signup.html'));
};

exports.postSignup = (req, res, next) => {
  const { email, password } = req.body;
  getUser(email)
    .then(res => {
      if (res.rows.length !== 0) throw new Error('Email exists');
    })
    .then(() => hash(password, 10))
    .then(hashedPassword => addUser({ email, password: hashedPassword }))
    .then(() => res.redirect('/login'))
    .catch(err => {
      if (err.message === 'Email exists') res.send(err.message);
      else next(err);
    });
};
