const React = require('react');

const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <div className='globalLogDiv'>
        <div className='logDiv'>
      <h2>Войдите на сайт</h2>
      <script defer src="/js/login.js" />
      <form method="POST" id="loginForm">
        <label htmlFor="exampleInput1" className="form-label">Email</label>
        <input name="email" type="text" className="form-control" id="exampleInput1" />
        <label htmlFor="exampleInput2" className="form-label">Password</label>
        <input name="password" type="password" className="form-control" id="exampleInput2" />
        <button type="submit" className="btn btn-primary">Отправить</button>
      </form>
      <h3 className='logMsg'></h3>
      </div>
      </div>
    </Layout>
  );
};
