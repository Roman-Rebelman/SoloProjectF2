const React = require('react');

module.exports = function Layout({ children, login }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/css/style.css" />
        <title>Dog breeds</title>
      </head>
      <header>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid myNav">
            <a className="navbar-brand" href="/">Home</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            { login ? (
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <span className="nav-link">
                      Hi,
                      {' '}
                      {login}
                    </span>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/logout">Logout</a>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/login">Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/register">Registration</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </header>
      <body>
        <div className='childALL'>
        { children }
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous" />
      </body>
    </html>
  );
};
