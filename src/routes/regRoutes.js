const express = require('express');
// * require bcrypt
const bcrypt = require('bcrypt');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');
const Register = require('../views/Register');

const { User } = require('../../db/models');

router.get('/', (req, res) => {
  renderTemplate(Register, null, res);
});

router.post('/', async (req, res) => {
  const { login, email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });

    if (user) {
      res.json({ err: 'Такой пользователь уже существует!' });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({ login, email, password: hash });
      console.log('Новый юзер', newUser);

      // * создавать сессию и отсылать куки
      // ! Исправляем ошибку:  will retry, error on last attempt: Error: ENOENT
      req.session.login = newUser.login;
      req.session.userid = newUser.id;
      req.session.save(() => {
        res.json({
          msg: 'Пользователь зарегистрирован!',
          login: req.session.login,
        });
        // res.redirect('/');
        // res.sendStatus(200) ///!!!
      });
    }
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
});

module.exports = router;
