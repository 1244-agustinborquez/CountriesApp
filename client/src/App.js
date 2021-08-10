import './App.css';
import {Route,Switch} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Main from './pages/main/Main.jsx';
import AboutMe from './pages/aboutMe/AboutMe';
function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/about'>
        <AboutMe/>
      </Route>
      <Route exact path='/countries'>
        <Main/>
      </Route>
    </Switch>

  );
}

export default App;

