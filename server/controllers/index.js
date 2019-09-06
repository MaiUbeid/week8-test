const express = require('express');

const error = require('./error');
const city = require('./city');
const signup = require('./signup');
const login = require('./login');
const logout = require('./logout');
const auth = require('./auth');

const router = express.Router();

router.get('/login', login.renderLogin);
router.get('/signup', signup.renderSignup);
router.get('/logout', logout);

router.post('/signup', signup.postSignup);
router.post('/login', login.postLogin);

router.use(auth);

router.get('/cities', city.renderCities);
router.get('/all-cities', city.getAllCities);
router.post('/add-city', city.add);

router.use(error.client);
router.use(error.server);

module.exports = router;
