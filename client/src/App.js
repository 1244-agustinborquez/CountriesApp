import './App.css';
import {Route,Switch} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Main from './pages/main/Main.jsx';
import AboutMe from './pages/aboutMe/AboutMe';
import CountryDetails from './pages/countryDetails/CountryDetails.jsx';
import FormContent from './pages/form/FormContent'
import { useDispatch } from 'react-redux';
import {getCountry,getActivity} from './Redux-actions/Actions'
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountry());
    dispatch(getActivity())
  }, [])

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
      <Route exact path='/country/:id'>
        <CountryDetails/>
      </Route>
      <Route exact path='/newActivity'>
        <FormContent/>
      </Route>
    </Switch>

  );
}

export default App;

