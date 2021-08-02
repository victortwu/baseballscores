import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Standings from './components/Standings'
import Scores from './components/Scores'
import Footer from './components/Footer'
import './App.css';

const App =()=> {

const baseURL = 'https://api-baseball.p.rapidapi.com/'

const apiKey = process.env.REACT_APP_APIKEY


  return (
    <Router>
      <div className="App">
        <Navigation/>

          <Switch>
              <Route exact path='/'>
              <div className='mainContent'>
                <Home apiKey={apiKey} baseURL={baseURL}/>
                <div className='spacer'/>
              </div>
              </Route>
              <Route path='/standings'>
              <div className='mainContent'>
                <Standings apiKey={apiKey} baseURL={baseURL}/>
                <div className='spacer'/>
              </div>
              </Route>
              <Route path='/scores'>
              <div className='mainContent'>
                <Scores apiKey={apiKey} baseURL={baseURL}/>
                <div className='spacer'/>
              </div>
              </Route>
            </Switch>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
