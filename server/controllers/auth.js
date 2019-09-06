const { verify } = require('jsonwebtoken');
const { getAllCities, renderCities, add } = require('./city');

const auth = (req, res, next) => {
  const { token } = req.cookies;
  const key = process.env.KEY;
  if (token === undefined) res.redirect('/login');
  else {
    verify(token, key, (err, decoded) => {
      if (err) res.redirect('/');
      else next();
    });
  }
};

module.exports = auth;
