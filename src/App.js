import React from 'react'
import Standings from './components/Standings'
import Scores from './components/Scores'
import './App.css';

const App =()=> {

const baseURL = 'https://api-baseball.p.rapidapi.com/'

const apiKey = process.env.REACT_APP_APIKEY
  return (
    <div className="App">
      <Standings apiKey={apiKey} baseURL={baseURL}/>
      <Scores apiKey={apiKey} baseURL={baseURL}/>
    </div>
  );
}

export default App;
