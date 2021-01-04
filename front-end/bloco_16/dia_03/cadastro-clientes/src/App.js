import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <h1>Iniciando</h1>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
