import "./App_styled.js";
import Router from "../src/router/Router";
import GlobalStyle from "./globalStyles/globalStyles.js";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
