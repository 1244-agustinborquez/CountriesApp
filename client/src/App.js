import './App.css';
import {Route,Switch} from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
    </Switch>

  );
}

export default App;

