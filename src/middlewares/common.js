const checkUser = (req, res, next) => {
  if (req.session.login) {
    next()
  } else {
    res.redirect('/login');
  }
}; 

const secureRoute = (req, res, next) => {
  if (!req.session.login) {
    next()
  } else {
    res.redirect('/')
  }
}

const checkSession = (req, res, next) => {
  console.log('В сессии=>', req.session);
  next()
}

module.exports = { checkUser, secureRoute, checkSession };
