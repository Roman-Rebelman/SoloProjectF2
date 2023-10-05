const express = require('express');

const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home');

const router = express.Router();

const { checkUser } = require('../middlewares/common.js');

router.get('/', checkUser, (req, res) => {
  const { login } = req.session;
  renderTemplate(Home, { login }, res);
});

router.get('/logout', checkUser, (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('DogsCookie');
    res.redirect('/');
  });
});

module.exports = router;
