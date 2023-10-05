const React = require('react');

const Layout = require('./Layout');

module.exports = function Home({ login }) {
  return (
    <Layout login={login}>
      <div className='homeDiv'>
      <h1 className='titleHome'>Выберите породу собак</h1>
      <div className='aaaa'> 1111111111111111111111111</div>
      </div>
    </Layout>
  );
};
