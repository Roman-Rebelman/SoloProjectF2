const express = require('express');

const router = express.Router();

const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderTemplate');
const Login = require('../views/Login');

const { User } = require('../../db/models');

router.get('/', (req, res) => {
  const {login} = req.session
  renderTemplate(Login, {login}, res);
});

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        req.session.login = user.login;
        req.session.userid = user.id;
        req.session.save(() => {
          res.json({
            msg: 'Пользователь авторизован',
            login: req.session.login,
          });
          // res.sendStatus(200) ///!!!
        });
      } else {
        res.json({ err: 'Неверный пароль!' });
      }
    } else {
      res.json({ err: 'Такой пользователь не найден!' });
    }
  } catch (error) {
    console.log(error);
    res.send(`Error ------> ${error}`);
  }
});

module.exports = router;
