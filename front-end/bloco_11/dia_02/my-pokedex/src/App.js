import logo from './logo.svg';
import './App.css';
import Pokedex from './components/Pokedex';
import data from './data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
      </header>
      <Pokedex data={data}/>
    </div>
  );
}

export default App;
