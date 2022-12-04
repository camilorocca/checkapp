import './App_styled.js';
import Router from '../src/router/Router'
import AppCard from './components/AppCard/AppCard.jsx';
import SingleApp from './components/SingleApp/SingleApp.jsx';
import CompareApp from './components/CompareApp/CompareApp.jsx';
function App() {
  return (
    <div className="App">
      <CompareApp/>
    </div>
  );
}

export default App;
