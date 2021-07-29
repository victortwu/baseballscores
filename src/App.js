import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Standings from './components/Standings'
import Scores from './components/Scores'
import './App.css';

const App =()=> {

const baseURL = 'https://api-baseball.p.rapidapi.com/'

const apiKey = process.env.REACT_APP_APIKEY
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <div className='mainContent'>
          <Switch>
              <Route exact path='/'>
                <Home apiKey={apiKey} baseURL={baseURL}/>
              </Route>
              <Route path='/standings'>
                <Standings apiKey={apiKey} baseURL={baseURL}/>
              </Route>
              <Route path='/scores'>
                <Scores apiKey={apiKey} baseURL={baseURL}/>
              </Route>
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
