import React, { useState, useEffect } from 'react'
import ALWestStandings from './ALWestStandings'
import ALEastStandings from './ALEastStandings'
import ALCentralStandings from './ALCentralStandings'
import NLWestStandings from './NLWestStandings'
import NLEastStandings from './NLEastStandings'
import NLCentralStandings from './NLCentralStandings'



const Standings = (props) => {

    const year = new Date().getFullYear()
    const query = `standings?league=1&season=${year}`

    const [data, setData] = useState([])
    const [showAl, setShowAl] = useState(true)

    const getStandings =()=> {
      fetch( props.baseURL + query, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': props.apiKey,
          'x-rapidapi-host': 'api-baseball.p.rapidapi.com'
        }
      })
      .then(res => {
        return res.json()
      })
      .then(json => {
        setData(json.response[0])
      })
      .catch(err => {console.error(err)})
    }


    useEffect(()=> {
      const abort = new AbortController()
      getStandings()
      return ()=> abort.abort()
    }, [])

    const toggleLeague =()=> {
      showAl ? setShowAl(false) : setShowAl(true)
    }
    // console.log(data)
  return(
    <>
    <button className='toggleButton' onClick={()=> toggleLeague()}>{
      showAl ? 'SEE N.L. STANDINGS' : 'SEE A.L. STANDINGS'
    }</button>

    {
      showAl ?   <div className='alStandingsContainer'>
                    <h1>AMERICAN LEAGUE</h1>
                      <ALWestStandings data={data}/>
                      <ALEastStandings data={data}/>
                      <ALCentralStandings data={data}/>
                  </div>

              :  <div className='nlStandingsContainer'>
                    <h1>NATIONAL LEAGUE</h1>
                      <NLWestStandings data={data}/>
                      <NLEastStandings data={data}/>
                      <NLCentralStandings data={data}/>
                </div>

    }


    </>
  )
}

export default Standings
