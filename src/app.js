require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const session = require('express-session')
const FileStore = require('session-file-store')(session)

const path = require('path')

const { secureRoute, checkSession } = require('./middlewares/common');

const dbConnectionCheck = require('../db/dbConnectCheck');

const { PORT } = process.env;

const app = express();
dbConnectionCheck();

const indexRoutes = require('./routes/indexRoutes');
const loginRoutes = require('./routes/loginRoutes');
const regRoutes = require('./routes/regRoutes');

// * Конфиг для куки в виде файла сессий
const sessionConfig = {
  name: 'DogsCookie',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Секретное слово',
  resave: false, // * если true, пересохранит сессию, даже если она не менялась
  saveUninitialized: false, // * если false, куки появятся только при установке req.session
  cookie: {
    maxAge: 9999999, // * время жизни в мс (ms)
    httpOnly: true,
  }
}

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')));
// * Подключи сессии как мидлу
app.use(session(sessionConfig))

app.use(checkSession);

app.use('/', indexRoutes);
app.use('/login', secureRoute, loginRoutes);
app.use('/register', secureRoute, regRoutes);

app.listen(PORT ?? 3100, () => {
  console.log('Сервер запущен!');
});
