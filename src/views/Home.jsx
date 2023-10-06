const React = require("react");

const Layout = require("./Layout");

module.exports = function Home({ login }) {
  return (
    <Layout login={login}>
      <script defer src="/js/disc.js"></script>
      <div className="homeDiv">
        <div className="titleHome">
          <h1>Выберите породу собак</h1>
          <form method="POST" className="downList">
            <select id="dogs" name="dogs">
              <option value="none">none</option>
              <option value="Labrador">Labrador</option>
              <option value="Akita">Akita</option>
              <option value="Beagle">Beagle</option>
              <option value="Doberman">Doberman</option>
              <option value="Eskimo">Eskimo</option>
              <option value="Germanshepherd">Germanshepherd</option>
              <option value="Pembroke">Pembroke</option>
              <option value="Samoyed">Samoyed</option>
              <option value="Sharpei">Sharpei</option>
              <option value="Boxer">Boxer</option>
            </select>
          </form>
        </div>
        <div className="titleDescription">Описание породы</div>
        <div className="divDescription"></div>
        <div className="btnDivPhoto">
          <button className="btnPhoto">Показать фотографию</button>
          <div className="divPhoto">
            <img className="image" src="" />
          </div>
        </div>
      </div>
    </Layout>
  );
};
