import "./styles/app.css";
import Header from "./component/header.js";
import NavLeftMenu from "./component/NavLeftMenu.js";
import Main from "./component/MainComponent/Main";

function App() {
  return (
    <div className="app">
      <Header />
      <NavLeftMenu />
      <Main />
    </div>
  );
}

export default App;
